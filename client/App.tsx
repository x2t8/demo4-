import "./global.css";
import React, { Suspense } from "react";

import { Toaster } from "@/components/ui/toaster";
import { createRoot } from "react-dom/client";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "@/components/DarkModeProvider";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Lazy load pages for better performance
const Index = React.lazy(() => import("./pages/Index"));
const ScamTypes = React.lazy(() => import("./pages/ScamTypes"));
const DigitalEthics = React.lazy(() => import("./pages/DigitalEthics"));
const AISafety = React.lazy(() => import("./pages/AISafety"));
const DigitalLaw = React.lazy(() => import("./pages/DigitalLaw"));
const DigitalSkills = React.lazy(() => import("./pages/DigitalSkills"));
const NotFound = React.lazy(() => import("./pages/NotFound"));

// Admin pages
const AdminLayout = React.lazy(() => import("./components/AdminLayout"));
const AdminDashboard = React.lazy(() => import("./pages/AdminDashboard"));
const AdminUsers = React.lazy(() => import("./pages/AdminUsers"));
const AdminContent = React.lazy(() => import("./pages/AdminContent"));
const AdminReports = React.lazy(() => import("./pages/AdminReports"));

// Loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-50">
    <div className="text-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
      <p className="text-gray-600">Đang tải trang...</p>
    </div>
  </div>
);

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<PageLoader />}>
            <Routes>
              {/* Public routes */}
              <Route path="/" element={<Index />} />
              <Route path="/scam-types" element={<ScamTypes />} />
              <Route path="/digital-ethics" element={<DigitalEthics />} />
              <Route path="/ai-safety" element={<AISafety />} />
              <Route path="/digital-law" element={<DigitalLaw />} />
              <Route path="/digital-skills" element={<DigitalSkills />} />

              {/* Admin routes */}
              <Route path="/admin" element={<AdminLayout />}>
                <Route index element={<AdminDashboard />} />
                <Route path="users" element={<AdminUsers />} />
                <Route path="content" element={<AdminContent />} />
                <Route path="reports" element={<AdminDashboard />} />
                <Route path="security" element={<AdminDashboard />} />
                <Route path="settings" element={<AdminDashboard />} />
              </Route>

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
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
