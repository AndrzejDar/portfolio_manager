"use client";
import React, { useState } from "react";
import { projects_data } from "@/app/(dashboard)/(routes)/project_routes";
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

const Page = ({ params }: { params: { slug: string } }) => {
  const [open, setOpen] = useState<boolean | undefined>(true);
  const data: any = projects_data.filter((el) => {
    return el.href === params.slug;
  })[0];

  if (!data?.title) {
    return (
      <>
        {console.log(data)}
        <div>Taki projekt nie istnieje</div>
      </>
    );
  }

  return (
    <>
      {console.log(data)}
      <div className="w-full h-[calc(100vh-64px)] modal-container relative">
        <div className="absolute right-[30px] bottom-[15px] ">
          <Dialog
            modal={false}
            open={open}
            onOpenChange={() => setOpen((prev) => !prev)}
          >
            <DialogTrigger asChild>
              <Button variant="accent" className="shadow-2xl">
                Project Description
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
              <DialogHeader>
                <DialogTitle>{data.title}</DialogTitle>
                <DialogDescription>{data.descryption}</DialogDescription>
              </DialogHeader>
              {/* content goes here */}
              <DialogFooter>
                {data.gitUrl && (
                  <Button type="submit" variant="accent">
                    <Link href={data.gitUrl}>
                      <Code2 className="h-5 w-5 text-white" />
                    </Link>
                  </Button>
                )}
                {data.url && (
                  <Button type="submit" variant="accent">
                    <Link href={data.url}>
                      <FileSymlink className="h-5 w-5 text-white" />
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
            title={data.title}
            id="iframe"
          ></iframe>
        )}
        {data.project_presentation === "youtube" && <YtPlayer url={data.url} />}
      </div>
    </>
  );
};

export default Page;
