import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import { Suspense, lazy } from 'react';
import ScrollToTop from "./components/ScrollToTop";

// Lazy loaded pages
const Index = lazy(() => import("@/pages/Index"));
const About = lazy(() => import("@/pages/About"));
const Admission = lazy(() => import("@/pages/Admission"));
const Academics = lazy(() => import("@/pages/Academics"));
const Programs = lazy(() => import("@/pages/Programs"));
const Facilities = lazy(() => import("@/pages/Facilities"));
const Disclosure = lazy(() => import("@/pages/Disclosure"));
const Contact = lazy(() => import("@/pages/Contact"));
const Alumni = lazy(() => import("@/pages/Alumni"));
const NotFound = lazy(() => import("@/pages/NotFound"));

// About Subpages
const AboutMarkaz = lazy(() => import("@/pages/about/Markaz"));
const AboutTrust = lazy(() => import("@/pages/about/Trust"));
const AboutRiyadh = lazy(() => import("@/pages/about/Riyadh"));
const AboutResidence = lazy(() => import("@/pages/about/Residence"));
const AboutTestimonials = lazy(() => import("@/pages/about/Testimonials"));
const AboutVirtualTour = lazy(() => import("@/pages/about/VirtualTour"));
const AboutPrincipal = lazy(() => import("@/pages/about/Principal"));

// Admission Subpages
const AdmissionTest = lazy(() => import("@/pages/admission/Test"));
const AdmissionApply = lazy(() => import("@/pages/admission/Apply"));
const AdmissionScholarships = lazy(() => import("@/pages/admission/Scholarships"));

// Academic Subpages
const AcademicZeeque = lazy(() => import("@/pages/academics/Zeeque"));
const AcademicCalendar = lazy(() => import("@/pages/academics/Calendar"));
const AcademicLearning = lazy(() => import("@/pages/academics/Learning"));
const AcademicNews = lazy(() => import("@/pages/academics/News"));
const AcademicGallery = lazy(() => import("@/pages/academics/Gallery"));
const AcademicCareer = lazy(() => import("@/pages/academics/Career"));
const AcademicTCDownload = lazy(() => import("@/pages/academics/TCDownload"));
const AcademicSummerCamp = lazy(() => import("@/pages/academics/SummerCamp"));

// Program Subpages
const ProgramAGSTalks = lazy(() => import("@/pages/programs/AGSTalks"));
const ProgramPalette = lazy(() => import("@/pages/programs/Palette"));
const ProgramConnected = lazy(() => import("@/pages/programs/Connected"));
const ProgramRankkhel = lazy(() => import("@/pages/programs/Rankkhel"));
const ProgramSkillSurge = lazy(() => import("@/pages/programs/SkillSurge"));
const ProgramKhelo = lazy(() => import("@/pages/programs/Khelo"));
const ProgramCrossRoads = lazy(() => import("@/pages/programs/CrossRoads"));

