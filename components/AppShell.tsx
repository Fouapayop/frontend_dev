"use client";

import { usePathname } from "next/navigation";

import Appsidebar from "@/components/Appsidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function AppShell({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isLoginPage = pathname === "/Connexion";
  const isReadOnlyDashboard = pathname === "/utilisateurDashb";

  if (isLoginPage) {
    return <>{children}</>;
  }

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full bg-muted/20">
        <Appsidebar readOnly={isReadOnlyDashboard} />
        <div className="min-w-0 flex-1">
          <Navbar />
          <div className="w-full">{children}</div>
        </div>
      </div>
    </SidebarProvider>
  );
}
