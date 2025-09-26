import { useState } from "react";
import { Button } from "@/components/ui/enhanced-button";
import {
  Menu,
  X,
  Activity,
  Users,
  Settings,
  LayoutDashboard,
  Home,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface HeaderProps {
  userRole?: "athlete" | "coach" | "admin" | null;
}

export function Header({ userRole }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const getRoleIcon = () => {
    switch (userRole) {
      case "athlete":
        return <Activity className="h-5 w-5" />;
      case "coach":
        return <Users className="h-5 w-5" />;
      case "admin":
        return <Settings className="h-5 w-5" />;
      default:
        return null;
    }
  };

  const getRoleLabel = () => {
    switch (userRole) {
      case "athlete":
        return "Athlete Dashboard";
      case "coach":
        return "Coach Portal";
      case "admin":
        return "Admin Panel";
      default:
        return "AI Talent Discovery";
    }
  };

  // Helper function to determine link style
  const getLinkClass = (path: string) => {
    // Also highlight parent route
    if (path !== '/' && location.pathname.startsWith(path)) {
       return "text-primary font-semibold";
    }
    return location.pathname === path
      ? "text-primary font-semibold"
      : "text-foreground hover:text-primary transition-colors";
  };
  
  const getMobileLinkClass = (path: string) => {
     if (path !== '/' && location.pathname.startsWith(path)) {
       return "px-3 py-2 text-primary bg-primary/5 rounded-md";
    }
    return location.pathname === path
      ? "px-3 py-2 text-primary bg-primary/5 rounded-md"
      : "px-3 py-2 text-foreground hover:text-primary hover:bg-primary/5 rounded-md transition-colors";
  };


  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Title */}
          <div className="flex items-center space-x-3">
            <Link to={userRole ? `/${userRole}`: '/'} className="flex items-center space-x-3">
              <div className="bg-gradient-to-r from-primary to-primary-glow p-2 rounded-lg">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-foreground">Pratibha Setu</h1>
                <p className="text-xs text-muted-foreground">
                  {getRoleLabel()}
                </p>
              </div>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {!userRole && (
              <>
                <Link to="/athlete" className={getLinkClass('/athlete')}>
                  Athlete
                </Link>
                <Link to="/coach" className={getLinkClass('/coach')}>
                  Coach
                </Link>
                <Link to="/admin" className={getLinkClass('/admin')}>
                  Admin
                </Link>
              </>
            )}
            {userRole === "athlete" && (
              <>
                <Link to="/athlete" className={getLinkClass("/athlete")}>Dashboard</Link>
                <Link to="/athlete/fitness-tests" className={getLinkClass("/athlete/fitness-tests")}>Fitness Tests</Link>
                <Link to="/athlete/cognitive-games" className={getLinkClass("/athlete/cognitive-games")}>Cognitive Games</Link>
                <Link to="/athlete/training-plan" className={getLinkClass("/athlete/training-plan")}>Training Plan</Link>
              </>
            )}
            {userRole === "coach" && (
              <>
                <Link to="/coach" className={getLinkClass("/coach")}>Dashboard</Link>
                <Link to="/coach/heatmap" className={getLinkClass("/coach/heatmap")}>Talent Map</Link>
                <Link to="/coach/comparison" className={getLinkClass("/coach/comparison")}>Compare</Link>
                <Link to="/coach/review-queue" className={getLinkClass("/coach/review-queue")}>Review Queue</Link>
              </>
            )}
            {userRole === "admin" && (
              <>
                <Link to="/admin" className={getLinkClass("/admin")}>Dashboard</Link>
                <Link to="/admin/user-management" className={getLinkClass("/admin/user-management")}>Users</Link>
                <Link to="/admin/analytics" className={getLinkClass("/admin/analytics")}>Analytics</Link>
                <Link to="/admin/settings" className={getLinkClass("/admin/settings")}>Settings</Link>
              </>
            )}
          </nav>

          {/* User Actions */}
          <div className="flex items-center space-x-3">
            {userRole && (
              <div className="flex items-center space-x-2 px-3 py-1 bg-primary/10 rounded-lg">
                {getRoleIcon()}
                <span className="text-sm font-medium text-primary capitalize">
                  {userRole}
                </span>
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
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="sm" asChild>
                  <Link to="/">
                    <Home className="h-4 w-4 mr-2" />
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
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden border-t border-border">
            <nav className="flex flex-col space-y-2 py-4">
              {!userRole && (
                <>
                  <Link to="/athlete" className={getMobileLinkClass('/athlete')}>Athlete Dashboard</Link>
                  <Link to="/coach" className={getMobileLinkClass('/coach')}>Coach Portal</Link>
                  <Link to="/admin" className={getMobileLinkClass('/admin')}>Admin Panel</Link>
                </>
              )}
               {userRole === 'athlete' && (
                <>
                  <Link to="/athlete" className={getMobileLinkClass("/athlete")}>Dashboard</Link>
                  <Link to="/athlete/fitness-tests" className={getMobileLinkClass("/athlete/fitness-tests")}>Fitness Tests</Link>
                  <Link to="/athlete/cognitive-games" className={getMobileLinkClass("/athlete/cognitive-games")}>Cognitive Games</Link>
                  <Link to="/athlete/training-plan" className={getMobileLinkClass("/athlete/training-plan")}>Training Plan</Link>
                </>
              )}
              {userRole === 'coach' && (
                <>
                  <Link to="/coach" className={getMobileLinkClass("/coach")}>Dashboard</Link>
                  <Link to="/coach/heatmap" className={getMobileLinkClass("/coach/heatmap")}>Talent Map</Link>
                  <Link to="/coach/comparison" className={getMobileLinkClass("/coach/comparison")}>Compare</Link>
                  <Link to="/coach/review-queue" className={getMobileLinkClass("/coach/review-queue")}>Review Queue</Link>
                </>
              )}
              {userRole === 'admin' && (
                <>
                  <Link to="/admin" className={getMobileLinkClass('/admin')}>Dashboard</Link>
                  <Link to="/admin/user-management" className={getMobileLinkClass('/admin/user-management')}>Users</Link>
                  <Link to="/admin/analytics" className={getMobileLinkClass('/admin/analytics')}>Analytics</Link>
                  <Link to="/admin/settings" className={getMobileLinkClass('/admin/settings')}>Settings</Link>
                </>
              )}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

