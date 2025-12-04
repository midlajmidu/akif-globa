import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { FileText, Calendar, CheckCircle, ArrowRight } from 'lucide-react';

const Admission = () => {
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

  const steps = [
    { step: '01', title: 'Submit Application', description: 'Fill out the online application form with all required details' },
    { step: '02', title: 'Document Verification', description: 'Submit required documents for verification' },
    { step: '03', title: 'Entrance Assessment', description: 'Attend the entrance assessment as per schedule' },
    { step: '04', title: 'Admission Confirmation', description: 'Complete fee payment and confirm admission' },
  ];

  const requirements = [
    'Birth Certificate (Original + Copy)',
    'Previous School Records',
    'Transfer Certificate (if applicable)',
    'Passport Size Photographs (4)',
    'Aadhar Card Copy',
    'Parent ID Proof',
    'Medical Fitness Certificate',
    'Address Proof',
  ];

  return (
    <Layout>
      <PageHeader title="Admission" breadcrumb="Admission" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          {/* Admission Process */}
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Join Us
            </span>
            <h2 className="heading-primary mb-4">Admission Process</h2>
            <p className="text-body max-w-2xl mx-auto">
              Our streamlined admission process ensures a smooth experience for parents and students
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
            {steps.map((item, index) => (
              <div
                key={item.step}
                className={`relative bg-cream rounded-2xl p-6 transition-all duration-500`}
                style={{
                  transitionDelay: `${index * 100}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <div className="text-5xl font-bold text-accent/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-primary mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
                {index < steps.length - 1 && (
                  <ArrowRight className="hidden lg:block absolute top-1/2 -right-4 w-8 h-8 text-accent" />
                )}
              </div>
            ))}
          </div>
          
          {/* Requirements & Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '400ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <div className="bg-primary rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <FileText className="w-8 h-8 text-accent" />
                  <h3 className="text-2xl font-bold text-primary-foreground">Required Documents</h3>
                </div>
                <div className="space-y-3">
                  {requirements.map((req, index) => (
                    <div key={index} className="flex items-center gap-3 text-primary-foreground/80">
                      <CheckCircle className="w-5 h-5 text-accent shrink-0" />
                      <span>{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '500ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              <div className="bg-cream rounded-2xl p-8">
                <div className="flex items-center gap-3 mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                  <h3 className="text-2xl font-bold text-primary">Enquiry Form</h3>
                </div>
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      placeholder="Student Name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                    <input
                      type="text"
                      placeholder="Parent Name"
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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
                  </div>
                  <select className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-muted-foreground">
                    <option value="">Select Grade</option>
                    <option value="pre-kg">Pre-KG</option>
                    <option value="lkg">LKG</option>
                    <option value="ukg">UKG</option>
                    <option value="1">Grade 1</option>
                    <option value="2">Grade 2</option>
                    <option value="3">Grade 3</option>
                    <option value="4">Grade 4</option>
                    <option value="5">Grade 5</option>
                    <option value="6-10">Grade 6-10</option>
                    <option value="11-12">Grade 11-12</option>
                  </select>
                  <textarea
                    placeholder="Message (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  />
                  <button
                    type="submit"
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold"
                  >
                    Submit Enquiry
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

export default Admission;
