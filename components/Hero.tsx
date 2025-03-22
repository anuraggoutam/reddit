'use client';
import { useEffect, useRef } from 'react';

const Hero = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createStars = () => {
      if (!starsRef.current) return;

      const starsContainer = starsRef.current;
      starsContainer.innerHTML = '';

      const windowWidth = window.innerWidth;
      const windowHeight = window.innerHeight;
      const starCount = Math.floor((windowWidth * windowHeight) / 10000);

      for (let i = 0; i < starCount; i++) {
        const star = document.createElement('div');
        const size = Math.random() * 2;

        star.className = 'absolute bg-white rounded-full';
        star.style.width = `${size}px`;
        star.style.height = `${size}px`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.left = `${Math.random() * 100}%`;
        star.style.opacity = `${Math.random() * 0.7 + 0.3}`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        star.style.animationDelay = `${Math.random() * 2}s`;

        starsContainer.appendChild(star);
      }
    };

    createStars();
    window.addEventListener('resize', createStars);

    return () => window.removeEventListener('resize', createStars);
  }, []);

  return (
    <section
      id="home"
      className="relative h-[calc(100vh-80px)] overflow-hidden bg-gradient-to-b from-astro-navy via-astro-blue to-astro-navy flex items-center"
    >
      {/* Stars background */}
      <div ref={starsRef} className="absolute inset-0 z-0"></div>

      {/* Floating orbs */}
      <div className="absolute w-60 h-60 rounded-full bg-astro-gold/10 blur-3xl top-1/4 -left-20 animate-float"></div>
      <div className="absolute w-80 h-80 rounded-full bg-astro-lightblue/5 blur-3xl bottom-1/4 -right-20 animate-float animation-delay-600"></div>

      <div className="container-custom relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6 py-1 px-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10">
            <p className="text-astro-cream/80 text-sm">
              Discover Your Cosmic Path
            </p>
          </div>

          <h1 className="section-title text-astro-white text-5xl md:text-6xl lg:text-7xl !leading-tight mb-6 opacity-0 animate-fade-in-up">
            Unveil Your Destiny Through The Stars
          </h1>

          <p className="text-astro-cream/70 mb-8 max-w-xl mx-auto text-balance opacity-0 animate-fade-in-up animation-delay-300">
            Unlock the celestial wisdom that guides your journey. Our astrology
            readings reveal the cosmic forces shaping your past, present, and
            future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 jj justify-center opacity-0 animate-fade-in-up animation-delay-600">
            <a href="#services" className="btn-primary">
              Explore Services
            </a>
            <a
              href="#about"
              className="btn-outline border-white/20 text-astro-cream hover:bg-white hover:text-astro-navy"
            >
              Learn More
            </a>
          </div>
        </div>
      </div>

      {/* Cosmic symbol */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-20 h-20">
        <div className="relative w-full h-full">
          <div className="absolute inset-0 border-2 border-astro-gold/30 rounded-full animate-spin-slow"></div>
          <div
            className="absolute inset-2 border border-astro-gold/20 rounded-full animate-spin-slow"
            style={{ animationDirection: 'reverse' }}
          ></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3 h-3 bg-astro-gold rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
