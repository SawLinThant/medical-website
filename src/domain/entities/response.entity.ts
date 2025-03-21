import { Shop } from "./shop.entity";
import { User } from "./users.entity";

export interface BaseResponse {
    success: boolean;
    message?: string;
  }
  
  export interface UserResponse extends BaseResponse {
    user?: User | null;
  }
  
  export interface UpdateUserResponse extends BaseResponse {
    user: User;
  }

  export interface BaseResponse {
    success: boolean;
    message?: string;
  }
  
  export interface ShopResponse extends BaseResponse {
    shop?: Shop | null;
  }