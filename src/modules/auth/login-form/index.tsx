"use client"

import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";
import { handleLogin } from "@/lib/apolloClient/services/login";
import { setToken } from "@/lib/features/account/accountSlice";
import { useDispatch } from "react-redux";

const LoginForm: React.FC = () => {
    const dispatch = useDispatch();
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const result = await handleLogin({
      email: email,
      password: password,
    });
    console.log(result)
    if (result.success) {
      toast({
        description:"Login Success"
      })
      dispatch(setToken(result.token));
      localStorage.setItem("token",result.token)
    } else {
      toast({
        variant:"destructive",
        description:"Login Failed"
      })
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">Email</label>
          <Input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <Input type="password" id="password" name="password" required />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};
export default LoginForm;
