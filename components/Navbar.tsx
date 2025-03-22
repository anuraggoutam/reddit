'use client';
import { useState } from 'react';
// import { useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  // const [isScrolled, setIsScrolled] = useState(true);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     if (window.scrollY > 20) {
  //       setIsScrolled(true);
  //     } else {
  //       setIsScrolled(false);
  //     }
  //   };

  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  //  className=" w-full z-50 transition-all duration-300
  //       py-4 bg-white/80 backdrop-blur-md shadow-sm "

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="relative w-full z-50 transition-all duration-300 py-4 bg-white/80 backdrop-blur-md shadow-xs ">
      <div className="container-custom flex justify-between items-center">
        <a href="#" className="flex items-center gap-2">
          <div className="relative w-10 h-10 rounded-full bg-astro-gold/20 flex items-center justify-center overflow-hidden">
            <div className="absolute w-6 h-6 bg-astro-gold rounded-full animate-pulse-soft"></div>
            <span className="relative z-10 text-astro-navy font-cormorant text-xl font-bold">
              A
            </span>
          </div>
          <span className="font-cormorant text-2xl font-medium text-astro-navy">
            Asteria
          </span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-astro-navy/80 hover:text-astro-navy transition-colors duration-300 text-sm font-medium"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a href="#contact" className="btn-primary">
            Book Consultation
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-astro-navy"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-white shadow-lg md:hidden animate-fade-in">
            <div className="container-custom py-4">
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-astro-navy/80 hover:text-astro-navy block py-2 transition-colors duration-300"
                      onClick={() => setIsOpen(false)}
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
                <li className="pt-2">
                  <a
                    href="#contact"
                    className="btn-primary inline-block"
                    onClick={() => setIsOpen(false)}
                  >
                    Book Consultation
                  </a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
