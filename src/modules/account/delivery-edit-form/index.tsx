"use client";

import { Button } from "@/components/ui/button";
import { Address } from "@/domain/entities/users.entity";
import { toast } from "@/hooks/use-toast";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { UpdateDeliveryAddress } from "@/lib/apolloClient/services/address";
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

const ProfileDeliveryEditForm: React.FC<ProfileBillingEditFormProps> = ({
  province,
  zone,
  address,
  id,
}) => {
  const [deliveryZone, setBillingZone] = useState<string>("");
  const [deliveryProvince, setBillingProvince] = useState<string>("");
  const [deliveryAddress, setBillingAddress] = useState<string>("");
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
    if (deliveryZone) {
      const selectedZone = PROVINCE.find(
        (province) => province.zone === deliveryZone
      );
      console.log("selected zone:", selectedZone);
      if (selectedZone) {
        setProvinces(selectedZone.province);
      }
    } else {
      setProvinces([]);
    }
  }, [deliveryZone]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setUpdateLoading(true);
      const response = await UpdateDeliveryAddress(serverApolloClient, {
        user_id: id,
        input: {
          province: deliveryProvince,
          zone: deliveryZone,
          address: deliveryAddress,
        },
      });

      if (response) {
        toast({
          description: "Delivery Address Updated",
        });
      } else {
        throw new Error("Failed to update Delivery address");
      }
    } catch (err) {
      setUpdateLoading(false);
      toast({
        description: "Failed to update Delivery Address",
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
            value={deliveryAddress}
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
export default ProfileDeliveryEditForm;
