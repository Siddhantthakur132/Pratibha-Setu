import { cn } from "@/lib/utils"

interface TalentScoreRingProps {
  score: number // 0-100
  size?: 'sm' | 'md' | 'lg' | 'xl'
  showLabel?: boolean
  label?: string
  className?: string
}

export function TalentScoreRing({ 
  score, 
  size = 'md', 
  showLabel = true, 
  label = 'TSI Score',
  className 
}: TalentScoreRingProps) {
  const sizeConfig = {
    sm: { radius: 30, strokeWidth: 4, textSize: 'text-sm', containerSize: 'w-16 h-16' },
    md: { radius: 45, strokeWidth: 6, textSize: 'text-lg', containerSize: 'w-24 h-24' },
    lg: { radius: 60, strokeWidth: 8, textSize: 'text-2xl', containerSize: 'w-32 h-32' },
    xl: { radius: 80, strokeWidth: 10, textSize: 'text-3xl', containerSize: 'w-40 h-40' }
  }

  const config = sizeConfig[size]
  const circumference = 2 * Math.PI * config.radius
  const strokeDashoffset = circumference - (score / 100) * circumference

  const getScoreColor = (score: number) => {
    if (score >= 80) return 'hsl(var(--metric-excellent))'
    if (score >= 60) return 'hsl(var(--metric-good))'
    if (score >= 40) return 'hsl(var(--metric-average))'
    return 'hsl(var(--metric-poor))'
  }

  const getScoreGradient = (score: number) => {
    if (score >= 80) return 'from-green-400 to-green-600'
    if (score >= 60) return 'from-yellow-400 to-yellow-600'
    if (score >= 40) return 'from-orange-400 to-orange-600'
    return 'from-red-400 to-red-600'
  }

  return (
    <div className={cn("flex flex-col items-center space-y-2", className)}>
      <div className={cn("relative", config.containerSize)}>
        <svg
          className="transform -rotate-90"
          width="100%"
          height="100%"
          viewBox={`0 0 ${(config.radius + config.strokeWidth) * 2} ${(config.radius + config.strokeWidth) * 2}`}
        >
          {/* Background circle */}
          <circle
            cx={config.radius + config.strokeWidth}
            cy={config.radius + config.strokeWidth}
            r={config.radius}
            stroke="hsl(var(--muted))"
            strokeWidth={config.strokeWidth}
            fill="transparent"
          />
          
          {/* Progress circle */}
          <circle
            cx={config.radius + config.strokeWidth}
            cy={config.radius + config.strokeWidth}
            r={config.radius}
            stroke={getScoreColor(score)}
            strokeWidth={config.strokeWidth}
            fill="transparent"
            strokeDasharray={circumference}
            strokeDashoffset={strokeDashoffset}
            strokeLinecap="round"
            className="transition-all duration-1000 ease-out animate-score-fill"
          />
        </svg>
        
        {/* Score text */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center">
            <div className={cn("font-bold", config.textSize, `bg-gradient-to-br ${getScoreGradient(score)} bg-clip-text text-transparent`)}>
              {score}
            </div>
            <div className="text-xs text-muted-foreground">TSI</div>
          </div>
        </div>
      </div>
      
      {showLabel && (
        <div className="text-center">
          <p className="text-sm font-medium text-foreground">{label}</p>
        </div>
      )}
    </div>
  )
}