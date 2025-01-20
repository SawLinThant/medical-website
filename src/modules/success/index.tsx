"use client"

import SuccessItems from "./item";
import Message from "./message";
import OrderDetail from "./order-detail";


const OrderSuccess = () => {
  const downloadInvoice = () => {

  }
  return (
    <section className="w-full flex flex-col items-center lg:min-h-72">
      <div className="w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4">
        <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4">
          <div className="lg:col-span-3 md:col-span-3 col-span-1 min-h-32 flex flex-col gap-4">
            <div className="w-full min-h-32 flex flex-col gap-4">
              <Message />
              <OrderDetail/>
            </div>
          </div>
          <div className="lg:col-span-2 md:col-span-2 col-span-1">
            <SuccessItems downloadInvoice={downloadInvoice}/>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OrderSuccess;
