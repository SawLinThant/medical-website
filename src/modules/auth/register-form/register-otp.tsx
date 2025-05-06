import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { useVerifyRegisterOtp } from "@/lib/hooks/useMutation/useOTP";
import OTPInput from "@/modules/common/otp-input";
import { Loader, MoveLeft } from "lucide-react";
import { useState } from "react";

interface OTPFormProps {
  setIsCurrentPage: (value: string) => void;
  registerLoading: boolean;
  handleRegister: () => void;
}

const RegisterOTPForm: React.FC<OTPFormProps> = ({
  setIsCurrentPage,
  registerLoading,
  handleRegister,
}) => {
  const [value, setValue] = useState<any>();
  const { verifyRegisterOtp, loading, error } = useVerifyRegisterOtp();
  const handleSubmit = async() => {
    const otpValue = value.toString();
    if (!otpValue || otpValue.length !== 6) {
      toast({
        variant: "destructive",
        description: "Please enter a 6-digit OTP",
      });
      return;
    }
    const phone = localStorage.getItem("registerphone") || "";
    try {
      const result = await verifyRegisterOtp(phone, otpValue);
      if (result) {
        localStorage.removeItem("resetphone");
        handleRegister(); 
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
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-row items-center gap-4">
          <span className="hover:cursor-pointer text-black font-semibold">
            Verification
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          To verify your phone number, we&apos;ve sent an one time password(OTP) to
          your phone number
        </span>
      </div>
      <div
        // onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center mt-4"
      >
        <OTPInput setValue={setValue} />
        <Button
          disabled={registerLoading}
          type="button"
          onClick={handleSubmit}
          className="mt-5 h-9 w-full"
        >
          {registerLoading ? (
            <Loader className="animate-spin" />
          ) : (
            "Create an account"
          )}
        </Button>
        <div
          typeof="button"
          onClick={() => {
            setIsCurrentPage("Register Form");
          }}
          className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
        >
          <MoveLeft size={20} strokeWidth={2} />
          <span className="text-xs">Back to Register</span>
        </div>
      </div>
    </div>
  );
};
export default RegisterOTPForm;
