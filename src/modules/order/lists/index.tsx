"use client";

import { ORDER_STATUS, OrderStatus } from "@/lib/constant/options";
import { getOrders, Order } from "@/lib/apolloClient/services/order";
import React, { useEffect } from "react";
import IndividualOrder from "../individual-item";
import { getSessionData } from "@/lib/utils";
import { SessionData } from "@/modules/checkout";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import clsx from "clsx";

const OrderLists = () => {
  const [orderList, setOrderList] = React.useState<Order[] | null>(null);
  const [filter,setFilter] = React.useState<string | null>(null);
  const [sessionData, setSessionData] = React.useState<SessionData | null>(
    null
  );
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
    if (sessionData && sessionData.userId) {
      const fetchOrders = async () => {
        const where: Record<string, any> = {
          user_id: { _eq: sessionData.userId },
        };
        
        if (filter) {
          where.status = { _eq: filter }; 
        }
  
        const response = await getOrders(serverApolloClient, {
          where,
          offset: 0,
          limit: 10,
        });
  
        if (response) {
          setOrderList(response.orders);
        } else {
          console.log("No response");
        }
      };
  
      fetchOrders();
    }
  }, [sessionData, filter, setOrderList]);
  console.log("filter:",filter)

  return (
    <div className="w-full min-h-24 flex flex-col gap-5">
      <div className="w-full flex flex-col gap-4">
        <h1 className="font-semibold text-subheading">My Order</h1>
        <div className="flex lg:flex-row md:flex-row flex-col items-center justify-between">
          <div className="flex lg:flex-row md:flex-row flex-wrap items-center lg:gap-6 md:gap-6 gap-3 justify-start">
            {ORDER_STATUS.map((status) => (
              <span onClick={() => setFilter(status.value)} key={status.id} className={clsx(" hover:cursor-pointer",{
                "text-black": filter === status.value,
                "text-secondary_color": filter !== status.value
              })}>
                {status.name}
              </span>
            ))}
          </div>
          <button></button>
        </div>
      </div>
      <div className="w-full flex flex-col gap-5">
        <IndividualOrder orders={orderList || []}/>
      </div>
    </div>
  );
};
export default OrderLists;
