import { GET_BRANDS } from "@/lib/apolloClient/query/brandQuery";
import { GET_CATEGORY_IMAGE } from "@/lib/apolloClient/query/categoryQuery";
import {
  GET_BEST_SELLER_PRODUCTS,
  GET_PRODUCTS,
  GET_TOP_SAVER_PRODUCTS,
} from "@/lib/apolloClient/query/productQuery";
import { GET_SHOPS } from "@/lib/apolloClient/query/shopQuery";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { CategoryList } from "@/modules/category";
import { ImageCarousel } from "@/modules/common/carousel";
//import CategoryFilter from "@/modules/common/category-filter";
import Footer from "@/modules/common/components/footer";
import Subscribe from "@/modules/common/subscribe";
import { BestSeller } from "@/modules/filters/best-seller";
import { BrowseByBrand } from "@/modules/filters/brand-filter";
import { BrowseByCategory } from "@/modules/filters/category-filter";
import { TopSaver } from "@/modules/filters/top-saver";
import Image from "next/image";
import React from "react";

export async function generateMetadata() {
  return {
    title: "Nat Say Myanmar - Home",
    description:
      "Explore our wide range of products and brands. Find great deals and save big!",
    openGraph: {
      title: "Nat Say Myanmar - Home",
      description: "Find great deals on top products and brands.",
      // url: `${
      //   process.env.NEXT_PUBLIC_BASE_URL || "http://192.168.91.70:3000"
      // }/home`,
      images: "/images/logo.png",
    },
  };
}

const HomePage: React.FC = async () => {
  const today = new Date().toISOString().split("T")[0] + "T23:59:59Z";
  try {
    const { data: productsData } = await serverApolloClient.query({
      query: GET_BEST_SELLER_PRODUCTS,
      variables:{today},
      fetchPolicy:"no-cache"
    });
    const { data: topSaverData } = await serverApolloClient.query({
      query: GET_TOP_SAVER_PRODUCTS,
      variables:{today},
      fetchPolicy:"no-cache"
    });
    // const { data: categoryData } = await serverApolloClient.query({ query: GET_CATEGORY });
    const { data: categoryImageData } = await serverApolloClient.query({
      query: GET_CATEGORY_IMAGE,
      fetchPolicy:"no-cache"
    });
    const { data: brandData } = await serverApolloClient.query({
      query: GET_BRANDS,
      fetchPolicy:"no-cache"
    });
    const { data: shops } = await serverApolloClient.query({
      query: GET_SHOPS,
      fetchPolicy:"no-cache"
    });

    return (
      <main className="w-full flex flex-col items-center">
        {/* <div className="w-full max-w-[1300px] lg:block md:block hidden">
          <CategoryFilter />
        </div> */}
        <div className="w-full bg-slate-100 flex items-center justify-center p-4">
          <div className="w-full max-w-[1300px] gap-6 py-6">
            <div className="w-full min-h-[10rem] rounded-md grid md:grid-cols-5 lg:grid-cols-5 grid-cols-1 gap-1">
              <div className="relative order-2 md:order-1 lg:col-span-2 md:col-span-2 col-span-1 grid-cols-2 lg:min-h-[20rem] md:min-h-[15rem] min-h-[13rem]">
                <CategoryList categories={categoryImageData?.categories}/>
              </div>
             <div className="order-1 md:order-2 lg:col-span-3 md:col-span-3 col-span-1">
              <ImageCarousel/>
              </div> 
            </div>
          </div>
        </div>
        {/* <div className="w-full mt-16 max-w-[1300px] flex items-center justify-center">
          <BrowseByCategory category={categoryImageData?.categories} />
        </div> */}
        <div className="w-full max-w-[1300px] mt-6">
          <BrowseByBrand brands={shops?.shops} />
        </div>
        <div id="top-saver-section" className="w-full max-w-[1300px] mt-20 flex lg:flex-row md:flex-col flex-col gap-4 lg:justify-between">
          <div className="lg:w-full md:w-full w-full">
            <TopSaver products={topSaverData?.products} />
          </div>
          {/* <div className="lg:w-[1/4] lg:max-w-[21rem] lg:flex w-full md:flex md:items-center lg:justify-start md:justify-center">
            <Subscribe />
          </div> */}
        </div>

        <div className="w-full max-w-[1300px] mt-16">
          <BestSeller products={productsData?.products} />
        </div>

      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
};

export default HomePage;
