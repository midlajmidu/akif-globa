import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { X, Maximize2 } from 'lucide-react';

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
  { src: act1, category: 'Activities', title: 'Activity 1' },
  { src: act2, category: 'Activities', title: 'Activity 2' },
  { src: act3, category: 'Activities', title: 'Activity 3' },
  { src: act4, category: 'Activities', title: 'Activity 4' },
  { src: act5, category: 'Activities', title: 'Activity 5' },
  { src: act6, category: 'Activities', title: 'Activity 6' },
  { src: act7, category: 'Activities', title: 'Activity 7' },
  { src: act8, category: 'Activities', title: 'Activity 8' },
  { src: act9, category: 'Activities', title: 'Activity 9' },
  { src: act10, category: 'Activities', title: 'Activity 10' },
  { src: act11, category: 'Activities', title: 'Activity 11' },
  { src: act12, category: 'Activities', title: 'Activity 12' },
  { src: act13, category: 'Activities', title: 'Activity 13' },
  { src: act14, category: 'Activities', title: 'Activity 14' },
  { src: act15, category: 'Activities', title: 'Activity 15' },

  // Facility
  { src: fac1, category: 'Facility', title: 'Facility 1' },
  { src: fac2, category: 'Facility', title: 'Facility 2' },
  { src: fac3, category: 'Facility', title: 'Facility 3' },
  { src: fac4, category: 'Facility', title: 'Facility 4' },
  { src: fac6, category: 'Facility', title: 'Facility 6' },
  { src: fac7, category: 'Facility', title: 'Facility 7' },
  { src: fac8, category: 'Facility', title: 'Facility 8' },
  { src: fac9, category: 'Facility', title: 'Facility 9' },

  // Campus
  { src: cam1, category: 'Campus', title: 'Campus 1' },
  { src: cam2, category: 'Campus', title: 'Campus 2' },
  { src: cam3, category: 'Campus', title: 'Campus 3' },
  { src: cam4, category: 'Campus', title: 'Campus 4' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Activities', 'Facility', 'Campus'];

  const filteredImages = filter === 'All'
    ? galleryImages
    : galleryImages.filter(img => img.category === filter);

  return (
    <Layout>
      <PageHeader title="Gallery" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Gallery' }]} />

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
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl aspect-square cursor-pointer shadow-md hover:shadow-xl transition-all duration-500"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.title}
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