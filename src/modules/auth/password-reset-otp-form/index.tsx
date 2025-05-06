import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useVerifyOtp } from "@/lib/hooks/useMutation/useOTP";
import OTPInput from "@/modules/common/otp-input";
import { Loader, MoveLeft } from "lucide-react";
import { useState } from "react";

interface OTPFormProps {
  setIsForgotPasword: (value: boolean) => void;
  setCurrentPage: (value: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ setIsForgotPasword,setCurrentPage }) => {
  const [value, setValue] = useState<any>();
  const { verifyOtp, loading, error } = useVerifyOtp();
  const handleSubmit = async () => {
    const otpValue = value?.toString();
    if (!otpValue || otpValue.length !== 6) {
      toast({
        variant: "destructive",
        description: "Please enter a 6-digit OTP",
      });
      return;
    }
    const phone = localStorage.getItem("resetphone") || "";
    try {
      const result = await verifyOtp(phone, otpValue);
      if (result) {
        localStorage.removeItem("resetphone");
        setCurrentPage("Enter New Password");
      } else {
        toast({
          variant: "destructive",
          description: "Invalid OTP",
        });
      }
    } catch (err) {
      console.error("Error verifying OTP:", err);
      toast({
        variant: "destructive",
        description: "Failed to verify OTP",
      });
    }
  };
  if (error) {
    toast({
      variant: "destructive",
      description: error.message || "An error occurred while verifying OTP",
    });
  }
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-row items-center gap-4">
          <span className="hover:cursor-pointer text-black font-semibold">
            OTP
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          Enter four digits from your phone to reset password
        </span>
      </div>
      <div
        className="flex flex-col gap-2 items-center mt-4"
      >
        <OTPInput setValue={setValue} />
        <Button disabled={loading} onClick={handleSubmit} type="button" className="mt-5 h-9 w-full flex items-center justify-center">
          {loading?<Loader className="animate-spin"/>:"Reset Password"}
        </Button>
        <div
          onClick={() => {setIsForgotPasword(false);setCurrentPage("Enter Phone")}}
          className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
        >
          <MoveLeft size={20} strokeWidth={2} />
          <span className="text-xs">Back to login</span>
        </div>
      </div>
    </div>
  );
};
export default OTPForm;
