'use client';
import { useEffect, useRef, useState } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';

interface TestimonialProps {
  quote: string;
  name: string;
  role: string;
  stars: number;
  active: boolean;
}

const Testimonial = ({
  quote,
  name,
  role,
  stars,
  active,
}: TestimonialProps) => {
  return (
    <div
      className={`px-8 transition-all duration-500 ${
        active
          ? 'opacity-100 scale-100'
          : 'opacity-0 scale-95 absolute top-0 left-0'
      }`}
    >
      <div className="flex gap-1 mb-6 justify-center">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            size={20}
            className={
              i < stars ? 'fill-astro-gold text-astro-gold' : 'text-gray-300'
            }
          />
        ))}
      </div>
      <p className="text-lg mb-6 font-light italic text-center text-balance">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="text-center">
        <p className="font-medium text-astro-navy">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </div>
  );
};

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLDivElement>(null);

  const testimonials = [
    {
      quote:
        'My natal chart reading was incredibly insightful. It gave me clarity about my life purpose and helped me make important decisions with confidence.',
      name: 'Sarah Johnson',
      role: 'Yoga Instructor',
      stars: 5,
    },
    {
      quote:
        'The relationship compatibility reading revealed patterns I never noticed before. It has transformed how my partner and I communicate.',
      name: 'Michael Chen',
      role: 'Software Engineer',
      stars: 5,
    },
    {
      quote:
        'I was skeptical at first, but my career guidance reading was spot on. It helped me pivot to a path that feels so much more aligned with who I truly am.',
      name: 'Elena Rodriguez',
      role: 'Marketing Director',
      stars: 4,
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    const sectionNode = sectionRef.current;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionNode) {
      observer.observe(sectionNode);
    }

    return () => {
      if (sectionNode) {
        observer.unobserve(sectionNode);
      }
    };
  }, []);

  // Auto rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial();
    }, 8000);

    return () => clearInterval(interval);
  }, [nextTestimonial]);

  return (
    <section id="testimonials" className="py-24 bg-astro-cream/20">
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="max-w-xl mx-auto text-center mb-16 opacity-0"
        >
          <p className="section-subtitle">TESTIMONIALS</p>
          <h2 className="section-title">What Our Clients Say</h2>
          <p className="text-muted-foreground mt-4">
            Discover how our astrological insights have illuminated paths and
            transformed lives.
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="bg-white rounded-2xl p-12 shadow-lg border border-astro-navy/5 relative overflow-hidden min-h-[320px]">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-astro-gold/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-astro-lightblue/5 rounded-full translate-y-1/2 -translate-x-1/2"></div>

            {/* Testimonial content */}
            <div className="relative">
              {testimonials.map((testimonial, index) => (
                <Testimonial
                  key={index}
                  quote={testimonial.quote}
                  name={testimonial.name}
                  role={testimonial.role}
                  stars={testimonial.stars}
                  active={index === currentIndex}
                />
              ))}
            </div>
          </div>

          {/* Navigation controls */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-10 h-10 rounded-full border border-astro-navy/20 flex items-center justify-center text-astro-navy hover:bg-astro-navy hover:text-white transition-colors duration-300"
            >
              <ChevronLeft size={20} />
            </button>

            <div className="flex gap-2 items-center">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'bg-astro-gold w-4'
                      : 'bg-astro-navy/20'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>

            <button
              onClick={nextTestimonial}
              className="w-10 h-10 rounded-full border border-astro-navy/20 flex items-center justify-center text-astro-navy hover:bg-astro-navy hover:text-white transition-colors duration-300"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
