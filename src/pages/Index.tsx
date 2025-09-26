import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import AthleteDashboard from "./AthleteDashboard"
import CoachDashboard from "./CoachDashboard"
import { 
  Activity, 
  Users, 
  Settings, 
  TrendingUp,
  Globe,
  Shield,
  Zap,
  Target
} from "lucide-react"
import heroImage from "@/assets/hero-sports-ai.jpg"

export default function Index() {
  const [selectedRole, setSelectedRole] = useState<'athlete' | 'coach' | 'admin' | null>(null)

  if (!selectedRole) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <img
              src={heroImage}
              alt="AI-powered sports analytics"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-primary/90 to-primary-glow/80" />
          </div>
          
          <div className="relative container mx-auto px-4 py-24 lg:py-32">
            <div className="max-w-3xl">
              <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
                Discover Athletic
                <span className="block bg-gradient-to-r from-accent to-accent/80 bg-clip-text text-transparent">
                  Talent with AI
                </span>
              </h1>
              <p className="text-xl text-white/90 mb-8 leading-relaxed">
                Revolutionary AI-powered talent discovery system designed for India's diverse athletic landscape. 
                Real-time performance analysis, multilingual support, and comprehensive talent assessment.
              </p>
              
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Globe className="h-4 w-4 mr-2" />
                  10+ Indian Languages
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Zap className="h-4 w-4 mr-2" />
                  Real-time AI Analysis
                </Badge>
                <Badge variant="secondary" className="bg-white/20 text-white border-white/30 px-4 py-2">
                  <Shield className="h-4 w-4 mr-2" />
                  Offline Mode Ready
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Role Selection */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Choose Your Role</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Select your role to access personalized features and dashboards designed for your needs
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Athlete Role */}
              <Card className="card-hover cursor-pointer group" onClick={() => setSelectedRole('athlete')}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-success to-success/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Activity className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Athlete</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Track your performance, complete AI challenges, and unlock your athletic potential
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-success mr-2" />
                      Fitness test recording with AI analysis
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-success mr-2" />
                      Cognitive & behavioral games
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-success mr-2" />
                      Performance dashboard & TSI score
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-success mr-2" />
                      AI training recommendations
                    </li>
                  </ul>
                  <Button variant="success" className="w-full">
                    Enter as Athlete
                  </Button>
                </CardContent>
              </Card>

              {/* Coach Role */}
              <Card className="card-hover cursor-pointer group" onClick={() => setSelectedRole('coach')}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-primary to-primary-glow rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Users className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Coach</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Discover and nurture talent with AI-powered insights and comprehensive analytics
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      AI-filtered athlete discovery
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      Video review & feedback tools
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      Geo talent heatmap
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-primary mr-2" />
                      Athlete comparison tools
                    </li>
                  </ul>
                  <Button variant="hero" className="w-full">
                    Enter as Coach
                  </Button>
                </CardContent>
              </Card>

              {/* Admin Role */}
              <Card className="card-hover cursor-pointer group" onClick={() => setSelectedRole('admin')}>
                <CardHeader className="text-center pb-4">
                  <div className="w-20 h-20 bg-gradient-to-br from-accent to-accent/80 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                    <Settings className="h-10 w-10 text-white" />
                  </div>
                  <CardTitle className="text-2xl">Admin</CardTitle>
                </CardHeader>
                <CardContent className="text-center">
                  <p className="text-muted-foreground mb-6">
                    Manage the system, monitor performance, and configure AI parameters
                  </p>
                  <ul className="text-left space-y-2 mb-6">
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      User & role management
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      System health monitoring
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      Analytics dashboard
                    </li>
                    <li className="flex items-center text-sm">
                      <Target className="h-4 w-4 text-accent mr-2" />
                      AI model configuration
                    </li>
                  </ul>
                  <Button variant="warning" className="w-full">
                    Enter as Admin
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">Powered by Advanced AI</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cutting-edge technology designed specifically for India's diverse athletic ecosystem
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-ai-processing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Activity className="h-8 w-8 text-ai-processing" />
                </div>
                <h3 className="font-semibold mb-2">Real-time Analysis</h3>
                <p className="text-sm text-muted-foreground">
                  Instant pose detection and performance metrics during tests
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold mb-2">Cheat Detection</h3>
                <p className="text-sm text-muted-foreground">
                  AI-powered anomaly detection to ensure test integrity
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Globe className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-semibold mb-2">Multilingual Support</h3>
                <p className="text-sm text-muted-foreground">
                  Voice guidance in 10+ Indian languages for accessibility
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold mb-2">Talent Analytics</h3>
                <p className="text-sm text-muted-foreground">
                  Comprehensive scoring system with predictive insights
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }

  // Redirect based on role selection
  if (selectedRole === 'athlete') {
    return <AthleteDashboard />
  }
  if (selectedRole === 'coach') {
    return <CoachDashboard />
  }
  if (selectedRole === 'admin') {
    // For now, redirect to coach dashboard as admin dashboard is not built yet
    return <CoachDashboard />
  }

  return null
}
