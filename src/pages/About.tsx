import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Award, Users, BookOpen, Target } from 'lucide-react';
import campusImg from '@/assets/galley in home page/campus.webp';
import SEO from '@/components/SEO';

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
      <SEO
        title="About Us"
        description="Learn about Alif Global School's history, mission, and vision. Founded in 2009, we are committed to providing quality education with a holistic approach."
        canonical="/about"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' }
        ]}
      />
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
                About Alif
              </h2>
              <p className="text-body mb-6">
                At Alif, we genuinely believe that every child has the potential to succeed, and that our encouraging, balanced and caring approach can realize this. Our school with exceptional staff and superb facilities provides the foundation for outstanding achievement. Every student is valued as an individual and our ‘holistic approach’ provides multiple opportunities where our students can learn, have fun, and flourish.
              </p>
              <p className="text-body mb-6">
                Since Alif International School was founded in Riyadh, Kingdom of Saudi Arabia in 2009 it has remained true to the spirit that guided its founders by providing an education that equips our students with the knowledge, skills and character that prepare them to contribute enormously to society. Alif Global School is one of the endeavors of Alif Group of Schools to impart quality education in international standards while nurturing human values.
              </p>
              <p className="text-body">
                Our collective mission and vision is to motivate and energize students to develop the knowledge, creativity, and skill to realize their fullest potential as caring, responsible and productive citizens, leaders, and lifelong learners.
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
                  alt="Alif Global School Campus"
                  loading="lazy"
                  className="rounded-2xl shadow-strong"
                />
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
