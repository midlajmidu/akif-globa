import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { CheckCircle2, Loader2, User, MapPin, School, Phone, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { toast } from 'sonner';
import SEO from '@/components/SEO';

const Scholarships = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [gender, setGender] = useState('Male');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isSubmitting) return;
    setIsSubmitting(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    // Explicitly mapping all fields to match your Apps Script keys
    const payload = {
      studentName: formData.get('studentName'),
      gender: gender, // Using state for gender
      district: formData.get('district'),
      state: formData.get('state'),
      classApplied: formData.get('admissionClass'),
      residingLocation: formData.get('residingLocation'),
      presentSchool: formData.get('presentSchool'),
      schoolBoard: formData.get('schoolBoard'),
      parentName: formData.get('parentName'),
      contactNumber: formData.get('contactNumber'),
      comments: formData.get('queries'),
    };

    try {
      const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbznxabsOVfslEobIqZmElDGr0S8b1zrpWuhhZzp0VGXQy2IBUIVH8eGy_LhvJKaLwoxHA/exec';

      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        body: JSON.stringify(payload),
      });

      form.reset();
      setGender('Male');
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast.success("Scholarship application submitted!");
    } catch (error) {
      setIsSubmitting(false);
      toast.error("Submission failed. Please try again.");
      console.error('Error!', error);
    }
  };

  return (
    <Layout>
      <SEO
        title="Scholarships"
        description="Apply for scholarships at Alif Global School. We offer financial aid and scholarship opportunities for deserving students. Fill out our scholarship application form."
        canonical="/scholarships"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'Scholarships', path: '/scholarships' }
        ]}
      />
      <PageHeader title="Scholarships" breadcrumb={[{ name: 'Scholarships' }]} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="heading-primary mb-6">Scholarship Application</h2>
              <p className="text-body max-w-2xl mx-auto">
                Alif School offers scholarship opportunities for deserving students. Please fill out the form below to apply for the upcoming academic session.
              </p>
            </div>

            {/* Scholarship Application Form */}
            <div className="bg-primary rounded-[3rem] p-8 md:p-16 text-primary-foreground shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full -mr-48 -mt-48 blur-3xl"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-accent/10 rounded-full -ml-32 -mb-32 blur-2xl"></div>

              <div className="relative z-10 max-w-4xl mx-auto">
                {isSubmitted ? (
                  <div className="text-center py-10 animate-fade-in">
                    <div className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
                      <CheckCircle2 className="w-10 h-10 text-accent" />
                    </div>
                    <h2 className="text-3xl font-bold mb-4">Application Submitted!</h2>
                    <p className="text-primary-foreground/80 mb-8">
                      Thank you for applying for a scholarship. Our committee will review your application and contact you for further documentation if required.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)} className="bg-white text-primary hover:bg-white/90">
                      Submit Another Application
                    </Button>
                  </div>
                ) : (
                  <>
                    <div className="text-center mb-12">
                      <h2 className="text-3xl md:text-4xl font-bold mb-4">Scholarship Form</h2>
                      <p className="text-primary-foreground/70">Please provide accurate details to help us process your application.</p>
                    </div>

                    <form onSubmit={handleSubmit} className="space-y-8">
                      {/* Student Information */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">
                          <User className="w-4 h-4" /> Student Information
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="studentName" className="text-white">Full Name of the Student *</Label>
                            <Input id="studentName" name="studentName" placeholder="Full Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                          <div className="space-y-4">
                            <Label className="text-white">Gender *</Label>
                            <RadioGroup defaultValue="Male" value={gender} onValueChange={setGender} name="gender" className="flex gap-6 pt-2">
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Male" id="male" className="border-white/40 text-accent" />
                                <Label htmlFor="male" className="text-white cursor-pointer">Male</Label>
                              </div>
                              <div className="flex items-center space-x-2">
                                <RadioGroupItem value="Female" id="female" className="border-white/40 text-accent" />
                                <Label htmlFor="female" className="text-white cursor-pointer">Female</Label>
                              </div>
                            </RadioGroup>
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="district" className="text-white">District *</Label>
                            <Input id="district" name="district" placeholder="District" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="state" className="text-white">State *</Label>
                            <Input id="state" name="state" placeholder="State" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="admissionClass" className="text-white">Class for which Admission is Sought *</Label>
                            <select id="admissionClass" name="admissionClass" required className="w-full h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                              <option value="" className="text-primary">Select Class</option>
                              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map(grade => (
                                <option key={grade} value={`Grade ${grade}`} className="text-primary">Grade - {grade}</option>
                              ))}
                            </select>
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="residingLocation" className="text-white">Residing Location *</Label>
                            <Input id="residingLocation" name="residingLocation" placeholder="Current Location" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                        </div>
                      </div>

                      {/* Academic Background */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">
                          <School className="w-4 h-4" /> Academic Background
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="presentSchool" className="text-white">Name of the Present School *</Label>
                            <Input id="presentSchool" name="presentSchool" placeholder="School Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="schoolBoard" className="text-white">Board of the Present School *</Label>
                            <select id="schoolBoard" name="schoolBoard" required className="w-full h-12 bg-white/10 border border-white/20 text-white rounded-xl px-4 outline-none focus:ring-2 focus:ring-accent/50 appearance-none">
                              <option value="" className="text-primary">Select Board</option>
                              <option value="CBSE" className="text-primary">CBSE</option>
                              <option value="STATE" className="text-primary">STATE</option>
                              <option value="IGCSE" className="text-primary">IGCSE</option>
                              <option value="IB" className="text-primary">IB</option>
                              <option value="Others" className="text-primary">Others</option>
                            </select>
                          </div>
                        </div>
                      </div>

                      {/* Parent Information */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">
                          <Phone className="w-4 h-4" /> Parent/Guardian Information
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                          <div className="space-y-2">
                            <Label htmlFor="parentName" className="text-white">Parent’s/Guardian’s Name *</Label>
                            <Input id="parentName" name="parentName" placeholder="Name" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                          <div className="space-y-2">
                            <Label htmlFor="contactNumber" className="text-white">Contact Number *</Label>
                            <Input id="contactNumber" name="contactNumber" type="tel" placeholder="Mobile Number" required className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl h-12" />
                          </div>
                        </div>
                      </div>

                      {/* Additional Info */}
                      <div className="space-y-6">
                        <div className="flex items-center gap-2 text-accent font-bold uppercase tracking-wider text-sm border-b border-white/10 pb-2">
                          <MessageSquare className="w-4 h-4" /> Additional Information
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="queries" className="text-white">Any Queries or Comments</Label>
                          <Textarea id="queries" name="queries" placeholder="Your message..." className="bg-white/10 border-white/20 text-white placeholder:text-white/40 rounded-xl min-h-[120px]" />
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
                              Submitting...
                            </>
                          ) : (
                            "Submit Scholarship Application"
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

export default Scholarships;