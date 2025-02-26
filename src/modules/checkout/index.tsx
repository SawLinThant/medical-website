"use client";

import { Separator } from "@/components/ui/separator";
import DelliveryAddressForm from "./delivery-address";
import BillingAddressForm from "./billing-address";
import PaymentForm from "./payment-method";
import CheckoutItems from "./items";
import { useCallback, useEffect, useState } from "react";
import {
  DeliveryAddress,
  FindBillingAddress,
  InsertBillingAddress,
  UpdateBillingAddress,
} from "@/lib/apolloClient/services/address";
import { getSessionData } from "@/lib/utils";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import {
  InsertOrder,
  InsertOrderItem,
} from "@/lib/apolloClient/services/order";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/lib/features/cart/cartSlice";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import { toast } from "@/hooks/use-toast";
import { useRouter } from "next/navigation";
import { checkProductAvailability, updateProductQuantity } from "@/lib/apolloClient/services/product";
import { InsertNotification } from "@/lib/apolloClient/services/notification";

export interface SessionData {
  userId: string;
  role: string;
  token: string;
  isLoggedIn: boolean;
}

const CheckoutForm: React.FC = () => {
  const [billingAddress, setBillingAddress] = useState<DeliveryAddress>({
    id: "",
    firstname: "",
    lastname: "",
    province: "",
    zone: "",
    address: "",
    phone: "",
    email: "",
    user_id: "",
    label: "",
  });
  const dispatch = useDispatch();
  const [paymentImage, setPaymentImage] = useState<File>();
  const [totalPrice, setTotalPrice] = useState<number>();
  const [isCOD, setIsCOD] = useState<boolean>(false);
  const [createOrderLoading, setCreateOrderLoading] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const router = useRouter();
  const [paymentId, setPaymentId] = useState<string>(
    "abfa998a-8e84-4ca0-887e-79f572127bdd"
  );
  const [shippingAddress, setShippingAddress] = useState<string>("");

  useEffect(() => {
    const fetchSessionData = async () => {
      const data = await getSessionData();
      if (data) {
        setSessionData(data);
      }
    };

    fetchSessionData();
  }, []);

  useEffect(() => {
    if (paymentId !== "abfa998a-8e84-4ca0-887e-79f572127bdd") {
      setIsCOD(false);
    } else {
      setIsCOD(true);
    }
  });
  useEffect(() => {
    if (sessionData?.userId) {
      setBillingAddress((prev) => ({
        ...prev,
        user_id: sessionData?.userId,
      }));
      const fetchBillingAddress = async () => {
        try {
          const addresses = await FindBillingAddress(serverApolloClient, {
            user_id: sessionData?.userId || "",
          });
          if (addresses && addresses.length > 0) {
            setIsAddressExist(true);
          } else {
            console.log("No delivery address found for this user.");
          }
        } catch (error) {
          console.error("Error fetching delivery address:", error);
        }
      };

      fetchBillingAddress();
    }
  }, [sessionData]);

  const handleCreateAddress = useCallback(async () => {
    try {
      const response = await InsertBillingAddress(serverApolloClient, {
        input: {
          firstname: billingAddress.firstname,
          lastname: billingAddress.lastname,
          province: billingAddress.province,
          zone: billingAddress.zone,
          address: billingAddress.address,
          phone: billingAddress.phone,
          email: billingAddress.email,
          user_id: billingAddress.user_id,
        },
      });
      if (response) {
      }
    } catch (error) {
      console.log("Error submitting address:", error);
    } finally {
    }
  }, [billingAddress]);
  const cartItems = useSelector((state: RootState) => state.cart.cartItems);
  const handleUpdateAddress = useCallback(async () => {
    try {
      const response = await UpdateBillingAddress(serverApolloClient, {
        user_id: billingAddress.user_id,
        input: {
          firstname: billingAddress.firstname,
          lastname: billingAddress.lastname,
          province: billingAddress.province,
          zone: billingAddress.zone,
          address: billingAddress.address,
          phone: billingAddress.phone,
          email: billingAddress.email,
        },
      });
      if (response) {
      }
    } catch (error) {
      console.log("Error submitting address:", error);
    } finally {
    }
  }, [billingAddress]);
  const handleAddressSubmit = useCallback(() => {
    return isAddressExist ? handleUpdateAddress() : handleCreateAddress();
  }, [isAddressExist, handleCreateAddress, handleUpdateAddress]);

  const handleCreateOrder = useCallback(async () => {
    
    try {
      setCreateOrderLoading(true);
      const availabilityChecks = await Promise.all(
        cartItems.map((cartItem) =>
          checkProductAvailability(serverApolloClient, {
            id: cartItem.id,
            requestedQuantity: cartItem.quantity,
          })
        )
      );

      const allAvailable = availabilityChecks.every((isAvailable) => isAvailable);
      if (!allAvailable) {
        toast({
          description: "Some items in your cart are out of stock. Please review your cart.",
          variant: "destructive", // Optional: Use a variant for error if your toast supports it
        });
        return; // Stop the order creation process
      }

      await handleAddressSubmit();

      let paymentProofUrl: string | undefined;
      if (!isCOD) {
        if(!paymentImage){
          toast({
            description:"Plese upload payment proof image"
          })
          return
        }
        if (paymentImage) {
          paymentProofUrl = await uploadToS3(paymentImage);
          if (!paymentProofUrl) {
            throw new Error("Failed to upload payment image.");
          }
        }
      }

      const orderResponse = await InsertOrder(serverApolloClient, {
        input: {
          user_id: sessionData?.userId,
          status: "Pending",
          total_price: totalPrice,
          payment_id: paymentId,
          payment_proof: isCOD ? "" : paymentProofUrl,
          shipping_address: shippingAddress,
        },
      });

      if (!orderResponse) {
        throw new Error("Failed to create order.");
      }

      const orderId = orderResponse.id;
      await Promise.all(
        cartItems.map((cartItem) =>
          InsertOrderItem(serverApolloClient, {
            input: {
              order_id: orderId,
              product_id: cartItem.id,
              shop_id: cartItem.shop?.id,
              quantity: cartItem.quantity,
              price: (cartItem.discount_price && cartItem.discount_price > 0)?cartItem.discount_price:cartItem.price,
              subtotal: cartItem.discount_price
                ? cartItem.discount_price * cartItem.discount_price
                : 0,
            },
          })
        )
      );
      await Promise.all(
        cartItems.map((cartItem) =>
          updateProductQuantity(serverApolloClient, {
            id: cartItem.id,
            quantity: cartItem.quantity,
          })
        )
      );
      const uniqueShops = [
        ...new Set(cartItems.map((item) => item.shop?.id).filter(Boolean)), // Filter out undefined values
      ];

      console.log("Unique Shops:", uniqueShops);

      await Promise.all(
        uniqueShops.map((shopId) => {
          if (!shopId) return;
          const inputPayload = {
            shop_id: shopId,
            order_id: orderId,
            description: `New order received! Order ID: ${orderId}`,
            type: "ORDER",
          };

          console.log("Notification Payload:", inputPayload);

          return InsertNotification(serverApolloClient, {
            input: inputPayload,
          });
        })
      );
      localStorage.setItem("success", "success-order");
      localStorage.setItem("orderID", JSON.stringify(orderId));
      localStorage.setItem("paymentID", JSON.stringify(paymentId));
      localStorage.setItem("paymentID", JSON.stringify(paymentId));
      localStorage.setItem("BillingAddress", JSON.stringify(billingAddress));
      localStorage.setItem("ordered items", JSON.stringify(cartItems));
      dispatch(clearCart());
      toast({
        description: "Order successfully placed",
      });
      router.push("/order-success");
    } catch (error) {
      console.log("Error creating order:", error);
      toast({
        description: "Failed to create order",
      });
    } finally {
      setCreateOrderLoading(false);
    }
  }, [
    billingAddress,
    paymentImage,
    totalPrice,
    paymentId,
    sessionData,
    cartItems,
    dispatch,
    handleAddressSubmit,
    uploadToS3,
  ]);

  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4">
      <div className="lg:col-span-3 md:col-span-3 col-span-1 min-h-32 border rounded-md py-4 px-8 flex flex-col gap-4 bg-white">
        <div className="w-full min-h-52">
          <DelliveryAddressForm
            setShippingAddress={setShippingAddress}
            setSameAddress={setBillingAddress}
          />
        </div>
        <Separator className="my-4 border-t border-gray-300" />
        <div className="w-full min-h-52">
          <BillingAddressForm
            setAddress={setBillingAddress}
            address={billingAddress}
          />
        </div>
        <Separator className="my-4 border-t border-gray-300" />
        <div className="w-full min-h-36">
          <PaymentForm setPayment={setPaymentId} />
        </div>
      </div>
      <div className="lg:col-span-2 md:col-span-2 col-span-1">
        <CheckoutItems
          isCOD={isCOD}
          setImage={setPaymentImage}
          setTotalPrice={setTotalPrice}
          placeOrder={handleCreateOrder}
          orderLoading={createOrderLoading}
        />
      </div>
    </div>
  );
};
export default CheckoutForm;
