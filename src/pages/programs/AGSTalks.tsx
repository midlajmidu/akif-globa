import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Mic } from 'lucide-react';

const AGSTalks = () => {
  const images = [
    "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515187029135-18ee286d815b?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2012&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1522661067900-ab829854a57f?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1507537297725-24a1c029d3ca?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?q=80&w=2076&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1511949860663-92c5c57d48a7?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1516534775068-ba3e84529519?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1519331379826-f10be5486c6f?q=80&w=2070&auto=format&fit=crop",
  ];

  const videos = [
    "7e90gBu4pas", // Example educational/talk video
    "9uD-6S24328",
    "W6GDL8S2S7s"
  ];

  return (
    <ProgramPageTemplate
      title="AGS Talks"
      description="A platform for students to share their ideas, insights, and inspirations through engaging presentations and discussions. AGS Talks encourages public speaking, critical thinking, and the sharing of diverse perspectives within our school community."
      images={images}
      videos={videos}
      icon={<Mic className="w-16 h-16 text-accent" />}
    />
  );
};

export default AGSTalks;