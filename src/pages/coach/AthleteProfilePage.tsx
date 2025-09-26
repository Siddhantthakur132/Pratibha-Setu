import { useParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/enhanced-button";
import { toast } from "sonner";
import { mockAthleteProfiles } from "@/lib/mockData";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { 
  User, 
  MapPin, 
  Calendar, 
  BarChart, 
  Zap, 
  Brain, 
  TrendingUp,
  Mail,
  FileText
} from "lucide-react";

const AthleteProfilePage = () => {
  const { athleteId } = useParams<{ athleteId: string }>();
  const athlete = mockAthleteProfiles.find((p) => p.id === athleteId);

  if (!athlete) {
    return (
      <div className="min-h-screen bg-background">
        <Header userRole="coach" />
        <main className="container mx-auto px-4 py-6 text-center">
          <h1 className="text-4xl font-bold text-destructive mt-12">Athlete Not Found</h1>
          <p className="text-muted-foreground mt-4">
            The profile for the requested athlete could not be found.
          </p>
          <Button onClick={() => window.history.back()} className="mt-6">Go Back</Button>
        </main>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />
      <main className="container mx-auto px-4 py-6">
        {/* Athlete Header */}
        <Card className="mb-6">
          <CardContent className="p-6 flex flex-col md:flex-row items-center gap-6">
            <div className="w-32 h-32 bg-muted rounded-full flex items-center justify-center">
              <User className="w-16 h-16 text-muted-foreground" />
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-3xl font-bold text-foreground">{athlete.name}</h1>
              <div className="flex items-center justify-center md:justify-start gap-4 text-muted-foreground mt-2">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" /> {athlete.location}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" /> {athlete.age} years old
                </div>
              </div>
              <div className="mt-4 flex flex-wrap gap-2 justify-center md:justify-start">
                <Badge variant="secondary">{athlete.sport}</Badge>
                {athlete.badges.map((badge, index) => (
                  <Badge key={index} variant="outline">{badge}</Badge>
                ))}
              </div>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
                <Button onClick={() => toast.success(`Sent message to ${athlete.name}`)}>
                    <Mail className="mr-2 h-4 w-4" /> Contact
                </Button>
                <Button variant="outline" onClick={() => toast.info('Report downloaded!')}>
                    <FileText className="mr-2 h-4 w-4" /> Download Report
                </Button>
            </div>
          </CardContent>
        </Card>

        {/* Performance Chart and Stats */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-primary" />
                TSI Performance Over Time
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="h-72">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={athlete.performanceHistory}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis domain={[60, 100]} />
                    <Tooltip />
                    <Line type="monotone" dataKey="tsi" stroke="hsl(var(--primary))" strokeWidth={2} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2"><BarChart className="h-5 w-5" />Key Metrics</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <div className="flex justify-between items-center mb-1">
                  <span className="text-sm font-medium">Talent Score Index (TSI)</span>
                  <span className="font-bold text-primary">{athlete.talentScore}</span>
                </div>
                <Progress value={athlete.talentScore} className="h-2" />
              </div>
               <div>
                <p className="text-sm text-muted-foreground">Height: <span className="font-medium text-foreground">{athlete.physical.height}</span></p>
                <p className="text-sm text-muted-foreground">Weight: <span className="font-medium text-foreground">{athlete.physical.weight}</span></p>
                <p className="text-sm text-muted-foreground">Wingspan: <span className="font-medium text-foreground">{athlete.physical.wingspan}</span></p>
              </div>
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
              <CardTitle className="flex items-center gap-2"><Zap className="h-5 w-5" />Physical Test Results</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              {Object.entries(athlete.testResults).map(([key, value]) => (
                 <div key={key} className="flex justify-between text-sm">
                   <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                   <span className="font-semibold text-foreground">{value}</span>
                 </div>
              ))}
            </CardContent>
          </Card>

          <Card>
             <CardHeader>
              <CardTitle className="flex items-center gap-2"><Brain className="h-5 w-5" />Cognitive Scores</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
               {Object.entries(athlete.cognitiveScores).map(([key, value]) => (
                 <div key={key} className="flex justify-between text-sm">
                   <span className="text-muted-foreground capitalize">{key.replace(/_/g, ' ')}</span>
                   <span className="font-semibold text-foreground">{value}</span>
                 </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default AthleteProfilePage;

