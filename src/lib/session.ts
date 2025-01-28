import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  password: process.env.IRON_SESSION_PASSWORD as string, 
  cookieName: "myapp_session",
  cookieOptions: {
    secure: process.env.NODE_ENV === "production", 
    httpOnly: true,
    sameSite: "lax", 
    maxAge: 14 * 24 * 60 * 60, 
  },
};

 export interface IronSessionData {
    user?: {
      token: string;
      userId: string;
      role: string;
      isLoggedIn: boolean
    };
  }

  export const defaultSession = {
    isLoggedIn: false,
  };

