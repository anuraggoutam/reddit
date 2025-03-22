'use client';
import { useEffect, useRef } from 'react';
import Image from 'next/image';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const imageNode = imageRef.current;
    const contentNode = contentRef.current;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            if (entry.target === imageNode) {
              entry.target.classList.add('animate-fade-in-up');
            }
            if (entry.target === contentNode) {
              entry.target.classList.add(
                'animate-fade-in-up',
                'animation-delay-300'
              );
            }
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionNode) {
      observer.observe(sectionNode);
    }

    if (imageNode) {
      observer.observe(imageNode);
    }

    if (contentNode) {
      observer.observe(contentNode);
    }

    return () => {
      if (sectionNode) observer.unobserve(sectionNode);
      if (imageNode) observer.unobserve(imageNode);
      if (contentNode) observer.unobserve(contentNode);
    };
  }, []);

  return (
    <section
      id="about"
      className="py-24 bg-astro-navy relative overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-astro-navy/0 to-astro-navy/50 opacity-30"></div>
      <div className="absolute w-72 h-72 rounded-full bg-astro-gold/5 blur-3xl top-1/4 -left-20"></div>
      <div className="absolute w-96 h-96 rounded-full bg-astro-lightblue/5 blur-3xl bottom-1/4 -right-20"></div>

      <div className="container-custom relative z-10">
        <div
          ref={sectionRef}
          className="text-center max-w-xl mx-auto mb-16 opacity-0"
        >
          <p className="section-subtitle text-astro-gold">OUR STORY</p>
          <h2 className="section-title text-white">
            Guiding You Through The Cosmos
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div ref={imageRef} className="relative opacity-0">
            <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1470813740244-df37b8c1edcb"
                alt="Starry night sky"
                width={500}
                height={300}
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute top-8 -right-8 w-64 h-64 border-2 border-astro-gold/20 rounded-lg -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-64 h-64 border-2 border-astro-gold/20 rounded-lg -z-10"></div>
          </div>

          <div ref={contentRef} className="text-white opacity-0">
            <h3 className="font-cormorant text-3xl mb-6 text-astro-cream">
              With over a decade of cosmic wisdom
            </h3>

            <p className="text-astro-cream/80 mb-6 leading-relaxed">
              Asteria was founded on the belief that the ancient wisdom of
              astrology can provide profound guidance in our modern lives. Our
              team of experienced astrologers combines traditional knowledge
              with contemporary insights to deliver readings that resonate
              deeply with your current situation.
            </p>

            <p className="text-astro-cream/80 mb-8 leading-relaxed">
              We believe that astrology is not about predicting a fixed future,
              but about understanding the cosmic energies that influence your
              path, empowering you to make conscious choices aligned with your
              highest potential.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <h4 className="font-cormorant text-3xl text-astro-gold mb-1">
                  12+
                </h4>
                <p className="text-sm text-astro-cream/70">Years Experience</p>
              </div>
              <div className="text-center p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <h4 className="font-cormorant text-3xl text-astro-gold mb-1">
                  5K+
                </h4>
                <p className="text-sm text-astro-cream/70">Clients Served</p>
              </div>
              <div className="text-center p-4 border border-white/10 rounded-lg bg-white/5 backdrop-blur-sm">
                <h4 className="font-cormorant text-3xl text-astro-gold mb-1">
                  98%
                </h4>
                <p className="text-sm text-astro-cream/70">Satisfaction Rate</p>
              </div>
            </div>

            <a href="#contact" className="btn-primary inline-block">
              Book Your Reading
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
