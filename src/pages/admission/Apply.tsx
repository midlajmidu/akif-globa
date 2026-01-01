import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { ArrowRight, ArrowLeft, CheckCircle2, Loader2 } from 'lucide-react';
import { toast } from 'sonner';

const Apply = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    academic_year: [] as string[],
    academic_year_other: '',
    class: 'LZQ (Pre-School I)',
    student_name: '',
    gender: 'Male',
    dob: '',
    nationality: '',
    state_city: '',
    mother_tongue: '',
    previous_school: '',
    phone: '',
    email: '',
    address: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (year: string) => {
    setFormData(prev => {
      const currentYears = [...prev.academic_year];
      if (currentYears.includes(year)) {
        return { ...prev, academic_year: currentYears.filter(y => y !== year) };
      } else {
        return { ...prev, academic_year: [...currentYears, year] };
      }
    });
  };

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbywyHQ_OAa-P2UhAxGRVIMat9EjFEfPr5AW0e8JNxkNMxm2FtF4GtU2-9ujBymWzdP3/exec", {
        method: "POST",
        mode: 'no-cors', // Google Apps Script requires no-cors for simple POST
        body: JSON.stringify({
          ...formData,
          academic_year: formData.academic_year.join(', ')
        })
      });

      // Since we use no-cors, we won't get a proper response object, 
      // but we can assume success if no error is thrown
      setIsSubmitted(true);
      toast.success("Application submitted successfully!");
    } catch (error) {
      console.error("Submission error:", error);
      toast.error("Error submitting application. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <Layout>
        <PageHeader title="Apply Online" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Apply Online' }]} />
        <section className="section-padding">
          <div className="container-custom">
            <div className="max-w-2xl mx-auto text-center bg-card p-12 rounded-3xl shadow-strong border border-accent/20">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="w-10 h-10 text-accent" />
              </div>
              <h2 className="text-3xl font-bold text-primary mb-4">Application Submitted!</h2>
              <p className="text-body mb-8">
                Thank you for applying to Alif Global School. We have received your application and our admissions team will contact you shortly.
              </p>
              <Button onClick={() => window.location.href = '/'} className="btn-primary">
                Return to Home
              </Button>
            </div>
          </div>
        </section>
      </Layout>
    );
  }

  return (
    <Layout>
      <PageHeader title="Apply Online" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Apply Online' }]} />

      <section className="section-padding bg-background">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Progress Bar */}
            <div className="mb-12">
              <div className="flex justify-between mb-4">
                {[1, 2, 3].map((s) => (
                  <div
                    key={s}
                    className={`flex flex-col items-center gap-2 transition-colors duration-300 ${step >= s ? 'text-accent' : 'text-muted-foreground'}`}
                  >
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold border-2 transition-all duration-300 ${step >= s ? 'bg-accent border-accent text-accent-foreground shadow-gold' : 'border-border bg-background'}`}>
                      {s}
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      {s === 1 ? 'Academic' : s === 2 ? 'Student' : 'Contact'}
                    </span>
                  </div>
                ))}
              </div>
              <div className="h-2 bg-secondary rounded-full overflow-hidden">
                <div
                  className="h-full bg-accent transition-all duration-500 ease-out"
                  style={{ width: `${((step - 1) / 2) * 100}%` }}
                />
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card p-8 md:p-12 rounded-3xl shadow-strong border border-border/50">
              {/* STEP 1: Academic Details */}
              {step === 1 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 border-l-4 border-accent pl-4">Academic Details</h3>
                    <p className="text-sm text-muted-foreground">Please select the academic year and class for admission.</p>
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-bold">Academic Year *</Label>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {['2025-2026', '2026-2027'].map((year) => (
                        <div key={year} className="flex items-center space-x-3 p-4 rounded-xl border border-border hover:border-accent/50 transition-colors">
                          <Checkbox
                            id={year}
                            checked={formData.academic_year.includes(year)}
                            onCheckedChange={() => handleCheckboxChange(year)}
                          />
                          <label htmlFor={year} className="text-sm font-medium leading-none cursor-pointer flex-1">
                            {year}
                          </label>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="academic_year_other">Other (if any)</Label>
                    <Input
                      id="academic_year_other"
                      name="academic_year_other"
                      value={formData.academic_year_other}
                      onChange={handleInputChange}
                      placeholder="Specify other academic year"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="class" className="text-base font-bold">Class to which admission is sought *</Label>
                    <select
                      id="class"
                      name="class"
                      value={formData.class}
                      onChange={(e) => handleSelectChange('class', e.target.value)}
                      className="w-full p-3 rounded-xl border border-border bg-background focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all outline-none"
                      required
                    >
                      <option value="LZQ (Pre-School I)">LZQ (Pre-School I)</option>
                      <option value="KG-1">KG-1</option>
                      <option value="KG-2">KG-2</option>
                      <option value="G1">G 1</option>
                      <option value="G2">G 2</option>
                      <option value="G3">G 3</option>
                      <option value="G4">G 4</option>
                      <option value="G5">G 5</option>
                      <option value="G6">G 6</option>
                      <option value="G7">G 7</option>
                      <option value="G8">G 8</option>
                      <option value="G9">G 9</option>
                      <option value="G10">G 10</option>
                      <option value="Plus One">Plus One</option>
                    </select>
                  </div>

                  <div className="pt-4">
                    <Button type="button" onClick={nextStep} className="w-full btn-primary h-12 text-lg">
                      Next Step
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 2: Student Details */}
              {step === 2 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 border-l-4 border-accent pl-4">Student Details</h3>
                    <p className="text-sm text-muted-foreground">Personal information of the pupil.</p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="student_name">Name of Pupil *</Label>
                    <Input
                      id="student_name"
                      name="student_name"
                      value={formData.student_name}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter full name"
                      className="rounded-xl"
                    />
                  </div>

                  <div className="space-y-4">
                    <Label className="text-base font-bold">Gender *</Label>
                    <RadioGroup
                      value={formData.gender}
                      onValueChange={(val) => handleSelectChange('gender', val)}
                      className="flex flex-wrap gap-6"
                    >
                      {['Male', 'Female', 'Other'].map((g) => (
                        <div key={g} className="flex items-center space-x-2">
                          <RadioGroupItem value={g} id={g} />
                          <Label htmlFor={g} className="cursor-pointer">{g}</Label>
                        </div>
                      ))}
                    </RadioGroup>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="dob">Date of Birth *</Label>
                      <Input
                        id="dob"
                        name="dob"
                        type="date"
                        value={formData.dob}
                        onChange={handleInputChange}
                        required
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="nationality">Nationality *</Label>
                      <Input
                        id="nationality"
                        name="nationality"
                        value={formData.nationality}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Indian"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="state_city">State / City *</Label>
                      <Input
                        id="state_city"
                        name="state_city"
                        value={formData.state_city}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter state and city"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="mother_tongue">Mother Tongue *</Label>
                      <Input
                        id="mother_tongue"
                        name="mother_tongue"
                        value={formData.mother_tongue}
                        onChange={handleInputChange}
                        required
                        placeholder="e.g. Malayalam"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="previous_school">School previously attended (with dates)</Label>
                    <Textarea
                      id="previous_school"
                      name="previous_school"
                      value={formData.previous_school}
                      onChange={handleInputChange}
                      placeholder="Enter details of previous school"
                      className="rounded-xl min-h-[100px]"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl border-primary text-primary hover:bg-primary/5">
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Back
                    </Button>
                    <Button type="button" onClick={nextStep} className="flex-[2] btn-primary h-12 text-lg">
                      Next Step
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </div>
                </div>
              )}

              {/* STEP 3: Contact Details */}
              {step === 3 && (
                <div className="space-y-8 animate-fade-in">
                  <div>
                    <h3 className="text-2xl font-bold text-primary mb-2 border-l-4 border-accent pl-4">Contact Details</h3>
                    <p className="text-sm text-muted-foreground">How can we reach you?</p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter mobile number"
                        className="rounded-xl"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        placeholder="Enter email address"
                        className="rounded-xl"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Full Address *</Label>
                    <Textarea
                      id="address"
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      placeholder="Enter your complete postal address"
                      className="rounded-xl min-h-[120px]"
                    />
                  </div>

                  <div className="flex gap-4 pt-4">
                    <Button type="button" variant="outline" onClick={prevStep} className="flex-1 h-12 rounded-xl border-primary text-primary hover:bg-primary/5">
                      <ArrowLeft className="mr-2 w-5 h-5" />
                      Back
                    </Button>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-[2] btn-primary h-12 text-lg shadow-gold"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 w-5 h-5 animate-spin" />
                          Submitting...
                        </>
                      ) : (
                        <>
                          Submit Application
                          <CheckCircle2 className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;