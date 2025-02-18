import { SessionOptions } from "iron-session";
console.log(process.env.NODE_ENV === "production");
export const sessionOptions: SessionOptions = {
  password: "noOneisyourSoul##$04034Saw973854868#dsoesldgl09mm34esgsfg6FFew4", 
  cookieName: "myapp_session",
  cookieOptions: {
 secure: true, 
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

