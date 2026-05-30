"use client";
import React, { useState } from "react";
import { projects_data, type Project } from "@/app/(dashboard)/(routes)/project_routes";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Code2, FileSymlink } from "lucide-react";
import YtPlayer from "@/components/yt-player";
import { useTranslation } from "react-i18next";

const Page = ({ params }: { params: { slug: string } }) => {
  const [open, setOpen] = useState<boolean | undefined>(true);
  const { t } = useTranslation();
  const data: Project | undefined = projects_data.find(
    (el) => el.href === `/${params.slug}`
  );

  if (!data?.title) {
    return (
      <>
        <div>{t("project.notFound")}</div>
      </>
    );
  }

  return (
    <>
      <div className="w-full h-[calc(100vh-64px)] modal-container relative">
        <div className="absolute right-[30px] bottom-[15px] ">
          <Dialog
            modal={false}
            open={open}
            onOpenChange={() => setOpen((prev) => !prev)}
          >
            <DialogTrigger asChild>
              <Button variant="accent" className="shadow-2xl">
                {t("project.descriptionButton")}
              </Button>
            </DialogTrigger>
            <DialogContent className="md:max-w-[800px] sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>
                  {t(`projects.${data.href.replace(/^\//, "")}.title`, { defaultValue: data.title ?? "" })}
                </DialogTitle>
                <DialogDescription
                  dangerouslySetInnerHTML={{
                    __html: t(`projects.${data.href.replace(/^\//, "")}.description`, {
                      defaultValue: data.description ?? "",
                    }),
                  }}
                ></DialogDescription>
              </DialogHeader>
              {/* content goes here */}
              <DialogFooter>
                {data.gitUrl && (
                  <Button type="button" variant="accent" asChild>
                    <Link
                      href={data.gitUrl}
                      aria-label={t("project.openSource", { defaultValue: "Open source code" })}
                    >
                      <Code2 className="h-5 w-5 text-white" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
                {data.url && (
                  <Button type="button" variant="accent" asChild>
                    <Link
                      href={data.url}
                      aria-label={t("project.openExternal", { defaultValue: "Open project link" })}
                    >
                      <FileSymlink className="h-5 w-5 text-white" aria-hidden="true" />
                    </Link>
                  </Button>
                )}
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </div>
        {data.project_presentation === "iframe" && (
          <iframe
            className="w-full h-full"
            src={data.url}
            title={t(`projects.${data.href.replace(/^\//, "")}.title`, {
              defaultValue: data.title || data.label || "Project preview",
            })}
            id="iframe"
          ></iframe>
        )}
        {data.project_presentation === "youtube" && data.url && (
          <YtPlayer url={data.url} />
        )}
      </div>
    </>
  );
};

export default Page;
