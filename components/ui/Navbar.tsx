import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/ui/mobileSidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex items-center space-x-4 justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
