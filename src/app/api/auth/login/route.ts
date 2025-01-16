import { NextRequest, NextResponse } from "next/server";
import { getIronSession } from "iron-session";
import { IronSessionData, sessionOptions } from "@/lib/session";
import { handleLogin } from "@/lib/apolloClient/services/login";
import { jwtDecode, JwtPayload } from "jwt-decode";
import { cookies } from "next/headers";

interface CustomJwtPayload extends JwtPayload {
    user_id: string;
    role: string;
  }

export async function POST(req: NextRequest) {
  const { phone, password } = await req.json();
  const res = NextResponse.next();
  const session = await getIronSession<IronSessionData>(await cookies(), sessionOptions);
  try {
    const result = await handleLogin({ phone, password });
    const decodedToken = jwtDecode<CustomJwtPayload>(result.token)

    if (result.success) {
     try {
      session.user = {
        token: result.token,
        userId: decodedToken.user_id || "",
        role: decodedToken.role || "",
        isLoggedIn: true
      };
      await session.save();
    } catch (error) {
      console.error("Error saving session:", error);
    }

      return NextResponse.json({ success: true, message: "Login successful", token: result.token });
    } else {
      return NextResponse.json({ success: false, message: "Login failed" }, { status: 401 });
    }
  } catch (error) {
    console.error("Login API error:", error);
    return NextResponse.json({ success: false, message: "Internal server error" }, { status: 500 });
  }
}
