import { GET_PRODUCTS } from "@/lib/apolloClient/query/productQuery";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { ImageCarousel } from "@/modules/common/carousel";
import CategoryFilter from "@/modules/common/category-filter";
import Footer from "@/modules/common/components/footer";
import { BestSeller } from "@/modules/filters/best-seller";
import { BrowseByBrand } from "@/modules/filters/brand-filter";
import { BrowseByCategory } from "@/modules/filters/category-filter";
import { TopSaver } from "@/modules/filters/top-saver";
import Image from "next/image";
import React from "react";


const HomePage: React.FC = async() => {
    const {data} = await serverApolloClient.query({query:GET_PRODUCTS});
  return (
    <div className="w-full flex flex-col items-center gap-4">
      <div className="w-full max-w-[1300px] lg:block md:block hidden">
        <CategoryFilter />
      </div>
      <div className="w-full min-h-40 bg-slate-100 flex items-center justify-center p-4">
        <div className="w-full max-w-[1300px] grid lg:grid-cols-5 md:grid-cols-5 grid-cols-1 gap-6 py-6">
          <div className="lg:col-span-3 md:col-span-3 col-span-1 min-h-[10rem] rounded-md overflow-hidden border">
            <ImageCarousel />
          </div>
          <div className="relative lg:col-span-2 md:col-span-2 col-span-1 w-full lg:h-[20rem] md:h-[15rem] h-[13rem]">
            <Image
              className="object-cover"
              layout="fill"
              alt="ad"
              src="/images/banner3.jpg"
            />
          </div>
        </div>
      </div>
      <div className="w-full mt-16 max-w-[1300px]">
        <BrowseByCategory />
      </div>
      <div className="w-full max-w-[1300px] mt-10 ">
        <BrowseByBrand />
      </div>
      <div className="w-full max-w-[1300px] mt-10 flex lg:flex-row md:flex-col gap-1">
        <div className="lg:w-[75%] md:w-full w-full">
          <TopSaver />
        </div>
        <div className="lg:w-[1/4] md:w-2/4 w-full"></div>
      </div>
      <div className="w-full max-w-[1300px] mt-10 ">
        <BestSeller products={data?.products}/>
      </div>
      <div className="w-full">
        <Footer/>
      </div>
    </div>
  );
};

export default HomePage;
