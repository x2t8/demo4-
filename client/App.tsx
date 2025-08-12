import "./global.css";
import React from "react";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/DarkModeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ScamTypes from "./pages/ScamTypes";
import DigitalEthics from "./pages/DigitalEthics";
import AISafety from "./pages/AISafety";
import DigitalLaw from "./pages/DigitalLaw";
import DigitalSkills from "./pages/DigitalSkills";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/scam-types" element={<ScamTypes />} />
            <Route path="/digital-ethics" element={<DigitalEthics />} />
            <Route path="/ai-safety" element={<AISafety />} />
            <Route path="/digital-law" element={<DigitalLaw />} />
            <Route path="/digital-skills" element={<DigitalSkills />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

// Only create root once using global tracking
const container = document.getElementById("root")!;
if (!(window as any).__APP_ROOT__) {
  const root = createRoot(container);
  (window as any).__APP_ROOT__ = root;
  root.render(<App />);
} else {
  // Re-render on existing root for HMR
  (window as any).__APP_ROOT__.render(<App />);
}
