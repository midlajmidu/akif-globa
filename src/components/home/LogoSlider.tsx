import { useEffect, useRef } from 'react';

const logos = [
  { name: 'Partner 1', initials: 'P1' },
  { name: 'Partner 2', initials: 'P2' },
  { name: 'Partner 3', initials: 'P3' },
  { name: 'Partner 4', initials: 'P4' },
  { name: 'Partner 5', initials: 'P5' },
  { name: 'Partner 6', initials: 'P6' },
  { name: 'Partner 7', initials: 'P7' },
  { name: 'Partner 8', initials: 'P8' },
  { name: 'Partner 9', initials: 'P9' },
  { name: 'Partner 10', initials: 'P10' },
  { name: 'Partner 11', initials: 'P11' },
  { name: 'Partner 12', initials: 'P12' },
];

const LogoSlider = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let animationId: number;
    let scrollPos = 0;

    const animate = () => {
      scrollPos += 0.5;
      if (scrollPos >= scrollContainer.scrollWidth / 2) {
        scrollPos = 0;
      }
      scrollContainer.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  return (
    <section className="py-12 md:py-16 bg-background overflow-hidden">
      <div className="container-custom mb-8">
        <h2 className="text-center text-lg font-semibold text-muted-foreground uppercase tracking-wider">
          Our Trusted Partners & Affiliations
        </h2>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-12 overflow-hidden whitespace-nowrap"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Double the logos for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-32 h-20 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <div className="w-24 h-16 rounded-lg bg-secondary flex items-center justify-center border border-border hover:border-accent hover:shadow-gold transition-all duration-300">
              <span className="text-xl font-bold text-muted-foreground hover:text-accent transition-colors">
                {logo.initials}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;