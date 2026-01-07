import { useState, useEffect, useRef, useCallback } from 'react';
import { Quote, ChevronUp, ChevronDown } from 'lucide-react';
import useEmblaCarousel from 'embla-carousel-react';
import pinarayiImg from '@/assets/testimonial/Pinarayi Vijayan.webp';
import abdusalamImg from '@/assets/testimonial/abdusalam.webp';

const testimonials = {
  current: [
    {
      id: 1,
      name: 'Pinarayi Vijayan',
      designation: 'CM, Kerala',
      content: 'I was delighted to spend some time with Alif Team. The enthusiasm, nuanced educational thoughts and ideas were fabulous. In field practices and achievements, Alif is at the top of the graph. Wishing you a good future.',
      image: pinarayiImg,
    },
    {
      id: 2,
      name: 'Dr Abdussalam Muhammed',
      designation: 'CEO, MKC',
      content: 'Alif always surprises us with something unique in all fields. The dedicated educators and student excellence place Alif at a great height. We hope for more surprises ahead.',
      image: abdusalamImg,
    },
  ],
  parents: [
    {
      id: 3,
      parentName: 'Mubashhira Mohammed Ishaque Shaikh',
      studentName: 'MUSFIRA MOHAMMED ISHAQUE SHAIKH',
      place: 'Maharashtra',
      content: 'My daughter, Musfira, has been studying at Alif Global School for three years. We are from Maharashtra, We are extremely happy and proud of the progress she has made. Her academic performance has improved tremendously, and her confidence in English has grown remarkably.',
    },
    {
      id: 4,
      parentName: 'Noushad Alam',
      studentName: 'NOUMAN ALAM',
      place: 'Delhi',
      content: 'I am Noshad Alam, father of Noman Alam, studying in Grade 3 at Alif Global School. The school provides a well-balanced education by focusing on academics, character building, and offering excellent infrastructure with supportive and dedicated teachers.',
    },
    {
      id: 5,
      parentName: 'Nilam Musthafa Sangmeshwari',
      studentName: 'Children',
      place: 'Maharashtra',
      content: 'My name is Nilam Sngmeshwari, and I am from Maharashtra. My two children are studying at Alif Global School. It is a very good school with a positive learning environment. The teachers are highly qualified, responsible, and truly dedicated to the overall development of the students. I am very satisfied with the education and care my children are receiving at Alif Global School.',
    },
  ]
};

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    axis: 'y',
    loop: true,
    align: 'start',
  });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.current.length);
    }, 8000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    const autoplay = setInterval(() => {
      emblaApi.scrollNext();
    }, 5000);
    return () => clearInterval(autoplay);
  }, [emblaApi]);

  // Helper to chunk array
  const chunkArray = (arr: any[], size: number) => {
    const chunked = [];
    for (let i = 0; i < arr.length; i += size) {
      chunked.push(arr.slice(i, i + size));
    }
    return chunked;
  };

  const parentChunks = chunkArray(testimonials.parents, 2);

  return (
    <section ref={sectionRef} className="section-padding bg-cream overflow-hidden">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-4">
            Testimonials
          </span>
          <h2 className="heading-primary">Voices of Alif</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
            Hear from our distinguished guests and our wonderful parent community.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-stretch">
          {/* Current/Featured Testimonial (Big) */}
          <div
            className={`lg:col-span-7 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
              }`}
          >
            <div className="relative bg-primary text-primary-foreground rounded-[2rem] p-8 md:p-12 shadow-2xl overflow-hidden group h-full flex flex-col justify-center min-h-[500px]">
              <Quote className="absolute top-8 right-8 w-24 h-24 text-white/5 group-hover:scale-110 transition-transform duration-500" aria-hidden="true" />

              <div className="relative z-10">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-20 h-20 rounded-2xl overflow-hidden border-2 border-accent/30 shadow-xl">
                    <img
                      src={testimonials.current[currentIndex].image}
                      alt={testimonials.current[currentIndex].name}
                      loading="lazy"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {testimonials.current[currentIndex].name}
                    </h3>
                    <p className="text-accent font-medium">
                      {testimonials.current[currentIndex].designation}
                    </p>
                  </div>
                </div>

                <p className="text-xl md:text-2xl leading-relaxed italic mb-8 text-primary-foreground/90">
                  "{testimonials.current[currentIndex].content}"
                </p>

                <div className="flex gap-2">
                  {testimonials.current.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`h-1.5 rounded-full transition-all duration-500 ${index === currentIndex ? 'w-12 bg-accent' : 'w-4 bg-white/20'
                        }`}
                      aria-label={`Go to testimonial ${index + 1}`}
                      aria-current={index === currentIndex}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Parents Testimonials (Side - Embla Carousel) */}
          <div
            className={`lg:col-span-5 flex flex-col transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
              }`}
          >
            <div className="flex justify-between items-center mb-6">
              <h3 className="text-2xl font-bold text-primary flex items-center gap-3">
                <span className="w-8 h-1 bg-accent rounded-full" />
                From Our Parents
              </h3>
              <div className="flex gap-2">
                <button
                  onClick={scrollPrev}
                  className="p-2 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-colors"
                  aria-label="Previous parent testimonials"
                >
                  <ChevronUp className="w-4 h-4" aria-hidden="true" />
                </button>
                <button
                  onClick={scrollNext}
                  className="p-2 rounded-full bg-primary/5 hover:bg-accent hover:text-white transition-colors"
                  aria-label="Next parent testimonials"
                >
                  <ChevronDown className="w-4 h-4" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="embla overflow-hidden h-[500px]" ref={emblaRef}>
              <div className="embla__container h-full">
                {parentChunks.map((chunk, slideIndex) => (
                  <div key={slideIndex} className="embla__slide h-full flex flex-col gap-6 py-2 min-w-full">
                    {chunk.map((parent) => (
                      <div
                        key={parent.id}
                        className="bg-background p-6 rounded-2xl shadow-soft border border-primary/5 hover:shadow-medium transition-all duration-300 group flex-1"
                      >
                        <div className="flex flex-col h-full">
                          <Quote className="w-8 h-8 text-accent/20 mb-4" aria-hidden="true" />
                          <p className="text-muted-foreground text-sm italic mb-4 leading-relaxed flex-grow">
                            "{parent.content}"
                          </p>
                          <div className="mt-auto">
                            <h4 className="font-bold text-primary text-sm">{parent.parentName}</h4>
                            <p className="text-accent text-xs font-bold mt-1">{parent.place}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                    {/* Spacer if chunk has only 1 item to maintain height */}
                    {chunk.length === 1 && <div className="flex-1"></div>}
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-accent/10 p-6 rounded-2xl border border-accent/20 mt-auto">
              <p className="text-primary font-semibold text-center">
                Join our community of 500+ happy families
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
