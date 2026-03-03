import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Components/Sidebar";

function SidebarLayout() {
  return (
    <div className="min-h-screen flex gap-6">  {/* 👈 Added gap */}
      
      {/* ⭐ Sidebar */}
      <Sidebar />

      {/* ⭐ Page content */}
      <main className="flex-1 p-4 md:p-6 bg-gray-950 rounded-xl">
        <Outlet />
      </main>

    </div>
  );
}

export default SidebarLayout;