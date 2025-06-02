import { Order, OrderItem } from "@/lib/apolloClient/services/order";
import { ChevronDown, ChevronUp, Eye, RotateCcw, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface IndividualOrderProps {
  orders: Order[];
}

const IndividualOrder: React.FC<IndividualOrderProps> = ({ orders }) => {
  const [toggle, setToggle] = useState<Record<number, boolean>>({});

  const handleToggle = (index: number) => {
    setToggle((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };
  return (
    <>
      {orders.map((order, index) => (
        <div
          key={index}
          className="w-full p-6 border border-gray-300 rounded-md min-h-32 flex flex-col gap-6 bg-white"
        >
          <div className="w-full grid lg:grid-cols-7 md:grid-cols-7 grid-cols-2 min-h-10 mt-5 lg:gap-0 md:gap-0 gap-y-5">
            <div className="lg:col-span-4 md:col-span-4 col-span-2 grid lg:grid-cols-4 md:grid-cols-4 grid-cols-2 lg:gap-0 md:gap-0 gap-y-5">
            <div className="col-span-1 flex flex-col gap-2 items-start border-r border-gray-300">
              <span className="text-muted-foreground text-sm">
                Order Number
              </span>
              <span className="text-sm text-black font-semibold">
                {order.id.length > 13
                  ? `${order.id.substring(0, 13)}...`
                  : order.id}
              </span>
            </div>
            <div className="col-span-1 pl-3 flex flex-col gap-2 items-start lg:border-r md:border-r border-r-0 border-gray-300">
              <span className="text-muted-foreground text-sm">Ordered On</span>
              <span className="text-sm text-black font-semibold">
                {new Date(order?.created_date || "").toLocaleDateString()}
              </span>
            </div>
            {/* <div className="col-span-1 lg:pl-3 md:pl-3 pl-0 flex flex-col gap-2 items-start border-r border-gray-300">
              <span className="text-muted-foreground text-sm">
                Delivered On
              </span>
              <span className="text-sm text-black font-semibold">
                {order?.updated_date?(new Date(order?.updated_date).toLocaleDateString()):""}
              </span>
            </div> */}
            <div className="col-span-1 lg:pl-3 md:pl-3 pl-0 flex flex-col gap-2 items-start">
              <span className="text-muted-foreground text-sm">Shipped To</span>
              <span className="text-sm text-black font-semibold">
                {order.shipping_address}
              </span>
            </div>
            </div>         
            <div className="lg:col-span-3 md:col-span-3 col-span-2 flex flex-row items-center text-sm">
              <div className="w-1/2 flex items-center lg:justify-center md:justify-center justify-start">
                <span className="px-4 py-1 rounded-md border bg-white">
                  {order.status}
                </span>
              </div>
              <div className="w-1/2 flex items-center justify-center">
                <button
                  onClick={() => handleToggle(index)}
                  className="px-4 py-1 rounded-md border flex flex-row items-center gap-2 text-muted-foreground"
                >
                  {toggle[index] ? (
                    <>
                      View less <ChevronUp size={16} />
                    </>
                  ) : (
                    <>
                      View more <ChevronDown size={16} />
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>
          {toggle[index] &&
            order &&
            order.order_items?.map((orderItem, index) => (
              <div
                key={index}
                className="w-full grid lg:grid-cols-7 md:grid-cols-7 grid-cols-2 min-h-10 pt-8 border-t py-4 border-gray-300 lg:gap-0 md:gap-0 gap-y-5"
              >
                <div className="lg:col-span-4 md:col-span-4 col-span-2 w-full flex flex-row gap-2">
                  <div className="flex flex-row gap-3 w-full">
                    <div className="relative w-full lg:max-[150px] md:max-[150px] max-w-[120px]">
                      <Image
                        src={orderItem?.product?.images?.[0].image_url}
                        alt="product-image"
                        layout="fill"
                        objectFit="contain"
                        className="w-full lg:max-h-[100px] md:max-h-[80px]"
                      />
                    </div>
                    <div className="flex flex-col gap-4">
                      <h2 className="font-semibold text-sm">
                        {orderItem?.product?.name}
                      </h2>
                      <span className="text-sm">
                        Brand: <strong>Brand</strong>
                      </span>
                      <div className="flex lg:flex-row md:flex-row flex-col lg:items-center md:items-center items-start lg:gap-10 md:gap-10 gap-3 text-sm">
                        <span className="text-muted-foreground min-w-20 flex flex-row items-center gap-3">
                          <RotateCcw size={18} /> Buy again
                        </span>
                        <span className="text-muted-foreground flex flex-row items-center gap-3">
                          <Eye size={18} /> Buy again
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-3 md:col-span-3 col-span-2 flex lg:flex-row md:flex-row flex-col items-start">
                  <div className="lg:w-1/2 md:w-1/2 w-full px-4 lg:flex lg:flex-row md:flex md:flex-row grid grid-cols-2 justify-end">
                  <div className="col-span-1 lg:hidden md:hidden"></div>
                    <span className="w-full lg:text-right md:text-right text-left text-muted-foreground flex flex-row items-center lg:justify-center md:justify-end">
                      <X size={14}/>{orderItem.quantity}
                    </span>
                  </div>
                  <div className="lg:w-1/2 md:w-1/2 w-full g:flex lg:flex-row md:flex md:flex-row grid grid-cols-2 justify-end">
                  <div className="col-span-1 lg:hidden md:hidden"></div>
                    <span className="text-sm">
                      <strong>
                        MMK {orderItem?.subtotal.toLocaleString() || ""}
                      </strong>
                    </span>
                  </div>
                </div>
              </div>
            ))}
        </div>
      ))}
    </>
  );
};
export default IndividualOrder;
