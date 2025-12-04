import { useEffect, useRef, useState } from 'react';

const AboutSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-cream">
      <div className="container-custom">
        <div className={`max-w-4xl mx-auto text-center transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Who We Are
          </span>
          
          <h2 className="heading-primary mb-6">
            About <span className="text-accent">Global School</span>
          </h2>
          
          <p className="text-body mb-8">
            Global School stands as a beacon of educational excellence, committed to nurturing 
            young minds and shaping future leaders. With a perfect blend of traditional values 
            and modern pedagogy, we provide a comprehensive learning environment that fosters 
            intellectual curiosity, creativity, and character development.
          </p>
          
          <p className="text-body">
            Our state-of-the-art campus, experienced faculty, and innovative curriculum ensure 
            that every student receives personalized attention and opportunities to excel in 
            academics, sports, arts, and co-curricular activities. We believe in creating 
            global citizens who are equipped to face the challenges of tomorrow.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '25+', label: 'Years of Excellence' },
              { number: '2000+', label: 'Students' },
              { number: '150+', label: 'Expert Faculty' },
              { number: '100%', label: 'Success Rate' },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className={`text-center transition-all duration-500 delay-${index * 100}`}
                style={{ 
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(20px)'
                }}
              >
                <div className="text-3xl md:text-4xl font-bold text-accent mb-2">
                  {stat.number}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
