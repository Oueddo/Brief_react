import React from "react";
import { ReactNode } from "react";
import Sidebar from "../components/Sidebar";

interface SidebarLayoutProps {
  children: ReactNode;
}

const SidebarLayout = ({ children }: SidebarLayoutProps) => {
  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar fixe */}
      <Sidebar />

      {/* Contenu principal */}
      <main className="flex-1 p-6">{children}</main>
    </div>
  );
};

export default SidebarLayout;
