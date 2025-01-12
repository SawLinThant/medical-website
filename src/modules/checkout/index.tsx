import { Separator } from "@/components/ui/separator";
import DelliveryAddressForm from "./delivery-address";
import BillingAddressForm from "./billing-address";
import PaymentForm from "./payment-method";
import CheckoutItems from "./items";

const CheckoutForm: React.FC = () => {
  return (
    <div className="w-full grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-4">
      <div
        className="lg:col-span-3 md:col-span-3 col-span-1 min-h-32 border rounded-md py-4 px-8 flex flex-col gap-4 bg-white">
          <div className="w-full min-h-52">
            <DelliveryAddressForm/>
          </div>
          <Separator className="my-4 border-t border-gray-300"/>
          <div className="w-full min-h-52">
            <BillingAddressForm/>
          </div>
          <Separator className="my-4 border-t border-gray-300"/>
          <div className="w-full min-h-36">
            <PaymentForm/>
          </div>
        </div>
      <div className="lg:col-span-2 md:col-span-2 col-span-1">
        <CheckoutItems/>
      </div>
    </div>
  );
};
export default CheckoutForm;
