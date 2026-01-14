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
          <div className="grid lg:grid-cols-5 gap-12 items-start">
            {/* Left Column: Information */}
            <div className="lg:col-span-3 space-y-12">
              <div className="mb-10">
                <h2 className="heading-secondary mb-6 gold-underline">Admission Test Information</h2>
                <p className="text-body text-lg leading-relaxed">
                  Our admission test evaluates students' aptitude and readiness for academic excellence at Alif School.
                  We ensure a fair and comprehensive assessment for all applicants to identify their strengths and potential.
                </p>
              </div>

              {/* Stats/Info Cards */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Calendar className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Test Dates</h4>
                  <p className="text-xs text-muted-foreground">Announced for 2025-26</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Duration</h4>
                  <p className="text-xs text-muted-foreground">2-3 Hours per grade</p>
                </div>
                <div className="bg-primary/5 p-6 rounded-2xl border border-primary/10 hover:bg-primary/10 transition-colors">
                  <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <FileText className="w-5 h-5 text-primary" />
                  </div>
                  <h4 className="font-bold text-primary mb-1">Subjects</h4>
                  <p className="text-xs text-muted-foreground">Eng, Math & GK</p>
                </div>
              </div>

              {/* Syllabus Section */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-accent to-primary rounded-3xl blur opacity-10 group-hover:opacity-20 transition duration-1000"></div>
                <div className="relative flex flex-col md:flex-row items-center justify-between p-8 bg-white rounded-3xl border border-border shadow-md hover:shadow-lg transition-all duration-300">
                  <div className="flex flex-col md:flex-row items-center gap-6 mb-6 md:mb-0">
                    <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center shrink-0">
                      <FileText className="w-8 h-8 text-accent" />
                    </div>
                    <div className="text-center md:text-left">
                      <h3 className="text-xl font-bold text-primary mb-1">Grade 1 - 9 Syllabus</h3>
                      <p className="text-muted-foreground text-sm">Download comprehensive test portions.</p>
                    </div>
                  </div>
                  <a
                    href="https://drive.google.com/file/d/1IUvU0bOh5gGbFa79WcaJ6ivEsdeCe-tk/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-accent text-accent-foreground hover:bg-primary hover:text-white font-bold px-6 py-3 rounded-xl shadow-md transition-all duration-300 group/btn"
                  >
                    DOWNLOAD
                    <Download className="w-4 h-4 group-hover/btn:translate-y-1 transition-transform" />
                  </a>
                </div>
              </div>

              {/* Admission Process */}
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
                <h3 className="text-2xl font-bold text-primary mb-8">Admission Process</h3>
                <div className="space-y-6">
                  {[
                    { title: "Online Registration", desc: "Fill out the registration form with your child's basic details." },
                    { title: "Acknowledgment", desc: "Receive a confirmation and unique registration ID via email." },
                    { title: "Test Schedule", desc: "Our admission team will contact you with the specific date and time." },
                    { title: "Aptitude Assessment", desc: "Student attends the test at our campus or designated center." },
                    { title: "Interaction & Admission", desc: "Shortlisted candidates are invited for a family interaction session." }
                  ].map((step, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="flex-shrink-0 w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent font-bold text-sm">
                        {i + 1}
                      </div>
                      <div>
                        <h4 className="font-bold text-primary text-lg">{step.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{step.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Column: Sticky Form */}
            <div className="lg:col-span-2 lg:sticky lg:top-24">
              <div className="bg-primary rounded-[2.5rem] p-8 md:p-10 text-primary-foreground shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>

                <div className="relative z-10">
                  {isSubmitted ? (
                    <div className="text-center py-10 animate-fade-in">
                      <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                        <CheckCircle2 className="w-8 h-8 text-accent" />
                      </div>
                      <h2 className="text-2xl font-bold mb-4">Registration Received!</h2>
                      <p className="text-primary-foreground/80 mb-8 text-sm">
                        Thank you for registering. Our team will contact you shortly with the test schedule and further details.
                      </p>
                      <Button onClick={() => setIsSubmitted(false)} className="w-full bg-white text-primary hover:bg-white/90 rounded-xl">
                        Register Another
                      </Button>
                    </div>
                  ) : (
                    <>
                      <div className="mb-8">
                        <h2 className="text-2xl md:text-3xl font-bold mb-3">Register Now</h2>
                        <p className="text-primary-foreground/70 text-sm">Fill out the form below to secure a slot for your child.</p>
                      </div>

                      <form onSubmit={handleSubmit} className="space-y-5">
                        <div className="space-y-2">
                          <Label htmlFor="studentName" className="text-white text-sm">Student Name *</Label>
                          <Input id="studentName" name="studentName" placeholder="Full Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-11 text-sm" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="grade" className="text-white text-sm">Grade Applying For *</Label>
                          <select id="grade" name="grade" required className="w-full h-11 bg-white/10 border border-white/20 text-white rounded-xl px-4 outline-none focus:ring-2 focus:ring-accent/50 text-sm appearance-none cursor-pointer">
                            <option value="" className="text-primary">Select Grade</option>
                            {registrationGrades.map(grade => (
                              <option key={grade} value={grade} className="text-primary">{grade}</option>
                            ))}
                          </select>
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parentPhone" className="text-white text-sm">Parent Phone Number *</Label>
                          <Input id="parentPhone" name="parentPhone" type="tel" placeholder="Mobile Number" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-11 text-sm" />
                        </div>

                        <div className="space-y-2">
                          <Label htmlFor="parentEmail" className="text-white text-sm">Parent Email Address *</Label>
                          <Input id="parentEmail" name="parentEmail" type="email" placeholder="Email Address" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-11 text-sm" />
                        </div>

                        <div className="pt-4">
                          <Button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full bg-accent text-accent-foreground hover:bg-accent/90 h-12 text-md font-bold rounded-xl shadow-gold"
                          >
                            {isSubmitting ? (
                              <>
                                <Loader2 className="mr-2 w-4 h-4 animate-spin" />
                                Processing...
                              </>
                            ) : (
                              "Register Student"
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
        </div>
      </section>
    </Layout>
  );
};

export default Test;