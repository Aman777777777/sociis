import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Preloader from "./components/Preloader";
import CookieBanner from "./components/CookieBanner";
import Index from "./pages/Index";
import Governance from "./pages/Governance";
import AmbassadorProfile from "./pages/AmbassadorProfile";
import Charter from "./pages/Charter";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import NotFound from "./pages/NotFound";

// Create query client with optimized settings for mobile
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000,
      gcTime: 10 * 60 * 1000,
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [showPreloader, setShowPreloader] = useState(() => {
    const hasLoaded = sessionStorage.getItem("sociis-loaded");
    return !hasLoaded;
  });

  useEffect(() => {
    if (!showPreloader) {
      sessionStorage.setItem("sociis-loaded", "true");
    }
  }, [showPreloader]);

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.removeItem("sociis-loaded");
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => window.removeEventListener("beforeunload", handleBeforeUnload);
  }, []);

  useEffect(() => {
    const handleRejection = (event: PromiseRejectionEvent) => {
      console.error("Unhandled rejection:", event.reason);
      event.preventDefault();
    };
    const handleError = (event: ErrorEvent) => {
      console.error("Global error:", event.error);
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
            <Route path="/governance" element={<Governance />} />
            <Route path="/ambassadors/:slug" element={<AmbassadorProfile />} />
            <Route path="/charter" element={<Charter />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
            <Route path="/terms-of-service" element={<TermsOfService />} />
            <Route path="/cookie-policy" element={<CookiePolicy />} />
            {/* Redirect old route */}
            <Route path="/who-is-inside" element={<Governance />} />
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
