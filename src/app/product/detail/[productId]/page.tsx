import { Button } from "@/components/ui/button";
import {
  GET_PRODUCT_BY_CATEGORY_ID,
  GET_PRODUCT_BY_ID,
} from "@/lib/apolloClient/query/productQuery";
import serverApolloClient from "@/lib/apolloClient/serverApolloClient";
import Star from "@/modules/common/icons/star";
import ProductDetailSkeleton from "@/modules/common/product-detail-skeleton";
import { ProductReel } from "@/modules/common/product-reel";
import Rating from "@/modules/common/rating";
import { ScrollText, ShoppingCart } from "lucide-react";
import Image from "next/image";



// interface ProductDetailProps {
//   {params}: { productId: string }; 
// }

type paramsType = Promise<{ productId: string }>;

const ProductDetail = async (props: { params: paramsType }) => {
  const { productId } = await props.params;
  console.log(productId);
  try {
    const { data } = await serverApolloClient.query({
      query: GET_PRODUCT_BY_ID,
      variables: { id: productId },
    });

    const product = data?.products?.[0];
    console.log(product);

    const { data: productsByCategory } = await serverApolloClient.query({
      query: GET_PRODUCT_BY_CATEGORY_ID,
      variables: { category_id: product.category.id || "" },
    });
    if(!product)return<ProductDetailSkeleton/>

    return (
      <section className="w-full h-full flex flex-col items-center">
        <div className="w-full max-w-[1300px] py-8 flex flex-col gap-4 items-center justify-center">
          <div className="w-full grid lg:gap-4 lg:grid-cols-5 md:grid-cols-5 grid-cols-1">
            <div className="col-span-2 flex flex-col gap-0 w-full md:max-h-[27rem] lg:max-h-[30rem]">
              <div className="relative w-full md:min-h-[17rem] lg:min-h-[20rem] h-[15rem]">
                <Image
                  layout="fill"
                  src={product.images[0].image_url}
                  alt="product-image"
                  className="lg:object-conain md:object-contain object-contain bg-white"
                />
              </div>
              <div className="w-full flex flow-row items-center lg:h-28 md:h-24 h-20 overflow-x-auto scrollbar-thin">
                {product
                  ? product.images.map((image: any) => (
                      <div
                        key={image.id}
                        className="relative h-full lg:w-[130px] md:w-[100px] w-[80px] flex-shrink-0"
                      >
                        <Image
                          src={image.image_url}
                          alt={`product-thumbnail-${image.id}`}
                          layout="fill"
                          objectFit="contain"
                          className="bg-white"
                        />
                      </div>
                    ))
                  : null}
              </div>
            </div>
            <div className="col-span-3 lg:p-4 md:p-3 py-3 px-0 lg:min-h-[35rem] flex flex-col gap-6">
              <div className="flex flex-row items-center gap-4">
                <h2 className="font-normal text-2xl">{product.name}</h2>
                <div className="rounded-md bg-secondary_color min-w-16 text-whit text-centere flex items-center justify-center">
                  <span className="text-xs py-1 px-2 text-white">
                    {product.category.name}
                  </span>
                </div>
              </div>
              <div className="min-h-6 flex lg:flex-row flex-col gap-6">
                <div className="flex flex-row gap-4 items-center">
                  <div className="flex flex-row items-center gap-1 min-w-[7rem]">
                    <Star height="20px" width="20px" color="#cfda31" />
                    <Star height="20px" width="20px" color="#cfda31" />
                    <Star height="20px" width="20px" color="#cfda31" />
                    <Star height="20px" width="20px" color="#cfda31" />
                    <Star height="20px" width="20px" color="gray" />
                  </div>
                  <span className="text-xs text-muted-foreground">
                    124 reviews
                  </span>
                </div>
                <div className="flex flex-row gap-2 items-center">
                  <ScrollText color="#796f6f" size={20} />
                  <span className="text-xs text-muted-foreground">
                    1k + orders
                  </span>
                </div>
              </div>
              <div className="flex flex-row gap-4 items-center">
                <h2 className="font-bold text-lg">
                  MMK {product.price.toLocaleString()}
                </h2>
                <div className="flex flex-row items-center gap-1">
                  <span className="text-lg text-muted-foreground">/</span>
                  <span className="text-xs text-muted-foreground">package</span>
                </div>
              </div>
              <div className="text-muted-foreground text-sm">
                <p>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Veniam tempore odit eaque tempora numquam sed sapiente
                  consequatur dolorum porro dignissimos, voluptates, reiciendis
                  beatae magnam doloribus ex, perferendis iste animi ipsa?
                </p>
              </div>
              <div className="flex flex-col gap-3 mt-3">
                <div className="flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10">
                  <div className="w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground">
                    Dosage
                  </div>
                  <div className="w-full h-full">
                    <span className="text-sm">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Aut, veniam consequuntur? Quis nisi magnam repellendus!
                      Voluptates amet est autem dolor, tempore nemo eaque
                      dolore, quas reiciendis non debitis, natus in.
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start rounded-md px-4 py-1">
                  <div className="w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground">
                    Usage
                  </div>
                  <div className="w-full h-full">
                    <span className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
                <div className="flex flex-row gap-4 items-start rounded-md px-4 py-1 bg-secondary_color/10">
                  <div className="w-20 max-w-20 h-6 text-sm flex items-center justify-start text-muted-foreground">
                    Storage
                  </div>
                  <div className="w-full h-full">
                    <span className="text-sm">
                      Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="text-muted-foreground text-xs">Quantity</span>
                <div className="flex flex-row flex-shrink-0 max-w-28 border items-center border-gray-400 rounded">
                  <Button
                    // onClick={handleDecrease}
                    // disabled={quantity === 1}
                    className="h-full w-1/3 rounded-r-none rounded-l bg-transparent border-r hover:bg-secondary_color hover:text-white text-black"
                  >
                    -
                  </Button>
                  <div className="w-1/3 h-full text-center flex items-center justify-center">
                    <span>1</span>
                  </div>
                  <Button
                    // onClick={handleIncrease}
                    // disabled={quantity >= product.product.quantity}
                    className="h-full w-1/3 bg-transparent rounded-l-none border-l text-black hover:bg-secondary_color hover:text-white rounded-r"
                  >
                    +
                  </Button>
                </div>
              </div>
              <div className="flex flex-row gap-3">
                <Button className="min-h-3 min-w-[7.5rem] rounded-md bg-transparent text-muted-foreground border border-secondary_color">
                  Buy Now
                </Button>
                <Button className="min-h-3 rounded-md bg-secondary_color text-white border border-secondary_color flex flex-row items-center">
                  <span>Add to cart</span>
                  <ShoppingCart size={20} />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3 mt-6">
            <h2 className="text-xl font-semibold">Product Details</h2>
            <p className="text-muted-foreground text-sm leading-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi,
              obcaecati quod dolore quas repudiandae accusamus suscipit ratione
              asperiores eius neque voluptatum sint nobis alias, autem in eaque
              est impedit excepturi. Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Eligendi, obcaecati quod dolore quas repudiandae
              accusamus suscipit ratione asperiores eius neque voluptatum sint
              nobis alias, autem in eaque est impedit excepturi.
            </p>
          </div>
          <div className="flex flex-col gap-4 mt-6 items-start w-full">
            <h2 className="text-xl font-semibold">Medication Sepcification</h2>
            <div className="flex flex-col gap-1 items-start text-left">
              <span className="text-xs text-muted-foreground">Brand</span>
              <span className="">No Brand</span>
            </div>
            <div className="flex flex-col gap-1 items-start text-left">
              <span className="text-xs text-muted-foreground">Age group</span>
              <span className="">No age group</span>
            </div>
            <div className="flex flex-col gap-1 items-start text-left">
              <span className="text-xs text-muted-foreground">SKU</span>
              <span className="">100011232_MM</span>
            </div>
            <div className="w-full mt-6">
              <Rating />
            </div>
            <div className="w-full h-6"></div>
            <ProductReel products={productsByCategory.products} />
          </div>
        </div>
      </section>
    );
  } catch (error) {
    console.error("Error fetching product data:", error);
    return <div>Error loading product details</div>;
  }
};
export default ProductDetail;
