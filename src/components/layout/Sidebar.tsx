
import { Link, useLocation } from "react-router-dom";
import { Briefcase, LayoutDashboard, ListTodo, User, Settings, LogOut } from "lucide-react";
import { cn } from "@/lib/utils";
import { useAuth } from "@/contexts/AuthContext";
import { Button } from "@/components/ui/button";

const menuItems = [
  { href: "/", label: "Dashboard", icon: LayoutDashboard },
  { href: "/projects", label: "Projetos", icon: Briefcase },
  { href: "/tasks", label: "Tarefas", icon: ListTodo },
  { href: "/profile", label: "Perfil", icon: User },
  { href: "/settings", label: "Configurações", icon: Settings },
];

export default function Sidebar() {
    const location = useLocation();
    const { signOut } = useAuth();

    return (
        <aside className="hidden border-r bg-background md:block">
            <div className="flex h-full max-h-screen flex-col gap-2">
                <div className="flex h-14 items-center border-b px-4 lg:h-[60px] lg:px-6">
                    <Link to="/" className="flex items-center gap-2 font-semibold">
                        <Briefcase className="h-6 w-6 text-primary" />
                        <span className="">FreelaFlow</span>
                    </Link>
                </div>
                <div className="flex-1">
                    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
                        {menuItems.map((item) => (
                            <Link
                                key={item.label}
                                to={item.href}
                                className={cn(
                                    "flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary",
                                    location.pathname === item.href && "bg-muted text-primary"
                                )}
                            >
                                <item.icon className="h-4 w-4" />
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </div>
                <div className="mt-auto p-4">
                    <Button 
                        variant="ghost" 
                        onClick={signOut}
                        className="w-full justify-start text-muted-foreground hover:text-foreground"
                    >
                        <LogOut className="mr-2 h-4 w-4" />
                        Sair
                    </Button>
                </div>
            </div>
        </aside>
    );
}
