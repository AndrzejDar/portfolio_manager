import {
  LayoutDashboard,
  MessageSquare,
  ArrowRight,
  ImageIcon,
  Music,
  ArrowUpWideNarrow,
  Baby,
  RollerCoaster,
  Settings,
  Option,
  FileImage,
  LineChart,
  Archive,
  BoxIcon,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Project {
  label: string;
  icon: LucideIcon;
  href: string;
  url?: string;
  gitUrl?: string;
  color?: string;
  bgColor?: string;
  type?: "project";
  project_presentation?: "youtube" | "iframe";
  title?: string;
  description?: string;
  disabled?: boolean;
}

export const projects_data: Project[] = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
    color: "text-yellow-500",
    bgColor: "bg-violet-500/10",
  },
  {
    label: "Virtual warehouse Manager",
    icon: Archive,
    href: "/virtual_warehouse",
    url: "Y_Bc0FgejFM",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "youtube",
    title: "Virtual warehouse Manager",
    description:
      "Web app for managing virtual store and handling deliveries of digital products. Created with React, Tailwind, EP(Redux), ReactQuery. Application allows creating customers entities, adding products to storage, manage orders and deliveries, handle invoices.",
  },
  {
    label: "Portfolio Site",
    icon: Baby,
    href: "/portfolio_site",
    url: "https://anddar00.com/",
    gitUrl: "https://github.com/AndrzejDar/Portfolio",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "iframe",
    title: "Portfolio site",
    description:
      "My previous portfolio site that uses Sanity CMS to populate data. Created with React, using only Framer-Motion library and SCSS for styling",
  },
  {
    label: "Project Manager",
    icon: BoxIcon,
    href: "/project_manager",
    url: "l1GxAkwUEPM",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "youtube",
    title: "Project Manager",
    description:
      "Project management system designed for users to customize, tag and organize their projects created with external API. With full user account management. Created using Next, React Query, shadcn/ui",
  },

  {
    label: "Neural Network race",
    icon: RollerCoaster,
    href: "/nn_racer",
    url: "./nn_racer_src/index.html",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "iframe",
    title: "Neural Network car simulation",
    description:
      "Project visualizes implementation of evolutionary Neural Network, depicted as 'race'. Implemented in pure JS <br/><br/> Firstly, 1000 random agents are spawn, simulated and rated by their performance. Agents are sorted by their results. First 1% is copied to the next generation without modification (marked as green), rest is composed from randomly (weighted by performance score) selected two parents. Half of genome comes from one parent, the other half from the other. Then some random mutation is applied. This next population restarts simulation, rating and propagation cycle indefinitely. <br/><br/>  Obstacles on the course are generated randomly to avoid overfitting to one scenario. Course is getting progresively harder. <br/><br/>  Each agent has the ability to increase or decrease its speed, turn left or right (4 outputs on NN). It also has limited number of sensors which detects objects nearby (inputs of NN)",
  },
  {
    label: "Sorting Algos visualizer",
    icon: ArrowUpWideNarrow,
    href: "/GPT_api3",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti praesentium atque voluptatibus. Consequuntur, rem voluptates accusantium consectetur magnam voluptatum? Et corporis atque odio. Distinctio, soluta dolorum. Tenetur ullam voluptates molestiae!",
    disabled: true,
  },
  {
    label: "Pathfinding Game",
    icon: Option,
    href: "/pathfinding_game",
    url: "OyBymuIpRDU",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "youtube",
    title: "Prototype of game in Unity (C#)",
    description:
      "Prototype of a game inspired by Rimworld. My primary objectives were to design and implement a robust building system and procedural behavior for pawns, creating a dynamic and 'lively' gameplay experience. The entire project was developed using Unity and programmed in C#. The main focus of the project became pathfinding A* algorithm able to handle up to 1000 characters.",
  },
  {
    label: "Architecture firm site",
    icon: FileImage,
    href: "/akd",
    url: "https://akdarchitekci.pl/",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "iframe",
    title: "AKD Architekci - architecture firm business site",
    description:
      "Page created with wordpress. Main goal was to create unique design and rank for few relewant keywords in google. As of 2022 page ranks as 3rd after 3 years without any updates.",
  },
  {
    label: "Chat GPT client",
    icon: MessageSquare,
    href: "/GPT_api",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    description:
      "Simple chatGpt client implementation. Due to Api limitation You need to bo logged in to use it!",
  },
  {
    label: "Crypto wallet scraper & visualizer",
    icon: LineChart,
    href: "/scraper",
    url: "https://afternoon-fjord-11259.herokuapp.com/",
    color: "text-sky-500",
    bgColor: "bg-yellow-500/40",
    type: "project",
    project_presentation: "iframe",
    title: "BTC wallet transaction visualizer",
    description:
      "App that scrapes transaction data from provided BTC wallet address. Data is presented on graph and some numerical parameters are provided. <br/><br/> App was built using MERN stack: MongoDB, Express, React and Node. <br/><br/> Live demo retired (Heroku free tier sunset, November 2022).",
    disabled: true,
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
