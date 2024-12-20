import NavBar from "@/modules/common/components/navbar";
import { LayoutWithChildren } from "@/types/utils";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <div className="w-screen flex flex-col">
      <NavBar />
      <main className="w-full flex items-center justify-center">
        <div className="w-4/5 max-w-[1300px] flex flex-col min-h-32 border">
          {children}
        </div>
      </main>
    </div>
  );
};
export default Layout;
