import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "@/components/ui/mobileSidebar";

export const Navbar = () => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex w-full justify-end space-x-4 items-center">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};
