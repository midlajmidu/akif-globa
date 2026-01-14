import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/SEO';

import markazImg from '@/assets/about/markaz knoedge city.webp';

const Markaz = () => {
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
        title="Markaz Knowledge City"
        description="Learn about Markaz Knowledge City, the integrated township of international excellence where Alif Global School is located. A 125-acre hub for education, health, and living."
        canonical="/about/markaz"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Markaz Knowledge City', path: '/about/markaz' }
        ]}
      />
      <PageHeader title="Markaz Knowledge City" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Markaz Knowledge City' }]} />

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
                The Educational Hub
              </span>
              <h2 className="heading-primary mb-6">
                Markaz Knowledge City
              </h2>
              <p className="text-body mb-6">
                Spread across 125 acres of lush greenery at Kaithapoyil, just 40 km from Calicut City, Markaz Knowledge City is one of the largest and most ambitious projects in South India. It is strategically located to offer a serene yet well-connected environment that supports growth, learning, and quality living.
              </p>
              <p className="text-body mb-6">
                Conceived as an integrated township of international excellence, Markaz Knowledge City provides world-class infrastructure for high-quality academic institutions, residential communities, health and hospitality services, recreation and leisure spaces, and modern commercial facilities. The city brings together the core aspects of life—learning, working, living, and leisure—within a single, well-planned ecosystem.
              </p>
              <p className="text-body">
                Designed as a sustainable development with phased growth, the city offers strong social infrastructure including housing for students and faculty, schools, healthcare centers, and leisure amenities. This thoughtful planning creates a pleasant environment where people can walk to schools and workplaces, enjoy modern comforts, and take pride in being part of one of the finest emerging learning centers in the world.
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
                  src={markazImg}
                  alt="Markaz Knowledge City Campus Overview"
                  className="rounded-2xl shadow-strong"
                />
                <div className="absolute -bottom-6 -right-6 bg-accent text-accent-foreground p-6 rounded-2xl shadow-gold">
                  <div className="text-4xl font-bold">World Class</div>
                  <div className="text-sm">Infrastructure</div>
                </div>
              </div>
            </div>
          </div>
          {/* Riyadh Campus CTA */}
          <div className="mt-20 pt-12 border-t border-border/50">
            <div className="bg-gradient-to-r from-primary to-primary/90 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -mr-32 -mt-32 blur-3xl transition-transform group-hover:scale-110 duration-700"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-white/5 rounded-full -ml-24 -mb-24 blur-2xl"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="max-w-2xl">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">Visit Alif International School, Riyadh</h3>
                  <p className="text-primary-foreground/80 leading-relaxed text-lg">
                    Explore our Riyadh campus website for admissions, academic programs, and more information about our international standards in Saudi Arabia.
                  </p>
                </div>
                <a
                  href="https://www.markazknowledgecity.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-accent text-accent-foreground hover:bg-white hover:text-primary px-10 py-4 rounded-2xl font-bold transition-all shadow-gold hover:shadow-xl shrink-0 text-center"
                >
                  Visit Website
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Markaz;