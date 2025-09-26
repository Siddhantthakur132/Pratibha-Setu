import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Badge } from "@/components/ui/badge";
import { toast } from "sonner";
import { mockFitnessTests } from "@/lib/mockData";
import { Wind, ChevronsUp, Activity, Grid, Lock, PlayCircle, Check } from "lucide-react";

// A helper to map string names from mockData to actual icon components
const iconMap: { [key: string]: React.ElementType } = {
  Wind,
  ChevronsUp,
  Activity,
  Grid,
};

const FitnessTestPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="athlete" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            AI Fitness Tests 🏋️‍♂️
          </h1>
          <p className="text-muted-foreground">
            Select a test below to record your performance. Our AI will analyze your form, count reps, and calculate your score.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockFitnessTests.map((test) => {
            const Icon = iconMap[test.icon] || Activity;
            const isLocked = test.status === 'locked';
            const isCompleted = test.status === 'completed';

            return (
              <Card key={test.id} className={`flex flex-col ${isLocked ? 'bg-muted/50' : ''}`}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                     <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                       <Icon className="h-6 w-6 text-primary" />
                     </div>
                     <Badge variant={isLocked ? "secondary" : isCompleted ? "success" : "default"}>
                       {test.category}
                     </Badge>
                  </div>
                  <CardTitle className="pt-4">{test.title}</CardTitle>
                  <CardDescription>{test.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="text-sm text-muted-foreground">
                    Best Score: <span className="font-bold text-foreground">{test.bestScore}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button 
                    className="w-full" 
                    disabled={isLocked}
                    variant={isCompleted ? "outline" : "hero"}
                    onClick={() => toast.info(`Starting ${test.title}...`, { description: 'The AI analysis feature will be enabled soon.' })}
                  >
                    {isLocked && <Lock className="h-4 w-4 mr-2" />}
                    {isCompleted && <Check className="h-4 w-4 mr-2" />}
                    {!isLocked && !isCompleted && <PlayCircle className="h-4 w-4 mr-2" />}
                    {isLocked ? 'Locked' : isCompleted ? 'Test Again' : 'Start Test'}
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

export default FitnessTestPage;
