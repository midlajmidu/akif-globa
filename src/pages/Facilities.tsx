import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Building, FlaskConical, Library, Laptop, Dumbbell, Bus, Coffee, Shield } from 'lucide-react';
import campusImg from '@/assets/campus.jpg';
import sportsImg from '@/assets/sports.jpg';
import activitiesImg from '@/assets/activities.jpg';

const Facilities = () => {
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

  const facilities = [
    { icon: Building, title: 'Smart Classrooms', description: 'Air-conditioned classrooms with interactive boards and modern teaching aids' },
    { icon: FlaskConical, title: 'Science Labs', description: 'Well-equipped Physics, Chemistry, Biology, and Computer laboratories' },
    { icon: Library, title: 'Library', description: 'Extensive collection of books, journals, and digital resources' },
    { icon: Laptop, title: 'Computer Lab', description: 'State-of-the-art computers with high-speed internet connectivity' },
    { icon: Dumbbell, title: 'Sports Complex', description: 'Indoor and outdoor sports facilities including swimming pool' },
    { icon: Bus, title: 'Transportation', description: 'GPS-enabled buses covering all major routes' },
    { icon: Coffee, title: 'Cafeteria', description: 'Hygienic cafeteria serving nutritious and delicious meals' },
    { icon: Shield, title: 'Security', description: '24/7 CCTV surveillance and trained security personnel' },
  ];

  const galleryImages = [
    { src: campusImg, alt: 'Campus Overview' },
    { src: sportsImg, alt: 'Sports Facilities' },
    { src: activitiesImg, alt: 'Activity Rooms' },
    { src: campusImg, alt: 'Library' },
    { src: sportsImg, alt: 'Playground' },
    { src: activitiesImg, alt: 'Laboratories' },
  ];

  return (
    <Layout>
      <PageHeader title="Facilities" breadcrumb="Facilities" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              World-Class Infrastructure
            </span>
            <h2 className="heading-primary mb-4">Our Facilities</h2>
            <p className="text-body">
              Our campus is designed to provide the best learning environment with 
              modern facilities and amenities for holistic development.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {facilities.map((facility, index) => (
              <div
                key={facility.title}
                className={`bg-cream rounded-2xl p-6 text-center transition-all duration-500 hover:shadow-medium hover:-translate-y-1`}
                style={{
                  transitionDelay: `${index * 50}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <facility.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{facility.title}</h3>
                <p className="text-sm text-muted-foreground">{facility.description}</p>
              </div>
            ))}
          </div>
          
          {/* Gallery */}
          <div className="mb-12">
            <h3 className="heading-secondary text-center mb-8">Campus Gallery</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {galleryImages.map((image, index) => (
                <div
                  key={index}
                  className={`group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer transition-all duration-500`}
                  style={{
                    transitionDelay: `${index * 100 + 400}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'scale(1)' : 'scale(0.9)',
                  }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/60 transition-all duration-300 flex items-center justify-center">
                    <span className="text-primary-foreground font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      {image.alt}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
