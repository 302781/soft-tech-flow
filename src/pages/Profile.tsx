
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Profile() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Perfil</h1>
      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Informações do Perfil</CardTitle>
          <CardDescription>
            Atualize suas informações e foto de perfil.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center space-x-4">
            <Avatar className="h-20 w-20">
              <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Button variant="outline">Alterar Foto</Button>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <div className="space-y-2">
              <Label htmlFor="name">Nome</Label>
              <Input id="name" defaultValue="Seu Nome" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                defaultValue="seu.email@example.com"
              />
            </div>
          </div>
          <Button>Salvar Alterações</Button>
        </CardContent>
      </Card>
    </>
  );
}
