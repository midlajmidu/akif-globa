import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { BookOpen, Beaker, Globe, Calculator, Palette, Music } from 'lucide-react';
import SEO from '@/components/SEO';

const Academics = () => {
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

  const subjects = [
    { icon: BookOpen, name: 'Language Arts', description: 'English, Hindi, Malayalam, and foreign languages' },
    { icon: Calculator, name: 'Mathematics', description: 'From foundational math to advanced calculus' },
    { icon: Beaker, name: 'Sciences', description: 'Physics, Chemistry, Biology, and Environmental Science' },
    { icon: Globe, name: 'Social Studies', description: 'History, Geography, Civics, and Economics' },
    { icon: Palette, name: 'Arts & Design', description: 'Visual arts, crafts, and digital design' },
    { icon: Music, name: 'Performing Arts', description: 'Music, dance, and drama programs' },
  ];

  const curriculum = [
    { title: 'CBSE Curriculum', description: 'Following the Central Board of Secondary Education guidelines with enhanced modules' },
    { title: 'Activity-Based Learning', description: 'Hands-on experiences that make learning engaging and memorable' },
    { title: 'Technology Integration', description: 'Smart classrooms and digital learning tools for modern education' },
    { title: 'Assessment Methods', description: 'Continuous and comprehensive evaluation for holistic development' },
  ];

  return (
    <Layout>
      <SEO
        title="Academics"
        description="Explore Alif Global School's academic approach, CBSE curriculum, and wide range of subjects designed for holistic development and excellence."
        canonical="/academics"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Academics', path: '/academics' }
        ]}
      />
      <PageHeader title="Academics" breadcrumb="Academics" />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          {/* Introduction */}
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Academic Excellence
            </span>
            <h2 className="heading-primary mb-4">Our Academic Approach</h2>
            <p className="text-body">
              We follow a comprehensive curriculum that balances academic rigor with creative exploration,
              preparing students for success in higher education and beyond.
            </p>
          </div>

          {/* Subjects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {subjects.map((subject, index) => (
              <div
                key={subject.name}
                className={`bg-cream rounded-2xl p-6 transition-all duration-500 hover:shadow-medium hover:-translate-y-1`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <subject.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-2">{subject.name}</h3>
                <p className="text-muted-foreground">{subject.description}</p>
              </div>
            ))}
          </div>

          {/* Curriculum Features */}
          <div className="bg-primary rounded-3xl p-8 md:p-12">
            <div className="text-center mb-12">
              <h3 className="text-2xl md:text-3xl font-bold text-primary-foreground mb-4">
                Curriculum Features
              </h3>
              <p className="text-primary-foreground/70 max-w-2xl mx-auto">
                Our curriculum is designed to foster critical thinking, creativity, and a love for learning
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {curriculum.map((item, index) => (
                <div
                  key={item.title}
                  className={`bg-primary-foreground/5 backdrop-blur-sm border border-primary-foreground/10 rounded-xl p-6 transition-all duration-500`}
                  style={{
                    transitionDelay: `${index * 100 + 600}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
                  }}
                >
                  <h4 className="text-lg font-bold text-primary-foreground mb-2">{item.title}</h4>
                  <p className="text-primary-foreground/70">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Academics;
