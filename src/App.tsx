import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Admission from "./pages/Admission";
import Academics from "./pages/Academics";
import Programs from "./pages/Programs";
import Facilities from "./pages/Facilities";
import Disclosure from "./pages/Disclosure";
import Contact from "./pages/Contact";
import Alumni from "./pages/Alumni";
import NotFound from "./pages/NotFound";

// About Subpages
import AboutMarkaz from "./pages/about/Markaz";
import AboutTrust from "./pages/about/Trust";
import AboutRiyadh from "./pages/about/Riyadh";
import AboutResidence from "./pages/about/Residence";
import AboutTestimonials from "./pages/about/Testimonials";
import AboutVirtualTour from "./pages/about/VirtualTour";

// Admission Subpages
import AdmissionTest from "./pages/admission/Test";
import AdmissionApply from "./pages/admission/Apply";
import AdmissionScholarships from "./pages/admission/Scholarships";

// Academic Subpages
import AcademicPrincipal from "./pages/academics/Principal";
import AcademicZeeque from "./pages/academics/Zeeque";
import AcademicCalendar from "./pages/academics/Calendar";
import AcademicLearning from "./pages/academics/Learning";
import AcademicEvents from "./pages/academics/Events";
import AcademicNews from "./pages/academics/News";
import AcademicGallery from "./pages/academics/Gallery";
import AcademicLittleWorld from "./pages/academics/LittleWorld";
import AcademicCareer from "./pages/academics/Career";
import AcademicTCDownload from "./pages/academics/TCDownload";
import AcademicSummerCamp from "./pages/academics/SummerCamp";

// Program Subpages
import ProgramAGSTalks from "./pages/programs/AGSTalks";
import ProgramStreetBuzz from "./pages/programs/StreetBuzz";
import ProgramPalette from "./pages/programs/Palette";
import ProgramConnected from "./pages/programs/Connected";
import ProgramRankkhel from "./pages/programs/Rankkhel";
import ProgramSkillSurge from "./pages/programs/SkillSurge";
import ProgramKhelo from "./pages/programs/Khelo";
import ProgramCrossRoads from "./pages/programs/CrossRoads";

// Academic Level Pages
import FoundationPage from "./pages/programs/academic-levels/Foundation";
import PreparatoryPage from "./pages/programs/academic-levels/Preparatory";
import MiddlePage from "./pages/programs/academic-levels/Middle";
import SecondaryPage from "./pages/programs/academic-levels/Secondary";
import SeniorSecondaryPage from "./pages/programs/academic-levels/SeniorSecondary";
import SpecialPage from "./pages/programs/academic-levels/Special";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/markaz" element={<AboutMarkaz />} />
          <Route path="/about/trust" element={<AboutTrust />} />
          <Route path="/about/riyadh" element={<AboutRiyadh />} />
          <Route path="/about/residence" element={<AboutResidence />} />
          <Route path="/about/testimonials" element={<AboutTestimonials />} />
          <Route path="/about/virtual-tour" element={<AboutVirtualTour />} />

          <Route path="/admission" element={<Admission />} />
          <Route path="/admission/test" element={<AdmissionTest />} />
          <Route path="/admission/apply" element={<AdmissionApply />} />
          <Route path="/admission/scholarships" element={<AdmissionScholarships />} />

          <Route path="/academics" element={<Academics />} />
          <Route path="/academics/principal" element={<AcademicPrincipal />} />
          <Route path="/academics/zeeque" element={<AcademicZeeque />} />
          <Route path="/academics/calendar" element={<AcademicCalendar />} />
          <Route path="/academics/learning" element={<AcademicLearning />} />
          <Route path="/academics/events" element={<AcademicEvents />} />
          <Route path="/academics/news" element={<AcademicNews />} />
          <Route path="/academics/gallery" element={<AcademicGallery />} />
          <Route path="/academics/little-world" element={<AcademicLittleWorld />} />
          <Route path="/academics/career" element={<AcademicCareer />} />
          <Route path="/academics/tc-download" element={<AcademicTCDownload />} />
          <Route path="/academics/summer-camp" element={<AcademicSummerCamp />} />

          <Route path="/programs" element={<Programs />} />
          <Route path="/programs/foundation" element={<FoundationPage />} />
          <Route path="/programs/preparatory" element={<PreparatoryPage />} />
          <Route path="/programs/middle" element={<MiddlePage />} />
          <Route path="/programs/secondary" element={<SecondaryPage />} />
          <Route path="/programs/senior-secondary" element={<SeniorSecondaryPage />} />
          <Route path="/programs/special" element={<SpecialPage />} />

          <Route path="/programs/ags-talks" element={<ProgramAGSTalks />} />
          <Route path="/programs/street-buzz" element={<ProgramStreetBuzz />} />
          <Route path="/programs/palette" element={<ProgramPalette />} />
          <Route path="/programs/connected" element={<ProgramConnected />} />
          <Route path="/programs/rankkhel" element={<ProgramRankkhel />} />
          <Route path="/programs/skill-surge" element={<ProgramSkillSurge />} />
          <Route path="/programs/khelo" element={<ProgramKhelo />} />
          <Route path="/programs/cross-roads" element={<ProgramCrossRoads />} />

          <Route path="/facilities" element={<Facilities />} />
          <Route path="/disclosure" element={<Disclosure />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/alumni" element={<Alumni />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;