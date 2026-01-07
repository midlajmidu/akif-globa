import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Users, GraduationCap, Calendar, MapPin, Camera } from 'lucide-react';
import SEO from '@/components/SEO';

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

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    graduationYear: '',
    batch: '',
    occupation: '',
    location: '',
    message: '',
    photoBase64: '',
    photoType: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<{ type: 'success' | 'error' | null, message: string | null }>({ type: null, message: null });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        // Extract base64 data and type
        const matches = result.match(/^data:(.+);base64,(.+)$/);
        if (matches) {
          setFormData(prev => ({
            ...prev,
            photoType: matches[1],
            photoBase64: matches[2]
          }));
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: null });

    try {
      const response = await fetch('https://script.google.com/macros/s/AKfycbzNXOPJKOX-gmDhhzEZsbKb-CY1KuNRW7c-XshqpB-F2XIaBmNcCFyI2U_np7nkZJgg/exec', {
        method: 'POST',
        mode: 'no-cors', // Important for Google Apps Script
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      setStatus({ type: 'success', message: 'Thank you for joining the Alumni Network.' });
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        graduationYear: '',
        batch: '',
        occupation: '',
        location: '',
        message: '',
        photoBase64: '',
        photoType: ''
      });

    } catch (error) {
      console.error('Submission error:', error);
      setStatus({ type: 'error', message: 'An error occurred. Please try again later.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Alumni Network"
        description="Join the Alif Global School Alumni Network. Stay connected with fellow graduates, access exclusive events, and contribute to our growing community."
        canonical="/alumni"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Alumni', path: '/alumni' }
        ]}
      />
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
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      placeholder="First Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                    <input
                      type="text"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      placeholder="Last Name"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Email Address"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="Phone Number"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <select
                      name="graduationYear"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all text-muted-foreground"
                    >
                      <option value="">Graduation Year</option>
                      {Array.from({ length: 30 }, (_, i) => 2024 - i).map((year) => (
                        <option key={year} value={year}>{year}</option>
                      ))}
                    </select>
                    <input
                      type="text"
                      name="batch"
                      value={formData.batch}
                      onChange={handleChange}
                      placeholder="Batch/Section"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                    />
                  </div>
                  <input
                    type="text"
                    name="occupation"
                    value={formData.occupation}
                    onChange={handleChange}
                    placeholder="Current Occupation"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <input
                    type="text"
                    name="location"
                    value={formData.location}
                    onChange={handleChange}
                    placeholder="Current Location (City, Country)"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
                  />
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-primary block">Upload Photo</label>
                    <div className="relative group">
                      <div className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground group-focus-within:text-accent transition-colors">
                        <Camera className="w-5 h-5" />
                      </div>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleFileChange}
                        className="w-full pl-12 pr-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all file:mr-4 file:py-1 file:px-3 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-accent/10 file:text-accent hover:file:bg-accent/20 cursor-pointer text-sm text-muted-foreground"
                      />
                    </div>
                  </div>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Brief message or memories from school (Optional)"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all resize-none"
                  />

                  {status.message && (
                    <div className={`p-4 rounded-lg text-sm font-medium ${status.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {status.message}
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-accent text-accent-foreground py-4 rounded-lg font-semibold transition-all duration-300 hover:bg-gold-dark hover:shadow-gold disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Submitting...' : 'Join Alumni Network'}
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
