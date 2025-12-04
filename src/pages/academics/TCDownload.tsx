import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { FileDown } from 'lucide-react';

const TCDownload = () => {
  return (
    <Layout>
      <PageHeader title="Transfer Certificate Download" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'TC Download' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-lg mx-auto">
            <div className="bg-card p-8 rounded-xl shadow-soft">
              <div className="text-center mb-6">
                <FileDown className="w-16 h-16 text-accent mx-auto mb-4" />
                <h2 className="heading-secondary mb-2">Download TC</h2>
                <p className="text-body">Enter your details to download your Transfer Certificate</p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <Label>Admission Number</Label>
                  <Input placeholder="Enter admission number" />
                </div>
                <div className="space-y-2">
                  <Label>Date of Birth</Label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <Label>Registered Email</Label>
                  <Input type="email" placeholder="Enter registered email" />
                </div>
                <Button type="submit" className="w-full btn-primary">
                  Download Certificate
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default TCDownload;