import { Switch, Route, useLocation } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { AnimatePresence } from "framer-motion";

import Home from "@/pages/home";
import Platform from "@/pages/platform";
import EdgeAI from "@/pages/edge-ai";
import PhysicalAI from "@/pages/physical-ai";
import Security from "@/pages/security";
import UseCases from "@/pages/use-cases";
import NotFound from "@/pages/not-found";
import Layout from "@/components/layout/Layout";

function Router() {
  const [location] = useLocation();
  
  return (
    <Layout>
      <AnimatePresence mode="wait">
        <Switch location={location} key={location}>
          <Route path="/" component={Home} />
          <Route path="/platform" component={Platform} />
          <Route path="/edge-ai" component={EdgeAI} />
          <Route path="/physical-ai" component={PhysicalAI} />
          <Route path="/security" component={Security} />
          <Route path="/use-cases" component={UseCases} />
          <Route component={NotFound} />
        </Switch>
      </AnimatePresence>
    </Layout>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
