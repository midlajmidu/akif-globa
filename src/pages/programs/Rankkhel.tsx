import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Trophy } from 'lucide-react';

const Rankkhel = () => {
  const imageModules = import.meta.glob('@/assets/programs/RANKHEL/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);


  return (
    <ProgramPageTemplate
      title="Rankkhel"
      description="A competitive sports and games platform that fosters teamwork, discipline, and physical excellence. Rankkhel provides students with the opportunity to showcase their athletic abilities and compete at various levels."
      images={images}
      icon={<Trophy className="w-16 h-16 text-accent" />}
    />
  );
};

export default Rankkhel;