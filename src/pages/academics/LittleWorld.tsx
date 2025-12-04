import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Heart, Star, Smile } from 'lucide-react';

const LittleWorld = () => {
  return (
    <Layout>
      <PageHeader title="Alif Little World" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Alif Little World' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-secondary mb-6">Welcome to Alif Little World</h2>
            <p className="text-body mb-8">
              Our early childhood education program provides a nurturing environment for young learners to explore, discover, and grow.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-card p-6 rounded-xl shadow-soft text-center card-hover">
                <Heart className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Caring Environment</h3>
                <p className="text-sm text-muted-foreground">Safe and loving space for children</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft text-center card-hover">
                <Star className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Play-Based Learning</h3>
                <p className="text-sm text-muted-foreground">Learning through fun activities</p>
              </div>
              <div className="bg-card p-6 rounded-xl shadow-soft text-center card-hover">
                <Smile className="w-12 h-12 text-accent mx-auto mb-4" />
                <h3 className="font-semibold text-foreground mb-2">Holistic Development</h3>
                <p className="text-sm text-muted-foreground">Physical, emotional & cognitive growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default LittleWorld;