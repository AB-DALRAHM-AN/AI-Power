"use client";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";

import { useRouter } from "next/navigation";

import {
  MessageSquare,
  ArrowRight,
  ImageIcon,
  VideoIcon,
  Code,
  MusicIcon,
  SettingsIcon,
} from "lucide-react";

const tools = [
  {
    name: "Conversation",
    icon: MessageSquare,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/conversation",
  },
  {
    name: "Image Generation",
    icon: ImageIcon,
    color: "text-orange-500",
    bgColor: "bg-orange-500/10",
    href: "/image",
  },
  {
    name: "Video Generation",
    icon: VideoIcon,
    color: "text-emerald-500",
    bgColor: "bg-emerald-500/10",
    href: "/video",
  },
  {
    name: "Audio Generation",
    icon: MusicIcon,
    color: "text-sky-500",
    bgColor: "bg-sky-500/10",
    href: "/audio",
  },
  {
    name: "Code Generation",
    icon: Code,
    color: "text-pink-500",
    bgColor: "bg-pink-500/10",
    href: "/code",
  },
  {
    name: "Settings",
    icon: SettingsIcon,
    color: "text-violet-500",
    bgColor: "bg-violet-500/10",
    href: "/settings",
  },
];

const DashboardPage = () => {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          Explore The Power Of Ai
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-center">
          chat with the smartest Ai - Explore the power of Ai
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {tools.map((tool) => (
          <Card
            onClick={() => {
              router.push(tool.href);
            }}
            key={tool.name}
            className="p-4 justify-between flex items-center border-black/5 hover:shadow-md transition cursor-pointer"
          >
            <div className="flex items-center gap-x-4">
              <div className={cn("p-2 w-fit rounded-md", tool.bgColor)}>
                <tool.icon className={cn("h-8 w-8", tool.color)} />
              </div>
              <div className="font-semibold">{tool.name}</div>
            </div>
            <div className="flex items-center">
              <ArrowRight className="h-5 w-5" />
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