// Academic Level Pages
const FoundationPage = lazy(() => import("@/pages/programs/academic-levels/Foundation"));
const PreparatoryPage = lazy(() => import("@/pages/programs/academic-levels/Preparatory"));
const MiddlePage = lazy(() => import("@/pages/programs/academic-levels/Middle"));
const SecondaryPage = lazy(() => import("@/pages/programs/academic-levels/Secondary"));
const SeniorSecondaryPage = lazy(() => import("@/pages/programs/academic-levels/SeniorSecondary"));
const SpecialPage = lazy(() => import("@/pages/programs/academic-levels/Special"));
const NewsDetail = lazy(() => import("@/pages/NewsDetail"));
const PlaceholderPage = lazy(() => import("@/pages/PlaceholderPage"));

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
        <BrowserRouter>
          <ScrollToTop />
          <Suspense fallback={<LoadingFallback />}>
            <Routes>
              {/* Mapped Slugs */}
              <Route path="/" element={<Index />} />
              <Route path="/virtual-tour/" element={<AboutVirtualTour />} />
              <Route path="/about/" element={<About />} />
              <Route path="/news/" element={<AcademicNews />} />
              <Route path="/admissions/" element={<Admission />} />
              <Route path="/mkc/" element={<AboutMarkaz />} />
              <Route path="/testimonials/" element={<AboutTestimonials />} />
              <Route path="/contact-us/" element={<Contact />} />
              <Route path="/alif-edu-trust/" element={<AboutTrust />} />
              <Route path="/principal-message/" element={<AboutPrincipal />} />
              <Route path="/academic-calendar/" element={<AcademicCalendar />} />
              <Route path="/alif-residence/" element={<AboutResidence />} />
              <Route path="/facilities/" element={<Facilities />} />
              <Route path="/downloads/" element={<AcademicTCDownload />} />
              <Route path="/career/" element={<AcademicCareer />} />
              <Route path="/gallery/" element={<AcademicGallery />} />
              <Route path="/learning-zone/" element={<AcademicLearning />} />
              <Route path="/summer-camp/" element={<AcademicSummerCamp />} />
              <Route path="/mandatory-public-disclosure/" element={<Disclosure />} />
              <Route path="/admission-test/" element={<AdmissionTest />} />
              <Route path="/alif-international-school-riyadh-ksa/" element={<AboutRiyadh />} />
              <Route path="/alif-zeeque-intl/" element={<AcademicZeeque />} />
              <Route path="/ags-talks/" element={<ProgramAGSTalks />} />
              <Route path="/rankhel/" element={<ProgramRankkhel />} />
              <Route path="/cross-roads/" element={<ProgramCrossRoads />} />
              <Route path="/connect-ed/" element={<ProgramConnected />} />
              <Route path="/skill-surge/" element={<ProgramSkillSurge />} />
              <Route path="/palette/" element={<ProgramPalette />} />
              <Route path="/khelo/" element={<ProgramKhelo />} />
              <Route path="/apply-online/" element={<AdmissionApply />} />
              <Route path="/scholarships/" element={<AdmissionScholarships />} />
              <Route path="/join-our-alumni/" element={<Alumni />} />
              <Route path="/foundation-school/" element={<FoundationPage />} />
              <Route path="/preparatory-school/" element={<PreparatoryPage />} />
              <Route path="/middle-school/" element={<MiddlePage />} />
              <Route path="/secondary-school/" element={<SecondaryPage />} />
              <Route path="/senior-secondary-school/" element={<SeniorSecondaryPage />} />

              {/* Missing Slugs (Placeholders) */}
              <Route path="/about/our-teachers/" element={<PlaceholderPage title="Our Teachers" />} />
              <Route path="/meetings/" element={<PlaceholderPage title="Meetings" />} />
              <Route path="/applications-faq/" element={<PlaceholderPage title="Applications FAQ" />} />
              <Route path="/multimedia/" element={<PlaceholderPage title="Multimedia" />} />
              <Route path="/courses-offered/" element={<PlaceholderPage title="Courses Offered" />} />
              <Route path="/timetable/" element={<PlaceholderPage title="Timetable" />} />
              <Route path="/academicsold/" element={<PlaceholderPage title="Academics Old" />} />
              <Route path="/apply-online22/" element={<PlaceholderPage title="Apply Online 22" />} />
              <Route path="/alif-little-world/" element={<PlaceholderPage title="Alif Little World" />} />
              <Route path="/admission-request/" element={<PlaceholderPage title="Admission Request" />} />
              <Route path="/learning-zone/lkg-2/" element={<PlaceholderPage title="LKG learning zone" />} />
              <Route path="/learning-zone/ukg-2/" element={<PlaceholderPage title="UKG learning zone" />} />
              <Route path="/learning-zone/grade1-2/" element={<PlaceholderPage title="Grade 1 learning zone" />} />
              <Route path="/learnactiv/" element={<PlaceholderPage title="LearnActiv" />} />
              <Route path="/directors/" element={<PlaceholderPage title="Directors" />} />
              <Route path="/learning-zone/grade2-2/" element={<PlaceholderPage title="Grade 2 learning zone" />} />
              <Route path="/learning-zone/grade3-2/" element={<PlaceholderPage title="Grade 3 learning zone" />} />
              <Route path="/learning-zone/grade4-2/" element={<PlaceholderPage title="Grade 4 learning zone" />} />
              <Route path="/summer-camp-21/" element={<PlaceholderPage title="Summer Camp 21" />} />
              <Route path="/blog/" element={<PlaceholderPage title="Blog" />} />
              <Route path="/our-activities/" element={<PlaceholderPage title="Our Activities" />} />
              <Route path="/street-buzz/" element={<PlaceholderPage title="Street Buzz" />} />
              <Route path="/feedback/" element={<PlaceholderPage title="Feedback" />} />
              <Route path="/feedbacks/" element={<PlaceholderPage title="Feedbacks" />} />
              <Route path="/sample-page/" element={<PlaceholderPage title="Sample Page" />} />
              <Route path="/transfer-certificate/" element={<PlaceholderPage title="Transfer Certificate" />} />
              <Route path="/admisssion/" element={<PlaceholderPage title="Admission" />} />
              <Route path="/admission-portal/" element={<PlaceholderPage title="Admission Portal" />} />

              {/* Extra / Dynamic Routes */}
              <Route path="/news/:slug" element={<NewsDetail />} />
              <Route path="/programs/mahfilul-quran/" element={<SpecialPage />} />

              {/* Catch-all */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;