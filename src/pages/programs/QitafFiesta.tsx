import ProgramPageTemplate from '@/components/programs/ProgramPageTemplate';
import { PartyPopper } from 'lucide-react';
import SEO from '@/components/SEO';

const QitafFiesta = () => {
    const allImages = Object.values(
        import.meta.glob('@/assets/programs/QITAF FIESTA/*.{png,jpg,jpeg,svg,webp}', {
            eager: true,
            query: '?url',
            import: 'default',
        })
    ) as string[];

    // Sort images descending by filename (WhatsApp images usually have timestamps)
    const images = [...allImages].sort((a, b) => b.localeCompare(a));

    return (
        <>
            <SEO
                title="Qitaf Fiesta"
                description="Qitaf Fiesta is a vibrant celebration of culture and talent at Alif Global School. Explore the highlights of our grand festival."
                canonical="/qitaf-fiesta/"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Programs', path: '/ags-talks/' }, // Keeping under programs group
                    { name: 'Qitaf Fiesta', path: '/qitaf-fiesta/' }
                ]}
            />
            <ProgramPageTemplate
                title="Qitaf Fiesta"
                description="Experience the vibrant energy and cultural richness of Qitaf Fiesta. A grand celebration where students showcase their diverse talents in art, music, drama, and more, fostering a spirit of creativity and togetherness."
                images={images}
                icon={<PartyPopper className="w-16 h-16 text-accent" />}
            />
        </>
    );
};

export default QitafFiesta;
