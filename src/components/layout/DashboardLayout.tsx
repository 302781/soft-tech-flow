
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
    return (
        <div className="grid min-h-screen w-full md:grid-cols-[220px_1fr] lg:grid-cols-[280px_1fr]">
            <Sidebar />
            <div className="flex flex-col">
                <Header />
                <main className="flex flex-1 flex-col gap-4 p-4 lg:gap-6 lg:p-6 bg-muted/40">
                    <Outlet />
                </main>
            </div>
        </div>
    );
}
