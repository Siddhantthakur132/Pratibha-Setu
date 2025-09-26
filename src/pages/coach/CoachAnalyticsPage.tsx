import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { mockCoachAnalytics } from "@/lib/mockData";
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts";
import { TrendingUp, BarChart2, Award, ArrowUpRight } from "lucide-react";

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const CoachAnalyticsPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />
      <main className="container mx-auto px-4 py-6">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Athlete Analytics 📊
          </h1>
          <p className="text-muted-foreground">
            Analyze the performance and growth of athletes under your observation.
          </p>
        </div>

        {/* Key Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Average TSI</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-primary">{mockCoachAnalytics.averageTSI}</div>
              <p className="text-xs text-muted-foreground">across all your athletes</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Most Improved Athlete</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold text-success">{mockCoachAnalytics.mostImproved.name}</div>
              <p className="text-xs text-muted-foreground">{mockCoachAnalytics.mostImproved.improvement}</p>
            </CardContent>
          </Card>
           <Card>
            <CardHeader>
              <CardTitle className="text-sm font-medium text-muted-foreground">Total Athletes</CardTitle>
            </CardHeader>
            <CardContent>
               <div className="text-3xl font-bold">{mockCoachAnalytics.improvementList.length}</div>
              <p className="text-xs text-muted-foreground">currently being tracked</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
          {/* Sport Distribution Chart */}
          <Card className="lg:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <BarChart2 className="h-5 w-5" /> Sport Distribution
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="w-full h-64">
                <ResponsiveContainer>
                  <PieChart>
                    <Pie
                      data={mockCoachAnalytics.sportDistribution}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      outerRadius={80}
                      fill="#8884d8"
                      dataKey="value"
                      nameKey="name"
                      label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                      {mockCoachAnalytics.sportDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Most Improved Athletes Table */}
          <Card className="lg:col-span-3">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Award className="h-5 w-5" /> Top Improvers (Last 6 Months)
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Athlete</TableHead>
                    <TableHead>Sport</TableHead>
                    <TableHead>Current TSI</TableHead>
                    <TableHead className="text-right">Improvement</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {mockCoachAnalytics.improvementList.map((athlete) => (
                    <TableRow key={athlete.id}>
                      <TableCell className="font-medium">{athlete.name}</TableCell>
                      <TableCell>{athlete.sport}</TableCell>
                      <TableCell>{athlete.currentTSI}</TableCell>
                      <TableCell className="text-right text-success font-semibold flex items-center justify-end">
                        <ArrowUpRight className="h-4 w-4 mr-1" /> +{athlete.change} TSI
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default CoachAnalyticsPage;
