import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';

const Gallery = () => {
  const images = Array(12).fill(null);

  return (
    <Layout>
      <PageHeader title="Gallery" breadcrumb={[{ name: 'Academics', path: '/academics' }, { name: 'Gallery' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="heading-secondary mb-6 text-center">Photo Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((_, index) => (
              <div key={index} className="aspect-square bg-secondary rounded-xl flex items-center justify-center cursor-pointer hover:opacity-80 transition-opacity">
                <span className="text-muted-foreground text-sm">Photo {index + 1}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Gallery;