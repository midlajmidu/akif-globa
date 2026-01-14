import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState, useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Play } from 'lucide-react';

interface ProgramPageTemplateProps {
    title: string;
    description: string;
    images: string[];
    videos?: string[];
    icon?: React.ReactNode;
}

const ALLOWED_SLUGS = [
    'ags-talks',
    'palette',
    'connected',
    'rankkhel',
    'skill-surge',
    'khelo',
    'cross-roads'
];

const ProgramPageTemplate = ({ title, description, images, videos = [], icon }: ProgramPageTemplateProps) => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);
    const [dynamicImages, setDynamicImages] = useState<string[]>([]);

    const allImages = [...dynamicImages, ...images];

    useEffect(() => {
        const fetchDynamicImages = async () => {
            const segments = window.location.pathname.split('/').filter(Boolean);
            const slug = segments.pop();

            // Strict check for allowed slugs and specific excluded pages
            if (!slug || !ALLOWED_SLUGS.includes(slug)) return;

            try {
                const response = await fetch(`https://script.google.com/macros/s/AKfycbxYVL87m8IdRZ0Almumi81ZRE_M3Rnr4GzNOGUzg0B8Ggtr0vgQ_YzqqsK2Ye_tGAmc/exec?program=${slug}`);
                const data = await response.json();

                if (Array.isArray(data)) {
                    const formatted = data.map((img: any) =>
                        `https://drive.google.com/thumbnail?id=${img.image_id}&sz=w1000`
                    );

                    // We update the state once with the new images
                    setDynamicImages(formatted);
                }
            } catch (error) {
                console.error('Failed to fetch dynamic program images:', error);
            }
        };

        // Non-blocking fetch using requestIdleCallback or setTimeout
        const idleCallback = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 200));

        // Ensure initial render is complete
        const handleLoad = () => {
            idleCallback(() => {
                fetchDynamicImages();
            });
        };

        if (document.readyState === 'complete') {
            handleLoad();
        } else {
            window.addEventListener('load', handleLoad);
            return () => window.removeEventListener('load', handleLoad);
        }
    }, []);

    const openLightbox = (index: number) => {
        setSelectedImage(index);
        document.body.style.overflow = 'hidden';
    };

    const closeLightbox = () => {
        setSelectedImage(null);
        document.body.style.overflow = 'auto';
    };

    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage + 1) % allImages.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + allImages.length) % allImages.length);
        }
    };

    return (
        <Layout>
            <PageHeader title={title} breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: title }]} />

            <section className="section-padding bg-background">
                <div className="container-custom">
                    {/* Header & Description */}
                    <div className="max-w-4xl mx-auto text-center mb-16">
                        {icon && <div className="mb-6 flex justify-center">{icon}</div>}
                        <h2 className="heading-secondary mb-6">{title}</h2>
                        <p className="text-body text-lg leading-relaxed">
                            {description}
                        </p>
                    </div>

                    {/* Video Section */}
                    {videos.length > 0 && (
                        <div className="mb-20">
                            <div className="flex items-center gap-3 mb-8">
                                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
                                    <Play className="w-5 h-5 text-accent" />
                                </div>
                                <h3 className="text-2xl font-bold text-primary">Featured Videos</h3>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {videos.map((videoId, index) => (
                                    <div key={index} className="aspect-video rounded-2xl overflow-hidden shadow-strong border border-border bg-black">
                                        <iframe
                                            className="w-full h-full"
                                            src={`https://www.youtube.com/embed/${videoId}`}
                                            title={`${title} Video ${index + 1}`}
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                            allowFullScreen
                                        ></iframe>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* Gallery Section */}
                    <div>
                        <div className="flex items-center gap-3 mb-8">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                                <div className="w-5 h-5 border-2 border-primary rounded-sm"></div>
                            </div>
                            <h3 className="text-2xl font-bold text-primary">Event Gallery</h3>
                        </div>
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-2">
                            {allImages.map((src, index) => (
                                <div
                                    key={index}
                                    className="aspect-square cursor-pointer overflow-hidden rounded-xl shadow-sm hover:shadow-md transition-all group"
                                    onClick={() => openLightbox(index)}
                                >
                                    <img
                                        src={src}
                                        alt={`${title} ${index + 1}`}
                                        loading="lazy"
                                        decoding="async"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Lightbox */}
            {selectedImage !== null && (
                <div
                    className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
                    onClick={closeLightbox}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-accent transition-colors z-[110]"
                        onClick={closeLightbox}
                    >
                        <X className="w-8 h-8" />
                    </button>

                    <button
                        className="absolute left-4 md:left-8 text-white hover:text-accent transition-colors z-[110]"
                        onClick={prevImage}
                    >
                        <ChevronLeft className="w-10 h-10" />
                    </button>

                    <div className="relative max-w-5xl max-h-full flex items-center justify-center">
                        <img
                            src={allImages[selectedImage]}
                            alt={`${title} Full View`}
                            loading="lazy"
                            decoding="async"
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute -bottom-12 left-0 right-0 text-center text-white font-medium">
                            Image {selectedImage + 1} of {allImages.length}
                        </div>
                    </div>

                    <button
                        className="absolute right-4 md:right-8 text-white hover:text-accent transition-colors z-[110]"
                        onClick={nextImage}
                    >
                        <ChevronRight className="w-10 h-10" />
                    </button>
                </div>
            )}
        </Layout>
    );
};

export default ProgramPageTemplate;
