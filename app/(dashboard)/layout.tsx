import Navbar from "@/components/navbar";
import Sidebar from "@/components/sidebar";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full relative">
      <div className="hidden h-full md:flex md:flex-col md:w-72 md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <div>
          <Sidebar />
        </div>
      </div>
      <main className="md:pl-72 h-full main">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
