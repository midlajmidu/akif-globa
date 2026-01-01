import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Palette as PaletteIcon } from 'lucide-react';

const Palette = () => {
  const images = [
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1541167760496-162955ed8a9f?q=80&w=2067&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1515405290399-ed322583ad42?q=80&w=2080&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1501472312651-726afe119ff1?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1520409364224-63400afe26e5?q=80&w=2030&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547891301-17401c1692a4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547891301-17401c1692a4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1547891301-17401c1692a4?q=80&w=2070&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=2071&auto=format&fit=crop",
    "https://images.unsplash.com/photo-1525909002-1b05e0c869d8?q=80&w=2070&auto=format&fit=crop",
  ];

  const videos = [
    "9uD-6S24328",
    "W6GDL8S2S7s",
    "7e90gBu4pas"
  ];

  return (
    <ProgramPageTemplate
      title="Palette"
      description="A celebration of creativity and artistic expression, showcasing student works in various mediums and styles. Palette provides a space for young artists to explore their talents and share their unique visions with the world."
      images={images}
      videos={videos}
      icon={<PaletteIcon className="w-16 h-16 text-accent" />}
    />
  );
};

export default Palette;