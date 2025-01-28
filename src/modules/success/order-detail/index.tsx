"use client"
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";
import { Payment } from "@/lib/constant/options";
import { CircleCheck } from "lucide-react";
import Image from "next/image";
import React from "react";

interface OrderDetailProps {
  paymentMethod: Payment
}

const OrderDetail:React.FC<OrderDetailProps> = ({paymentMethod}) => {
  const deliveryAddress = JSON.parse(localStorage.getItem("DeliveryAddress")|| "")
  const billingAddress = JSON.parse(localStorage.getItem("BillingAddress")|| "")
  const orderId = JSON.parse(localStorage.getItem("orderID") || "")
  console.log("payment method success:",paymentMethod)
  return (
    <div className="flex flex-col gap-8">
      <div className="w-full flex flex-col px-8 rounded-lg border border-gray-300 min-h-32 py-6 gap-6 bg-white">
        <h2 className="font-semibold text-subheading">Order Details</h2>
        <p className="text-muted-foreground text-sm">
          You will receive an email with tracking information once our order has
          shipped
        </p>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          <div className="text-sm text-muted-foreground">
            <span className="font-semibold text-black">Order Number:</span>{" "}
            #{orderId}
          </div>
          <div className="text-sm text-muted-foreground">
            Estimated Delivery:{" "}
            <span className="font-semibold text-black">January 15, 2025</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Status: <span className="font-semibold text-black">Processing</span>
          </div>
        </div>
        <Separator className="my-4" />
        <div className="flex flex-col gap-2">
          <span className="text-sm text-muted-foreground">
            Need Help? Contact us at
          </span>
          <div className="text-sm text-muted-foreground">
            <span className="text-black font-semibold">support@natsay.com</span>{" "}
            or <span className="text-black font-semibold">09 123 456 789</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col px-8 rounded-lg border border-gray-300 min-h-32 py-6 gap-6 bg-white">
        <h2 className="font-semibold text-subheading">Delivery Details</h2>
        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
          <span className="font-semibold text-black">{`${deliveryAddress.firstname} ${deliveryAddress.lastname}`}</span>
          <span className="">{deliveryAddress.zone}</span>
          <span className="">{deliveryAddress.province}</span>
          <span className="">{deliveryAddress.address}</span>
          <span className="">{deliveryAddress.phone}</span>
        </div>
        <Separator className="my-4" />
        <h2 className="font-semibold text-subheading">Billing Details</h2>
        <div className="flex flex-col gap-2 text-muted-foreground text-sm">
          <span className="font-semibold text-black">{`${billingAddress.firstname} ${billingAddress.lastname}`}</span>
          <span className="">{billingAddress.zone}</span>
          <span className="">{billingAddress.province}</span>
          <span className="">{billingAddress.address}</span>
          <span className="">{billingAddress.phone}</span>
        </div>
        <Separator className="my-4" />
        <h2 className="font-semibold text-subheading">Payment Method</h2>
        <div className="flex flex-row gap-2">
          {paymentMethod && paymentMethod.name === "Cash On Delivery"?(null):(
             <div className="h-12 w-12 relative">
             <Image
               alt="kpay"
               src={paymentMethod?.logo || "/image_placeholder.jpg"}
               layout="fill"
               objectFit="cover"
             />
           </div>
          )}
         
          <div className="flex flex-col h-12 justify-between pb-4">
            <Label htmlFor="r2" className="font-semibold text-sm">
              {paymentMethod?.name || ""}
            </Label>
            <div className="flex flow-row items-center gap-1 text-sm text-muted-foreground">
              <span>{billingAddress.phone}</span>
              <span>(Natsay.com.mm)</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default OrderDetail;
