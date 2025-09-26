import { Header } from "@/components/layout/Header";
import { 
  Card, 
  CardContent, 
  CardHeader, 
  CardTitle, 
  CardDescription, 
  CardFooter // Added CardFooter to the import
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "sonner";
import { mockTrainingPlan } from "@/lib/mockData";
import { Dumbbell, Utensils, Bot, CheckCircle2, Circle } from "lucide-react";

const TrainingPlanPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="athlete" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Your AI Training Plan 🎯
          </h1>
          <p className="text-muted-foreground">
            Follow this personalized plan for the next {mockTrainingPlan.duration} to maximize your potential.
          </p>
        </div>

        {/* Coach's Notes */}
        <Card className="mb-6 bg-primary/5 border-primary/20">
            <CardHeader>
                <CardTitle className="flex items-center gap-2 text-primary">
                    <Bot className="h-5 w-5" />
                    AI Coach's Focus for this Week
                </CardTitle>
            </CardHeader>
            <CardContent>
                <p className="text-primary/90">{mockTrainingPlan.coachNotes}</p>
            </CardContent>
        </Card>

        {/* Daily Plan */}
        <div className="space-y-4">
            {mockTrainingPlan.dailyPlan.map((dayPlan) => {
                const isCompleted = dayPlan.status === 'completed';
                return (
                    <Card key={dayPlan.day} className={`transition-all ${isCompleted ? 'bg-muted/40' : ''}`}>
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle>{dayPlan.day}'s Plan</CardTitle>
                                {isCompleted ? (
                                    <span className="flex items-center text-sm text-success font-medium">
                                        <CheckCircle2 className="h-4 w-4 mr-2" />
                                        Completed
                                    </span>
                                ) : (
                                     <span className="flex items-center text-sm text-muted-foreground">
                                        <Circle className="h-4 w-4 mr-2" />
                                        Pending
                                    </span>
                                )}
                            </div>
                        </CardHeader>
                        <CardContent className="grid grid-cols-1 md:grid-cols-2 gap-6">
                           {/* Workout Section */}
                           <div className="flex items-start gap-4">
                               <div className="w-10 h-10 bg-primary/10 rounded-full flex-shrink-0 flex items-center justify-center">
                                   <Dumbbell className="h-5 w-5 text-primary" />
                               </div>
                               <div>
                                   <h4 className="font-semibold">Workout</h4>
                                   <p className="text-muted-foreground">{dayPlan.workout}</p>
                               </div>
                           </div>
                           
                           {/* Nutrition Section */}
                           <div className="flex items-start gap-4">
                               <div className="w-10 h-10 bg-success/10 rounded-full flex-shrink-0 flex items-center justify-center">
                                   <Utensils className="h-5 w-5 text-success" />
                               </div>
                               <div>
                                   <h4 className="font-semibold">Nutrition Tip</h4>
                                   <p className="text-muted-foreground">{dayPlan.nutrition}</p>
                               </div>
                           </div>
                        </CardContent>
                         <CardFooter>
                            <div className="flex items-center space-x-2">
                                <Checkbox 
                                    id={`task-${dayPlan.day}`} 
                                    checked={isCompleted} 
                                    onCheckedChange={() => {
                                        if(!isCompleted) {
                                            toast.success(`${dayPlan.day}'s plan marked as complete! Great job!`);
                                        }
                                    }}
                                />
                                <label
                                    htmlFor={`task-${dayPlan.day}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    Mark as complete
                                </label>
                            </div>
                        </CardFooter>
                    </Card>
                )
            })}
        </div>
      </main>
    </div>
  );
};

export default TrainingPlanPage;

