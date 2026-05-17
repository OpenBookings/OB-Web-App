import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { DashboardSidebar } from "@/components/dashboard/sidebar-02/app-sidebar";
import Stats03 from "@/components/dashboard/stats-03";
import Table05 from "@/components/dashboard/table-05";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <div className="relative flex h-dvh w-full overflow-hidden">
        <DashboardSidebar />
        <SidebarInset className="flex flex-col bg-zinc-900">
          <main className="flex-1 p-6 flex flex-col overflow-hidden">
            <div className="flex flex-col gap-4 h-full">
              <h1 className=" mx-5 mt-2 text-3xl font-bold text-foreground">Overview</h1>
              <Stats03 />
              <div className="mx-5 border-t border-zinc-700 w-full]" />
              <div className="flex gap-6 flex-1 min-h-0">
                <div className="mx-5 mb-2 w-full flex flex-col min-h-0">
                  <Table05 />
                </div>
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
}
