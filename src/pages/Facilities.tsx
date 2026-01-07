import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { CheckCircle2 } from 'lucide-react';
import SEO from '@/components/SEO';

import campusImg from '@/assets/alif campus.webp';
import classroomImg from '@/assets/Gallery page(ind)/facility/0F7A8715-scaled.webp';
import bioLabImg from '@/assets/Gallery page(ind)/facility/biology-lab-scaled.webp';
import physicsLabImg from '@/assets/Gallery page(ind)/facility/physics-lab-.webp';
import chemLabImg from '@/assets/Gallery page(ind)/facility/chemistry-scaled.webp';
import turfImg from '@/assets/Gallery page(ind)/facility/turf.webp';
import libraryImg from '@/assets/Gallery page(ind)/facility/library-scaled.webp';

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

  const infrastructure = [
    {
      title: 'Modern Classrooms',
      image: classroomImg,
      description: 'Spacious, air-conditioned classrooms equipped with smart boards and ergonomic furniture.'
    },
    {
      title: 'Biology Lab',
      image: bioLabImg,
      description: 'Advanced biological equipment and specimens for hands-on life science exploration.'
    },
    {
      title: 'Physics Lab',
      image: physicsLabImg,
      description: 'Precision instruments and experimental setups to master the laws of physics.'
    },
    {
      title: 'Chemistry Lab',
      image: chemLabImg,
      description: 'Modern laboratory with safety features for conducting diverse chemical experiments.'
    },
    {
      title: 'Football Turf',
      image: turfImg,
      description: 'International standard artificial turf for football and other outdoor sports activities.'
    },
    {
      title: 'Library',
      image: libraryImg,
      description: 'A vast collection of books, digital resources, and quiet reading spaces to foster a love for learning.'
    }
  ];

  return (
    <Layout>
      <SEO
        title="Facilities"
        description="Discover the world-class facilities at Alif Global School, including modern classrooms, advanced science labs, international standard sports turf, and a vast library."
        canonical="/facilities"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Facilities', path: '/facilities' }
        ]}
      />
      <PageHeader title="Facilities" breadcrumb="Facilities" />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          {/* First Section: Our Facilities */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                World-Class Campus
              </span>
              <h2 className="heading-primary mb-6">Our Facilities</h2>
              <p className="text-body mb-6">
                At Alif , we provide top-notch facilities to ensure a comfortable learning environment for our students. The modern classrooms are equipped with smart boards and interactive learning tools. We have libraries, science and computer labs & spacious playgrounds for sports and co-curricular activities.
              </p>
              <p className="text-body mb-8">
                Safety is our priority, the campus is secured with CCTV surveillance and also offer transportation, a mess facility and a well-equipped medical room. With all these facilities, we make sure every child gets the best learning experience in a safe and inspiring.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {['Smart Learning Spaces', 'Advanced Science Labs', 'Professional Sports Turf', 'Secure & Safe Campus'].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                    <span className="font-medium text-primary">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              <div className="relative rounded-3xl overflow-hidden shadow-strong border-8 border-white">
                <img
                  src={campusImg}
                  alt="Alif Campus"
                  loading="lazy"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/40 to-transparent" />
              </div>
            </div>
          </div>

          {/* Infrastructure Section */}
          <div className="text-center mb-16">
            <h2 className="heading-primary mb-4">Infrastructure</h2>
            <p className="text-body max-w-2xl mx-auto">
              Explore our specialized infrastructure designed to support diverse learning needs and extracurricular activities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {infrastructure.map((item, index) => (
              <div
                key={item.title}
                className={`group bg-cream rounded-3xl overflow-hidden shadow-soft hover:shadow-strong transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-8">
                  <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Facilities;
