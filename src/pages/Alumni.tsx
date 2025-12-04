import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Users, GraduationCap, Calendar, MapPin } from 'lucide-react';

const Alumni = () => {
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
      <PageHeader title="Join Our Alumni" breadcrumb="Alumni" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Info Section */}
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Stay Connected
              </span>
              <h2 className="heading-primary mb-6">Join Our Alumni Network</h2>
              <p className="text-body mb-8">
                Stay connected with your alma mater and fellow alumni. Join our growing network 
                of successful graduates who continue to contribute to our community.
              </p>
              
              <div className="grid grid-cols-2 gap-4 mb-8">
                <div className="bg-cream rounded-xl p-4 text-center">
                  <Users className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">5000+</div>
                  <div className="text-sm text-muted-foreground">Alumni Members</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <GraduationCap className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">25+</div>
                  <div className="text-sm text-muted-foreground">Batches</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <Calendar className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">10+</div>
                  <div className="text-sm text-muted-foreground">Events/Year</div>
                </div>
                <div className="bg-cream rounded-xl p-4 text-center">
                  <MapPin className="w-8 h-8 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-primary">50+</div>
                  <div className="text-sm text-muted-foreground">Countries</div>
                </div>
              </div>
              
              <div className="bg-primary rounded-2xl p-6">
                <h4 className="text-lg font-bold text-primary-foreground mb-3">Benefits of Joining</h4>
                <ul className="space-y-2 text-primary-foreground/80">
                  <li>• Access to exclusive alumni events and reunions</li>
                  <li>• Networking opportunities with fellow alumni</li>
                  <li>• Career mentorship programs</li>
                  <li>• School newsletter and updates</li>
                  <li>• Opportunity to give back to your alma mater</li>
                </ul>
              </div>
            </div>
            
            {/* Registration Form */}
            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              <div className="bg-cream rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-primary mb-6">Alumni Registration</h3>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="First Name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Last Name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-muted-foreground">
                      <option value="">Graduation Year</option>
                      {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      placeholder="Batch/Section"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    placeholder="Current Occupation"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <input
                    type="text"
                    placeholder="Current Location (City, Country)"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <textarea
                    placeholder="Brief message or memories from school (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold"
                  >
                    Join Alumni Network
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Alumni;
