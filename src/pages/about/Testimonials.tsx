import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { Quote } from 'lucide-react';

const testimonials = [
  { name: 'Parent Name 1', role: 'Parent of Grade 10 Student', text: 'Placeholder testimonial text about the school experience...' },
  { name: 'Parent Name 2', role: 'Parent of Grade 8 Student', text: 'Placeholder testimonial text about academic excellence...' },
  { name: 'Parent Name 3', role: 'Parent of Grade 5 Student', text: 'Placeholder testimonial text about extracurricular activities...' },
  { name: 'Alumni Name', role: 'Batch of 2020', text: 'Placeholder testimonial text about career success after graduation...' },
];

const Testimonials = () => {
  return (
    <Layout>
      <PageHeader title="Testimonials" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Testimonials' }]} />
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((item, index) => (
              <div key={index} className="bg-card p-8 rounded-xl shadow-soft card-hover">
                <Quote className="w-10 h-10 text-accent mb-4" />
                <p className="text-body mb-6">{item.text}</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center">
                    <span className="font-semibold text-primary">{item.name.charAt(0)}</span>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;