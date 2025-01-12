"use client";

import { ZONE } from "@/lib/constant/options";
import Dropdown from "@/modules/common/dropdown/zone-dropdown";
import { useState } from "react";
import { CheckoutAddress } from "@/lib/types/global";
import CustomUpdateTextArea from "@/modules/common/text-area/custom-update-textarea";
import CustomUpdateInput from "@/modules/common/input/custom-update-input";

const BillingAddressForm: React.FC = () => {
  const [zone, setZone] = useState<string>("");
  const [billingAddress, setBillingAddress] = useState<CheckoutAddress>({
    firstname: "",
    lastname: "",
    province: "",
    zone: "",
    address: "",
    phone: "",
    email: "",
  });
  console.log(billingAddress);
  return (
    <div className="w-full flex flex-col gap-4 items-start">
      <h2 className="font-semibold text-xl">Billing Address</h2>
      <div className="w-full flex flex-col gap-6 mt-4">
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <CustomUpdateInput
            label="First name *"
            value={billingAddress.firstname}
            name="firstname"
            placeHolder="Enter your first name"
            type="text"
            onChange={(e) =>
              setBillingAddress((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <CustomUpdateInput
            label="Last name *"
            name="lastname"
            value={billingAddress.lastname}
            placeHolder="Enter your last name"
            type="text"
            onChange={(e) =>
              setBillingAddress((prev) => ({
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
              label="Select Zone"
              setCategory={setZone}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Select Zone
            </label>
            <Dropdown
              options={ZONE}
              label="Select Zone"
              setCategory={setZone}
            />
          </div>
        </div>
        <CustomUpdateTextArea
          value={billingAddress.address}
          label="Address"
          name="address"
          placeHolder="Enter your address"
          onChange={(e) =>
            setBillingAddress((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }))
          }
        />
        <div className="w-full grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 gap-4">
          <CustomUpdateInput
            label="Phone *"
            value={billingAddress.phone}
            name="phone"
            placeHolder="Enter your phone"
            type="text"
            onChange={(e) =>
              setBillingAddress((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
          <CustomUpdateInput
            label="Email *"
            name="email"
            value={billingAddress.email}
            placeHolder="Enter your email"
            type="email"
            onChange={(e) =>
              setBillingAddress((prev) => ({
                ...prev,
                [e.target.name]: e.target.value,
              }))
            }
          />
        </div>
      </div>
    </div>
  );
};
export default BillingAddressForm;
