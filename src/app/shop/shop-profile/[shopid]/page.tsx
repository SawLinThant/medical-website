import ShopProfile from "@/modules/shop/shop-profile";

type paramsType = Promise<{ shopid: string }>;

const ShopProfilePage = async (props: { params: paramsType }) => {
  const params = await props.params; 
  const { shopid } = params;
  try {
    return <main className="w-full flex flex-col items-center">
      <ShopProfile shopId={shopid}/>
    </main>;
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
};
export default ShopProfilePage
