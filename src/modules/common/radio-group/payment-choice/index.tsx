import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Image from "next/image";

export function PaymentChoice() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="default" id="r1" />
        <Label htmlFor="r1" className="text-muted-foreground">Cash on delivery</Label>
      </div>
      <div className="flex flex-row items-center space-x-2">
        <RadioGroupItem value="KBZ Pay" id="r2" />
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
        <RadioGroupItem value="Wave Pay" id="r3" />
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
        <RadioGroupItem value="Aya Pay" id="r4" />
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
