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
import { InsertOrder, InsertOrderItem } from "@/lib/apolloClient/services/order";
import { RootState } from "@/lib/store";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "@/lib/features/cart/cartSlice";
import { useUploadToS3 } from "@/lib/hooks/useFileUpload";
import { toast } from "@/hooks/use-toast";

interface SessionData {
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
  const [paymentImage,setPaymentImage] = useState<File>();
  const [totalPrice,setTotalPrice] = useState<number>();
  const [createOrderLoading, setCreateOrderLoading] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [isAddressExist, setIsAddressExist] = useState<boolean>(false);
  const { uploadToS3 } = useUploadToS3();
  const [paymentId,setPaymentId] = useState<string>("abfa998a-8e84-4ca0-887e-79f572127bdd");

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
  },[billingAddress]);
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
  },[billingAddress]);
  const handleAddressSubmit = useCallback(() => {
    return isAddressExist ? handleUpdateAddress() : handleCreateAddress();
  }, [isAddressExist, handleCreateAddress, handleUpdateAddress]);
 
 
  const handleCreateOrder = useCallback(async() => {
    try {
      setCreateOrderLoading(true);
  
      await handleAddressSubmit();
  
      let paymentProofUrl: string | undefined;
      if (paymentImage) {
        paymentProofUrl = await uploadToS3(paymentImage);
        if (!paymentProofUrl) {
          throw new Error("Failed to upload payment image.");
        }
      }
  
      const orderResponse = await InsertOrder(serverApolloClient, {
        input: {
          user_id: sessionData?.userId,
          status: "Pending",
          total_price: totalPrice,
          payment_id: paymentId,
          payment_proof: paymentProofUrl,
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
              price: cartItem.bulk_price,
              subtotal: cartItem.bulk_price ? cartItem.bulk_price * cartItem.quantity : 0,
            },
          })
        )
      );
  
      // Clear cart
      dispatch(clearCart());
    } catch (error) {
      console.log("Error creating order:", error);
      toast({
        description:"Failed to create order"
      })
    } finally {
      setCreateOrderLoading(false);
    }
  },[
    billingAddress,
    paymentImage,
    totalPrice,
    paymentId,
    sessionData,
    cartItems,
    dispatch,
    handleAddressSubmit,
    uploadToS3,
  ])

  
  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4">
      <div className="lg:col-span-3 md:col-span-3 col-span-1 min-h-32 border rounded-md py-4 px-8 flex flex-col gap-4 bg-white">
        <div className="w-full min-h-52">
          <DelliveryAddressForm setSameAddress={setBillingAddress} />
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
          <PaymentForm setPayment={setPaymentId}/>
        </div>
      </div>
      <div className="lg:col-span-2 md:col-span-2 col-span-1">
        <CheckoutItems
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
