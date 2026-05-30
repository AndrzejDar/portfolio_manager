"use client";

import React, { useState, useEffect } from "react";

import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "./sidebar";
import { useTranslation } from "react-i18next";

const MobileSidebar = () => {
  const [isMounted, setIsMounted] = useState(false);
  const { t } = useTranslation();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet>
      <SheetTrigger
        aria-label={t("common.openMenu", { defaultValue: "Open navigation menu" })}
        className="md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-black/40 rounded"
      >
        <Menu aria-hidden="true" />
      </SheetTrigger>
      <SheetContent side="left" className="p-0">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
