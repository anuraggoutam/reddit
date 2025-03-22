import {
  Instagram,
  Twitter,
  Facebook,
  Mail,
  Phone,
  MapPin,
} from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-astro-navy text-white">
      <div className="container-custom py-16">
        {/* Contact section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-16">
          <div className="animation-delay-300 animate-fade-in-up opacity-0">
            <div className="flex items-center gap-2 mb-6">
              <div className="relative w-10 h-10 rounded-full bg-astro-gold/20 flex items-center justify-center overflow-hidden">
                <div className="absolute w-6 h-6 bg-astro-gold rounded-full animate-pulse-soft"></div>
                <span className="relative z-10 text-white font-cormorant text-xl font-bold">
                  A
                </span>
              </div>
              <span className="font-cormorant text-2xl font-medium text-white">
                Asteria
              </span>
            </div>
            <p className="text-astro-cream/70 mb-6 max-w-xs">
              Illuminating paths and transforming lives through the ancient
              wisdom of the stars.
            </p>
            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-astro-gold hover:text-astro-navy transition-colors duration-300"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-astro-gold hover:text-astro-navy transition-colors duration-300"
              >
                <Twitter size={18} />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-astro-gold hover:text-astro-navy transition-colors duration-300"
              >
                <Facebook size={18} />
              </a>
            </div>
          </div>

          <div className="animation-delay-600 animate-fade-in-up opacity-0">
            <h3 className="font-cormorant text-xl font-medium mb-6 text-white">
              Quick Links
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="#home"
                  className="text-astro-cream/70 hover:text-astro-gold transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-astro-cream/70 hover:text-astro-gold transition-colors duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-astro-cream/70 hover:text-astro-gold transition-colors duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="text-astro-cream/70 hover:text-astro-gold transition-colors duration-300"
                >
                  Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-astro-cream/70 hover:text-astro-gold transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="animation-delay-900 animate-fade-in-up opacity-0">
            <h3 className="font-cormorant text-xl font-medium mb-6 text-white">
              Contact Information
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail className="text-astro-gold mt-1" size={18} />
                <span className="text-astro-cream/70">contact@asteria.com</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="text-astro-gold mt-1" size={18} />
                <span className="text-astro-cream/70">+91 7042609405 </span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="text-astro-gold mt-1" size={18} />
                <span className="text-astro-cream/70">
                  {' '}
                  Gurgaon | CyberCity Of Haryana India
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter */}
        <div className="border-t border-white/10 pt-10 pb-6">
          <div className="max-w-2xl mx-auto text-center animate-fade-in-up opacity-0">
            <h3 className="font-cormorant text-2xl font-medium mb-4 text-white">
              Subscribe to Our Cosmic Updates
            </h3>
            <p className="text-astro-cream/70 mb-6">
              Stay connected with the cosmos. Receive monthly astrology
              insights, special offers, and event updates.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-astro-gold flex-grow"
              />
              <button className="btn-primary whitespace-nowrap">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center border-t border-white/10 pt-8 text-astro-cream/50 text-sm">
          <p>&copy; {currentYear} Asteria. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
