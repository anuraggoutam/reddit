'use client';
import { Star, Moon, Sun, Compass } from 'lucide-react';
import { useEffect, useRef } from 'react';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  delay: string;
}

const ServiceCard = ({ title, description, icon, delay }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      className={`bg-white rounded-2xl p-8 shadow-lg border border-astro-navy/5 transition-all duration-500 hover:shadow-xl hover:translate-y-[-5px] opacity-0 ${delay}`}
    >
      <div className="mb-6 w-14 h-14 rounded-full bg-astro-navy/5 flex items-center justify-center text-astro-gold">
        {icon}
      </div>
      <h3 className="text-2xl font-cormorant font-medium mb-3 text-astro-navy">
        {title}
      </h3>
      <p className="text-muted-foreground">{description}</p>
      <a
        href="#contact"
        className="inline-block mt-6 text-astro-gold font-medium hover:underline transition-all"
      >
        Learn more
      </a>
    </div>
  );
};

const Services = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
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

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const services = [
    {
      title: 'Istikhara (Spiritual Guidance)',
      description:
        'Seek divine guidance through Istikhara for important life decisions such as marriage, business, and personal matters.',
      icon: <Compass size={28} />, // Use appropriate Islamic icon if needed
      delay: '',
    },
    {
      title: 'Nikah & Relationship Compatibility',
      description:
        'Get insights on marital harmony and compatibility based on Islamic principles for a blessed relationship.',
      icon: <Moon size={28} />,
      delay: 'animation-delay-300',
    },
    {
      title: 'Ruqyah (Spiritual Healing)',
      description:
        'Experience spiritual healing through Quranic recitations for protection against evil eye, jinn, and other spiritual ailments.',
      icon: <Sun size={28} />,
      delay: 'animation-delay-600',
    },
    {
      title: 'Dream Interpretation (Tabeer-e-Khwab)',
      description:
        'Understand the meaning of your dreams with authentic Islamic dream interpretation.',
      icon: <Star size={28} />,
      delay: 'animation-delay-900',
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gradient-to-b from-white to-astro-cream/20"
    >
      <div className="container-custom">
        <div
          ref={sectionRef}
          className="max-w-xl mx-auto text-center mb-16 opacity-0"
        >
          <p className="section-subtitle">OUR OFFERINGS</p>
          <h2 className="section-title">Celestial Services</h2>
          <p className="text-muted-foreground mt-4">
            Explore our range of astrological services designed to bring
            clarity, purpose, and cosmic alignment to your life journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              title={service.title}
              description={service.description}
              icon={service.icon}
              delay={service.delay}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
