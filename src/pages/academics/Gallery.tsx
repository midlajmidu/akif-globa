import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState, useEffect } from 'react';
import { X, Maximize2 } from 'lucide-react';
import SEO from '@/components/SEO';

// Activities Images
import act1 from '@/assets/Gallery page(ind)/activities/0F7A0214-scaled.webp';
import act2 from '@/assets/Gallery page(ind)/activities/Untitled-02.webp';
import act3 from '@/assets/Gallery page(ind)/activities/Untitled-05.webp';
import act4 from '@/assets/Gallery page(ind)/activities/Untitled-1-19-1.webp';
import act5 from '@/assets/Gallery page(ind)/activities/Untitled-1-25-1.webp';
import act6 from '@/assets/Gallery page(ind)/activities/Untitled-1-27-1.webp';
import act7 from '@/assets/Gallery page(ind)/activities/Untitled-1-35-1.webp';
import act8 from '@/assets/Gallery page(ind)/activities/Untitled-1-37-1.webp';
import act9 from '@/assets/Gallery page(ind)/activities/Untitled-1-41.webp';
import act10 from '@/assets/Gallery page(ind)/activities/Untitled-10.webp';
import act11 from '@/assets/Gallery page(ind)/activities/Untitled-11.webp';
import act12 from '@/assets/Gallery page(ind)/activities/Untitled-16.webp';
import act13 from '@/assets/Gallery page(ind)/activities/Untitled-21.webp';
import act14 from '@/assets/Gallery page(ind)/activities/WhatsApp-Image-2025-03-27-at-16.35.38.webp';
import act15 from '@/assets/Gallery page(ind)/activities/WhatsApp-Image-2025-03-27-at-16.46.25.webp';

// Facility Images
import fac1 from '@/assets/Gallery page(ind)/facility/0F7A8715-scaled.webp';
import fac2 from '@/assets/Gallery page(ind)/facility/biology-lab-scaled.webp';
import fac3 from '@/assets/Gallery page(ind)/facility/chemistry-scaled.webp';
import fac4 from '@/assets/Gallery page(ind)/facility/HOSTEL-scaled.webp';
import fac6 from '@/assets/Gallery page(ind)/facility/library-scaled.webp';
import fac7 from '@/assets/Gallery page(ind)/facility/physics-lab-.webp';
import fac8 from '@/assets/Gallery page(ind)/facility/turf.webp';
import fac9 from '@/assets/Gallery page(ind)/facility/Untitled-20.webp';

// Campus Images
import cam1 from '@/assets/Gallery page(ind)/campus/2-01.webp';
import cam2 from '@/assets/Gallery page(ind)/campus/campus .webp';
import cam3 from '@/assets/Gallery page(ind)/campus/campus drone.webp';
import cam4 from '@/assets/Gallery page(ind)/campus/campus.webp';

const galleryImages = [
  // Activities
  { src: act1, category: 'Activities', title: 'Students engaged in classroom activity' },
  { src: act2, category: 'Activities', title: 'School event celebration' },
  { src: act3, category: 'Activities', title: 'Creative workshop for students' },
  { src: act4, category: 'Activities', title: 'Outdoor educational trip' },
  { src: act5, category: 'Activities', title: 'Cultural program performance' },
  { src: act6, category: 'Activities', title: 'Sports day event' },
  { src: act7, category: 'Activities', title: 'Science exhibition project' },
  { src: act8, category: 'Activities', title: 'Art and craft session' },
  { src: act9, category: 'Activities', title: 'Student presentation' },
  { src: act10, category: 'Activities', title: 'Group activity in school' },
  { src: act11, category: 'Activities', title: 'Music and dance program' },
  { src: act12, category: 'Activities', title: 'Interactive learning session' },
  { src: act13, category: 'Activities', title: 'School assembly' },
  { src: act14, category: 'Activities', title: 'Student achievement celebration' },
  { src: act15, category: 'Activities', title: 'Community service activity' },

  // Facility
  { src: fac1, category: 'Facility', title: 'Modern smart classroom' },
  { src: fac2, category: 'Facility', title: 'Advanced biology laboratory' },
  { src: fac3, category: 'Facility', title: 'Fully equipped chemistry lab' },
  { src: fac4, category: 'Facility', title: 'Comfortable student hostel' },
  { src: fac6, category: 'Facility', title: 'Well-stocked school library' },
  { src: fac7, category: 'Facility', title: 'Physics laboratory instruments' },
  { src: fac8, category: 'Facility', title: 'International standard sports turf' },
  { src: fac9, category: 'Facility', title: 'School cafeteria and dining area' },

  // Campus
  { src: cam1, category: 'Campus', title: 'Alif Global School main building' },
  { src: cam2, category: 'Campus', title: 'Scenic view of the school campus' },
  { src: cam3, category: 'Campus', title: 'Aerial drone shot of the campus' },
  { src: cam4, category: 'Campus', title: 'School entrance and greenery' },
];

// Persistent cache outside component to survive re-renders
const galleryCache: Record<string, any[]> = {};

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');
  const [dynamicImages, setDynamicImages] = useState<any[]>([]);

  useEffect(() => {
    const fetchDynamicGallery = async () => {
      const section = filter.toLowerCase();

      // If we have cached data, use it immediately
      if (galleryCache[section]) {
        setDynamicImages(galleryCache[section]);
        // We still fetch in background to refresh cache silently if needed
      }

      try {
        const response = await fetch(`https://script.google.com/macros/s/AKfycbwy3vKgkiLcOgaDm70Q_hJa0n7Jir8CyLccOrEcZbaVrXfaGdVWqRvux06ybGyvsdkkEA/exec?section=${section}`);
        const data = await response.json();

        // Map API response to gallery format
        const formatted = data
          .sort((a: any, b: any) => (a.order || 0) - (b.order || 0))
          .map((img: any) => ({
            src: `https://drive.google.com/thumbnail?id=${img.image_id}&sz=w1000`,
            category: filter,
            title: 'Alif Global School Gallery'
          }));

        galleryCache[section] = formatted;
        setDynamicImages(formatted);
      } catch (error) {
        console.error('Failed to fetch dynamic gallery images:', error);
      }
    };

    fetchDynamicGallery();
  }, [filter]);

  const categories = ['All', 'Activities', 'Facility', 'Campus'];

  const staticFiltered = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  const allImages = [...dynamicImages, ...staticFiltered];

  return (
    <Layout>
      <SEO
        title="Gallery"
        description="Explore the gallery of Alif Global School. View photos of our campus, facilities, and various student activities and events."
        canonical="/gallery/"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Gallery', path: '/gallery/' }
        ]}
      />
      <PageHeader title="Gallery" breadcrumb={[{ name: 'Gallery' }]} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${filter === cat
                  ? 'bg-accent text-accent-foreground shadow-gold'
                  : 'bg-secondary text-muted-foreground hover:bg-primary/10 hover:text-primary'
                  }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Image Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {allImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
                  loading="lazy"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/40 transition-all duration-300 flex items-center justify-center">
                  <Maximize2 className="text-white w-8 h-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-50 group-hover:scale-100" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] bg-black/90 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <button
            className="absolute top-6 right-6 text-white hover:text-accent transition-colors"
            onClick={() => setSelectedImage(null)}
          >
            <X className="w-8 h-8" />
          </button>
          <img
            src={selectedImage}
            alt="Gallery Preview"
            className="max-w-full max-h-[90vh] rounded-lg shadow-2xl animate-scale-in"
          />
        </div>
      )}
    </Layout>
  );
};

export default Gallery;