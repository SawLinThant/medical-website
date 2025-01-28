import { PaymentChoice } from "@/modules/common/radio-group/payment-choice";

interface PaymentFormProps {
  setPayment:(paymentId:string) => void
}

const PaymentForm: React.FC<PaymentFormProps> = ({setPayment}) => {
  return (
    <div className="w-full flex flex-col gap-4 pb-4">
      <h2 className="font-semibold text-xl">Payment Method</h2>
      <p className="p-3 leading-5 text-sm rounded-md text-muted-foreground bg-secondary_color/10">
        Please ensure that your payment details are accurate before proceeding.
        Incorrect information may delay your order. And be aware that all
        transactions are final once completed.
      </p>
      <PaymentChoice setPayment={setPayment}/>
    </div>
  );
};
export default PaymentForm;
