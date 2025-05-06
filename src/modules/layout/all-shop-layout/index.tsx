import Footer from "@/modules/common/components/footer";
import NavBar from "@/modules/common/components/navbar";
import MobileNav from "@/modules/common/mobile-nav";
import { LayoutWithChildren } from "@/types/utils";
import Image from "next/image";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <div className="w-full flex flex-col overflow-hidden bg-slate-100">
      <NavBar />
      <MobileNav/>
      <section className="w-full min-h-[40vh] bg-[url('/images/banner.jpg')] bg-cover bg-center flex items-center justify-center">
         <Image
          width={400}
          height={400}
          src="/images/banner-logo.png"
          alt="logo"
            className="object-contain"
         />
      </section>
      <main className="w-full flex items-center justify-center px-4 pb-0 bg-slate-100">
        <div className="container mx-auto flex flex-col min-h-[55vh]">
          {children}
        </div>
      </main>
      <div className="w-full mt-6">
          <Footer />
        </div>
    </div>
  );
};
export default Layout;
