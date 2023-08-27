import {
  LayoutDashboard,
  MessageSquare,
  ArrowRight,
  ImageIcon,
  Music,
  Settings,
} from "lucide-react";

export const projects_data = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "dashboard",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Portfolio Site",
    icon: MessageSquare,
    href: "portfolio_site",
    url: "https://anddar00.com/",
    gitUrl: "https://github.com/AndrzejDar/Portfolio",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    project_presentation: "iframe",
    title: "Portfolio site",
    descryption:
      "My previous portfolio site that uses Sanity CMS to poulate data. Created with React using only Framer-Motion libraty and SCSS for styling",
  },
  {
    label: "Chat GPT client",
    icon: MessageSquare,
    href: "/GPT_api",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    descryption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium atque voluptatibus. Consequuntur, rem voluptates accusantium consectetur magnam voluptatum? Et corporis atque odio. Distinctio, soluta dolorum. Tenetur ullam voluptates molestiae!",
  },
  {
    label: "Neural Network race",
    icon: MessageSquare,
    href: "/GPT_api2",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    descryption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium atque voluptatibus. Consequuntur, rem voluptates accusantium consectetur magnam voluptatum? Et corporis atque odio. Distinctio, soluta dolorum. Tenetur ullam voluptates molestiae!",
    disabled: "true",
  },
  {
    label: "Sorting Algos visualizer",
    icon: MessageSquare,
    href: "/GPT_api3",
    color: "text-sky-500",
    bgColor: "bg-red-500/10",
    type: "project",
    descryption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium atque voluptatibus. Consequuntur, rem voluptates accusantium consectetur magnam voluptatum? Et corporis atque odio. Distinctio, soluta dolorum. Tenetur ullam voluptates molestiae!",
    disabled: "true",
  },
  {
    label: "Pathfinding Game",
    icon: MessageSquare,
    href: "pathfinding_game",
    url: "OyBymuIpRDU",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    project_presentation: "youtube",
    title: "Prototypye of game in Unity (C#)",
    descryption:
      "Prototype af a game inspired by Rimworld. My primary objectives were to design and implement a robust building system and procedural behavior for pawns, creating a dynamic and 'lively' gameplay experience. The entire project was developed using Unity and programmed in C#. The main focus of the project became pathfinding A* algorithm able to handle up to 1000 characters.",
  },
  {
    label: "Architecture firm site",
    icon: MessageSquare,
    href: "akd",
    url: "https://akdarchitekci.pl/",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    project_presentation: "iframe",
    title: "AKD Architekci - architecture firm bussines site",
    descryption:
      "Page created with wordpress. Main goal was to create unique design and rank for few relewant keywords in google. As of 2022 page ranks as 3rd after 3 years without any updates.",
  },
  {
    label: "Crypto wallet scraper & visualizer",
    icon: MessageSquare,
    href: "/GPT_api4",
    color: "text-sky-500",
    bgColor: "bg-violet-500/10",
    type: "project",
    descryption:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium atque voluptatibus. Consequuntur, rem voluptates accusantium consectetur magnam voluptatum? Et corporis atque odio. Distinctio, soluta dolorum. Tenetur ullam voluptates molestiae!",
    disabled: "true",
  },
  // {
  //   label: "opt 2",
  //   icon: MessageSquare,
  //   href: "/code",
  //   color: "text-pink-700",
  // },
  {
    label: "User Settings",
    icon: Settings,
    href: "/settings",
  },
];
