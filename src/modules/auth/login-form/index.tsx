"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { handleLogin } from "@/lib/apolloClient/services/login";
import { setToken } from "@/lib/features/account/accountSlice";
import { Loader } from "lucide-react";
import { useState } from "react";
import { useDispatch } from "react-redux";

interface LoginFormProps {
  setIsForgotPasword: (value: boolean) => void;
  closeDialog: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ setIsForgotPasword,closeDialog }) => {
  const dispatch = useDispatch();
  const [loginLoading, setLoginLoading] = useState<boolean>(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;
    try {
      setLoginLoading(true);
      const result = await handleLogin({
        phone: phone,
        password: password,
      });
      console.log(result);
      if (result.success) {
        toast({
          description: "Login Success",
        });
        dispatch(setToken(result.token));
        localStorage.setItem("token", result.token);
        closeDialog();
      }
      if(!result.success){
        toast({
          description: "failed message"
        })
      }
    } catch (err) {
      setLoginLoading(false)
      toast({
        description: "Failed to login",
      });
    } finally {
      setLoginLoading(false)
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
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
        <div className="flex flex-col gap-1">
          <label
            htmlFor="password"
            className="text-xs font-semibold text-black"
          >
            Password
          </label>
          <Input
            type="password"
            id="password"
            name="password"
            placeholder="Enter Your Password"
            required
            className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]"
          />
        </div>
        <div
          onClick={() => setIsForgotPasword(true)}
          className="w-full flex flex-row items-center justify-end"
        >
          <span className="text-xs text-secondary_color hover:cursor-pointer">
            Forgot Password
          </span>
        </div>
        <Button disabled={loginLoading} type="submit" className="mt-3 h-9">
        {loginLoading?(<Loader className="animate-spin"/>):"Login"} 
        </Button>
      </form>
    </div>
  );
};
export default LoginForm;
