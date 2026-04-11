import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PoliciaSection from "./components/PoliciaSection";
import CulinariaSection from "./components/CulinariaSection";
import CuriosidadesSection from "./components/CuriosidadesSection";
import CulturaSection from "./components/CulturaSection";
import HistoriaSection from "./components/HistoriaSection";
import EconomiaSection from "./components/EconomiaSection";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/policia" element={<PoliciaSection />} />
          <Route path="/culinaria" element={<CulinariaSection />} />
          <Route path="/curiosidades" element={<CuriosidadesSection />} />
          <Route path="/cultura" element={<CulturaSection />} />
          <Route path="/historia" element={<HistoriaSection />} />
          <Route path="/economia" element={<EconomiaSection />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
