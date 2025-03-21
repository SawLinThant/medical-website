"use client"

import { useEffect, useState } from "react";
import ShopFilteredProducts from "../shop-filtered-product"
import { Shop } from "@/domain/entities/shop.entity";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { ShopService } from "@/lib/apolloClient/services/shop.service";
import { Skeleton } from "@/components/ui/skeleton";
import Image from "next/image";

interface ShopProfileProps {
    shopId: string;
  }

const ShopProfile:React.FC<ShopProfileProps> = ({shopId}) => {
    const [shop,setShop] = useState<Shop>();
    const [loading, setLoading] = useState<boolean>(true); 
    const shopService = new ShopService(serverApolloClient);
    useEffect(() => {
        const fetchShop = async () => {
            try {
                setLoading(true);
                const shopResponse = await shopService.getShopById({ id: shopId });
                if(shopResponse && shopResponse.shop){
                    setShop(shopResponse.shop)
                }             
              } catch (err: any) {
              } finally {
                setLoading(false);
              }
        }
        fetchShop();
    },[])
    console.log("shop-profile",shop)
    return(
        <section className="w-full  flex flex-col items-center">
            <div
            style={{
                backgroundImage: shop?.shop_images?.[0] ? `url(${shop.shop_images[0].image_url})` : 'none',
                backgroundSize: 'cover', 
                backgroundPosition: 'center', 
                backgroundRepeat: 'no-repeat', 
                backgroundColor: shop?.shop_images?.[0] ? 'transparent' : '#d1d5db', 
              }}
            className="w-full flex items-center justify-center h-[40vh] lg:min-h-[50vh] border bg-gray-300">
                <div className="w-full h-full lg:min-h-[50vh] flex flex-col justify-end max-w-[1300px] p-4">
                    <div className="lg:min-w-[18rem] lg:max-w-[25rem] md:min-w-[17rem] min-h-[5rem] rounded-lg border bg-white border-gray-300 mb-5 p-4">
                        <div className="w-full flex flex-row gap-4">
                            <div className="h-[4rem] w-[7rem] rounded-md border relative">
                                {loading? (<Skeleton className="h-full w-full"/>):(
                                    <Image layout="fill" alt="shop-image" src={shop?.logo || "/images/placeholder.jpg"} objectFit="contain"/>
                                )}
                            </div>
                            <div className="flex flex-col gap-1">
                                <span className="font-semibold">{shop?.name}</span>
                                <span className="text-muted-foreground text-sm"><strong>{shop?.products.length}</strong> Total Products</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full max-w-[1300px] pt-10">
                <ShopFilteredProducts shopId={shopId}/>
            </div>
        </section>
    )
}
export default ShopProfile