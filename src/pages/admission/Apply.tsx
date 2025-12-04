import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const Apply = () => {
  return (
    <Layout>
      <PageHeader title="Apply Online" breadcrumb={[{ name: 'Admission', path: '/admission' }, { name: 'Apply Online' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-2xl mx-auto">
            <h2 className="heading-secondary mb-6">Online Application Form</h2>
            <form className="space-y-6 bg-card p-8 rounded-xl shadow-soft">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label>Student's First Name</Label>
                  <Input placeholder="Enter first name" />
                </div>
                <div className="space-y-2">
                  <Label>Student's Last Name</Label>
                  <Input placeholder="Enter last name" />
                </div>
              </div>
              <div className="space-y-2">
                <Label>Grade Applying For</Label>
                <Select>
                  <SelectTrigger><SelectValue placeholder="Select grade" /></SelectTrigger>
                  <SelectContent>
                    {['Nursery', 'LKG', 'UKG', 'Grade 1', 'Grade 2', 'Grade 3', 'Grade 4', 'Grade 5', 'Grade 6', 'Grade 7', 'Grade 8', 'Grade 9', 'Grade 10', 'Grade 11', 'Grade 12'].map(grade => (
                      <SelectItem key={grade} value={grade}>{grade}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Parent/Guardian Email</Label>
                <Input type="email" placeholder="Enter email" />
              </div>
              <div className="space-y-2">
                <Label>Phone Number</Label>
                <Input type="tel" placeholder="Enter phone number" />
              </div>
              <Button type="submit" className="w-full btn-primary">Submit Application</Button>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Apply;