import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { ExternalLink } from 'lucide-react';

import riyadhImg from '@/assets/about/alif international riyadh.webp';

const Riyadh = () => {
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
      <PageHeader title="Alif International School, Riyadh" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Alif International School, Riyadh' }]} />

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
                Global Presence
              </span>
              <h2 className="heading-primary mb-6">
                Alif International School, Riyadh
              </h2>
              <p className="text-body mb-6">
                Alif International School, Riyadh is located in the Kingdom of Saudi Arabia and is a proud extension of the Alif School group originating from Kozhikode, India. As the first international campus of Alif, the Saudi institution carries forward the same vision, values, and commitment to educational excellence that define the Alif name.
              </p>
              <p className="text-body mb-6">
                The school provides enriching learning spaces and supportive learning conditions designed to nurture the academic, social, and personal growth of every student. Backed by a spirited and vibrant team of qualified educators and enhanced by superb infrastructure, Alif International School, Riyadh offers a safe, engaging, and future-ready educational environment.              </p>
              <p className="text-body">
                Following the internationally recognized CBSE curriculum, the school blends strong academics with co-curricular activities, value-based education, and global exposure. By combining the legacy of Alif Kozhikode with an international outlook, Alif International School, Riyadh prepares students to become confident, responsible, and globally competent individuals.              </p>
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
                  src={riyadhImg}
                  alt="Alif Riyadh"
                  className="rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -left-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">International</div>
                  <div className="text-sm">Standards</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="container-custom">
          <div className="bg-primary rounded-3xl p-8 md:p-12 text-center text-primary-foreground relative overflow-hidden shadow-strong">
            <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full translate-y-1/2 -translate-x-1/2 blur-3xl" />

            <div className="relative z-10 max-w-2xl mx-auto">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Alif International School, Riyadh</h3>
              <p className="text-primary-foreground/80 mb-8">
                Explore our Riyadh campus website for admissions, academic programs, and more information about our international standards in Saudi Arabia.
              </p>
              <a
                href="https://alifschool.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-full font-bold hover:bg-white hover:text-primary transition-all duration-300 shadow-gold"
              >
                Visit Website
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Riyadh;