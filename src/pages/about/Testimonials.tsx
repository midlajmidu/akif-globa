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
    content: 'My name is Nilam Sngmeshwari, and I am from Maharashtra. My two children are studying at Alif Global School. It is a very good school with a positive learning environment. The teachers are highly qualified, responsible, and truly dedicated to the overall development of the students.',
  },
];

const Testimonials = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);
  const [dynamicText, setDynamicText] = useState<any[]>([]);
  const [dynamicVideos, setDynamicVideos] = useState<any[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  const allTextTestimonials = [...dynamicText, ...parentTestimonials];

  useEffect(() => {
    const fetchDynamicContent = async () => {
      const BASE_URL = 'https://script.google.com/macros/s/AKfycbyiNsPkL7oDIIdhWReFwg1bhzVYHfDyfika2uSSNT1Xt_M-qpvhBoc_SPrp3vGDeh0/exec';

      try {
        // Fetch Text Testimonials
        const textRes = await fetch(`${BASE_URL}?type=text`);
        const textData = await textRes.json();
        if (Array.isArray(textData)) {
          setDynamicText(textData.map(item => ({
            parentName: item.parentName || item.name,
            place: item.place || '',
            content: item.content || item.text
          })));
        }

        // Fetch Video Testimonials
        const videoRes = await fetch(`${BASE_URL}?type=video`);
        const videoData = await videoRes.json();
        if (Array.isArray(videoData)) {
          setDynamicVideos(videoData);
        }
      } catch (error) {
        console.error('Failed to fetch dynamic testimonials:', error);
      }
    };

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

    // Non-blocking fetch after initial render
    const idleCallback = (window as any).requestIdleCallback || ((cb: any) => setTimeout(cb, 100));
    idleCallback(() => {
      fetchDynamicContent();
    });

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

          {/* Parents Testimonials Section - Single Box Slider */}
          <div className="mb-24">
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-12">
                <span className="w-12 h-1.5 bg-accent rounded-full" />
                <h3 className="text-3xl md:text-4xl font-bold text-primary text-center">What Our Parents Say</h3>
                <span className="w-12 h-1.5 bg-accent rounded-full" />
              </div>

              <div className="relative group">
                {/* Navigation Buttons */}
                <button
                  onClick={() => setActiveIndex((prev) => (prev - 1 + allTextTestimonials.length) % allTextTestimonials.length)}
                  className="absolute left-0 lg:-left-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                >
                  <span className="text-2xl">←</span>
                </button>
                <button
                  onClick={() => setActiveIndex((prev) => (prev + 1) % allTextTestimonials.length)}
                  className="absolute right-0 lg:-right-20 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white shadow-lg border border-primary/5 flex items-center justify-center text-primary hover:bg-accent hover:text-white transition-all z-20 opacity-0 group-hover:opacity-100 hidden md:flex"
                >
                  <span className="text-2xl">→</span>
                </button>

                {/* Main Slider Box */}
                <div className="overflow-hidden rounded-[3rem] bg-white border border-primary/5 shadow-2xl relative">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-accent/5 rounded-full -mr-24 -mt-24"></div>
                  <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/5 rounded-full -ml-16 -mb-16"></div>

                  <div
                    className="flex transition-transform duration-700 ease-in-out"
                    style={{ transform: `translateX(-${activeIndex * 100}%)` }}
                  >
                    {allTextTestimonials.map((item, index) => (
                      <div key={index} className="min-w-full p-8 md:p-16 flex flex-col items-center text-center">
                        <Quote className="w-16 h-16 text-accent/10 mb-8" />
                        <p className="text-xl md:text-2xl text-muted-foreground italic leading-relaxed mb-10 max-w-2xl">
                          "{item.content}"
                        </p>
                        <div className="flex flex-col items-center">
                          <div className="w-16 h-16 rounded-full bg-primary text-white flex items-center justify-center font-bold text-2xl mb-4 shadow-strong">
                            {item.parentName.charAt(0)}
                          </div>
                          <h5 className="text-xl font-bold text-primary">{item.parentName}</h5>
                          <p className="text-accent font-bold tracking-wider uppercase text-sm mt-1">{item.place}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots indicator */}
                <div className="flex justify-center gap-3 mt-8">
                  {allTextTestimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setActiveIndex(i)}
                      className={`h-2.5 rounded-full transition-all duration-300 ${activeIndex === i ? 'w-10 bg-accent' : 'w-2.5 bg-accent/20 hover:bg-accent/40'}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Video Testimonials Section */}
          <div className="mt-24">
            <div className="flex items-center gap-3 mb-10">
              <span className="w-8 h-1 bg-accent rounded-full" />
              <h3 className="text-3xl font-bold text-primary">Video Testimonials</h3>
            </div>
            <div className="grid md:grid-cols-2 gap-10">
              {/* Dynamic Videos */}
              {dynamicVideos.map((video, index) => {
                const embedHtml = video.youtube_id || video.embed_code || video.youtube_embed || video.embedCode;

                return (
                  <div
                    key={index}
                    className="relative aspect-video rounded-3xl overflow-hidden shadow-strong border-4 border-white transition-all duration-700"
                    style={{
                      opacity: isVisible ? 1 : 0,
                      transform: isVisible ? 'translateY(0)' : 'translateY(30px)',
                    }}
                  >
                    {embedHtml ? (
                      <div
                        className="w-full h-full [&>iframe]:w-full [&>iframe]:h-full"
                        dangerouslySetInnerHTML={{
                          __html: embedHtml.replace('<iframe', '<iframe loading="lazy"')
                        }}
                      />
                    ) : (
                      <iframe
                        className="w-full h-full"
                        src={`https://www.youtube.com/embed/${video.videoId || video.video_id}`}
                        title={`Video Testimonial ${index + 1}`}
                        frameBorder="0"
                        loading="lazy"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        referrerPolicy="strict-origin-when-cross-origin"
                        allowFullScreen
                      ></iframe>
                    )}
                  </div>
                );
              })}
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
    </Layout >
  );
};

export default Testimonials;