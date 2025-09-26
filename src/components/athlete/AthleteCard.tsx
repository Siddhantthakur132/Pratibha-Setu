import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/enhanced-button"
import { Badge } from "@/components/ui/badge"
import { TalentScoreRing } from "@/components/talent/TalentScoreRing"
import { MapPin, Calendar, Flag, Eye, MessageSquare } from "lucide-react"
import { cn } from "@/lib/utils"

interface AthleteCardProps {
  athlete: {
    id: string
    name: string
    age: number
    location: string
    talentScore: number
    sport: string
    lastActive: string
    hasCheatFlag?: boolean
    profileImage?: string
    badges: string[]
  }
  viewMode?: 'coach' | 'comparison'
  onView?: (athleteId: string) => void
  onCompare?: (athleteId: string) => void
  className?: string
}

export function AthleteCard({ 
  athlete, 
  viewMode = 'coach', 
  onView, 
  onCompare,
  className 
}: AthleteCardProps) {
  return (
    <Card className={cn("card-hover relative overflow-hidden", className)}>
      {/* Cheat Flag Indicator */}
      {athlete.hasCheatFlag && (
        <div className="absolute top-2 right-2 z-10">
          <Badge variant="destructive" className="animate-pulse">
            <Flag className="h-3 w-3 mr-1" />
            Review Needed
          </Badge>
        </div>
      )}

      <CardContent className="p-6">
        <div className="flex items-start space-x-4">
          {/* Profile Image or Avatar */}
          <div className="relative">
            {athlete.profileImage ? (
              <img
                src={athlete.profileImage}
                alt={athlete.name}
                className="w-16 h-16 rounded-full object-cover border-2 border-primary/20"
              />
            ) : (
              <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary to-primary-glow flex items-center justify-center text-white font-semibold text-lg">
                {athlete.name.split(' ').map(n => n[0]).join('')}
              </div>
            )}
            
            {/* Online/Offline Status */}
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-success rounded-full border-2 border-background flex items-center justify-center">
              <div className="w-2 h-2 bg-success rounded-full animate-talent-pulse"></div>
            </div>
          </div>

          {/* Athlete Info */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start justify-between">
              <div>
                <h3 className="font-semibold text-lg text-foreground truncate">{athlete.name}</h3>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                  <span>{athlete.age} years</span>
                  <div className="flex items-center">
                    <MapPin className="h-3 w-3 mr-1" />
                    {athlete.location}
                  </div>
                </div>
              </div>
              
              {/* Talent Score Ring */}
              <TalentScoreRing 
                score={athlete.talentScore} 
                size="sm" 
                showLabel={false}
              />
            </div>

            {/* Sport & Last Active */}
            <div className="flex items-center justify-between mt-3">
              <Badge 
                variant="secondary" 
                className="text-xs"
              >
                {athlete.sport}
              </Badge>
              <div className="flex items-center text-xs text-muted-foreground">
                <Calendar className="h-3 w-3 mr-1" />
                {athlete.lastActive}
              </div>
            </div>

            {/* Badges */}
            {athlete.badges.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-3">
                {athlete.badges.slice(0, 3).map((badge, index) => (
                  <Badge
                    key={index}
                    variant="outline"
                    className="text-xs px-2 py-0.5 bg-badge-gold/10 text-badge-gold border-badge-gold/20"
                  >
                    {badge}
                  </Badge>
                ))}
                {athlete.badges.length > 3 && (
                  <Badge variant="outline" className="text-xs px-2 py-0.5">
                    +{athlete.badges.length - 3}
                  </Badge>
                )}
              </div>
            )}

            {/* Action Buttons */}
            <div className="flex items-center space-x-2 mt-4">
              <Button
                variant="outline"
                size="sm"
                onClick={() => onView?.(athlete.id)}
                className="flex-1"
              >
                <Eye className="h-4 w-4 mr-2" />
                View Profile
              </Button>
              
              {viewMode === 'coach' && (
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={() => onCompare?.(athlete.id)}
                >
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Feedback
                </Button>
              )}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}