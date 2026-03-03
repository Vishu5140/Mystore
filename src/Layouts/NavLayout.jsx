import React from "react";
import Navbar from "../Components/Navbar";
import { Outlet } from "react-router-dom";

function NavLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      
      {/* ⭐ Navbar */}
      <Navbar />

      {/* ⭐ Page content */}
      <main className="flex-1 p-4 md:p-6">
        <Outlet />
      </main>

    </div>
  );
}

export default NavLayout;