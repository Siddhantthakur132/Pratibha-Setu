import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { AthleteCard } from "@/components/athlete/AthleteCard";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Users,
  MapPin,
  Filter,
  Search,
  TrendingUp,
  Flag,
  UserCheck,
  Clock,
  BarChart3,
} from "lucide-react";

export default function CoachDashboard() {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");
  const [selectedSport, setSelectedSport] = useState("all");

  // Mock data
  const statsData = {
    totalAthletes: 156,
    newThisWeek: 12,
    needsReview: 8,
    topTalent: 23,
  };

  const athletesData = [
    {
      id: "1",
      name: "Arjun Patel",
      age: 17,
      location: "Gujarat",
      talentScore: 89,
      sport: "Cricket",
      lastActive: "2 hours ago",
      hasCheatFlag: false,
      badges: ["Fast Bowler", "Consistent", "Team Leader"],
    },
    {
      id: "2",
      name: "Sneha Reddy",
      age: 16,
      location: "Telangana",
      talentScore: 85,
      sport: "Badminton",
      lastActive: "1 day ago",
      hasCheatFlag: true,
      badges: ["Quick Reflexes", "Endurance", "Perfect Technique"],
    },
    {
      id: "3",
      name: "Rohit Singh",
      age: 18,
      location: "Punjab",
      talentScore: 82,
      sport: "Football",
      lastActive: "3 hours ago",
      hasCheatFlag: false,
      badges: ["Goal Scorer", "Sprint Speed", "Field Vision"],
    },
    {
      id: "4",
      name: "Kavya Nair",
      age: 15,
      location: "Kerala",
      talentScore: 78,
      sport: "Athletics",
      lastActive: "5 hours ago",
      hasCheatFlag: false,
      badges: ["Sprinter", "Dedication", "Rising Star"],
    },
  ];

  const filteredAthletes = athletesData.filter((athlete) => {
    const matchesSearch =
      athlete.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      athlete.location.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesRegion =
      selectedRegion === "all" || athlete.location.includes(selectedRegion);
    const matchesSport = selectedSport === "all" || athlete.sport === selectedSport;

    return matchesSearch && matchesRegion && matchesSport;
  });

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="coach" />

      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Coach Dashboard 🏆
          </h1>
          <p className="text-muted-foreground">
            Discover and nurture talent with AI-powered insights across India
          </p>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {statsData.totalAthletes}
                  </p>
                  <p className="text-sm text-muted-foreground">Total Athletes</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <TrendingUp className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {statsData.newThisWeek}
                  </p>
                  <p className="text-sm text-muted-foreground">New This Week</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                  <Flag className="h-6 w-6 text-accent" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {statsData.needsReview}
                  </p>
                  <p className="text-sm text-muted-foreground">Needs Review</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-badge-gold/10 rounded-full flex items-center justify-center">
                  <UserCheck className="h-6 w-6 text-badge-gold" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">
                    {statsData.topTalent}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Top Talent (80+)
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters & Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Filter className="h-5 w-5" />
              <span>Filter Athletes</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="h-4 w-4 absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
                <Input
                  placeholder="Search athletes or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>

              <Select value={selectedRegion} onValueChange={setSelectedRegion}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Region" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Regions</SelectItem>
                  <SelectItem value="Gujarat">Gujarat</SelectItem>
                  <SelectItem value="Maharashtra">Maharashtra</SelectItem>
                  <SelectItem value="Karnataka">Karnataka</SelectItem>
                  <SelectItem value="Tamil Nadu">Tamil Nadu</SelectItem>
                  <SelectItem value="Kerala">Kerala</SelectItem>
                  <SelectItem value="Punjab">Punjab</SelectItem>
                  <SelectItem value="Telangana">Telangana</SelectItem>
                </SelectContent>
              </Select>

              <Select value={selectedSport} onValueChange={setSelectedSport}>
                <SelectTrigger>
                  <SelectValue placeholder="Select Sport" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Sports</SelectItem>
                  <SelectItem value="Cricket">Cricket</SelectItem>
                  <SelectItem value="Football">Football</SelectItem>
                  <SelectItem value="Badminton">Badminton</SelectItem>
                  <SelectItem value="Athletics">Athletics</SelectItem>
                  <SelectItem value="Basketball">Basketball</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex space-x-2">
                <Button
                  variant="hero"
                  className="flex-1"
                  onClick={() => navigate("/coach/heatmap")}
                >
                  <MapPin className="h-4 w-4 mr-2" />
                  Talent Map
                </Button>
                <Button 
                  variant="outline"
                  onClick={() => navigate("/coach/analytics")}
                >
                  <BarChart3 className="h-4 w-4 mr-2" />
                  Analytics
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Athletes List */}
        <div className="mb-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-xl font-semibold text-foreground">
              Athletes ({filteredAthletes.length} found)
            </h2>
            <div className="flex items-center space-x-2">
              <Badge
                variant="outline"
                className="bg-accent/10 text-accent border-accent/20"
              >
                <Flag className="h-3 w-3 mr-1" />
                {athletesData.filter((a) => a.hasCheatFlag).length} need
                review
              </Badge>
              <Badge
                variant="outline"
                className="bg-success/10 text-success border-success/20"
              >
                <Clock className="h-3 w-3 mr-1" />
                {
                  athletesData.filter((a) => a.lastActive.includes("hour"))
                    .length
                }{" "}
                active today
              </Badge>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6">
            {filteredAthletes.map((athlete) => (
              <AthleteCard
                key={athlete.id}
                athlete={athlete}
                viewMode="coach"
                onView={(id) => navigate(`/coach/athlete/${id}`)}
                onCompare={(id) => navigate(`/coach/comparison?athlete=${id}`)}
              />
            ))}
          </div>

          {filteredAthletes.length === 0 && (
            <div className="text-center py-12">
              <div className="w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-10 w-10 text-muted-foreground" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">
                No athletes found
              </h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters to find more athletes.
              </p>
            </div>
          )}
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Card
            className="card-hover cursor-pointer"
            onClick={() => navigate("/coach/heatmap")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Geo Talent Heatmap</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Interactive map showing talent density by location
              </p>
              <Button variant="hero" size="sm" className="w-full pointer-events-none">
                View Map
              </Button>
            </CardContent>
          </Card>

          <Card
            className="card-hover cursor-pointer"
            onClick={() => navigate("/coach/comparison")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Comparison Tool</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Side-by-side athlete comparison based on AI metrics
              </p>
              <Button variant="success" size="sm" className="w-full pointer-events-none">
                Compare
              </Button>
            </CardContent>
          </Card>

          <Card
            className="card-hover cursor-pointer"
            onClick={() => navigate("/coach/review-queue")}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Flag className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">Review Queue</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Athletes flagged by AI that need manual review
              </p>
              <Button variant="warning" size="sm" className="w-full pointer-events-none">
                Review ({statsData.needsReview})
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
}

