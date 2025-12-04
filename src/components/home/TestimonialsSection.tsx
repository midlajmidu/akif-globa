import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Dr. Rajesh Kumar',
    designation: 'Parent',
    content: 'Global School has been instrumental in shaping my child\'s future. The dedicated faculty and excellent infrastructure provide the perfect environment for holistic development.',
    avatar: 'RK',
  },
  {
    id: 2,
    name: 'Priya Menon',
    designation: 'Alumni - Batch 2020',
    content: 'My years at Global School were transformative. The school not only prepared me academically but also instilled values that continue to guide me in my professional journey.',
    avatar: 'PM',
  },
  {
    id: 3,
    name: 'Anitha Sharma',
    designation: 'Parent',
    content: 'The personalized attention each student receives is remarkable. The teachers go above and beyond to ensure every child reaches their full potential.',
    avatar: 'AS',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section ref={sectionRef} className="section-padding bg-cream">
      <div className="container-custom">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="heading-primary">What People Say</h2>
        </div>

        <div
          className={`max-w-4xl mx-auto transition-all duration-700`}
          style={{
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
          }}
        >
          <div className="relative bg-background rounded-3xl p-8 md:p-12 shadow-medium">
            <Quote className="absolute top-6 left-6 w-12 h-12 text-accent/20" />
            
            <div className="relative z-10">
              <div className="min-h-[150px] flex items-center justify-center">
                <p className="text-lg md:text-xl text-center text-muted-foreground leading-relaxed">
                  "{testimonials[currentIndex].content}"
                </p>
              </div>
              
              <div className="flex flex-col items-center mt-8">
                <div className="w-16 h-16 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl mb-4">
                  {testimonials[currentIndex].avatar}
                </div>
                <h4 className="text-lg font-bold text-primary">
                  {testimonials[currentIndex].name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {testimonials[currentIndex].designation}
                </p>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={goToPrevious}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              
              <div className="flex items-center gap-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      index === currentIndex ? 'w-8 bg-accent' : 'bg-border'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={goToNext}
                className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center text-primary hover:bg-accent hover:text-accent-foreground transition-all duration-300"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
