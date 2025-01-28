import Layout from "@/modules/layout/mainLayout";

export default function HomeLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }
  