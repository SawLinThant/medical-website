import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MoveLeft } from "lucide-react";

interface NewFormProps {
  setIsForgotPasword: (value: boolean) => void;
  setIsCurrentPage: (value: string) => void;
}

const NewPasswordForm: React.FC<NewFormProps> = ({
  setIsForgotPasword,
  setIsCurrentPage
}) => {
    const handleSubmit = () => {
        setIsForgotPasword(false)
        setIsCurrentPage("Enter Phone")
     } 
  return (
    <div className="flex flex-col w-full h-full gap-4">
      <div>
        <div className="flex flex-row items-center gap-4">
          <span className="hover:cursor-pointer text-black text-lg font-semibold">
            New Password
          </span>
        </div>
      </div>
      <div className="flex flex-col">
        <span className="text-xs text-muted-foreground">
          Enter new password to update existing password
        </span>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 mt-4"
      >
        <div className="flex flex-col gap-1">
          <label htmlFor="new_password" className="text-xs font-semibold text-black">
            New Password
          </label>
          <Input
            type="text"
            id="new_password"
            name="new_password"
            placeholder="Enter new password"
            required
            className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
          />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirm_password" className="text-xs font-semibold text-black">
            Confirm Password
          </label>
          <Input
            type="text"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm new password"
            required
            className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
          />
        </div>
        <Button type="submit" className="mt-5 h-9">
          Update Password
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
export default NewPasswordForm;
