import Layout from '@/components/Layout';
import PageHeader from '@/components/PageHeader';
import { useEffect, useRef, useState } from 'react';
import { Quote } from 'lucide-react';
import SEO from '@/components/SEO';
import pinarayiImg from '@/assets/testimonial/Pinarayi Vijayan.webp';
import abdusalamImg from '@/assets/testimonial/abdusalam.webp';

const distinguishedGuests = [
  {
    name: 'Pinarayi Vijayan',
    role: 'CM, Kerala',
    text: 'Alif Global School is a great initiative in the field of education. The school provides a world-class environment for students to grow and excel.',
    image: pinarayiImg
  },
  {
    name: 'Dr Abdussalam Muhammed',
    role: 'CEO, MKC',
    text: 'The vision of Alif Global School to provide quality education with moral values is commendable. It is truly a center for excellence.',
    image: abdusalamImg
  },
];

const parentTestimonials = [
  {
    parentName: 'Mubashhira Mohammed Ishaque Shaikh',
    place: 'Maharashtra',
    content: 'My daughter, Musfira, has been studying at Alif Global School for three years. We are from Maharashtra, We are extremely happy and proud of the progress she has made. Her academic performance has improved tremendously, and her confidence in English has grown remarkably.',
  },
  {
    parentName: 'Noushad Alam',
    place: 'Delhi',
    content: 'I am Noshad Alam, father of Noman Alam, studying in Grade 3 at Alif Global School. The school provides a well-balanced education by focusing on academics, character building, and offering excellent infrastructure with supportive and dedicated teachers.',
  },
  {
    parentName: 'Nilam Musthafa Sangmeshwari',
    place: 'Maharashtra',
    content: 'My name is Nilam Sngmeshwari, and I am from Maharashtra. My two children are studying at Alif Global School. It is a very good school with a positive learning environment. The teachers are highly qualified, responsible, and truly dedicated to the overall development of the students. I am very satisfied with the education and care my children are receiving at Alif Global School.',
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <Layout>
      <SEO
        title="Testimonials"
        description="Read what distinguished guests and parents have to say about Alif Global School. Watch video testimonials and learn about our commitment to excellence."
        canonical="/about/testimonials"
        breadcrumbs={[
          { name: 'Home', path: '/' },
          { name: 'About', path: '/about' },
          { name: 'Testimonials', path: '/about/testimonials' }
        ]}
      />
      <PageHeader title="Testimonials" breadcrumb={[{ name: 'About', path: '/about' }, { name: 'Testimonials' }]} />

      <section ref={sectionRef} className="section-padding bg-background">
        <div className="container-custom">


          {/* Distinguished Guests Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-24">
            {distinguishedGuests.map((item, index) => (
              <div
                key={index}
                className="bg-cream p-8 rounded-2xl shadow-soft hover:shadow-strong transition-all duration-300 group"
                style={{
                  transitionDelay: `${index * 100 + 400}ms`,
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <Quote className="w-10 h-10 text-accent/20 mb-4 group-hover:text-accent transition-colors" />
                <p className="text-body mb-6 italic">"{item.text}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent/20">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-primary">{item.name}</p>
                    <p className="text-sm text-muted-foreground">{item.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Parents Testimonials Section */}
          <div className="mb-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <h3 className="text-3xl font-bold text-primary">What Our Parents Say</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {parentTestimonials.map((item, index) => (
                <div
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-soft border border-primary/5 hover:shadow-medium transition-all duration-300"
                  style={{
                    transitionDelay: `${index * 100 + 600}ms`,
                    opacity: isVisible ? 1 : 0,
                    transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                  }}
                >
                  <Quote className="w-8 h-8 text-accent/20 mb-4" />
                  <p className="text-muted-foreground italic mb-6 leading-relaxed">
                    "{item.content}"
                  </p>
                  <div>
                    <h5 className="font-bold text-primary">{item.parentName}</h5>
                    <p className="text-accent text-sm font-bold mt-1">{item.place}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Video Testimonials Section */}
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <h3 className="text-3xl font-bold text-primary">Video Testimonials</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              <div
                className="relative aspect-video rounded-3xl overflow-hidden shadow-strong border-4 border-white transition-all duration-700 delay-300"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/6f3DuO7HQoI?si=LGmHe1tZUUcZpTDp"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
              <div
                className="relative aspect-video rounded-3xl overflow-hidden shadow-strong border-4 border-white transition-all duration-700 delay-500"
                style={{
                  opacity: isVisible ? 1 : 0,
                  transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                }}
              >
                <iframe
                  className="w-full h-full"
                  src="https://www.youtube.com/embed/i-BDFYBn9Ds?si=h_vBQDg1yU_4zRZN"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Testimonials;