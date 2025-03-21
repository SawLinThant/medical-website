import { Product } from "./product.entity";

export interface ShopImage {
    image_url: string;
    shop_id: string;
  }
  
  export interface Brand {
    image_url: string;
    name: string;
    website_link?: string;
  }
  
  export interface Shop {
    id: string;
    phone: string;
    address: string;
    description: string;
    logo?: string;
    name: string;
    remark?: string;
    shop_admin_name: string;
    created_at: string;
    updated_at: string;
    category_id: string;
    shop_images: ShopImage[];
    brands: Brand[];
    products: Product[]
  }
