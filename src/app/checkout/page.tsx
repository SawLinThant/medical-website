import CheckoutForm from "@/modules/checkout";

const Checkout: React.FC = async () => {
    try{
        return(
          <section className="w-full flex flex-col items-center lg:min-h-72">
              <div className="w-full max-w-[1300px] lg:mt-16 md:mt-16 mt-4">
                <CheckoutForm/>
              </div>
          </section>
        )
      }catch(error){
          console.error("Error fetching data:", error);
          return <div>Error loading data</div>;
      }
}

export default Checkout;