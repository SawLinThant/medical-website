import { Address } from "../entities/users.entity";

export interface GetUserByIdInput {
    id: string;
  }
  
  export interface UpdateUserInput {
    username?: string;
    email?: string;
    phone?: string;
    role?: string;
    shop_id?: string;
    password?: string;
    profile_url?: string;
    delivery_addresses?: Address[];
    billing_addresses?: Address[];
  }

  export interface GetShopByIdInput {
    id: string;
  }