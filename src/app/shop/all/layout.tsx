import Layout from "@/modules/layout/all-shop-layout";

export default function HomeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Layout>{children}</Layout>;
}
