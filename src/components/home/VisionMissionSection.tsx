import { useEffect, useRef, useState } from 'react';
import { Eye, Target } from 'lucide-react';

const VisionMissionSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-primary">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/20 text-accent rounded-full text-sm font-medium mb-4">
            Our Purpose
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground">
            Vision & Mission
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Vision Card */}
          <div
            className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-700`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Eye className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Vision</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To be a globally recognized institution of academic excellence that nurtures 
              innovative thinkers, compassionate leaders, and responsible global citizens 
              who contribute positively to society and drive meaningful change in the world.
            </p>
          </div>

          {/* Mission Card */}
          <div
            className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-2xl p-8 transition-all duration-700`}
            style={{
              transitionDelay: '200ms',
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
            }}
          >
            <div className="w-16 h-16 rounded-2xl bg-accent/20 flex items-center justify-center mb-6">
              <Target className="w-8 h-8 text-accent" />
            </div>
            <h3 className="text-2xl font-bold text-primary-foreground mb-4">Our Mission</h3>
            <p className="text-primary-foreground/80 leading-relaxed">
              To provide a transformative educational experience through innovative pedagogy, 
              personalized learning, and a supportive environment that develops intellectual 
              curiosity, critical thinking, creativity, and strong moral values in every student.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
