import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import ApolloProviderWrapper from "@/lib/apolloClient/apolloWrapper";
//import { AccountProvider } from "@/lib/context/account-context";
import StoreProvider from "./StoreProvider";
import { Toaster } from "@/components/ui/toaster";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Nat Say Myanmar - Shop Smart",
  description: "Discover the best deals on top medical products from trusted brands.",
  openGraph: {
    title: "Nat Say Myanmar - Your Online Shopping Destination",
    description: "Find exclusive offers and great deals on medical products!",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/home`,
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_BASE_URL}/images/logo.png`,
        width: 1200,
        height: 630,
        alt: "Nat Say Myanmar Banner",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Nat Say Myanmar - Shop Smart",
    description: "Find exclusive offers and great deals on medical products!",
    // images: [
    //   `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/logo.png`,
    // ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Toaster/>
        <ApolloProviderWrapper>
          <StoreProvider>{children}</StoreProvider>
        </ApolloProviderWrapper>
      </body>
    </html>
  );
}
