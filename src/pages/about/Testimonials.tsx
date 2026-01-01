import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Pinarayi Vijayan',
    role: 'CM, Kerala',
    text: 'Alif Global School is a great initiative in the field of education. The school provides a world-class environment for students to grow and excel.',
    image: '/src/assets/testimonial/Pinarayi Vijayan.webp'
  },
  {
    name: 'Dr Abdussalam Muhammed',
    role: 'CEO, MKC',
    text: 'The vision of Alif Global School to provide quality education with moral values is commendable. It is truly a center for excellence.',
    image: '/src/assets/testimonial/abdusalam.png'
  },
  {
    name: 'Sarah Johnson',
    role: 'Parent of Grade 5 Student',
    text: 'My child has shown remarkable progress since joining Alif. The teachers are dedicated and the facilities are top-notch.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=2070&auto=format&fit=crop'
  },
  {
    name: 'Michael Chen',
    role: 'Alumni, Batch 2022',
    text: 'The foundation I received at Alif helped me excel in my higher studies. The focus on holistic development is what sets this school apart.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop'
  },
];

const Testimonials = () => {
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
    <Layout>
      <PageHeader title="Testimonials" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Testimonials' }]} />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                What People Say
              </span>
              <h2 className="heading-primary mb-6">
                Voices of Our Community
              </h2>
              <p className="text-body mb-6">
                The success of Alif Global School is best reflected in the words of our students, parents, and distinguished visitors. We take pride in the positive impact we have on our community.
              </p>
              <p className="text-body">
                Read through the experiences and perspectives of those who have been part of our journey, and discover why Alif is a preferred choice for quality education.
              </p>
            </div>

            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1511632765486-a01980e01a18?q=80&w=2070&auto=format&fit=crop"
                  alt="Community"
                  className="rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">100%</div>
                  <div className="text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 group"
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <Quote className="w-10 h-10 text-accent/20 mb-4 group-hover:text-accent transition-colors" />
                <p className="text-body mb-6 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;