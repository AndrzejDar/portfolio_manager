"use client";

import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { projects_data } from "../project_routes";

export default function Home() {
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
          .map((project) => {
            const slug = project.href.replace(/^\//, "");
            const label = t(`projects.${slug}.label`, {
              defaultValue: project.label,
            });

            const inner = (
              <>
                <div className="flex items-center gap-x-4">
                  <div
                    className={cn(
                      "p-2 w-fit rounded-md",
                      project.disabled ? "bg-gray-200" : project.bgColor
                    )}
                  >
                    <project.icon
                      aria-hidden="true"
                      className={cn(
                        "w-8 h-8",
                        project.disabled ? "gray-500" : project.color
                      )}
                    />
                  </div>
                  <div className="font-semibold">{label}</div>
                </div>
                <ArrowRight aria-hidden="true" className="w-5 h-5" />
              </>
            );

            if (project.disabled) {
              return (
                <Card
                  key={project.href}
                  aria-disabled="true"
                  className={cn(
                    "p-4 border-black/5 flex items-center justify-between cursor-default text-gray-500"
                  )}
                >
                  {inner}
                </Card>
              );
            }

            return (
              <Link
                key={project.href}
                href={project.href}
                aria-label={label}
                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-black rounded-lg"
              >
                <Card
                  className={cn(
                    "p-4 border-black/5 flex items-center justify-between transition cursor-pointer hover:shadow-md"
                  )}
                >
                  {inner}
                </Card>
              </Link>
            );
          })}
      </div>
    </div>
  );
}
