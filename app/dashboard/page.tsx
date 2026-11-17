import Appsidebar from "@/components/Appsidebar";
import Navbar from "@/components/Navbar";
import { SidebarProvider } from "@/components/ui/sidebar";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Appsidebar />
        <main className="min-w-0 flex-1">
          <Navbar />
          <div className="px-4 pb-6">
            <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 2xl:grid-cols-4">
              <div className="rounded-xl bg-primary-foreground p-4 lg:col-span-2 2xl:col-span-2">Tableau de bord</div>
              <div className="rounded-xl bg-primary-foreground p-4">Résumé</div>
              <div className="rounded-xl bg-primary-foreground p-4">Activité</div>
              <div className="rounded-xl bg-primary-foreground p-4">Membres</div>
              <div className="rounded-xl bg-primary-foreground p-4 lg:col-span-2 2xl:col-span-2">Projets récents</div>
              <div className="rounded-xl bg-primary-foreground p-4">Statistiques</div>
            </div>
          </div>
        </main>
      </div>
    </SidebarProvider>
  );
}
