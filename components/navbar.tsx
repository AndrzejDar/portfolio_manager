"use client";

import React from "react";

import { UserButton, useUser } from "@clerk/nextjs";
import MobileSidebar from "@/components/mobile-sidebar";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Button } from "./ui/button";
import LanguageToggle from "./language-toggle";

const Navbar = () => {
  const { user } = useUser();
  const { t } = useTranslation();

  return (
    <div className="flex items-center p-4 max-h-[64px]">
      <MobileSidebar />
      <div className="flex w-full justify-end gap-2">
        <div className="mr-2">
          <LanguageToggle />
        </div>
        {user && <UserButton afterSignOutUrl="/" />}
        {!user && (
          <>
            <Link href="/sign-in">
              <Button variant="accent">{t("common.login")}</Button>
            </Link>
            <Link href="/sign-up">
              <Button variant="outline">{t("common.register")}</Button>
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
