import ShopLayout from "@/modules/layout/shop-profile-layout";


export default function Shop({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <ShopLayout>{children}</ShopLayout>;
  }