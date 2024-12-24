import NavBar from "@/modules/common/components/navbar";
import { LayoutWithChildren } from "@/types/utils";

const Layout: LayoutWithChildren = ({ children }) => {
  return (
    <div className="w-full flex flex-col overflow-hidden">
      <NavBar />
      <main className="w-full flex items-center justify-center p-4 pb-0 bg-slate-100">
        <div className="w-full flex flex-col min-h-32 ">
          {children}
        </div>
      </main>
    </div>
  );
};
export default Layout;
