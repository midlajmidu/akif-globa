import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/SEO';

import logoImg from '@/assets/alif-logo.webp';
import campusImg from '@/assets/galley in home page/campus .webp';

const Trust = () => {
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
      <SEO
        title="Alif Edu Trust"
        description="Discover the foundation of Alif Global School. Learn about Alif Edu Trust, our mission, vision, and our journey since 2009 in providing quality education."
        canonical="/about/trust"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Alif Edu Trust', path: '/about/trust' }
        ]}
      />
      <PageHeader title="Alif Edu Trust" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif Edu Trust' }]} />

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
              <img src={logoImg} alt="Alif Global School Logo" className="w-32 h-auto mb-8" />
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Our Foundation
              </span>
              <h2 className="heading-primary mb-6">
                Alif Edu Trust
              </h2>
              <p className="text-body mb-6">
                In the year 2009, the Alif set out its journey at Riyadh, K.S.A. Today it has evolved into an institution that delivers meaningful education and create potential cosmopolitans across the globe.
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
                  alt="Alif Global School Campus View"
                  className="rounded-2xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">Empowering</div>
                  <div className="text-sm">Communities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Trust;