import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import { getFilteredProducts } from "@/lib/apolloClient/services/product";
import ItemNotFound from "@/modules/common/icons/item-not-found";
import ProductList from "@/modules/product/product-list";

interface IPageProps {
  searchParams: Promise<{
    category?: string;
    name?: string;
    offset?: string;
    sort?: string;
  }>;
}

const Products = async (searchParams: IPageProps) => {
  const itemPerPage = 15;
  //const { category, name, offset, sort } = await Promise.resolve(searchParams);
  const { category, name, offset, sort } = await searchParams.searchParams;
  console.log("search param category", category);
  const currentPage = Number(offset) / itemPerPage || 0;
  const page = Math.floor(currentPage) + 1;
  try {
    const where: Record<string, any> = {};
    const orderBy: Record<string, any> = { created_at: "desc" };

    if (category && category !== "all") {
      where.category_id = { _eq: category };
    }

    if (name) {
      where.name = { _ilike: `%${name}%` };
    }
    if (sort === "desc") {
      orderBy.price = "Highest to Lowest";
    } else if (sort === "Lowest to Highest") {
      orderBy.price = "asc";
    }

    const response = await getFilteredProducts(serverApolloClient, {
      where,
      offset: Number(offset) || 0,
      limit: itemPerPage,
      orderBy,
    });
    const totalPages = Math.ceil(response.count / itemPerPage);
    if (response.products.length < 1)
      return (
        <div className="w-full min-h28 flex items-center justify-center mt-14">
          {/* <h2 className="text-subheading text-red-400">No Product Found</h2> */}
          <ItemNotFound width="717" height="400"/>
        </div>
      );

    return (
      <section className="w-full h-full flex flex-col items-center">
        <div className="w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center">
          <ProductList
            name={name || ""}
            category={category ? response.products?.[0].category.name : ""}
            products={response.products}
            totalPages={totalPages}
            currentPage={page}
            itemPerPage={itemPerPage}
          />
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching product list", error);
    return <div>Error Loading Products</div>;
  }
};

export default Products;
