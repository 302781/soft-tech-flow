
import { Button } from "@/components/ui/button";
import { Briefcase } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="p-4 flex justify-between items-center border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <Link to="/" className="flex items-center gap-2">
        <Briefcase className="h-6 w-6 text-primary" />
        <h1 className="text-xl font-bold">FreelaFlow</h1>
      </Link>
      <nav className="flex gap-2">
        <Button variant="ghost">Entrar</Button>
        <Button>Cadastre-se</Button>
      </nav>
    </header>
  );
}
