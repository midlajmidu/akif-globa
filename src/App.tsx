import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded pages
const Index = lazy(() => import("./pages/Index"));
const About = lazy(() => import("./pages/About"));
const Admission = lazy(() => import("./pages/Admission"));
const Academics = lazy(() => import("./pages/Academics"));
const Programs = lazy(() => import("./pages/Programs"));
const Facilities = lazy(() => import("./pages/Facilities"));
const Disclosure = lazy(() => import("./pages/Disclosure"));
const Contact = lazy(() => import("./pages/Contact"));
const Alumni = lazy(() => import("./pages/Alumni"));
const NotFound = lazy(() => import("./pages/NotFound"));

// About Subpages
const AboutMarkaz = lazy(() => import("./pages/about/Markaz"));
const AboutTrust = lazy(() => import("./pages/about/Trust"));
const AboutRiyadh = lazy(() => import("./pages/about/Riyadh"));
const AboutResidence = lazy(() => import("./pages/about/Residence"));
const AboutTestimonials = lazy(() => import("./pages/about/Testimonials"));
const AboutVirtualTour = lazy(() => import("./pages/about/VirtualTour"));

// Admission Subpages
const AdmissionTest = lazy(() => import("./pages/admission/Test"));
const AdmissionApply = lazy(() => import("./pages/admission/Apply"));
const AdmissionScholarships = lazy(() => import("./pages/admission/Scholarships"));

// Academic Subpages
const AcademicPrincipal = lazy(() => import("./pages/academics/Principal"));
const AcademicZeeque = lazy(() => import("./pages/academics/Zeeque"));
const AcademicCalendar = lazy(() => import("./pages/academics/Calendar"));
const AcademicLearning = lazy(() => import("./pages/academics/Learning"));
const AcademicNews = lazy(() => import("./pages/academics/News"));
const AcademicGallery = lazy(() => import("./pages/academics/Gallery"));
const AcademicCareer = lazy(() => import("./pages/academics/Career"));
const AcademicTCDownload = lazy(() => import("./pages/academics/TCDownload"));
const AcademicSummerCamp = lazy(() => import("./pages/academics/SummerCamp"));

// Program Subpages
const ProgramAGSTalks = lazy(() => import("./pages/programs/AGSTalks"));
const ProgramPalette = lazy(() => import("./pages/programs/Palette"));
const ProgramConnected = lazy(() => import("./pages/programs/Connected"));
const ProgramRankkhel = lazy(() => import("./pages/programs/Rankkhel"));
const ProgramSkillSurge = lazy(() => import("./pages/programs/SkillSurge"));
const ProgramKhelo = lazy(() => import("./pages/programs/Khelo"));
const ProgramCrossRoads = lazy(() => import("./pages/programs/CrossRoads"));

// Academic Level Pages
const FoundationPage = lazy(() => import("./pages/programs/academic-levels/Foundation"));
const PreparatoryPage = lazy(() => import("./pages/programs/academic-levels/Preparatory"));
const MiddlePage = lazy(() => import("./pages/programs/academic-levels/Middle"));
const SecondaryPage = lazy(() => import("./pages/programs/academic-levels/Secondary"));
const SeniorSecondaryPage = lazy(() => import("./pages/programs/academic-levels/SeniorSecondary"));
const SpecialPage = lazy(() => import("./pages/programs/academic-levels/Special"));
const NewsDetail = lazy(() => import("./pages/NewsDetail"));

const queryClient = new QueryClient();

const LoadingFallback = () => (
  <div className="min-h-screen flex items-center justify-center bg-background">
    <div className="w-12 h-12 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
  </div>
);

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
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

              <Route path="/academics/news" element={<AcademicNews />} />
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/academics/gallery" element={<AcademicGallery />} />
              <Route path="/academics/career" element={<AcademicCareer />} />
              <Route path="/academics/tc-download" element={<AcademicTCDownload />} />
              <Route path="/academics/summer-camp" element={<AcademicSummerCamp />} />

              <Route path="/programs" element={<Programs />} />
              <Route path="/programs/foundation" element={<FoundationPage />} />
              <Route path="/programs/preparatory" element={<PreparatoryPage />} />
              <Route path="/programs/middle" element={<MiddlePage />} />
              <Route path="/programs/secondary" element={<SecondaryPage />} />
              <Route path="/programs/senior-secondary" element={<SeniorSecondaryPage />} />
              <Route path="/programs/mahfilul-quran" element={<SpecialPage />} />

              <Route path="/programs/ags-talks" element={<ProgramAGSTalks />} />
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
          </Suspense>
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;