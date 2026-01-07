import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import SEO from '@/components/SEO';

const VirtualTour = () => {
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
        title="Virtual Tour"
        description="Take a virtual tour of Alif Global School. Experience our world-class facilities, smart classrooms, and vibrant campus environment from anywhere."
        canonical="/about/virtual-tour"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Virtual Tour', path: '/about/virtual-tour' }
        ]}
      />
      <PageHeader title="Virtual Tour" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Virtual Tour' }]} />

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
                Experience Alif
              </span>
              <h2 className="heading-primary mb-6">
                Virtual Tour
              </h2>
              <p className="text-body mb-6">
                Take a virtual tour of our world-class facilities and experience the Alif Global School environment from anywhere in the world. Our campus is designed to inspire and facilitate modern learning.
              </p>
              <p className="text-body">
                Explore our smart classrooms, advanced laboratories, sports facilities, and the vibrant student spaces that make Alif a unique place for growth and discovery.
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
              <div className="relative aspect-video rounded-2xl overflow-hidden shadow-strong border-4 border-white">
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/x3pNlR0rOcU?si=QU2MJNfyeo_POsQV"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>


        </div>
      </section>
    </Layout>
  );
};

export default VirtualTour;