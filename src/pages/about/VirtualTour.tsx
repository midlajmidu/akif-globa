import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Play } from 'lucide-react';

const VirtualTour = () => {
  return (
    <Layout>
      <PageHeader title="Virtual Tour" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Virtual Tour' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="heading-secondary mb-6">Explore Our Campus</h2>
            <p className="text-body mb-8">
              Take a virtual tour of our world-class facilities and experience the Alif School environment from anywhere in the world.
            </p>
            <div className="aspect-video bg-secondary rounded-xl flex items-center justify-center mb-8">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-primary flex items-center justify-center mx-auto mb-4 cursor-pointer hover:bg-navy-light transition-colors">
                  <Play className="w-8 h-8 text-primary-foreground ml-1" />
                </div>
                <p className="text-muted-foreground">Virtual Tour Video Placeholder</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default VirtualTour;