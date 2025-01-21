"use client";

import { OptionType, PROVINCE, ZONE } from "@/lib/constant/options";
import Dropdown from "@/modules/common/dropdown/zone-dropdown";
import { useEffect, useState } from "react";
import { CheckoutAddress } from "@/lib/types/global";
import CustomUpdateTextArea from "@/modules/common/text-area/custom-update-textarea";
import CustomUpdateInput from "@/modules/common/input/custom-update-input";
import { Checkbox } from "@/components/ui/checkbox";
import { DeliveryAddress, FindDeliveryAddress } from "@/lib/apolloClient/services/address";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { getSessionData } from "@/lib/utils";
import AddressPopUp from "./pop-up";

interface SessionData {
  userId: string
  role: string
  token: string
  isLoggedIn: boolean
}

interface DelliveryAddressFormProps {
  setSameAddress: (address:DeliveryAddress) => void
  setShippingAddress:(address:string) => void
}

const DelliveryAddressForm: React.FC<DelliveryAddressFormProps> = ({setSameAddress,setShippingAddress}) => {
  const [zone, setZone] = useState<string>("");
  const [provinces, setProvinces] = useState<OptionType[]>([]);
  const [provincesValue, setProvincesValue] = useState<string>("");
  const [isAddressExist,setIsAddressExist] = useState<boolean>(false);
  const [sessionData, setSessionData] = useState<SessionData | null>(null);
  const [deliveryAddress, setDeliveryAddress] = useState<DeliveryAddress>({
      id:"",
      firstname: "",
      lastname: "",
      province: "",
      zone: "",
      address: "",
      phone: "",
      email: "",
      user_id: "",
      label: ""
  });
    useEffect(() => {
      if (zone) {
        setDeliveryAddress((prev) => ({
          ...prev,
          zone: zone
        }))
        const selectedZone = PROVINCE.find((province) => province.zone === zone);
        console.log("selected zone:",selectedZone)
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
          province: provincesValue
        }))
      }
    }, [provincesValue]);
  useEffect(() => {
    const fetchSessionData = async () => {
      const data = await getSessionData();
      if (data) {
        setSessionData(data); 
      }
    };

    fetchSessionData();
  }, []);
  useEffect(() => {
      if (provincesValue) {
        setDeliveryAddress((prev) => ({
          ...prev,
          province:provincesValue
        }))
      }
    }, [provincesValue]);
  useEffect(() => {
    if (sessionData?.userId) {
      setDeliveryAddress((prev) => ({
        ...prev,
        user_id: sessionData?.userId, 
      }));
      const fetchDeliveryAddress = async () => {
        try {
          const addresses = await FindDeliveryAddress(serverApolloClient, {
            user_id: sessionData?.userId || "",
          });
          if (addresses && addresses.length > 0) {
            setIsAddressExist(true)
            setDeliveryAddress(addresses[0]);
            setShippingAddress(addresses[0].address)
            localStorage.setItem("DeliveryAddress",JSON.stringify(addresses[0]))
          } else {
            console.log("No delivery address found for this user.");
          }
        } catch (error) {
          console.error("Error fetching delivery address:", error);
        }
      };

      fetchDeliveryAddress();
    }
  }, [sessionData]);
 
  return (
    <div className="w-full flex flex-col gap-4 items-start">
      <h2 className="font-semibold text-xl">Delivery Address</h2>
      <div className="w-full flex flex-col gap-6 mt-4">
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
              options={provinces}
              label={deliveryAddress.zone === ""?"Select Province":deliveryAddress.province}
              setCategory={setProvincesValue}
            />
          </div>
          <div className="w-full flex flex-col gap-1">
            <label htmlFor="" className="text-sm">
              Select Zone
            </label>
            <Dropdown
              options={ZONE}
              label={deliveryAddress.zone === ""?"Select Zone":deliveryAddress.zone}
              setCategory={setZone}
            />
          </div>
        </div>
        <CustomUpdateTextArea
          value={deliveryAddress.address}
          label="Address"
          name="address"
          placeHolder="Enter your address"
          onChange={(e) =>{
            setDeliveryAddress((prev) => ({
              ...prev,
              [e.target.name]: e.target.value,
            }));

          }
           
          }
        />
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
        <div className="w-full flex flex-row items-center justify-between">
          <div className="min-w-12 min-h-14 flex flex-row items-center justify-center gap-2">
            <Checkbox onCheckedChange={()=>setSameAddress(deliveryAddress)} id="same address" />
            <span className="text-sm">Bill to same address</span>
          </div>
          <AddressPopUp addressData={deliveryAddress} isAddressExist={isAddressExist}/>
        </div>
      </div>
    </div>
  );
};
export default DelliveryAddressForm;
