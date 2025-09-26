import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AthleteDashboard from "./pages/AthleteDashboard";
import CoachDashboard from "./pages/CoachDashboard";
import AdminDashboard from "./pages/AdminDashboard";
import NotFound from "./pages/NotFound";
import UserManagementPage from "./pages/admin/UserManagementPage";
import AnalyticsPage from "./pages/admin/AnalyticsPage";
import AIConfigPage from "./pages/admin/AIConfigPage";
import SettingsPage from "./pages/admin/SettingsPage";
import ReviewQueuePage from "./pages/coach/ReviewQueuePage";
import HeatmapPage from "./pages/coach/HeatmapPage";
import ComparisonToolPage from "./pages/coach/ComparisonToolPage";
import CoachAnalyticsPage from "./pages/coach/CoachAnalyticsPage";
import AthleteProfilePage from "./pages/coach/AthleteProfilePage";
import FitnessTestPage from "./pages/athlete/FitnessTestPage";
import CognitiveGamesPage from "./pages/athlete/CognitiveGamesPage.tsx";
import TrainingPlanPage from "./pages/athlete/TrainingPlanPage"; // New page imported

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* BrowserRouter has been removed from here as it is already in main.tsx */}
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/athlete" element={<AthleteDashboard />} />
        <Route path="/coach" element={<CoachDashboard />} />
        <Route path="/admin" element={<AdminDashboard />} />

        {/* Admin Routes */}
        <Route path="/admin/user-management" element={<UserManagementPage />} />
        <Route path="/admin/analytics" element={<AnalyticsPage />} />
        <Route path="/admin/ai-config" element={<AIConfigPage />} />
        <Route path="/admin/settings" element={<SettingsPage />} />

        {/* Coach Routes */}
        <Route path="/coach/review-queue" element={<ReviewQueuePage />} />
        <Route path="/coach/heatmap" element={<HeatmapPage />} />
        <Route path="/coach/comparison" element={<ComparisonToolPage />} />
        <Route path="/coach/analytics" element={<CoachAnalyticsPage />} />
        <Route path="/coach/athlete/:athleteId" element={<AthleteProfilePage />} />
        
        {/* Athlete Routes */}
        <Route path="/athlete/fitness-tests" element={<FitnessTestPage />} />
        <Route path="/athlete/cognitive-games" element={<CognitiveGamesPage />} />
        <Route path="/athlete/training-plan" element={<TrainingPlanPage />} />


        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;

