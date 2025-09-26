import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      fontFamily: {
        'inter': ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          glow: "hsl(var(--primary-glow))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        success: {
          DEFAULT: "hsl(var(--success))",
          foreground: "hsl(var(--success-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        // AI Interface Colors
        ai: {
          processing: "hsl(var(--ai-processing))",
          success: "hsl(var(--ai-success))",
          warning: "hsl(var(--ai-warning))",
          error: "hsl(var(--ai-error))",
        },
        // Performance Metrics
        metric: {
          excellent: "hsl(var(--metric-excellent))",
          good: "hsl(var(--metric-good))",
          average: "hsl(var(--metric-average))",
          poor: "hsl(var(--metric-poor))",
        },
        // Gamification Badges
        badge: {
          gold: "hsl(var(--badge-gold))",
          silver: "hsl(var(--badge-silver))",
          bronze: "hsl(var(--badge-bronze))",
        },
        // Talent Gradient Colors
        talent: {
          start: "hsl(var(--talent-gradient-start))",
          end: "hsl(var(--talent-gradient-end))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        button: "var(--radius-button)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        // AI & Talent Discovery Animations
        "talent-pulse": {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.8" },
        },
        "ai-scan": {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        "score-fill": {
          "0%": { strokeDashoffset: "251.2" },
          "100%": { strokeDashoffset: "0" },
        },
        "badge-glow": {
          "0%, 100%": { boxShadow: "0 0 5px hsl(var(--badge-gold))" },
          "50%": { boxShadow: "0 0 20px hsl(var(--badge-gold)), 0 0 30px hsl(var(--badge-gold))" },
        },
        "data-flow": {
          "0%": { transform: "translateY(0px)", opacity: "0" },
          "50%": { opacity: "1" },
          "100%": { transform: "translateY(-20px)", opacity: "0" },
        },
        "performance-bar": {
          "0%": { width: "0%" },
          "100%": { width: "var(--performance-width)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        // Custom AI Talent Discovery Animations
        "talent-pulse": "talent-pulse 2s ease-in-out infinite",
        "ai-scan": "ai-scan 2s linear infinite",
        "score-fill": "score-fill 2s ease-out",
        "badge-glow": "badge-glow 2s ease-in-out infinite",
        "data-flow": "data-flow 3s ease-in-out infinite",
        "performance-bar": "performance-bar 1.5s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
