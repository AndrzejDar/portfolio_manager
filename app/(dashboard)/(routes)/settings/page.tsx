"use client";

import { UserProfile, useAuth, useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";

const Settings = () => {
  const { userId } = useAuth();

  const router = useRouter();

  useEffect(() => {
    let timeout: NodeJS.Timeout | undefined;
    if (!userId) {
      timeout = setTimeout(() => {
        router.push("/sign-in");
      }, 1000);
    }
    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  }, [userId, router]);

  if (!userId) {
    return (
      <div className="px-5">
        <p>Redirecting...</p>
      </div>
    );
  } else {
    return <UserProfile />;
  }
};

export default Settings;
