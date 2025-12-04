import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { FileText, Download, ExternalLink } from 'lucide-react';

const Disclosure = () => {
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

  const documents = [
    { category: 'General Information', items: [
      { name: 'Affiliation Certificate', type: 'PDF' },
      { name: 'Society Registration Certificate', type: 'PDF' },
      { name: 'NOC from State Government', type: 'PDF' },
      { name: 'Recognition Certificate', type: 'PDF' },
      { name: 'Building Safety Certificate', type: 'PDF' },
    ]},
    { category: 'Academic Information', items: [
      { name: 'Fee Structure', type: 'PDF' },
      { name: 'Academic Calendar', type: 'PDF' },
      { name: 'List of Books & Syllabus', type: 'PDF' },
      { name: 'Annual Report', type: 'PDF' },
    ]},
    { category: 'Infrastructure', items: [
      { name: 'Land Certificate', type: 'PDF' },
      { name: 'Building Plan Approval', type: 'PDF' },
      { name: 'Fire Safety Certificate', type: 'PDF' },
      { name: 'Water & Sanitation Certificate', type: 'PDF' },
    ]},
    { category: 'Staff Information', items: [
      { name: 'List of Teaching Staff', type: 'PDF' },
      { name: 'List of Non-Teaching Staff', type: 'PDF' },
      { name: 'Staff Qualification Details', type: 'PDF' },
    ]},
  ];

  const schoolInfo = [
    { label: 'School Name', value: 'Global School' },
    { label: 'Affiliation Number', value: '123456' },
    { label: 'School Code', value: '78901' },
    { label: 'Address', value: '123 Education Lane, Knowledge City, Kerala - 682001' },
    { label: 'Principal', value: 'Dr. Placeholder Name' },
    { label: 'School Email', value: 'info@yourschool.edu' },
    { label: 'Contact Number', value: '+91 1234 567 890' },
  ];

  return (
    <Layout>
      <PageHeader title="Mandatory Public Disclosure" breadcrumb="Disclosure" />
      
      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
              Transparency
            </span>
            <h2 className="heading-primary mb-4">Public Disclosure</h2>
            <p className="text-body">
              As per CBSE guidelines, we provide mandatory public disclosure of school information 
              for transparency and accountability.
            </p>
          </div>
          
          {/* School Information */}
          <div
            className={`bg-primary rounded-2xl p-8 mb-12 transition-all duration-700`}
            style={{
              opacity: isVisible ? 1 : 0,
              transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
            }}
          >
            <h3 className="text-2xl font-bold text-primary-foreground mb-6">School Information</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {schoolInfo.map((info) => (
                <div key={info.label} className="flex justify-between items-start gap-4 py-3 border-b border-primary-foreground/10">
                  <span className="text-primary-foreground/70">{info.label}</span>
                  <span className="text-primary-foreground font-medium text-right">{info.value}</span>
                </div>
              ))}
            </div>
          </div>
          
          {/* Documents */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {documents.map((category, catIndex) => (
              <div
                key={category.category}
                className={`bg-cream rounded-2xl p-6 transition-all duration-500`}
                style={{
                  transitionDelay: `${catIndex * 100 + 200}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <h3 className="text-xl font-bold text-primary mb-4 flex items-center gap-2">
                  <FileText className="w-5 h-5 text-accent" />
                  {category.category}
                </h3>
                <div className="space-y-3">
                  {category.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex items-center justify-between p-3 bg-background rounded-lg hover:shadow-soft transition-all cursor-pointer group"
                    >
                      <span className="text-sm text-foreground">{item.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-muted-foreground">{item.type}</span>
                        <Download className="w-4 h-4 text-accent group-hover:scale-110 transition-transform" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          {/* CBSE Link */}
          <div className="text-center mt-12">
            <a
              href="https://cbse.gov.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-primary hover:text-accent transition-colors"
            >
              <span>Visit CBSE Official Website</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Disclosure;
