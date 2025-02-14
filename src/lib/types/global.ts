export interface Shop {
  id: string;
  name: string;
  logo: string;
  description: string;
  address: string;
  phone: string;
  remark: string;
  shop_admin_name: string;
}

export interface ProductCategory {
  id: string;
  name: string;
}

export interface ProductImage {
  id: string;
  image_url: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  bulk_price?: number;
  quantity: number;
  description?: string;
  shop?: Shop;
  category?: ProductCategory;
  images?: ProductImage[];
}

export interface ProductDropdown {
    id: string;
    name: string;
  }

export interface Brand {
  id: string;
  name: string;
  image_url: string;
  website_link: string;
}

export interface CategoryImage {
  id: string;
  name: string;
  image_url: string;
}

export interface CheckoutAddress {
  firstname: string;
  lastname: string;
  province: string;
  zone: string;
  address: string;
  phone: string;
  email: string;
}

export interface StockHistory {
  id: string;
  shop_id: string;
  type: string;
  reason: string;
  product_id: string;
}
