"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { registerUser } from "@/lib/apolloClient/services/register";
import { CircleAlert } from "lucide-react";

const RegisterForm: React.FC = () => {
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const username = formData.get("username") as string;
    const phone = formData.get("phone") as string;
    const password = formData.get("password") as string;
    const result = await registerUser(serverApolloClient,{
        email: email,
        password: password,
        username: username,
        phone: phone,
        role: "customer",
        shop_id: null,
    })
    console.log(result);
    if (result.success) {
      toast({
        description: "Register Success",
      });
    } else {
      toast({
        variant: "destructive",
        description: result.message,
      });
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-1">
          <label htmlFor="username" className="text-xs font-semibold text-black">Name</label>
          <Input type="text" id="username" name="username" placeholder="Enter Full Name" required className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="phone" className="text-xs font-semibold text-black">Phone</label>
          <Input type="text" id="phone" name="phone" required placeholder="Enter Phone Number" className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]" />
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="password" className="text-xs font-semibold text-black">Password</label>
          <Input type="password" id="password" name="password" required placeholder="Enter Your Password" className="h-9 focus-visible:ring-offset-0 focus-visible:ring-0 placeholder:opacity-[0.6] placeholder:text-[12px]" />
          <div className="w-full flex flex-row items-center justify-start">
          <span className="text-xs text-secondary_color hover:cursor-pointer flex flex-row items-center gap-2"><CircleAlert color="#796f6f" size={15}/>Password Rule Here</span>
        </div>
        </div>
        <div className="flex flex-col gap-1">
          <label htmlFor="confirm_password" className="text-xs font-semibold text-black">Re-enter Password</label>
          <Input type="password" id="confirm_password" name="confirm_password" placeholder="Enter Your Password" required className="h-9 focus-visible:ring-offset-0 placeholder:opacity-[0.6] placeholder:text-[12px] focus-visible:ring-0" />
        </div>
        <Button type="submit" className="mt-3 h-9">Register</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
