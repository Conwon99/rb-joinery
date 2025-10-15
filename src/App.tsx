import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { useEffect } from "react";
import Index from "./pages/Index";
import Glasgow from "./pages/Glasgow";
import Ayrshire from "./pages/Ayrshire";
import HouseExtensions from "./pages/HouseExtensions";
import LoftConversions from "./pages/LoftConversions";
import GardenRooms from "./pages/GardenRooms";
import KitchenInstallation from "./pages/KitchenInstallation";
import HomeImprovements from "./pages/HomeImprovements";
import NotFound from "./pages/NotFound";
import { trackPageView } from "./utils/analytics";

const queryClient = new QueryClient();

// Component to track page views
const PageTracker = () => {
  const location = useLocation();

  useEffect(() => {
    const pageTitle = document.title;
    trackPageView(location.pathname, pageTitle);
  }, [location]);

  return null;
};

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <PageTracker />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/glasgow" element={<Glasgow />} />
            <Route path="/ayrshire" element={<Ayrshire />} />
            <Route path="/house-extensions" element={<HouseExtensions />} />
            <Route path="/loft-conversions" element={<LoftConversions />} />
            <Route path="/garden-rooms" element={<GardenRooms />} />
            <Route path="/kitchen-installation" element={<KitchenInstallation />} />
            <Route path="/home-improvements" element={<HomeImprovements />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
