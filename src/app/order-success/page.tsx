import OrderSuccess from "@/modules/success";
import SuccessItems from "@/modules/success/item";
import Message from "@/modules/success/message";
import OrderDetail from "@/modules/success/order-detail";
import { exportTraceState } from "next/dist/trace";

const OrderSuccessPage = () => {

  return (
    <>
    <OrderSuccess/>
    </>
  );
};
export default OrderSuccessPage;
