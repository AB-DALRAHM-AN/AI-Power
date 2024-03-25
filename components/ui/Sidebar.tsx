"use client";

import Link from "next/link";
import Image from "next/image";
import { Montserrat } from "next/font/google";
import { cn } from "@/lib/utils";
import {
  Code,
  ImageIcon,
  LayoutDashboard,
  MessagesSquare,
  MusicIcon,
  Settings,
  VideoIcon,
} from "lucide-react";
import { usePathname } from "next/navigation";

const mostserrat = Montserrat({
  subsets: ["latin"],
  weight: "600",
});

const routes = [
  {
    name: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    name: "Conversation",
    icon: MessagesSquare,
    href: "/conversation",
    color: "text-pink-700",
  },
  {
    name: "Image Generation",
    icon: ImageIcon,
    href: "/image",
    color: "text-violet-500",
  },
  {
    name: "Video Generation",
    icon: VideoIcon,
    href: "/video",
    color: "text-orange-500",
  },
  {
    name: "Audio Generation",
    icon: MusicIcon,
    href: "/audio",
    color: "text-emerald-500",
  },
  {
    name: "Code Generation",
    icon: Code,
    href: "/code",
    color: "text-violet-500",
  },
  {
    name: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image src="/logo.png" fill alt="logo" />
          </div>
          <div>
            <h1 className={cn("text-2xl font-bold", mostserrat.className)}>
              Ai Dashboard
            </h1>
          </div>
        </Link>
        <div className="space-x-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.name}
              className={cn(
                "text-sm group flex p-3 w-full justify-start cursor-pointer font-medium hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href ? "bg-white/10" : ""
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.name}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
