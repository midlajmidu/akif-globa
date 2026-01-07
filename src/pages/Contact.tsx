import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import SEO from '@/components/SEO';

const Contact = () => {
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

  const contactInfo = [
    { icon: MapPin, title: 'Address', content: 'Markaz Knowledge City, Unnikulam,\nKozhikode, Kerala 673574' },
    { icon: Phone, title: 'Phone', content: '+91 8012800100' },
    { icon: Mail, title: 'Email', content: 'info@alifglobalschool.com' },
    { icon: Clock, title: 'Office Hours', content: 'Mon - Fri: 8:00 AM - 4:00 PM\nSat: 9:00 AM - 1:00 PM' },
  ];

  return (
    <Layout>
      <SEO
        title="Contact Us"
        description="Get in touch with Alif Global School. Find our address, phone number, email, and office hours. Send us a message or find directions on Google Maps."
        canonical="/contact"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Contact Us', path: '/contact' }
        ]}
      />
      <PageHeader title="Contact Us" breadcrumb="Contact" />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div
              className={`transition-all duration-700`}
              style={{
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(-30px)',
              }}
            >
              <span className="inline-block px-4 py-2 bg-accent/10 text-accent rounded-full text-sm font-medium mb-4">
                Get in Touch
              </span>
              <h2 className="heading-primary mb-6">Send Us a Message</h2>
              <p className="text-body mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll
                respond as soon as possible.
              </p>

              <form className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <input
                    type="email"
                    placeholder="Email Address"
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                </div>
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                />
                <textarea
                  placeholder="Your Message"
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                />
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 bg-accent text-accent-foreground py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold group"
                >
                  Send Message
                  <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </div>

            {/* Contact Info & Map */}
            <div
              className={`transition-all duration-700`}
              style={{
                transitionDelay: '200ms',
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateX(0)' : 'translateX(30px)',
              }}
            >
              <div className="bg-cream rounded-2xl p-8 mb-6">
                <h3 className="text-xl font-bold text-primary mb-6">Contact Information</h3>
                <div className="space-y-6">
                  {contactInfo.map((info) => (
                    <div key={info.title} className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-primary mb-1">{info.title}</h4>
                        <p className="text-muted-foreground whitespace-pre-line">{info.content}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-cream rounded-2xl overflow-hidden h-64 shadow-soft border border-primary/5">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3910.113389586524!2d76.00654!3d11.4717407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba66da0743f6ded%3A0x2f191d88b5627616!2sAlif%20Global%20School!5e0!3m2!1sen!2sin!4v1767098595562!5m2!1sen!2sin"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Alif Global School Location"
                ></iframe>
              </div>
              <a
                href="https://www.google.com/maps/dir//MARKAZ+KNOWLEDGE+CITY+,Kaithapoyil+,+673586(PIN,+Kerala+673580/@11.355173,75.9579352,14z/data=!3m1!4b1!4m8!4m7!1m0!1m5!1m1!1s0x3ba66da0743f6ded:0x2f191d88b5627616!2m2!1d76.00654!2d11.4717407"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 flex items-center justify-center gap-2 text-accent font-bold hover:underline"
              >
                <MapPin className="w-4 h-4" />
                Get Directions on Google Maps
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
