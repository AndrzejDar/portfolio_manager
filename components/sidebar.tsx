"use client";

import { usePathname } from "next/navigation";
import { Montserrat } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { projects_data as routes } from "@/app/(dashboard)/(routes)/project_routes";

import { cn } from "@/lib/utils";
import { LayoutDashboard, MessageSquare, Settings } from "lucide-react";

const montserrat = Montserrat({ weight: "600", subsets: ["latin"] });

// const routes = [
//   {
//     label: "Dashboard",
//     icon: LayoutDashboard,
//     href: "/dashboard",
//     color: "text-sky-500",
//   },
//   {
//     label: "Portfolio Site",
//     icon: MessageSquare,
//     href: "/portfolio_site",
//     color: "text-sky-500",
//   },
//   {
//     label: "Chat GPT client",
//     icon: MessageSquare,
//     href: "/GPT_api",
//     color: "text-sky-500",
//   },
//   {
//     label: "Neural Network race",
//     icon: MessageSquare,
//     href: "/GPT_api",
//     color: "text-sky-500",
//   },
//   {
//     label: "Sorting Algos visualizer",
//     icon: MessageSquare,
//     href: "/GPT_api",
//     color: "text-sky-500",
//   },
//   {
//     label: "Pathfinding Game",
//     icon: MessageSquare,
//     href: "/GPT_api",
//     color: "text-sky-500",
//   },
//   {
//     label: "Crypto wallet scraper & visualizer",
//     icon: MessageSquare,
//     href: "/GPT_api",
//     color: "text-sky-500",
//   },
//   {
//     label: "opt 2",
//     icon: MessageSquare,
//     href: "/code",
//     color: "text-pink-700",
//   },
//   {
//     label: "Settings",
//     icon: Settings,
//     href: "/settings",
//   },
// ];

const Sidebar = () => {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-4 mb-14">
          <div className="relative w-8 h-8 mr-4">
            <Image fill alt="logo" src="/logo.png" />
          </div>
          <h1 className={cn("text-2xl font-bold", montserrat.className)}>
            AD dashboard
          </h1>
        </Link>
        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                " text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/20"
                  : "text-zinc-400",
                route.disabled && "text-gray-700"
              )}
            >
              <div className="flex items-center">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
