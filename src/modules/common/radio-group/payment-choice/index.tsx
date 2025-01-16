import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

interface PaymentChoiceProps {
  setPayment:(paymentId:string) => void
}

export function PaymentChoice({setPayment}:PaymentChoiceProps) {
  return (
    <RadioGroup
    onValueChange={(value) => setPayment(value)}
    defaultValue="abfa998a-8e84-4ca0-887e-79f572127bdd">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="abfa998a-8e84-4ca0-887e-79f572127bdd" id="abfa998a-8e84-4ca0-887e-79f572127bdd" />
        <Label htmlFor="r1" className="text-muted-foreground">Cash on delivery</Label>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="5af460bc-bb4c-4183-b655-22d8dcc18d36" id="5af460bc-bb4c-4183-b655-22d8dcc18d36" />
        <div className="flex flex-row gap-2">
          <div className="h-12 w-12 relative">
            <Image
              alt="kpay"
              src="/images/payment/kpay.png"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col h-12 justify-between">
            <Label htmlFor="r2" className="font-semibold text-sm">
              KBZ Pay
            </Label>
            <div className="flex flow-row items-center gap-1 text-sm text-muted-foreground">
              <span>09973854868</span>
              <span>(Natsay.com.mm)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="b6447a68-7a77-4365-a23f-6d9232a4ee27" id="b6447a68-7a77-4365-a23f-6d9232a4ee27" />
        <div className="flex flex-row gap-2">
          <div className="h-12 w-12 relative">
            <Image
              alt="wavepay"
              src="/images/payment/wave.jpg"
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col h-12 justify-between">
            <Label htmlFor="r2" className="font-semibold text-sm">
              Wave Pay
            </Label>
            <div className="flex flow-row items-center gap-1 text-sm text-muted-foreground">
              <span>09973854868</span>
              <span>(Natsay.com.mm)</span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="d776755c-0120-4831-91fb-a8f8a7e5f233" id="d776755c-0120-4831-91fb-a8f8a7e5f233" />
        <div className="flex flex-row gap-2">
          <div className="h-12 w-12 relative">
            <Image
              alt="aya"
              src="/images/payment/aya.jpg"
              layout="fill"
              objectFit="contain"
              className="rounded-md"
            />
          </div>
          <div className="flex flex-col h-12 justify-between">
            <Label htmlFor="r2" className="font-semibold text-sm">
              Aya Pay
            </Label>
            <div className="flex flow-row items-center gap-1 text-sm text-muted-foreground">
              <span>09973854868</span>
              <span>(Natsay.com.mm)</span>
            </div>
          </div>
        </div>
      </div>
    </RadioGroup>
  );
}
