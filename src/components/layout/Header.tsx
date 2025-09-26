import { useState } from "react"
import { Button } from "@/components/ui/enhanced-button"
import { Menu, X, Activity, Users, Settings } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

interface HeaderProps {
  userRole?: 'athlete' | 'coach' | 'admin' | null
}

export function Header({ userRole }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const getRoleIcon = () => {
    switch (userRole) {
      case 'athlete': return <Activity className="h-5 w-5" />
      case 'coach': return <Users className="h-5 w-5" />
      case 'admin': return <Settings className="h-5 w-5" />
      default: return null
    }
  }

  const getRoleLabel = () => {
    switch (userRole) {
      case 'athlete': return 'Athlete Dashboard'
      case 'coach': return 'Coach Portal'
      case 'admin': return 'Admin Panel'
      default: return 'AI Talent Discovery'
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">TalentAI</h1>
                <p className="text-xs text-muted-foreground">{getRoleLabel()}</p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {!userRole && (
              <>
                <Link to="/athlete" className="text-foreground hover:text-primary transition-colors">Athlete</Link>
                <Link to="/coach" className="text-foreground hover:text-primary transition-colors">Coach</Link>
                <Link to="/admin" className="text-foreground hover:text-primary transition-colors">Admin</Link>
              </>
            )}
            {userRole === 'athlete' && (
              <>
                <a href="#dashboard" className="text-foreground hover:text-primary transition-colors">Dashboard</a>
                <a href="#fitness" className="text-foreground hover:text-primary transition-colors">Fitness Tests</a>
                <a href="#games" className="text-foreground hover:text-primary transition-colors">Cognitive Games</a>
                <a href="#profile" className="text-foreground hover:text-primary transition-colors">Profile</a>
              </>
            )}
            {userRole === 'coach' && (
              <>
                <a href="#athletes" className="text-foreground hover:text-primary transition-colors">Athletes</a>
                <a href="#heatmap" className="text-foreground hover:text-primary transition-colors">Talent Map</a>
                <a href="#compare" className="text-foreground hover:text-primary transition-colors">Compare</a>
                <a href="#analytics" className="text-foreground hover:text-primary transition-colors">Analytics</a>
              </>
            )}
            {userRole === 'admin' && (
              <>
                <a href="#users" className="text-foreground hover:text-primary transition-colors">Users</a>
                <a href="#system" className="text-foreground hover:text-primary transition-colors">System Health</a>
                <a href="#analytics" className="text-foreground hover:text-primary transition-colors">Analytics</a>
                <a href="#settings" className="text-foreground hover:text-primary transition-colors">Settings</a>
              </>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {userRole && (
              <div className="flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-lg">
                {getRoleIcon()}
                <span className="text-sm font-medium text-primary capitalize">{userRole}</span>
              </div>
            )}
            
            {!userRole ? (
              <div className="flex items-center space-x-2">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">Home</Link>
                </Button>
                <Button variant="hero" size="sm" asChild>
                  <Link to="/athlete">Get Started</Link>
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-3">
                <Button variant="outline" size="sm" asChild>
                  <Link to="/">
                    <Settings className="h-4 w-4 mr-2" />
                    Home
                  </Link>
                </Button>
              </div>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col space-y-2 py-4">
              {!userRole && (
                <>
                  <Link to="/athlete" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Athlete Dashboard</Link>
                  <Link to="/coach" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Coach Portal</Link>
                  <Link to="/admin" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Admin Panel</Link>
                </>
              )}
              {userRole === 'athlete' && (
                <>
                  <a href="#dashboard" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Dashboard</a>
                  <a href="#fitness" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Fitness Tests</a>
                  <a href="#games" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Cognitive Games</a>
                  <a href="#profile" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Profile</a>
                </>
              )}
              {userRole === 'coach' && (
                <>
                  <a href="#athletes" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Athletes</a>
                  <a href="#heatmap" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Talent Map</a>
                  <a href="#compare" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Compare</a>
                  <a href="#analytics" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Analytics</a>
                </>
              )}
              {userRole === 'admin' && (
                <>
                  <a href="#users" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Users</a>
                  <a href="#system" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">System Health</a>
                  <a href="#analytics" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Analytics</a>
                  <a href="#settings" className="px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors">Settings</a>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}