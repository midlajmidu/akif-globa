import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';

import residenceImg from '@/assets/about/alif residency.webp';

const Residence = () => {
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
      <PageHeader title="Alif Residence" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif Residence' }]} />

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
                Home Away From Home
              </span>
              <h2 className="heading-primary mb-6">
                Alif Residence
              </h2>

              <p className="text-body mb-6">
                The Alif residence is the second home for a child, where he/she feels comfortable thanks to the cosy interiors and comfortable living quarters. The tranquil campus, with its ample green space and fresh air, is home to beautiful flora and birdlife worth cherishing and is a hub of academic, social, physical and cultural activities. The students dwell in a healthy environment that helps them grow and learn without any obstacle.

              </p>
              <p className="text-body">
                With both weekly and yearly boarding programs available, the rooms are designed to accommodate four students from the same age group in one room. Alif residence also boasts of separate residences for girls & boys, well-structured and homely environment, fully air-conditioned living quarters, mentors for each block to monitor academics and act as a dorm parent and various other facilities.              </p>
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
                  src={residenceImg}
                  alt="Alif Residence"
                  className="rounded-2xl shadow-strong w-full h-auto object-cover"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">Secure</div>
                  <div className="text-sm">Environment</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Residence;