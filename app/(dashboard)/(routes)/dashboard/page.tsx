"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { MessageSquare, ArrowRight, ImageIcon, Music } from "lucide-react";
import { useRouter } from "next/navigation";
import { projects_data } from "../project_routes";

// const tools = [
//   {
//     label: "con",
//     icon: MessageSquare,
//     color: "text-violet-500",
//     bgColor: "bg-violet-500/10",
//     href: "/conversation",
//   },
//   {
//     label: "con2",
//     icon: Music,
//     color: "text-emerald-500",
//     bgColor: "bg-emerald-500/10",
//     href: "/con2",
//   },
//   {
//     label: "con3",
//     icon: ImageIcon,
//     color: "text-red-500",
//     bgColor: "bg-red-500/10",
//     href: "/con3",
//   },
// ];

export default function Home() {
  const router = useRouter();

  return (
    <div>
      <div className="mb-8 mx-10 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          My projects
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-justify">
          List of my exploration projects.
          <br />
          Each of these projects was undertaken with the goal of expanding my
          knowledge in specific field. Since this page serves as my playground,
          you can expect to find a variety of topics, ranging in refinement
          levels. Furthermore, all algorithm implementations featured here have
          been written entirely from scratch.
        </p>
      </div>
      <div className="px-4 md:px-20 lg:px-32 space-y-4">
        {projects_data
          .filter((el) => {
            return el.type === "project";
          })
          .map((project) => (
            <Card
              onClick={() => {
                !project.disabled && router.push(project.href);
              }}
              key={project.href}
              className={cn(
                "p-4 border-black/5 flex items-center justify-between  transition cursor-pointer",
                project.disabled
                  ? "cursor-default text-gray-400"
                  : "hover:shadow-md"
              )}
            >
              <div className="flex items-center gap-x-4">
                <div
                  className={cn(
                    "p-2 w-fit rounded-md",
                    project.disabled ? "bg-gray-200" : project.bgColor
                  )}
                >
                  <project.icon
                    className={cn(
                      "w-8 h-8",
                      project.disabled ? "gray-500" : project.color
                    )}
                  />
                </div>
                <div className="font-semibold">{project.label}</div>
              </div>
              <ArrowRight className="w-5 h-5" />
            </Card>
          ))}
      </div>
    </div>
  );
}
