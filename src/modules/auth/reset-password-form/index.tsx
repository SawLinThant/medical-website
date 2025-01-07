import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";

interface ResetFormProps {
  setIsForgotPasword: (value: boolean) => void;
  setIsCurrentPage: (value: string) => void;
}

const ResetPasswordForm: React.FC<ResetFormProps> = ({
  setIsForgotPasword,
  setIsCurrentPage
}) => {
    const handleSubmit = () => {
        setIsCurrentPage("Enter OTP")
     }
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-row items-center gap-4">
          <span className="hover:cursor-pointer text-black font-semibold">
            Forgot Password
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          Enter your registered phone number
        </span>
        <span className="text-xs text-muted-foreground">
          We will send an OTP to it
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2 mt-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs font-semibold text-black">
            Phone Number
          </label>
          <Input
            type="text"
            id="phone"
            name="phone"
            placeholder="Enter Your Phone Number"
            required
            className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
          />
        </div>
        <Button type="submit" className="mt-5 h-9">
          Send OTP
        </Button>
        <div
          onClick={() => setIsForgotPasword(false)}
          className="w-full flex flex-row items-center justify-center text-secondary_color gap-2 hover:cursor-pointer"
        >
          <MoveLeft size={20} strokeWidth={2} />
          <span className="text-xs">Back to login</span>
        </div>
      </form>
    </div>
  );
};
export default ResetPasswordForm;
