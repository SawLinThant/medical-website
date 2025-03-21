"use client";

import React, { useEffect, useState } from "react";
import { ApolloClient, NormalizedCacheObject } from "@apollo/client";
import { UserService } from "@/lib/apolloClient/services/user.service";
import { User } from "@/domain/entities/users.entity";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { LogOut, Tally1 } from "lucide-react";
import { useRouter } from "next/navigation";
import ProfileBillingEditForm from "../billing-edit-form";
import ProfileDeliveryEditForm from "../delivery-edit-form";
import ProfilebasicInfoEditForm from "../basicinfo-edit-form";

interface ProfileProps {
  id: string;
}

interface ProfileState {
  user: User | null;
  loading: boolean;
  error: string | null;
}

const Profile: React.FC<ProfileProps> = ({ id }) => {
  const [state, setState] = useState<ProfileState>({
    user: null,
    loading: true,
    error: null,
  });

  const userService = new UserService(serverApolloClient);
  const router = useRouter();
  const [isBillingEdit, setBillingEdit] = useState<boolean>(false);
  const [isDeliveryEdit, setDeliveryEdit] = useState<boolean>(false);
  const [isBasicInfoEdit, setIsBasicInfoEdit] = useState<boolean>(false);
  useEffect(() => {
    const fetchUser = async () => {
      try {
        setState((prev) => ({ ...prev, loading: true, error: null }));

        const response = await userService.getUserById({ id });
        console.log("user profile response:", response);

        if (response.success) {
          setState({
            user: response.user || null,
            loading: false,
            error: response.user ? null : "User not found",
          });
        } else {
          throw new Error(response.message || "Failed to fetch user");
        }
      } catch (err) {
        setState({
          user: null,
          loading: false,
          error:
            err instanceof Error ? err.message : "An unexpected error occurred",
        });
      }
    };

    fetchUser();
  }, [id]);

  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/session", {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Logout successful");
        // window.location.reload();
        router.push("/");
      } else {
        const data = await response.json();
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  const renderContent = () => {
    if (state.loading) {
      return <div className="loading">Loading profile...</div>;
    }

    if (state.error) {
      return <div className="error">Error: {state.error}</div>;
    }

    if (!state.user) {
      return <div className="not-found">No user found</div>;
    }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 md:grid-cols-2 gap-4 border border-gray-300 rounded-lg py-4 px-4">
        <div className="flex flex-col gap-4 md:justify-start justify-center items-center md:col-span-1 lg:col-span-1 col-span-1">
          <div className="w-32 h-32 relative bg-gray-200 rounded-full flex items-center justify-center">
            {/* Blank space for image - replace with your image logic */}
            <Image
              layout="fill"
              className="rounded-full bg-contain"
              src={state.user.profile_url || "/images/placeholder.jpg"}
              alt="Profile Img"
            />
          </div>
          <h2 className="text-xl font-bold">{state.user.username}</h2>
          <Button
            type="button"
            onClick={handleLogout}
            className="min-w-[5rem] flex flex-row items-center"
          >
            Logout <LogOut strokeWidth={2.75} />
          </Button>
        </div>
        <div className="flex flex-col space-y-4 md:col-span-1 lg:col-span-3 col-span-3">
          <div className="text-sm text-gray-500 gap-2 flex items-center lg:pl-0 md:pl-0 pl-4">
            <span>User Profile</span>
            <span className="font-bold text-lg">|</span>
            <div
            onClick={() => setIsBasicInfoEdit(!isBasicInfoEdit)}
            //  variant="outline"
            //  size="sm"
              className="bg-transparent border-none hover:cursor-pointer"
            >
              {isBasicInfoEdit?"Close":"Edit"}
            </div>
          </div>
          {isBasicInfoEdit?(
            <ProfilebasicInfoEditForm
             id={id}
             name={state.user.username}
             email={state.user.email}
             phone={state.user.phone}
            />
          ):(
            <div className="border-b lg:grid lg:grid-cols-3 border-gray-200 pb-8 lg:pl-0 md:pl-0 pl-4">
            <p className="text-gray-600">
              Name: <strong>{state.user.username}</strong>
            </p>
            <p className="text-gray-600">
              Email: <strong>{state.user.email}</strong>
            </p>
            <p className="text-gray-600">
              Mobile: <strong>{state.user.phone}</strong>
            </p>
          </div>
          )}
          

          <div className="text-sm text-gray-500 flex gap-2 items-center pt-4 lg:pl-0 md:pl-0 pl-4">
            <span className="text-[14px]">Delivery Address</span>
            <span className="font-bold text-lg">|</span>
            <div
            onClick={() => setDeliveryEdit(!isDeliveryEdit)}
            //  variant="outline"
            //  size="sm"
              className="bg-transparent border-none hover:cursor-pointer"
            >
              {isDeliveryEdit?"Close":"Edit"}
            </div>
          </div>
          {isDeliveryEdit?(
            <ProfileDeliveryEditForm
             id={id}
             address={state.user.delivery_addresses[0].address}
             province= {state.user.delivery_addresses[0].province}
             zone={state.user.delivery_addresses[0].zone}
            />
          ):(
            <>
            {state.user.delivery_addresses.length > 0 && (
            <div className="pb-4 lg:grid lg:grid-cols-3 lg:pl-0 md:pl-0 pl-4">
              <p className="text-gray-600">
                Province / Region:{" "}
                <span className="font-semibold">
                  {state.user.delivery_addresses[0].province}
                </span>
              </p>
              <p className="text-gray-600">
                Zone:{" "}
                <span className="font-semibold">
                  {state.user.delivery_addresses[0].zone}
                </span>
              </p>
              <p className="text-gray-600">
                Address:{" "}
                <span className="font-semibold">
                  {state.user.delivery_addresses[0].address}
                </span>
              </p>
            </div>
          )}
            </>
          )}
          

          <div className="text-sm text-gray-500 flex gap-2 items-center lg:pl-0 md:pl-0 pl-4">
            <span className="text-[14px]">Billing Address</span>
            <span className="font-bold text-lg">|</span>
            <div
              onClick={() => setBillingEdit(!isBillingEdit)}
             // variant="outline"
             // size="sm"
              className="bg-transparent border-none text-left hover:cursor-pointer"
            >
              {isBillingEdit?"Close":"Edit"}
            </div>
          </div>
          {isBillingEdit ? (
            <ProfileBillingEditForm 
            id={id}
            province={state.user.billing_addresses[0].province}
            zone={state.user.billing_addresses[0].zone}
            address={state.user.billing_addresses[0].address}
            />
          ) : (
            <>
              {state.user.billing_addresses.length > 0 && (
                <div className="pb-4 lg:grid lg:grid-cols-3 lg:pl-0 md:pl-0 pl-4">
                  <p className="text-gray-600">
                    Province / Region:{" "}
                    <span className="font-semibold">
                      {state.user.billing_addresses[0].province}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Zone:{" "}
                    <span className="font-semibold">
                      {state.user.billing_addresses[0].zone}
                    </span>
                  </p>
                  <p className="text-gray-600">
                    Address:{" "}
                    <span className="font-semibold">
                      {state.user.billing_addresses[0].address}
                    </span>
                  </p>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    );
  };

  return (
    <section className="w-full rounded-lg max-w-[1300px] mt-10">
      {renderContent()}
    </section>
  );
};

Profile.displayName = "Profile";

export default Profile;
