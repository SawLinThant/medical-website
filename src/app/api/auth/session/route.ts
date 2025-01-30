
import { defaultSession, IronSessionData, sessionOptions } from "@/lib/session";
import { getIronSession } from "iron-session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const session = await getIronSession<IronSessionData>(await cookies(), sessionOptions);

    if (session.user) {
      return NextResponse.json({
        userId: session.user.userId,
        role: session.user.role,
        token: session.user.token,
        isLoggedIn: session.user.isLoggedIn,
      });
    } else {
      return NextResponse.json({ message: "No session found", token: null });
    }
  } catch (error) {
    console.error("Error while retrieving session:", error);
    return NextResponse.json({ message: "Internal Server Error", token: null }, { status: 500 });
  }
}

export async function DELETE(req: NextRequest) {
  const res = NextResponse.next();

  try {
    console.log(sessionOptions.password)
    const session = await getIronSession<IronSessionData>(await cookies(), sessionOptions);
    session.destroy();
    res.headers.set(
      "Set-Cookie",
      "session=; Path=/; HttpOnly; Secure; SameSite=Strict; Expires=Thu, 01 Jan 1970 00:00:00 GMT"
    );

    return NextResponse.json(
      { success: true, message: "Logged out successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error during logout:", error);
    return NextResponse.json(
      { success: false, message: "Logout failed" },
      { status: 500 }
    );
  }
}
