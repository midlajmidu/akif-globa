import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '@/components/SEO';

const imageModules = import.meta.glob('@/assets/summer camp/*.{png,jpg,jpeg,PNG,JPG,JPEG,webp}', { eager: true });
const images = Object.values(imageModules).map((mod: any) => mod.default);

const SummerCamp = () => {
    const [selectedImage, setSelectedImage] = useState<number | null>(null);

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
            setSelectedImage((selectedImage + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (selectedImage !== null) {
            setSelectedImage((selectedImage - 1 + images.length) % images.length);
        }
    };

    return (
        <Layout>
            <SEO
                title="Summer Camp"
                description="Explore the fun and learning at Alif Global School's Summer Camp. View our gallery of activities, workshops, and memorable moments from our annual summer programs."
                canonical="/academics/summer-camp"
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Academics', path: '/academics' },
                    { name: 'Summer Camp', path: '/academics/summer-camp' }
                ]}
            />
            <PageHeader title="Summer Camp" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Summer Camp' }]} />

            <section className="section-padding bg-background">
                <div className="container-custom">
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-1 md:gap-2">
                        {images.map((src, index) => (
                            <div
                                key={index}
                                className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-sm"
                                onClick={() => openLightbox(index)}
                            >
                                <img
                                    src={src}
                                    alt={`Summer Camp Activity ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        ))}
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
                            src={images[selectedImage]}
                            alt={`Summer Camp Activity Full View ${selectedImage + 1}`}
                            className="max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl"
                            onClick={(e) => e.stopPropagation()}
                        />
                        <div className="absolute -bottom-12 left-0 right-0 text-center text-white font-medium">
                            Image {selectedImage + 1} of {images.length}
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

export default SummerCamp;
