import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import MobileNavigation from "@/components/ui/MobileNavigation";
import Header from "@/components/ui/Header";
import { getCurrentUser } from "@/lib/Actions/user.actions";
import { redirect } from "next/navigation";

const Layout = async ({ children }: { children: React.ReactNode }) => {
  const currentUser = await getCurrentUser();
  if (!currentUser) return redirect("/sign-in");
  return (
    <main className="flex h-screen">
      <Sidebar {...currentUser} />
      <section className="flex h-full flex-1 flex-col">
        <MobileNavigation {...currentUser} /> <Header />
      </section>
      <div className="main-content">{children}</div>
    </main>
  );
};
export default Layout;
