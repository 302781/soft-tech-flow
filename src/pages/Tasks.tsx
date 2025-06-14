
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogDescription,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { PlusCircle } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";

const taskSchema = z.object({
  description: z.string().min(1, "A descrição da tarefa é obrigatória."),
  project: z.string().min(1, "O projeto associado é obrigatório."),
});

type TaskFormValues = z.infer<typeof taskSchema>;

interface Task extends TaskFormValues {
  id: number;
  status: "Pendente" | "Em Andamento" | "Concluída";
}

const initialTasks: Task[] = [
  { id: 1, description: "Configurar ambiente de desenvolvimento", project: "Desenvolvimento de E-commerce", status: "Concluída" },
  { id: 2, description: "Criar wireframes da tela inicial", project: "App Mobile de Fitness", status: "Em Andamento" },
  { id: 3, description: "Desenvolver módulo de autenticação", project: "Plataforma de Cursos Online", status: "Pendente" },
];

export default function Tasks() {
  const [tasks, setTasks] = useState<Task[]>(initialTasks);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const form = useForm<TaskFormValues>({
    resolver: zodResolver(taskSchema),
    defaultValues: {
      description: "",
      project: "",
    },
  });

  function onSubmit(data: TaskFormValues) {
    const newTask: Task = {
      id: tasks.length + 1,
      ...data,
      status: "Pendente",
    };
    setTasks([...tasks, newTask]);
    form.reset();
    setIsDialogOpen(false);
  }

  return (
    <>
      <div className="flex items-center justify-between space-y-2">
        <h1 className="text-3xl font-bold tracking-tight">Tarefas</h1>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild>
            <Button>
              <PlusCircle className="mr-2 h-4 w-4" />
              Adicionar Tarefa
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Adicionar Nova Tarefa</DialogTitle>
              <DialogDescription>
                Preencha as informações abaixo para criar uma nova tarefa.
              </DialogDescription>
            </DialogHeader>
            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
                <FormField
                  control={form.control}
                  name="description"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Descrição da Tarefa</FormLabel>
                      <FormControl>
                        <Textarea placeholder="Ex: Corrigir bug no login" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="project"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Projeto</FormLabel>
                      <FormControl>
                        <Input placeholder="Ex: Website Institucional" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <DialogFooter>
                  <Button type="submit">Salvar Tarefa</Button>
                </DialogFooter>
              </form>
            </Form>
          </DialogContent>
        </Dialog>
      </div>

      <Card className="mt-6">
        <CardHeader>
          <CardTitle>Lista de Tarefas</CardTitle>
          <CardDescription>
            Aqui estão todas as suas tarefas pendentes e concluídas.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Descrição</TableHead>
                <TableHead>Projeto</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {tasks.length > 0 ? (
                tasks.map((task) => (
                  <TableRow key={task.id}>
                    <TableCell className="font-medium">{task.description}</TableCell>
                    <TableCell>{task.project}</TableCell>
                    <TableCell>
                      <Badge
                        variant={
                          task.status === 'Concluída'
                            ? 'default'
                            : task.status === 'Em Andamento'
                            ? 'secondary'
                            : 'outline'
                        }
                        className={
                          task.status === 'Concluída' ? 'bg-green-100 text-green-800 border-green-200' :
                          task.status === 'Em Andamento' ? 'bg-blue-100 text-blue-800 border-blue-200' : ''
                        }
                      >
                        {task.status}
                      </Badge>
                    </TableCell>
                  </TableRow>
                ))
               ) : (
                <TableRow>
                  <TableCell colSpan={3} className="h-24 text-center">
                    Nenhuma tarefa cadastrada.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </>
  );
}
