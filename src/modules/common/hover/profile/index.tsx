"use client"

import {
  CalendarDays,
  FileSpreadsheet,
  Heart,
  LogOut,
  User,
} from "lucide-react";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSessionData } from "@/lib/utils";
import { SessionData } from "@/modules/checkout";
import { FindAccountById, UserType } from "@/lib/apolloClient/services/users";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";


export function ProfileHoverCard() {
  const router = useRouter();
  const [user,setUser] = useState<UserType>()
    const [sessionData, setSessionData] = useState<SessionData | null>(null);
    useEffect(() => {
      const fetchSessionData = async () => {
        const data = await getSessionData();
        if (data) {
          setSessionData(data);
        }
      };
  
      fetchSessionData();
    }, []);


    useEffect (() => {
        if(sessionData && sessionData.userId){
            const fetchUserInfo = async() => {
                const response = await FindAccountById(serverApolloClient, {
                    id: sessionData.userId
                })
                if(response && response.user){
                    setUser(response.user)
                }else{
                }
            }
            fetchUserInfo();
        }
    },[sessionData])
  const handleLogout = async () => {
    try {
      const response = await fetch("/api/auth/session", {
        method: "DELETE",
        credentials: "include",
      });

      if (response.ok) {
        console.log("Logout successful");
       // window.location.reload();
       router.push("/")
      } else {
        const data = await response.json();
        console.error("Logout failed:", data.message);
      }
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <div className="flex flex-row items-center gap-3">
          <div className="w-10 h-10 relative rounded-full border">
            <Image
              src={user?.profile_url|| "/images/placeholder.jpg"}
              alt="profile"
              layout="fill"
              objectFit="contain"
              className="rounded-full"
            />
          </div>
          <span className="text-sm">
            {user?.username && user?.username.length > 10 ? `${user?.username.substring(0, 10)}...` : user?.username}
          </span>
        </div>
      </HoverCardTrigger>
      <HoverCardContent className="w-50">
        <div className="flex flex-col gap-2 px-2">
          <div className="flex flex-col gap-5 text-sm font-light pb-4 border-b">
            <div
            onClick={() => router.push(`/profile/${user?.id}`)}
            className="flex flex-row gap-2 items-center justify-start hover:cursor-pointer">
              <User size={17} />
              <span>Profile Management</span>
            </div>
            <div
              onClick={() => router.push("/order-history")}
              className="flex flex-row gap-2 items-center justify-start hover:cursor-pointer"
            >
              <FileSpreadsheet size={17} />
              <span>My Order</span>
            </div>
            <div className="flex flex-row gap-2 items-center justify-start hover:cursor-pointer">
              <Heart size={17} />
              <span>My Wishlist</span>
            </div>
          </div>
          <div onClick={handleLogout} className="flex flex-row gap-2 items-center justify-start hover:cursor-pointer">
            <LogOut size={17} />
            <span>Logout</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
