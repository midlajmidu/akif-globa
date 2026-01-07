import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import heroImage from '@/assets/alifou.webp';
import heroVideo from '@/assets/InShot_20240314_113145229-1.mp4';

const HeroSection = () => {
  const [showVideo, setShowVideo] = useState(false);

  useEffect(() => {
    // Only show video on desktop screens to save bandwidth and improve performance on mobile
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowVideo(true);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#0A2A4F]">
      {/* Background Media */}
      <div className="absolute inset-0 w-full h-full">
        {/* LCP Image Background */}
        <picture>
          <source
            media="(max-width: 767px)"
            srcSet={heroImage}
          />
          <img
            src={heroImage}
            alt="Students at Alif Global School - Best Residential School in Kerala"
            fetchPriority="high"
            loading="eager"
            width={1920}
            height={1080}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${showVideo ? 'md:opacity-0' : 'opacity-100'}`}
          />
        </picture>

        {/* Video Background (Desktop Only) */}
        {showVideo && (
          <video
            autoPlay
            loop
            muted
            playsInline
            width={1920}
            height={1080}
            className="hidden md:block absolute inset-0 w-full h-full object-cover animate-fade-in"
            aria-hidden="true"
          >
            <source src={heroVideo} type="video/mp4" />
          </video>
        )}
      </div>

      {/* Overlay - Ensuring high contrast for accessibility */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A2A4F]/95 via-[#0A2A4F]/80 to-[#0A2A4F]/50 md:from-[#0A2A4F]/90 md:via-[#0A2A4F]/70 md:to-[#0A2A4F]/40" />

      {/* Content */}
      <div className="relative z-10 container-custom text-center px-4">
        <div className="max-w-4xl mx-auto">
          <span className="inline-block px-4 py-2 bg-[#E6B65C]/20 text-[#E6B65C] rounded-full text-sm font-medium mb-6 animate-fade-in-down backdrop-blur-sm border border-[#E6B65C]/30">
            Best Residential Campus in Kerala
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight mb-6 animate-fade-in-up drop-shadow-lg">
            Welcome to{' '} <br />
            <span className="text-[#E6B65C]">Alif Global School</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto mb-10 animate-fade-in-up animation-delay-200 drop-shadow-md">
            Empowering young minds with world-class education, innovative learning experiences,
            and a nurturing environment for holistic development.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animation-delay-300">
            <Link
              to="/admission"
              className="group flex items-center gap-2 bg-[#E6B65C] text-[#0A2A4F] px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-[#d4a347] hover:shadow-[0_0_20px_rgba(230,182,92,0.5)] hover:-translate-y-1"
              aria-label="Get Admission to Alif Global School"
            >
              Apply for Admission
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" aria-hidden="true" />
            </Link>
            <Link
              to="/about"
              className="flex items-center gap-2 bg-white/10 text-white px-8 py-4 rounded-full font-semibold backdrop-blur-md border border-white/20 transition-all duration-300 hover:bg-white/20 hover:border-white/40 hover:-translate-y-1"
              aria-label="Learn more about Alif Global School"
            >
              Explore Alif Global School
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce" aria-hidden="true">
        <div className="w-6 h-10 rounded-full border-2 border-white/30 flex items-start justify-center p-2 backdrop-blur-sm">
          <div className="w-1.5 h-3 bg-white/60 rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
