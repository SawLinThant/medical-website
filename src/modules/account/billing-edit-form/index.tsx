"use client";

import { Button } from "@/components/ui/button";
import { Address } from "@/domain/entities/users.entity";
import { toast } from "@/hooks/use-toast";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { UpdateBillingAddress } from "@/lib/apolloClient/services/address";
import { OptionType, PROVINCE, ZONE } from "@/lib/constant/options";
import Dropdown from "@/modules/common/dropdown/zone-dropdown";
import CustomUpdateInput from "@/modules/common/input/custom-update-input";
import { Loader } from "lucide-react";
import { useEffect, useState } from "react";

interface ProfileBillingEditFormProps {
  province?: string;
  zone?: string;
  address?: string;
  id: string;
}

const ProfileBillingEditForm: React.FC<ProfileBillingEditFormProps> = ({
  province,
  zone,
  address,
  id,
}) => {
  const [billingZone, setBillingZone] = useState<string>("");
  const [billingProvince, setBillingProvince] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<string>("");
  const [provinces, setProvinces] = useState<OptionType[]>([]);
  const [updateLoading, setUpdateLoading] = useState<boolean>(false);

  useEffect(() => {
    if (province) {
      setBillingProvince(province);
    }
    if (zone) {
      setBillingZone(zone);
    }
    if (address) {
      setBillingAddress(address);
    }
  }, []);

  useEffect(() => {
    if (billingZone) {
      const selectedZone = PROVINCE.find(
        (province) => province.zone === billingZone
      );
      console.log("selected zone:", selectedZone);
      if (selectedZone) {
        setProvinces(selectedZone.province);
      }
    } else {
      setProvinces([]);
    }
  }, [billingZone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setUpdateLoading(true);
      const response = await UpdateBillingAddress(serverApolloClient, {
        user_id: id,
        input: {
          province: billingProvince,
          zone: billingZone,
          address: billingAddress,
        },
      });

      if (response) {
        toast({
          description: "Billing Address Updated",
        });
      } else {
        throw new Error("Failed to update billing address");
      }
    } catch (err) {
      setUpdateLoading(false);
      toast({
        description: "Failed to update Billing Address",
      });
    } finally {
      setUpdateLoading(false);
    }
  };

  return (
    <div className="w-full flex flex-col gap-3">
      <div className="pb-4 lg:grid lg:grid-cols-3 lg:pl-0 md:pl-0 pl-4">
        <div className="w-full flex flex-col gap-1 lg:pr-4">
          <label htmlFor="" className="text-sm">
            Province/Region *
          </label>
          <Dropdown
            options={provinces}
            label={province || ""}
            setCategory={setBillingProvince}
          />
        </div>
        <div className="w-full flex flex-col gap-1 lg:mt-0 mt-4 lg:pr-4">
          <label htmlFor="" className="text-sm">
            Zone*
          </label>
          <Dropdown
            options={ZONE}
            label={zone || ""}
            setCategory={setBillingZone}
          />
        </div>
        <div className="lg:mt-0 mt-4">
          <CustomUpdateInput
            label="Address *"
            value={billingAddress}
            name="phone"
            placeHolder="Enter your phone"
            type="text"
            onChange={(e) => setBillingAddress(e.target.value)}
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
export default ProfileBillingEditForm;
