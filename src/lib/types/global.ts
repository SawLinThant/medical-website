export interface Shop {
    id: string
    name: string
    logo: string
    description: string
    address: string
    phone: string
    remark: string
    shop_admin_name: string
}

export interface ProductCategory{
    id: string
    name: string
}

export interface ProductImage{
    id: string
    image_url: string
}

export interface Product {
    id: string
    name: string
    price: number
    bulk_price?: number
    quantity: number
    description?: string
    shop?: Shop
    category?: ProductCategory
    images?: ProductImage[]
}