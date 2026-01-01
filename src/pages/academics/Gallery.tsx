import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { X } from 'lucide-react';

const galleryImages = [
  { src: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=2070&auto=format&fit=crop', category: 'Campus', title: 'Main Building' },
  { src: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2022&auto=format&fit=crop', category: 'Activities', title: 'Classroom Learning' },
  { src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?q=80&w=2090&auto=format&fit=crop', category: 'Sports', title: 'Basketball Court' },
  { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?q=80&w=2070&auto=format&fit=crop', category: 'Facilities', title: 'Library' },
  { src: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=2104&auto=format&fit=crop', category: 'Activities', title: 'Science Lab' },
  { src: 'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?q=80&w=2070&auto=format&fit=crop', category: 'Sports', title: 'Athletics' },
  { src: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=2070&auto=format&fit=crop', category: 'Campus', title: 'Student Plaza' },
  { src: 'https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?q=80&w=2070&auto=format&fit=crop', category: 'Activities', title: 'Group Discussion' },
  { src: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2070&auto=format&fit=crop', category: 'Campus', title: 'Auditorium' },
  { src: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop', category: 'Activities', title: 'Coding Workshop' },
  { src: 'https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&w=2070&auto=format&fit=crop', category: 'Campus', title: 'Garden Area' },
  { src: 'https://images.unsplash.com/photo-1501290791903-f234fbdc07cc?q=80&w=2070&auto=format&fit=crop', category: 'Facilities', title: 'Cafeteria' },
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('All');

  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];

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
                <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex flex-col items-center justify-center p-4">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                    {image.title}
                  </span>
                  <span className="text-accent text-sm opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300 delay-75">
                    {image.category}
                  </span>
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