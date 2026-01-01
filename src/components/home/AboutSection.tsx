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
            At Alif, a top-notch international school in Kozhikode, we believe that every child has the potential to succeed. Through an encouraging, balanced, and caring approach, we nurture each student’s abilities and help them grow with confidence. Our dedicated educators and supportive environment ensure that learning is both meaningful and inspiring
          </p>

          <p className="text-body">
            With exceptional staff and superb facilities, Alif provides a strong foundation for outstanding achievement. Every student is valued as an individual, and our holistic approach creates multiple opportunities to learn, have fun, and flourish—academically, socially, and personally.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            {[
              { number: '15+', label: 'Years of Excellence' },
              { number: '1000+', label: 'Students' },
              { number: '50+', label: 'Expert Faculty' },
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
