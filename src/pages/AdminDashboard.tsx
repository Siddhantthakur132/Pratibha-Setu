import { useState } from "react"
import { Header } from "@/components/layout/Header"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { 
  Users, 
  Activity, 
  Settings, 
  BarChart3, 
  Shield, 
  Globe,
  Server,
  AlertTriangle,
  CheckCircle,
  Clock,
  Database,
  Cpu,
  Wifi
} from "lucide-react"

export default function AdminDashboard() {
  // Mock admin data
  const systemStats = {
    totalUsers: 2847,
    activeToday: 423,
    totalTests: 15632,
    aiAccuracy: 94.7,
    systemUptime: 99.8,
    storageUsed: 67,
    apiRequests: 89234,
    errorRate: 0.3
  }

  const recentAlerts = [
    { id: 1, type: 'warning', message: 'High API usage detected in Mumbai region', time: '2 hours ago' },
    { id: 2, type: 'success', message: 'AI model updated successfully', time: '4 hours ago' },
    { id: 3, type: 'info', message: 'New coach registrations: 15 pending approval', time: '6 hours ago' },
    { id: 4, type: 'error', message: 'Sync failed for 3 athletes in Kerala', time: '8 hours ago' }
  ]

  const regionStats = [
    { region: 'Maharashtra', users: 456, growth: 12 },
    { region: 'Karnataka', users: 389, growth: 8 },
    { region: 'Tamil Nadu', users: 367, growth: 15 },
    { region: 'Gujarat', users: 298, growth: 6 },
    { region: 'Punjab', users: 234, growth: 18 }
  ]

  return (
    <div className="min-h-screen bg-background">
      <Header userRole="admin" />
      
      <main className="container mx-auto px-4 py-6">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Admin Control Panel ⚙️
          </h1>
          <p className="text-muted-foreground">
            Monitor system health, manage users, and configure AI parameters across India
          </p>
        </div>

        {/* System Health Overview */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{systemStats.totalUsers.toLocaleString()}</p>
                  <p className="text-sm text-muted-foreground">Total Users</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Activity className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{systemStats.activeToday}</p>
                  <p className="text-sm text-muted-foreground">Active Today</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-ai-processing/10 rounded-full flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-ai-processing" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{systemStats.aiAccuracy}%</p>
                  <p className="text-sm text-muted-foreground">AI Accuracy</p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center">
                  <Server className="h-6 w-6 text-success" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-foreground">{systemStats.systemUptime}%</p>
                  <p className="text-sm text-muted-foreground">System Uptime</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* System Metrics */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <BarChart3 className="h-5 w-5 text-primary" />
                <span>System Performance</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Storage Usage</span>
                    <span className="text-sm font-semibold">{systemStats.storageUsed}%</span>
                  </div>
                  <Progress value={systemStats.storageUsed} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">API Requests (24h)</span>
                    <span className="text-sm font-semibold">{systemStats.apiRequests.toLocaleString()}</span>
                  </div>
                  <Progress value={75} className="h-2" />
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium">Error Rate</span>
                    <span className="text-sm font-semibold text-success">{systemStats.errorRate}%</span>
                  </div>
                  <Progress value={systemStats.errorRate} className="h-2" />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Recent Alerts */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center space-x-2">
                <AlertTriangle className="h-5 w-5 text-accent" />
                <span>System Alerts</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {recentAlerts.map((alert) => (
                  <div key={alert.id} className="flex items-start space-x-3 p-3 bg-muted/30 rounded-lg">
                    <div className={`w-2 h-2 rounded-full mt-2 ${
                      alert.type === 'error' ? 'bg-destructive' :
                      alert.type === 'warning' ? 'bg-accent' :
                      alert.type === 'success' ? 'bg-success' : 'bg-primary'
                    }`} />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{alert.message}</p>
                      <p className="text-xs text-muted-foreground">{alert.time}</p>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Regional Statistics */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Globe className="h-5 w-5 text-primary" />
              <span>Regional User Distribution</span>
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {regionStats.map((region, index) => (
                <div key={index} className="text-center p-4 bg-muted/30 rounded-lg">
                  <h4 className="font-semibold text-foreground mb-2">{region.region}</h4>
                  <p className="text-2xl font-bold text-primary mb-1">{region.users}</p>
                  <div className="flex items-center justify-center space-x-1">
                    <span className="text-xs text-success">+{region.growth}%</span>
                    <span className="text-xs text-muted-foreground">this month</span>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <Card className="card-hover cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-semibold mb-2">User Management</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Manage athletes, coaches, and admin roles
              </p>
              <Button variant="hero" size="sm" className="w-full">
                Manage Users
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-ai-processing/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Cpu className="h-6 w-6 text-ai-processing" />
              </div>
              <h3 className="font-semibold mb-2">AI Configuration</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Adjust AI model parameters and thresholds
              </p>
              <Button variant="ai" size="sm" className="w-full">
                Configure AI
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-success/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart3 className="h-6 w-6 text-success" />
              </div>
              <h3 className="font-semibold mb-2">Analytics Dashboard</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Detailed system and user analytics
              </p>
              <Button variant="success" size="sm" className="w-full">
                View Analytics
              </Button>
            </CardContent>
          </Card>

          <Card className="card-hover cursor-pointer">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Settings className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-semibold mb-2">System Settings</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Configure languages, regions, and features
              </p>
              <Button variant="warning" size="sm" className="w-full">
                Settings
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}