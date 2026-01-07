import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Calendar, Clock, FileText, Download, CheckCircle2, Loader2 } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const Test = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const registrationGrades = [
    'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9'
  ];

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Match keys with your Apps Script: data.phone, data.email
    const data = {
      studentName: formData.get('studentName'),
      grade: formData.get('grade'),
      phone: formData.get('parentPhone'),
      email: formData.get('parentEmail'),
    };

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbybVCmVKDGVEFUKDBnkH3aFk9fqj-CmnQYj1vXVV-HfEUOaKIlmTZh-YlLJA4JVsVXu/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'text/plain',
        },
        body: JSON.stringify(data),
      });

      form.reset();
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Registration successful!");
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Submission failed. Please try again.");
      console.error('Error!', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Layout>
      <SEO
        title="Admission Test"
        description="Register for the Alif Global School admission test. Find information about test dates, duration, subjects, and download the syllabus for Grades 1 to 9."
        canonical="/admission/test"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Admission', path: '/admission' },
          { name: 'Admission Test', path: '/admission/test' }
        ]}
      />
      <PageHeader title="Admission Test" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Admission Test' }]} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-primary mb-6">Admission Test Information</h2>
              <p className="text-body max-w-2xl mx-auto">
                Our admission test evaluates students' aptitude and readiness for academic excellence at Alif School. We ensure a fair and comprehensive assessment for all applicants.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center border border-border/50 hover:border-accent/30 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Calendar className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Test Dates</h3>
                <p className="text-muted-foreground">To be announced for the 2025-26 academic session.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center border border-border/50 hover:border-accent/30 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Clock className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Duration</h3>
                <p className="text-muted-foreground">Standard duration is 2-3 hours depending on the grade level.</p>
              </div>
              <div className="bg-card p-8 rounded-2xl shadow-soft text-center border border-border/50 hover:border-accent/30 transition-all">
                <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <FileText className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-xl font-bold text-primary mb-3">Subjects</h3>
                <p className="text-muted-foreground">Core subjects include English, Mathematics, and General Knowledge.</p>
              </div>
            </div>

            {/* Syllabus Section */}
            <div className="mb-20">
              <div className="flex items-center gap-4 mb-10">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shadow-sm">
                  <FileText className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-primary">Admission Test Syllabus</h2>
                  <div className="h-1 w-20 bg-accent mt-1 rounded-full"></div>
                </div>
              </div>

              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex flex-col md:flex-row items-center justify-between p-8 md:p-12 bg-white rounded-3xl border border-border shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-8 mb-8 md:mb-0">
                    <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                      <FileText className="w-10 h-10 text-accent" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl md:text-3xl font-bold text-primary mb-2">Grade 1 - 9 Syllabus</h3>
                      <p className="text-muted-foreground text-lg">Download the comprehensive admission test portions for Grades 1 to 9.</p>
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1IUvU0bOh5gGbFa79WcaJ6ivEsdeCe-tk/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 bg-accent text-accent-foreground hover:bg-primary hover:text-white font-bold text-lg px-8 py-4 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 group/btn"
                  >
                    DOWNLOAD SYLLABUS
                    <Download className="w-5 h-5 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>
            </div>

            {/* Registration Form */}
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

              <div className="relative z-10 max-w-3xl mx-auto">
                {isSubmitted ? (
                  <div className="text-center py-10 animate-fade-in">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Registration Received!</h2>
                    <p className="text-primary-foreground/80 mb-8">
                      Thank you for registering for the admission test. Our team will contact you with the test schedule and further details shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-white text-primary hover:bg-white/90">
                      Register Another Student
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Register for Admission Test</h2>
                      <p className="text-primary-foreground/70">Fill out the form below to register your child for the upcoming admission test.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="studentName" className="text-white">Student Name *</Label>
                          <Input id="studentName" name="studentName" placeholder="Full Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="grade" className="text-white">Grade Applying For *</Label>
                          <select id="grade" name="grade" required className="w-full h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 outline-none focus:ring-2 focus:ring-accent/50">
                            <option value="" className="text-primary">Select Grade</option>
                            {registrationGrades.map(grade => (
                              <option key={grade} value={grade} className="text-primary">{grade}</option>
                            ))}
                          </select>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <Label htmlFor="parentPhone" className="text-white">Parent Phone Number *</Label>
                          <Input id="parentPhone" name="parentPhone" type="tel" placeholder="Mobile Number" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="parentEmail" className="text-white">Parent Email Address *</Label>
                          <Input id="parentEmail" name="parentEmail" type="email" placeholder="Email Address" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                        </div>
                      </div>

                      <div className="pt-4">
                        <Button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-14 text-lg font-bold rounded-xl shadow-gold"
                        >
                          {isSubmitting ? (
                            <>
                              <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                              Processing...
                            </>
                          ) : (
                            "Register Now"
                          )}
                        </Button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Test;