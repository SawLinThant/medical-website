import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { UserService } from "@/lib/apolloClient/services/user.service";
import CustomUpdateInput from "@/modules/common/input/custom-update-input";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfileBasicInfoEditFormProps {
  name?: string;
  email?: string;
  phone?: string;
  id: string;
}

const ProfilebasicInfoEditForm: React.FC<ProfileBasicInfoEditFormProps> = ({
  name,
  email,
  phone,
  id,
}) => {
  const [nameInfo, setNameInfo] = useState<string>("");
  const [emailInfo, setEmailInfo] = useState<string>("");
  const [phoneInfo, setPhoneInfo] = useState<string>("");
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);
  const userService = new UserService(serverApolloClient);
  useEffect(() => {
    if (name) {
      setNameInfo(name);
    }
    if (email) {
      setEmailInfo(email);
    }
    if (phone) {
      setPhoneInfo(phone);
    }
  }, [name, phone, email]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log("handle submit function")
    try {
      setUpdateLoading(true);
    //   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //   if (!emailRegex.test(emailInfo)) {
    //     throw new Error("Please enter a valid email address");
    //   }

    //   const phoneRegex = /^\d{10}$/;
    //   if (!phoneRegex.test(phoneInfo)) {
    //     throw new Error("Please enter a valid 10-digit phone number");
    //   }

      const response = await userService.updateUserById(id, {
        username: nameInfo,
        email: emailInfo,
        phone: phoneInfo,
      });

      if (response.success) {
        toast({
          description: "Info Updated Successfully",
        });
      } else {
        throw new Error(response.message || "Failed to update user info");
      }
    } catch (err) {
      toast({
        description: "Failed to update Info",
        variant: "destructive",
      });
    } finally {
      setUpdateLoading(false);
    }
  };
  return (
    <div className="w-full flex flex-col gap-3">
      <div className="pb-4 lg:grid lg:grid-cols-3 lg:pl-0 md:pl-0 pl-4">
        <div className="w-full flex flex-col gap-1 lg:pr-4">
          <CustomUpdateInput
            label="Name *"
            value={nameInfo}
            name="phone"
            placeHolder="Enter your name"
            type="text"
            onChange={(e) => setNameInfo(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-col lg:mt-0 mt-4 gap-1 lg:pr-4">
          <CustomUpdateInput
            label="Email *"
            value={emailInfo}
            name="phone"
            placeHolder="Enter your email"
            type="text"
            onChange={(e) => setEmailInfo(e.target.value)}
          />
        </div>
        <div className="lg:mt-0 mt-4">
        <CustomUpdateInput
          label="Phone *"
          value={phoneInfo}
          name="phone"
          placeHolder="Enter your phone"
          type="text"
          onChange={(e) => setPhoneInfo(e.target.value)}
        />
        </div>
      
      </div>
      <div className="flex flex-row items-center justify-end">
        <Button
          disabled={updateLoading}
          onClick={handleSubmit}
          className="flex items-center justify-center min-w-[5rem]"
        >
          {updateLoading ? <Loader className="animate-spin" /> : "Update"}
        </Button>
      </div>
    </div>
  );
};
export default ProfilebasicInfoEditForm;
