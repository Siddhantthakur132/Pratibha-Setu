import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { TalentScoreRing } from "@/components/talent/TalentScoreRing"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Activity, 
  Target, 
  Trophy, 
  PlayCircle, 
  Video, 
  Brain, 
  Timer,
  TrendingUp,
  Award,
  Calendar
} from "lucide-react"

export default function AthleteDashboard() {
  const navigate = useNavigate();
  const [offlineSync, setOfflineSync] = useState(true)
  
  // Mock athlete data
  const athleteData = {
    name: "Priya Sharma",
    age: 16,
    location: "Mumbai, Maharashtra",
    talentScore: 78,
    currentRank: 24,
    totalAthletes: 1247,
    weeklyChallenge: "Sprint Endurance Test",
    challengeProgress: 65,
    recentBadges: ["Speed Demon", "Consistency King", "Perfect Form"],
    upcomingTests: [
      { name: "100m Sprint", date: "Today", status: "ready" },
      { name: "Agility Ladder", date: "Tomorrow", status: "pending" },
      { name: "Vertical Jump", date: "Wed", status: "locked" }
    ],
    performanceStats: {
      physical: 82,
      cognitive: 74,
      technical: 80,
      consistency: 76
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="athlete" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Offline Sync Status */}
        {offlineSync && (
          <div className="mb-4 p-3 bg-accent/10 border border-accent/20 rounded-lg flex items-center space-x-3">
            <div className="w-2 h-2 bg-accent rounded-full animate-talent-pulse"></div>
            <span className="text-sm text-accent-foreground">Syncing offline data...</span>
          </div>
        )}

        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome back, {athleteData.name}! 🏃‍♀️
          </h1>
          <p className="text-muted-foreground">
            Ready to unlock your athletic potential with AI-powered training?
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
          {/* Talent Score & Ranking */}
          <Card className="lg:col-span-1">
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Trophy className="h-5 w-5 text-badge-gold" />
                <span>Your Talent Score</span>
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col items-center space-y-4">
              <TalentScoreRing score={athleteData.talentScore} size="lg" />
              
              <div className="text-center">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <TrendingUp className="h-4 w-4 text-success" />
                  <span className="text-sm text-success font-medium">+5 points this week</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  Rank #{athleteData.currentRank} of {athleteData.totalAthletes.toLocaleString()} athletes
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Weekly Challenge */}
          <Card className="lg:col-span-2 talent-gradient-card">
            <CardHeader>
              <CardTitle className="flex items-center justify-between text-white">
                <div className="flex items-center space-x-2">
                  <Target className="h-5 w-5" />
                  <span>Weekly AI Challenge</span>
                </div>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30">
                  {athleteData.challengeProgress}% Complete
                </Badge>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <h3 className="text-xl font-semibold text-white">{athleteData.weeklyChallenge}</h3>
                <Progress value={athleteData.challengeProgress} className="h-3" />
                <div className="flex items-center justify-between">
                  <p className="text-white/80 text-sm">
                    Complete to unlock advanced AI training tips!
                  </p>
                  <Button variant="secondary" size="sm">
                    <PlayCircle className="h-4 w-4 mr-2" />
                    Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Recent Achievements */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Award className="h-5 w-5 text-badge-gold" />
                <span>Recent Achievements</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {athleteData.recentBadges.map((badge, index) => (
                  <div key={index} className="flex items-center space-x-3 p-3 bg-badge-gold/5 rounded-lg border border-badge-gold/20">
                    <div className="w-10 h-10 bg-badge-gold/20 rounded-full flex items-center justify-center">
                      <Trophy className="h-5 w-5 text-badge-gold" />
                    </div>
                    <div>
                      <p className="font-medium text-foreground">{badge}</p>
                      <p className="text-sm text-muted-foreground">Earned 2 days ago</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Performance Overview */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <Activity className="h-5 w-5 text-primary" />
                <span>Performance Breakdown</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {Object.entries(athleteData.performanceStats).map(([category, score]) => (
                  <div key={category} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium capitalize">{category}</span>
                      <span className="text-sm font-semibold">{score}%</span>
                    </div>
                    <Progress value={score} className="h-2" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <Card 
            className="card-hover cursor-pointer"
            onClick={() => navigate('/athlete/fitness-tests')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Video className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">Fitness Tests</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Record sprint, jumps & agility with AI analysis
              </p>
              <Button variant="hero" size="sm" className="w-full pointer-events-none">
                Start Test
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="card-hover cursor-pointer"
            onClick={() => navigate('/athlete/cognitive-games')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-ai-processing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-6 w-6 text-ai-processing" />
              </div>
              <h3 className="font-semibold mb-2">Cognitive Games</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Voice-guided reflex & decision tests
              </p>
              <Button variant="ai" size="sm" className="w-full pointer-events-none">
                Play Now
              </Button>
            </CardContent>
          </Card>

          <Card 
            className="card-hover cursor-pointer"
            onClick={() => navigate('/athlete/training-plan')}
          >
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Timer className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Training Plan</h3>
              <p className="text-sm text-muted-foreground mb-4">
                AI-personalized nutrition & training tips
              </p>
              <Button variant="success" size="sm" className="w-full pointer-events-none">
                View Plan
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Upcoming Tests */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span>Upcoming Tests</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {athleteData.upcomingTests.map((test, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg border ${
                    test.status === 'ready' 
                      ? 'bg-success/5 border-success/20' 
                      : test.status === 'pending'
                      ? 'bg-accent/5 border-accent/20'
                      : 'bg-muted/5 border-muted'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-medium">{test.name}</h4>
                    <Badge 
                      variant={test.status === 'ready' ? 'default' : 'secondary'}
                      className={
                        test.status === 'ready' 
                          ? 'bg-success text-success-foreground' 
                          : test.status === 'pending'
                          ? 'bg-accent text-accent-foreground'
                          : ''
                      }
                    >
                      {test.status}
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">{test.date}</p>
                  <Button 
                    variant={test.status === 'ready' ? 'success' : 'outline'} 
                    size="sm" 
                    className="w-full"
                    disabled={test.status === 'locked'}
                  >
                    {test.status === 'ready' ? 'Start Now' : test.status === 'pending' ? 'Not Ready' : 'Locked'}
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}

