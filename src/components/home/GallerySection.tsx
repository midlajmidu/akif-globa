import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

// Import local images
import img1 from '@/assets/galley in home page/0F1A0799.webp';
import img2 from '@/assets/galley in home page/HOSTEL .webp';
import img3 from '@/assets/galley in home page/IMG_0056.webp';
import img4 from '@/assets/galley in home page/IMG_5430.webp';
import img5 from '@/assets/galley in home page/IMG_9126.webp';
import img6 from '@/assets/galley in home page/Untitled-04-1.webp';
import img7 from '@/assets/galley in home page/Untitled-1-26-1.webp';
import img8 from '@/assets/galley in home page/Untitled-2-12-1.webp';
import img9 from '@/assets/galley in home page/campus .webp';
import img10 from '@/assets/galley in home page/campus.webp';
import img11 from '@/assets/galley in home page/football.webp';
import img12 from '@/assets/galley in home page/porgram.webp';

const galleryImages = [
  { src: img1, alt: 'Students participating in school activity' },
  { src: img2, alt: 'Alif Global School Hostel Building' },
  { src: img3, alt: 'Classroom learning session' },
  { src: img4, alt: 'School event celebration' },
  { src: img5, alt: 'Students in the school library' },
  { src: img6, alt: 'Science laboratory experiment' },
  { src: img7, alt: 'Art and craft workshop' },
  { src: img8, alt: 'Cultural program performance' },
  { src: img9, alt: 'Aerial view of Alif Global School campus' },
  { src: img10, alt: 'Main entrance of Alif Global School' },
  { src: img11, alt: 'Students playing football on the school turf' },
  { src: img12, alt: 'School assembly and program' },
];

const GallerySection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Photo Gallery
          </span>
          <h2 className="heading-primary">Campus Gallery</h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className={`relative overflow-hidden rounded-xl aspect-square transition-all duration-500`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'scale(1)' : 'scale(0.9)',
              }}
            >
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/academics/gallery"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-8 py-4 rounded-full font-semibold transition-all duration-300 hover:bg-navy-light hover:shadow-strong group"
          >
            View More
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
