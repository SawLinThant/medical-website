import { SessionOptions } from "iron-session";

export const sessionOptions: SessionOptions = {
  password: "noOneisyourSoul##$04034Saw973854868#dsoesldgl09mm34esgsfg6FFew4", 
  cookieName: "myapp_session",
  cookieOptions: {
<<<<<<< HEAD
   secure: process.env.NODE_ENV === "production", 
   httpOnly: true,
=======
 secure: process.env.NODE_ENV === "production", 
 httpOnly: true,
>>>>>>> ef3a8b8512644c12d329d0177d0f697e244c4c05
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

