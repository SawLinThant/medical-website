"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import {
  DeliveryAddress,
  InsertDeliveryAddress,
  UpdateDeliveryAddress,
} from "@/lib/apolloClient/services/address";
import { OptionType, PROVINCE, ZONE } from "@/lib/constant/options";
import Success from "@/modules/auth/success";
import Dropdown from "@/modules/common/dropdown/zone-dropdown";
import CustomUpdateInput from "@/modules/common/input/custom-update-input";
import { Loader, X } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useState } from "react";

interface AddressPopUpProps {
  addressData: DeliveryAddress;
  isAddressExist: boolean;
}

const AddressPopUp: React.FC<AddressPopUpProps> = ({
  addressData,
  isAddressExist,
}) => {
  const [zone, setZone] = useState<string>();
  const [provinces, setProvinces] = useState<OptionType[]>([]);
  const [provincesValue, setProvincesValue] = useState<string>("");
  const [currentSuccessPage, setCurrentSuccessPage] = useState<string>("");
  const [isDialogOpen, setIsDialogOpen] = useState<boolean>(false);
  const [saveLoading, setSaveLoading] = useState<boolean>(false);
  const [deliveryLabel, setDeliveryLabel] = useState<string>("Home");
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
    id: "",
    firstname: "",
    lastname: "",
    province: "",
    zone: "",
    address: "",
    phone: "",
    email: "",
    user_id: "",
    label: "",
  });
  useEffect(() => {
    if (addressData) {
      setDeliveryAddress(addressData);
    }
  }, [addressData]);
  useEffect(() => {
    setDeliveryAddress((prev) => ({
      ...prev,
      label: deliveryLabel,
    }));
  }, [addressData, deliveryLabel]);
  useEffect(() => {
    if (zone) {
      setDeliveryAddress((prev) => ({
        ...prev,
        zone: zone,
      }));
      const selectedZone = PROVINCE.find((province) => province.zone === zone);
      console.log("selected zone:", selectedZone);
      if (selectedZone) {
        setProvinces(selectedZone.province);
      }
    } else {
      setProvinces([]);
    }
  }, [zone]);
  useEffect(() => {
    if (provincesValue) {
      setDeliveryAddress((prev) => ({
        ...prev,
        province: provincesValue,
      }));
    }
  }, [provincesValue]);

  const handleCreate = async () => {
    try {
      setSaveLoading(true);
      const response = await InsertDeliveryAddress(serverApolloClient, {
        input: {
          firstname: deliveryAddress.firstname,
          lastname: deliveryAddress.lastname,
          province: deliveryAddress.province,
          zone: deliveryAddress.zone,
          address: deliveryAddress.address,
          phone: deliveryAddress.phone,
          email: deliveryAddress.email,
          user_id: deliveryAddress.user_id,
          label: deliveryAddress.label,
        },
      });
      if (response) {
        setCurrentSuccessPage("Address Success");
        localStorage.setItem("DeliveryAddress",JSON.stringify(deliveryAddress))
      }
    } catch (error) {
      setSaveLoading(false);
      console.log("Error submitting address:", error);
    } finally {
      setSaveLoading(false);
    }
  };

  const handleUpdate = async () => {
    try {
      setSaveLoading(true);
      const response = await UpdateDeliveryAddress(serverApolloClient, {
        user_id: deliveryAddress.user_id,
        input: {
          firstname: deliveryAddress.firstname,
          lastname: deliveryAddress.lastname,
          province: deliveryAddress.province,
          zone: deliveryAddress.zone,
          address: deliveryAddress.address,
          phone: deliveryAddress.phone,
          email: deliveryAddress.email,
          label: deliveryAddress.label,
        },
      });
      if (response) {
        setCurrentSuccessPage("Address Success");
      }
    } catch (error) {
      setSaveLoading(false);
      console.log("Error submitting address:", error);
    } finally {
      setSaveLoading(false);
    }
  };
  const handleSubmit = () => {
    if (!isAddressExist) {
      handleCreate();
    } else {
      handleUpdate();
    }
  };
  return (
    <Dialog
      open={isDialogOpen}
      onOpenChange={(isOpen) => {
        if (!isOpen) {
          setCurrentSuccessPage("");
        }
      }}
    >
      <DialogTrigger asChild>
        <div
          onClick={() => setIsDialogOpen(true)}
          className="border-none bg-transparent hover:cursor-pointer underline text-muted-foreground text-sm"
        >
          Save the address
        </div>
      </DialogTrigger>
      {currentSuccessPage === "" && (
        <DialogContent className="sm:max-w-[50vw] lg:min-h-[20rem] px-4 lg:py-12 md:py-12 py-10 flex flex-col">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <div className=" w-full h-full grid grid-cols-1 gap-y-5 ">
            <div className="flex flex-col items-center justify-center">
              <div className="w-[150px] h-[60px] relative">
                <Image
                  alt="logo"
                  src="/images/logo.png"
                  layout="fill"
                  objectFit="contain"
                />
              </div>
              <div className="flex lg:flex-row items-center md:flex-row flex-col gap-2 mt-2">
                <span className="font-semibold">Welcome to</span>
                <span className="font-semibold text-secondary_color">
                  NatSay.com.mm
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-4 px-10 mt-6 ">
              <h2 className="font-semibold text-xl">Add New Address</h2>
              <div className="w-full max-h-[35vh] flex flex-col gap-6 mt-4 overflow-y-auto scrollbar-thin">
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                  <CustomUpdateInput
                    label="First name *"
                    value={deliveryAddress.firstname}
                    name="firstname"
                    placeHolder="Enter your first name"
                    type="text"
                    onChange={(e) =>
                      setDeliveryAddress((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                  <CustomUpdateInput
                    label="Last name *"
                    name="lastname"
                    value={deliveryAddress.lastname}
                    placeHolder="Enter your last name"
                    type="text"
                    onChange={(e) =>
                      setDeliveryAddress((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="" className="text-sm">
                      Select Province
                    </label>
                    <Dropdown
                      options={ZONE}
                      label={addressData.province}
                      setCategory={setProvincesValue}
                    />
                  </div>
                  <div className="w-full flex flex-col gap-1">
                    <label htmlFor="" className="text-sm">
                      Select Zone
                    </label>
                    <Dropdown
                      options={ZONE}
                      label={addressData.zone}
                      setCategory={setZone}
                    />
                  </div>
                </div>
                <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
                  <CustomUpdateInput
                    label="Phone *"
                    value={deliveryAddress.phone}
                    name="phone"
                    placeHolder="Enter your phone"
                    type="text"
                    onChange={(e) =>
                      setDeliveryAddress((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                  <CustomUpdateInput
                    label="Email *"
                    name="email"
                    value={deliveryAddress.email}
                    placeHolder="Enter your email"
                    type="email"
                    onChange={(e) =>
                      setDeliveryAddress((prev) => ({
                        ...prev,
                        [e.target.name]: e.target.value,
                      }))
                    }
                  />
                </div>
                <CustomUpdateInput
                  value={deliveryAddress.address}
                  label="Address"
                  type="text"
                  name="address"
                  placeHolder="Enter your address"
                  onChange={(e) =>
                    setDeliveryAddress((prev) => ({
                      ...prev,
                      [e.target.name]: e.target.value,
                    }))
                  }
                />
              </div>
              <div className="felx flex-col gap-2">
                <label htmlFor="" className="text-sm">
                  Label for delivery *
                </label>
                <div className="flex flex-row items-center gap-4 mt-2">
                  <Button
                    variant={deliveryLabel === "Home" ? "default" : "outline"}
                    onClick={() => setDeliveryLabel("Home")}
                  >
                    Home
                  </Button>
                  <Button
                    variant={deliveryLabel === "Office" ? "default" : "outline"}
                    onClick={() => setDeliveryLabel("Office")}
                  >
                    Office
                  </Button>
                </div>
              </div>
              <Button
                onClick={handleSubmit}
                className="flex items-center justify-center"
              >
                {saveLoading ? (
                  <Loader className="animate-spin" />
                ) : (
                  "Save new address"
                )}
              </Button>
            </div>
          </div>
        </DialogContent>
      )}

      {currentSuccessPage === "Address Success" && (
        <DialogContent className=" px-4 lg:py-12 md:py-12 py-10">
          <DialogTitle></DialogTitle>
          <div
            onClick={() => {
              setIsDialogOpen(false);
              setCurrentSuccessPage("");
            }}
            className="absolute top-4 right-6 p-1 border hover:cursor-pointer hover:border-gray-600 border-gray-300 rounded-full"
          >
            <X size={20} />
          </div>
          <Success label="Address has been successfully saved" />
        </DialogContent>
      )}
    </Dialog>
  );
};

export default AddressPopUp;
