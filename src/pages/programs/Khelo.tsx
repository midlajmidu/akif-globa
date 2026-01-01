import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Dribbble } from 'lucide-react';

const Khelo = () => {
  const images = [
    "https://images.unsplash.com/photo-1504450758481-7338eba7524a?q=80&w=2069&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1526676023131-d35660ee7f12?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop",
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
  ];

  const videos = [
    "7e90gBu4pas",
    "9uD-6S24328",
    "W6GDL8S2S7s"
  ];

  return (
    <ProgramPageTemplate
      title="Khelo"
      description="An inclusive sports program designed to encourage participation and physical activity among all students. Khelo promotes a healthy lifestyle, teamwork, and the joy of playing sports in a supportive environment."
      images={images}
      videos={videos}
      icon={<Dribbble className="w-16 h-16 text-accent" />}
    />
  );
};

export default Khelo;