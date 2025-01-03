import CartItems from "@/modules/cart/cart-item-list";

export async function generateMetadata(){
    return {
        title: "Nat Say Myanmar - Cart",
        description:
          "Check",
        openGraph: {
          title: "Nat Say Myanmar - Products",
          description: "Check cart and prceed to checkout",
          url: `${
            process.env.NEXT_PUBLIC_BASE_URL || "http://localhost:3000"
          }/home`,
          images: "/images/logo.png",
        },
      };     
}

const Cart: React.FC = async () => {
    try{
      return(
        <div className="w-full flex flex-col items-center lg:min-h-72">
            <div className="w-full max-w-[1300px] mt-16">
             <CartItems/>
            </div>
        </div>
      )
    }catch(error){
        console.error("Error fetching data:", error);
        return <div>Error loading data</div>;
    }
  }

  export default Cart;