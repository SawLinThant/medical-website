import { GET_SHOPS } from "@/lib/apolloClient/query/shopQuery";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import ShopCard from "@/modules/common/components/shop-card";

const HomePage: React.FC = async () => {
  try {
    const { data: shops } = await serverApolloClient.query({
      query: GET_SHOPS,
      fetchPolicy: "no-cache"
    });

    return (
      <main className="w-full flex flex-col items-center py-8 px-4">
        <div className="w-full max-w-[1300px]">
          <h1 className="text-2xl font-bold mb-6">Featured Shops</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {shops?.shops?.map((shop: any) => (
              <ShopCard
                key={shop.id}
                id={shop.id}
                name={shop.name}
                description={shop.description}
                logo={shop.logo || "/images/placeholder.png"}
              />
            ))}
          </div>
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching data:", error);
    return <div>Error loading data</div>;
  }
};

export default HomePage;