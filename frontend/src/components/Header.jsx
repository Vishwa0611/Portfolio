import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' },
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-cartoon'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => scrollToSection(e, '#home')}
            className="font-bold text-xl md:text-2xl text-charcoal hover:text-charcoal-light transition-colors"
          >
            Portfolio
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-2 text-charcoal-light hover:text-charcoal font-medium text-sm rounded-full hover:bg-charcoal/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Vishwakarma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="ml-4 bg-charcoal hover:bg-charcoal-light text-cream rounded-full px-6 shadow-cartoon-sm hover:shadow-cartoon transition-all duration-200 hover:-translate-y-0.5">
                <Download className="w-4 h-4 mr-2" />
                Resume
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-full bg-charcoal/5 hover:bg-charcoal/10 transition-colors"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-charcoal" />
            ) : (
              <Menu className="w-6 h-6 text-charcoal" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ${
            isMenuOpen ? 'max-h-96 pb-4' : 'max-h-0'
          }`}
        >
          <div className="flex flex-col space-y-1 bg-cream-light rounded-2xl p-4 shadow-cartoon">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="px-4 py-3 text-charcoal-light hover:text-charcoal font-medium rounded-xl hover:bg-charcoal/5 transition-all duration-200"
              >
                {link.name}
              </a>
            ))}
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Vishwakarma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2"
            >
              <Button className="w-full bg-charcoal hover:bg-charcoal-light text-cream rounded-full shadow-cartoon-sm">
                <Download className="w-4 h-4 mr-2" />
                Download Resume
              </Button>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
