import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Palette as PaletteIcon } from 'lucide-react';

const Palette = () => {
  return (
    <Layout>
      <PageHeader title="Palette" breadcrumb={[{ name: 'Programs', path: '/programs' }, { name: 'Palette' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <PaletteIcon className="w-16 h-16 text-accent mx-auto mb-6" />
            <h2 className="heading-secondary mb-6">Palette</h2>
            <p className="text-body mb-8">
              Our arts and creativity program that nurtures artistic expression through painting, sculpture, digital art, and more.
            </p>
            <div className="bg-secondary p-8 rounded-xl">
              <p className="text-muted-foreground">Content coming soon...</p>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Palette;