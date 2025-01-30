import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const getSessionData = async () => {
  if (typeof window === "undefined") {
    console.log("Skipping session fetch during build time.");
    return null;
  }
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
    const res = await fetch(`${baseUrl}/api/auth/session`, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    if (res.ok) {
      const data = await res.json();
      return data;
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error fetching session data:", error);
    return null;
  }
};

export const removeOrderSuccessData = async() => {
 // localStorage.removeItem("orderID");
  localStorage.removeItem("success");
  // localStorage.removeItem("paymentID");
  // localStorage.removeItem("BillingAddress");
  // localStorage.removeItem("DeliveryAddress");
  // localStorage.removeItem("ordered items");
};
