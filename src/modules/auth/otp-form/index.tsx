import { Button } from "@/components/ui/button";
import OTPInput from "@/modules/common/otp-input";
import { MoveLeft } from "lucide-react";

interface OTPFormProps {
  setIsForgotPasword: (value: boolean) => void;
  setIsCurrentPage: (value: string) => void;
}

const OTPForm: React.FC<OTPFormProps> = ({ setIsForgotPasword,setIsCurrentPage }) => {
    const handleSubmit = () => {
       setIsCurrentPage("Enter New Password")
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
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 items-center mt-4"
      >
        {/* <OTPInput /> */}
        <Button type="submit" className="mt-5 h-9 w-full">
          Reset Password
        </Button>
        <div
          onClick={() => {setIsForgotPasword(false);setIsCurrentPage("Enter Phone")}}
          className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
        >
          <MoveLeft size={20} strokeWidth={2} />
          <span className="text-xs">Back to login</span>
        </div>
      </form>
    </div>
  );
};
export default OTPForm;
