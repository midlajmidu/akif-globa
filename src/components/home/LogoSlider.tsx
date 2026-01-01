import { useEffect, useRef } from 'react';

const logos = [
  { name: 'Connected', src: '/src/assets/slider-logos/Connected.png' },
  { name: 'Rankhel', src: '/src/assets/slider-logos/Rankhel.png' },
  { name: 'Cross Road', src: '/src/assets/slider-logos/cross-road.png' },
  { name: 'Palette', src: '/src/assets/slider-logos/palette.png' },
  { name: 'Skill Surge', src: '/src/assets/slider-logos/skill-surge-logo.png' },
  { name: 'Squad', src: '/src/assets/slider-logos/squad-logo.png' },
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
    <section className="py-8 bg-background overflow-hidden">
      <div
        ref={scrollRef}
        className="flex gap-16 overflow-hidden whitespace-nowrap items-center"
        style={{ scrollBehavior: 'auto' }}
      >
        {/* Double the logos for seamless infinite scroll */}
        {[...logos, ...logos].map((logo, index) => (
          <div
            key={index}
            className="flex-shrink-0 w-48 h-32 flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
          >
            <img
              src={logo.src}
              alt={logo.name}
              className="max-w-full max-h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LogoSlider;