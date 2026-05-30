"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import { useTranslation } from "react-i18next";
import { projects_data } from "../project_routes";

export default function Home() {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <div>
      <div className="mb-8 mx-10 space-y-4">
        <h2 className="text-2xl md:text-4xl font-bold text-center">
          {t("dashboard.title")}
        </h2>
        <p className="text-muted-foreground font-light text-sm md:text-lg text-justify">
          {t("dashboard.description")}
          <br />
          <br />
          {t("dashboard.intro")}
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
