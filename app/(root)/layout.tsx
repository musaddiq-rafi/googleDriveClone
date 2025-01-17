import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import MobileNavigation from "@/components/ui/MobileNavigation";
import Header from "@/components/ui/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="flex h-screen">
      <Sidebar />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation /> <Header />
      </section>
      <div className="main-content">{children}</div>
    </main>
  );
};
export default Layout;
