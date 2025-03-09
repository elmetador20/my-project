import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import NotFound from "./pages/not-found";
import Home from "./pages/home";
import Features from "./pages/features";
import Pricing from "./pages/pricing";
import Partnerships from "./pages/partnerships";
import ResumeUpload from "./pages/resume-upload";
import AnalysisResults from "./pages/analysis-results";
import CareerRoadmap from "./pages/career-roadmap";
import CourseRecommendations from "./pages/course-recommendations";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/features" component={Features} />
      <Route path="/pricing" component={Pricing} />
      <Route path="/partnerships" component={Partnerships} />
      <Route path="/resume-upload" component={ResumeUpload} />
      <Route path="/analysis-results" component={AnalysisResults} />
      <Route path="/career-roadmap" component={CareerRoadmap} />
      <Route path="/course-recommendations" component={CourseRecommendations} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Router />
      <Toaster />
    </QueryClientProvider>
  );
}

export default App;
