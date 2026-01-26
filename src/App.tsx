import { useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTopOnMount from "./components/ScrollToTopOnMount";
import Preloader from "./components/Preloader";
import Index from "./pages/Index";
import WhoIsInside from "./pages/WhoIsInside";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {isLoading && <Preloader onComplete={() => setIsLoading(false)} />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnMount />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/who-is-inside" element={<WhoIsInside />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
