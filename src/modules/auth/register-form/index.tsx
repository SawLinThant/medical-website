"use client"

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { registerUser } from "@/lib/apolloClient/services/register";

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
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="text">Username</label>
          <Input type="text" id="username" name="username" required />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="text">Phone</label>
          <Input type="text" id="phone" name="phone" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" name="password" required />
        </div>
        <Button type="submit">Register</Button>
      </form>
    </div>
  );
};
export default RegisterForm;
