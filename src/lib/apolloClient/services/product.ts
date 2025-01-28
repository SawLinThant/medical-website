export interface Product {
  id: string;
  name: string;
  images: ProductImage[]
}

export interface ProductImage {
  id: string;
  image_url: string;
}
