import Layout from "@/modules/layout/mainLayout";

export default function ProfileLayout({
    children,
  }: {
    children: React.ReactNode;
  }) {
    return <Layout>{children}</Layout>;
  }