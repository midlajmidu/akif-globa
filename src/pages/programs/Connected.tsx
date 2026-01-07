import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { Users } from 'lucide-react';

const Connected = () => {
  const imageModules = import.meta.glob('@/assets/programs/Connected/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
  const images = Object.values(imageModules).map((mod: any) => mod.default);

  return (
    <ProgramPageTemplate
      title="Connected"
      description="Building bridges between students, alumni, and industry experts through networking and mentorship programs. Connected fosters a strong sense of community and provides valuable opportunities for professional and personal growth."
      images={images}
      icon={<Users className="w-16 h-16 text-accent" />}
    />
  );
};

export default Connected;