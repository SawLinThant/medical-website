export interface Address {
    address: string;
    province: string;
    zone: string;
  }
  
  export interface User {
    id: string;
    username: string;
    email: string;
    phone: string;
    role: string;
    shop_id?: string;
    password: string;
    created_at: string;
    updated_at: string;
    profile_url?: string;
    delivery_addresses: Address[];
    billing_addresses: Address[];
  }