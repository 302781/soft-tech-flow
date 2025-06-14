
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";

export default function Settings() {
  return (
    <>
      <h1 className="text-3xl font-bold tracking-tight">Configurações</h1>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Notificações</CardTitle>
          <CardDescription>
            Gerencie como você recebe notificações.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Notificações por Email</Label>
              <p className="text-sm text-muted-foreground">
                Receba emails sobre novas tarefas e atualizações de projetos.
              </p>
            </div>
            <Switch defaultChecked />
          </div>
          <div className="flex items-center justify-between space-x-4 rounded-lg border p-4">
            <div className="space-y-0.5">
              <Label className="text-base">Notificações Push</Label>
              <p className="text-sm text-muted-foreground">
                Receba notificações push no seu dispositivo.
              </p>
            </div>
            <Switch />
          </div>
        </CardContent>
      </Card>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Aparência</CardTitle>
          <CardDescription>Personalize a aparência do aplicativo.</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <Label htmlFor="theme">Tema</Label>
            <Select defaultValue="system">
              <SelectTrigger id="theme" className="w-[180px]">
                <SelectValue placeholder="Selecione o tema" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Claro</SelectItem>
                <SelectItem value="dark">Escuro</SelectItem>
                <SelectItem value="system">Sistema</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      <div className="mt-6 flex justify-end">
        <Button>Salvar Configurações</Button>
      </div>
    </>
  );
}
