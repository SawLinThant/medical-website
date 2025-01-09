import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
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
  const handleSubmit = () => {
    //e.preventDefault();
    const otpValue = value.toString();
    if (otpValue.length === 4) {
      if (otpValue === "1234") {
        handleRegister();
      } else {
        toast({
          description: "Invalid OTP !",
        });
      }
    } else {
      toast({
        description: "please fill all fields",
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
          To verify your phone number, we've sent an one time password(OTP) to
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
