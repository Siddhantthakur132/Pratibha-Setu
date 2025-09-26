import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { mockAthleteProfiles } from "@/lib/mockData";
import { BarChart3, Bot, Zap, BrainCircuit, Users } from "lucide-react";
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  PolarRadiusAxis,
  ResponsiveContainer,
  Legend,
  Tooltip,
} from "recharts";

const ComparisonToolPage = () => {
  const [athlete1Id, setAthlete1Id] = useState<string | null>("1");
  const [athlete2Id, setAthlete2Id] = useState<string | null>("3");

  const athlete1 = mockAthleteProfiles.find((a) => a.id === athlete1Id);
  const athlete2 = mockAthleteProfiles.find((a) => a.id === athlete2Id);

  // Combine data for radar chart
  const combinedChartData = athlete1?.chartData.map((data1, index) => {
    const data2 = athlete2?.chartData[index];
    return {
      subject: data1.subject,
      [athlete1?.name || "Athlete 1"]: data1.A,
      [athlete2?.name || "Athlete 2"]: data2?.A,
      fullMark: 100,
    };
  });

  const renderStatRow = (label: string, value1: any, rank1: string, value2: any, rank2: string, higherIsBetter = false) => {
    const isAthlete1Better = higherIsBetter ? value1 > value2 : value1 < value2;
    return (
      <TableRow>
        <TableCell className={`font-semibold ${isAthlete1Better ? 'text-success' : ''}`}>{value1}</TableCell>
        <TableCell className={`text-xs text-muted-foreground ${isAthlete1Better ? 'text-success' : ''}`}>{rank1}</TableCell>
        <TableCell className="text-center font-medium text-muted-foreground">{label}</TableCell>
        <TableCell className={`text-right text-xs text-muted-foreground ${!isAthlete1Better ? 'text-success' : ''}`}>{rank2}</TableCell>
        <TableCell className={`text-right font-semibold ${!isAthlete1Better ? 'text-success' : ''}`}>{value2}</TableCell>
      </TableRow>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2 flex items-center">
            <BarChart3 className="mr-3 h-8 w-8 text-primary" />
            Athlete Comparison Tool
          </h1>
          <p className="text-muted-foreground">
            Select two athletes to compare their physical and cognitive metrics side-by-side.
          </p>
        </div>

        {/* Athlete Selectors */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Select Athlete 1</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={athlete1Id || ""} onValueChange={setAthlete1Id}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an athlete" />
                </SelectTrigger>
                <SelectContent>
                  {mockAthleteProfiles.map((p) => (
                    <SelectItem key={p.id} value={p.id} disabled={p.id === athlete2Id}>
                      {p.name} - TSI: {p.talentScore}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Select Athlete 2</CardTitle>
            </CardHeader>
            <CardContent>
              <Select value={athlete2Id || ""} onValueChange={setAthlete2Id}>
                <SelectTrigger>
                  <SelectValue placeholder="Choose an athlete" />
                </SelectTrigger>
                <SelectContent>
                  {mockAthleteProfiles.map((p) => (
                    <SelectItem key={p.id} value={p.id} disabled={p.id === athlete1Id}>
                      {p.name} - TSI: {p.talentScore}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </CardContent>
          </Card>
        </div>

        {!athlete1 || !athlete2 ? (
          <div className="text-center py-12">
            <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-10 w-10 text-muted-foreground" />
            </div>
            <h3 className="text-lg font-medium text-foreground">Select Two Athletes</h3>
            <p className="text-muted-foreground">
              Please select two athletes from the dropdowns above to see their comparison.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Radar Chart */}
            <Card className="lg:col-span-2">
              <CardHeader>
                <CardTitle>Performance Radar</CardTitle>
              </CardHeader>
              <CardContent>
                <ResponsiveContainer width="100%" height={400}>
                  <RadarChart cx="50%" cy="50%" outerRadius="80%" data={combinedChartData}>
                    <PolarGrid />
                    <PolarAngleAxis dataKey="subject" />
                    <PolarRadiusAxis angle={30} domain={[0, 100]} />
                    <Tooltip />
                    <Legend />
                    <Radar name={athlete1.name} dataKey={athlete1.name} stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
                    <Radar name={athlete2.name} dataKey={athlete2.name} stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
                  </RadarChart>
                </ResponsiveContainer>
              </CardContent>
            </Card>

            {/* Detailed Stats */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Bot className="mr-2 h-5 w-5" />
                  AI Talent Score
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-center">
                  <div>
                    <p className={`text-4xl font-bold ${athlete1.talentScore > athlete2.talentScore ? 'text-success' : ''}`}>{athlete1.talentScore}</p>
                    <p className="font-semibold">{athlete1.name}</p>
                  </div>
                  <p className="text-muted-foreground text-lg">vs</p>
                  <div>
                    <p className={`text-4xl font-bold ${athlete2.talentScore > athlete1.talentScore ? 'text-success' : ''}`}>{athlete2.talentScore}</p>
                    <p className="font-semibold">{athlete2.name}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                  <CardTitle className="flex items-center"><Zap className="mr-2 h-5 w-5"/>Physical Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    {renderStatRow("100m Sprint (s)", athlete1.physical.sprint_100m.value, athlete1.physical.sprint_100m.rank, athlete2.physical.sprint_100m.value, athlete2.physical.sprint_100m.rank)}
                    {renderStatRow("Vertical Jump (cm)", athlete1.physical.vertical_jump.value, athlete1.physical.vertical_jump.rank, athlete2.physical.vertical_jump.value, athlete2.physical.vertical_jump.rank, true)}
                    {renderStatRow("Agility Run (s)", athlete1.physical.agility_run.value, athlete1.physical.agility_run.rank, athlete2.physical.agility_run.value, athlete2.physical.agility_run.rank)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            <Card className="lg:col-span-2">
              <CardHeader>
                  <CardTitle className="flex items-center"><BrainCircuit className="mr-2 h-5 w-5"/>Cognitive Metrics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                   <TableBody>
                    {renderStatRow("Reaction Time (ms)", athlete1.cognitive.reaction_time.value, athlete1.cognitive.reaction_time.rank, athlete2.cognitive.reaction_time.value, athlete2.cognitive.reaction_time.rank)}
                    {renderStatRow("Decision Making (/100)", athlete1.cognitive.decision_making.value, athlete1.cognitive.decision_making.rank, athlete2.cognitive.decision_making.value, athlete2.cognitive.decision_making.rank, true)}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

          </div>
        )}
      </main>
    </div>
  );
};

export default ComparisonToolPage;
