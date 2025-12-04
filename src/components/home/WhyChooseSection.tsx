import { useEffect, useRef, useState } from 'react';
import { Leaf, Heart, Shield } from 'lucide-react';

const stats = [
  {
    icon: Leaf,
    value: '100%',
    label: 'Green Campus',
    description: 'Eco-friendly infrastructure',
    color: 'bg-green-100 text-green-600',
  },
  {
    icon: Heart,
    value: '100%',
    label: 'Happiness Curriculum',
    description: 'Focus on well-being',
    color: 'bg-rose-100 text-rose-600',
  },
  {
    icon: Shield,
    value: '100%',
    label: 'Moral Values',
    description: 'Character development',
    color: 'bg-blue-100 text-blue-600',
  },
];

const WhyChooseSection = () => {
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
    <section ref={sectionRef} className="section-padding bg-background">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
            Our Values
          </span>
          <h2 className="heading-primary">Why Choose Us</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`text-center transition-all duration-700`}
              style={{
                transitionDelay: `${index * 150}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0) scale(1)' : 'translateY(30px) scale(0.9)',
              }}
            >
              <div className="relative inline-block">
                {/* Circular Progress Ring */}
                <div className="w-36 h-36 md:w-44 md:h-44 relative">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      className="text-border"
                    />
                    <circle
                      cx="50%"
                      cy="50%"
                      r="45%"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="6"
                      strokeDasharray="283"
                      strokeDashoffset={isVisible ? '0' : '283'}
                      className="text-accent transition-all duration-1000"
                      style={{ transitionDelay: `${index * 200 + 300}ms` }}
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <div className={`w-12 h-12 rounded-full ${stat.color} flex items-center justify-center mb-1`}>
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <span className="text-2xl font-bold text-primary">{stat.value}</span>
                  </div>
                </div>
              </div>
              <h3 className="text-lg font-bold text-primary mt-4 mb-1">{stat.label}</h3>
              <p className="text-sm text-muted-foreground">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
