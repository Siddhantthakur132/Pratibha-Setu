import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { mockCognitiveGames } from "@/lib/mockData";
import { MousePointerClick, Palette, MemoryStick, GitFork, Lock, PlayCircle, Check } from "lucide-react";

// Helper to map string names from mockData to actual icon components
const iconMap: { [key: string]: React.ElementType } = {
  MousePointerClick,
  Palette,
  MemoryStick,
  GitFork,
};

const CognitiveGamesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="athlete" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Cognitive Games 🧠
          </h1>
          <p className="text-muted-foreground">
            Sharpen your mental skills. These games test your reaction, focus, and decision-making abilities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCognitiveGames.map((game) => {
            const Icon = iconMap[game.icon] || MousePointerClick;
            const isLocked = game.status === 'locked';
            const isCompleted = game.status === 'completed';

            return (
              <Card key={game.id} className={`flex flex-col ${isLocked ? 'bg-muted/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 bg-ai-processing/10 rounded-full flex items-center justify-center">
                       <Icon className="h-6 w-6 text-ai-processing" />
                     </div>
                     <Badge variant={isLocked ? "secondary" : isCompleted ? "success" : "default"} className="capitalize">
                       {game.measures.split(' ')[0]}
                     </Badge>
                  </div>
                  <CardTitle className="pt-4">{game.title}</CardTitle>
                  <CardDescription>{game.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                   <div className="text-sm text-muted-foreground">
                    Best Score: <span className="font-bold text-foreground">{game.bestScore}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    disabled={isLocked}
                    variant={isCompleted ? "outline" : "ai"}
                    onClick={() => toast.info(`Starting ${game.title}...`, { description: 'This game will be playable in a future update.' })}
                  >
                    {isLocked && <Lock className="h-4 w-4 mr-2" />}
                    {isCompleted && <Check className="h-4 w-4 mr-2" />}
                    {!isLocked && !isCompleted && <PlayCircle className="h-4 w-4 mr-2" />}
                    {isLocked ? 'Locked' : isCompleted ? 'Play Again' : 'Play Now'}
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
        </div>
      </main>
    </div>
  );
};

export default CognitiveGamesPage;
