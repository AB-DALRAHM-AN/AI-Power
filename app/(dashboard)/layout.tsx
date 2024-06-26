import { Navbar } from "@/components/ui/Navbar";
import Sidebar from "@/components/ui/Sidebar";


const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden md:w-72 h-full md:flex md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-800">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
