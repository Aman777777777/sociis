import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { toast } from "sonner";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Preloader from "./components/Preloader";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import WhoIsInside from "./pages/WhoIsInside";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

// Create query client with optimized settings for mobile
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (formerly cacheTime)
      retry: 1,
      refetchOnWindowFocus: false, // Reduce refetches on mobile
    },
  },
});

const App = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    // Check if this is a fresh page load (not HMR)
    const hasLoaded = sessionStorage.getItem("sociis-loaded");
    return !hasLoaded;
  });

  useEffect(() => {
    // Mark as loaded after preloader completes
    if (!showPreloader) {
      sessionStorage.setItem("sociis-loaded", "true");
    }
  }, [showPreloader]);

  // Clear on actual page unload to show preloader on hard refresh
  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("sociis-loaded");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  // Global error handler for unhandled promise rejections (prevents crashes)
  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled rejection:", event.reason);
      // Prevent default console error and app crash
      event.preventDefault();
    };

    const handleError = (event: ErrorEvent) => {
      console.error("Global error:", event.error);
      // Prevent crash on non-critical errors
      if (event.error?.name !== "ChunkLoadError") {
        event.preventDefault();
      }
    };

    window.addEventListener("unhandledrejection", handleRejection);
    window.addEventListener("error", handleError);
    
    return () => {
      window.removeEventListener("unhandledrejection", handleRejection);
      window.removeEventListener("error", handleError);
    };
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showPreloader && <Preloader onComplete={() => setShowPreloader(false)} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-is-inside" element={<WhoIsInside />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieBanner />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
