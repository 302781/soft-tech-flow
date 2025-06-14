
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase, ListTodo, Zap, ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <Header />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">
            Organize seu freela, foque no que importa.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Uma ferramenta simples e poderosa para gerenciar seus projetos, tarefas e clientes. Menos admin, mais produtividade.
          </p>
          <Button size="lg">
            Comece agora <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </section>

        {/* Features Section */}
        <section className="container mx-auto px-4 py-16">
          <div className="grid gap-8 md:grid-cols-3">
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Gerenciamento de Projetos</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Mantenha todos os seus projetos em um só lugar, com status, prazos e orçamentos claros.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <ListTodo className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Controle de Tarefas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Crie e organize tarefas para cada projeto. Nunca mais perca um prazo importante.
                </CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center gap-4">
                <div className="bg-primary/10 p-3 rounded-full">
                    <Zap className="h-6 w-6 text-primary" />
                </div>
                <CardTitle>Foco e Produtividade</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  Com uma interface limpa e intuitiva, você se concentra no trabalho que realmente importa.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-secondary">
          <div className="container mx-auto px-4 py-20 text-center">
            <h2 className="text-3xl font-bold mb-4">Pronto para organizar sua vida de freelancer?</h2>
            <p className="text-muted-foreground mb-8">Junte-se a centenas de freelancers que já estão otimizando seu fluxo de trabalho.</p>
            <Button size="lg">
              Comece de graça
            </Button>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t">
          <div className="container mx-auto px-4 py-6 text-center text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} FreelaFlow. Todos os direitos reservados.</p>
          </div>
      </footer>
    </div>
  );
};

export default Index;
