import React from 'react';
import { Heart, ArrowUp, Github, Linkedin, Mail, Download } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-charcoal text-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand Section */}
          <div>
            <a
              href="#home"
              onClick={(e) => scrollToSection(e, '#home')}
              className="font-bold text-2xl mb-4 inline-block"
            >
              <span className="text-cream/60">{'<'}</span>
              <span className="text-cream">AV</span>
              <span className="text-cream/60">{'/>'}</span>
            </a>
            <p className="text-cream/70 mb-6 leading-relaxed">
              Data Analyst & Software Developer passionate about transforming data into actionable insights.
            </p>
            <a
              href={personalInfo.resumeUrl}
              download="Ayush_Vishwakarma_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-cream/10 hover:bg-cream hover:text-charcoal rounded-full transition-all duration-300"
            >
              <Download className="w-4 h-4" />
              <span className="text-sm font-medium">Download Resume</span>
            </a>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className="text-cream/70 hover:text-cream transition-colors inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-cream/50 rounded-full group-hover:bg-cream transition-colors"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h4 className="font-bold text-lg mb-6">Connect</h4>
            <div className="space-y-3 mb-6">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex items-center gap-3 text-cream/70 hover:text-cream transition-colors"
              >
                <Mail className="w-4 h-4" />
                <span className="text-sm">{personalInfo.email}</span>
              </a>
            </div>
            
            <div className="flex gap-4">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-cream hover:text-charcoal rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-cream/10 hover:bg-cream hover:text-charcoal rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="w-10 h-10 bg-cream/10 hover:bg-cream hover:text-charcoal rounded-full flex items-center justify-center transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-6 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-cream/60 text-sm flex items-center gap-2">
            © {currentYear} Ayush Vishwakarma. Made with
            <Heart className="w-4 h-4 text-red-400 fill-red-400" />
          </p>
          
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 px-4 py-2 bg-cream/10 hover:bg-cream hover:text-charcoal rounded-full transition-all duration-300"
          >
            <span className="text-sm font-medium">Back to Top</span>
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
