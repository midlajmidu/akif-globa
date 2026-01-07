import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';

// Import local images
import worldCampusImg from '@/assets/home page/world campus.avif';
import coCurricularImg from '@/assets/home page/co curricular.webp';
import labImg from '@/assets/home page/-lab.webp';
import libraryImg from '@/assets/home page/library-scaled.webp';
import classroomImg from '@/assets/home page/classroom.webp';
import sportsImg from '@/assets/home page/sports of al.webp';

const features = [
  {
    title: 'World Class Campus',
    description: 'Modern infrastructure with state-of-the-art facilities and green spaces.',
    image: worldCampusImg,
  },
  {
    title: 'Co-Curricular Programs',
    description: 'Nurturing talents through music, arts, drama, and diverse clubs.',
    image: coCurricularImg,
  },
  {
    title: 'Modern Science Labs',
    description: 'Advanced laboratories equipped for hands-on scientific exploration and research.',
    image: labImg,
  },
  {
    title: 'World Class Library',
    description: 'A vast collection of resources in a modern, inspiring learning environment.',
    image: libraryImg,
  },
  {
    title: 'Smart Classroom',
    description: 'Technology-integrated learning spaces for interactive education.',
    image: classroomImg,
  },
  {
    title: 'Sports Activities',
    description: 'Engaging physical activities to promote health, team spirit, and athletic excellence.',
    image: sportsImg,
  },
];

const FeaturesSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Our Excellence
          </span>
          <h2 className="heading-primary">What Makes Us Special</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Link
              key={feature.title}
              to="/facilities"
              className={`group relative overflow-hidden rounded-2xl aspect-video cursor-pointer transition-all duration-700 shadow-md hover:shadow-xl block`}
              style={{
                transitionDelay: `${index * 100}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
              }}
            >
              <img
                src={feature.image}
                alt={feature.title}
                loading="lazy"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/95 via-primary/40 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-accent transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-white/90 text-sm transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  {feature.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
