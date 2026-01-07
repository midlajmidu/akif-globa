import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Megaphone } from 'lucide-react';
import SEO from '@/components/SEO';

const StreetBuzz = () => {
  const images = [
    "https://images.unsplash.com/photo-1516280440614-37939bbacd81?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=2006&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516534775068-ba3e84529519?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502444330042-d1a1ddf9bb5b?q=80&w=2073&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?q=80&w=2049&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526721940322-145d6f95c46e?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1502086223501-7ea6ecd79368?q=80&w=2038&auto=format&fit=crop",
  ];

  const videos = [
    "dQw4w9WgXcQ", // Placeholder
    "jNQXAC9IVRw",
    "9bZkp7q19f0"
  ];

  return (
    <>
      <SEO
        title="Street Buzz Program"
        description="Street Buzz captures the vibrant energy of student life at Alif Global School through street-style reporting, interviews, and community engagement."
        canonical="/programs/street-buzz"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Programs', path: '/programs' },
          { name: 'Street Buzz', path: '/programs/street-buzz' }
        ]}
      />
      <ProgramPageTemplate
        title="Street Buzz"
        description="Capturing the vibrant energy of student life through street-style reporting, interviews, and community engagement. Street Buzz brings the latest news, trends, and voices from around the campus directly to you."
        images={images}
        videos={videos}
        icon={<Megaphone className="w-16 h-16 text-accent" />}
      />
    </>
  );
};

export default StreetBuzz;