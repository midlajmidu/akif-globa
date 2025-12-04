import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';
import campusImg from '@/assets/campus.jpg';

const About = () => {
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

  const features = [
    { icon: Award, title: 'Excellence', description: 'Committed to academic excellence and holistic development' },
    { icon: Users, title: 'Community', description: 'Building a strong community of learners and educators' },
    { icon: BookOpen, title: 'Innovation', description: 'Embracing innovative teaching methodologies' },
    { icon: Target, title: 'Focus', description: 'Focused on individual growth and achievement' },
  ];

  return (
    <Layout>
      <PageHeader title="About Us" breadcrumb="About" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Story
              </span>
              <h2 className="heading-primary mb-6">
                Shaping Future Leaders Since 1999
              </h2>
              <p className="text-body mb-6">
                Global School was established with a vision to provide world-class education 
                that nurtures young minds and prepares them for the challenges of tomorrow. 
                Our journey began with a small group of dedicated educators who believed in 
                the transformative power of education.
              </p>
              <p className="text-body mb-6">
                Today, we stand as one of the leading educational institutions in the region, 
                known for our innovative teaching methods, state-of-the-art facilities, and 
                commitment to holistic development.
              </p>
              <p className="text-body">
                Our alumni have gone on to achieve remarkable success in various fields, 
                carrying forward the values and skills they acquired at Global School. 
                We continue to evolve and adapt, ensuring that our students receive an 
                education that is relevant, engaging, and empowering.
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
                  src={campusImg}
                  alt="Campus"
                  className="rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">25+</div>
                  <div className="text-sm">Years of Excellence</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-20">
            {features.map((feature, index) => (
              <div
                key={feature.title}
                className={`bg-cream rounded-2xl p-6 text-center transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
