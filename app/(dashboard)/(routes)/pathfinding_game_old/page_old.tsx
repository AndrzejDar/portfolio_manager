import { Button } from "@/components/ui/button";
import { Code2, FileSymlink } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import React from "react";
import Link from "next/link";
import { projects_data as routes } from "@/app/(dashboard)/(routes)/project_routes";

const page = () => {
  return (
    <div className="w-full h-[calc(100vh-64px)] modal-container relative">
      <div className="absolute right-0 bottom-0 ">
        <Dialog modal={false}>
          <DialogTrigger asChild>
            <Button variant="outline">Description</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Portfolio site</DialogTitle>
              <DialogDescription>
                Personal site that uses Sanity CMS to poulate data. Created wit
                pure React and Scss
              </DialogDescription>
            </DialogHeader>
            {/* content goes here */}
            <DialogFooter>
              <Button type="submit" className="bg-gray-500">
                <Link href="https://github.com/AndrzejDar/Portfolio">
                  <Code2 className="h-5 w-5 text-white" />
                </Link>
              </Button>
              <Button type="submit" className="bg-gray-500">
                <Link href="https://anddar00.com/">
                  <FileSymlink className="h-5 w-5 text-white" />
                </Link>
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>
      <iframe
        className="w-full h-full"
        src="https://anddar00.com/"
        title="My previous portfolio site"
      ></iframe>
    </div>
  );
};

export default page;
