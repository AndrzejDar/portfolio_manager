"use client";

import React from "react";

import { UserButton, useUser } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import Link from "next/link";
import { Button } from "./ui/button";

const Navbar = () => {
  const { user } = useUser();

  return (
    <div className="flex items-center p-4 max-h-[64px]">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-2">
        {user && <UserButton afterSignOutUrl="/" />}
        {!user && (
          <>
            <Link href="/sign-in">
              <Button variant="accent">Login</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline">Register</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
