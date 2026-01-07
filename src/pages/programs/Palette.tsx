import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Palette as PaletteIcon } from 'lucide-react';

const Palette = () => {
  const imageModules = import.meta.glob('@/assets/programs/PALETTE/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);


  return (
    <ProgramPageTemplate
      title="Palette"
      description="A celebration of creativity and artistic expression, showcasing student works in various mediums and styles. Palette provides a space for young artists to explore their talents and share their unique visions with the world."
      images={images}
      icon={<PaletteIcon className="w-16 h-16 text-accent" />}
    />
  );
};

export default Palette;