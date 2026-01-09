import React from 'react';
import { ArrowDown, Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';
import { Button } from './ui/button';
import { personalInfo } from '../data/mock';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.querySelector('#about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-cream via-cream-light to-cream pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="order-2 md:order-1 text-center md:text-left">
            <div className="inline-block px-4 py-2 bg-charcoal/5 rounded-full mb-6 animate-bounce-slow">
              <span className="text-charcoal-light text-sm font-medium">Available for Opportunities</span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-charcoal mb-4 leading-tight">
              Hi, I'm{' '}
              <span className="relative inline-block">
                <span className="relative z-10">{personalInfo.name.split(' ')[0]}</span>
                <span className="absolute bottom-2 left-0 w-full h-3 bg-cream-dark/50 -z-0 rounded"></span>
              </span>
            </h1>
            
            <h2 className="text-xl sm:text-2xl lg:text-3xl text-charcoal-light font-medium mb-6">
              {personalInfo.title}
            </h2>
            
            <p className="text-charcoal-light/80 text-lg mb-8 max-w-lg mx-auto md:mx-0">
              {personalInfo.tagline}
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start mb-8">
              <div className="flex items-center gap-2 text-charcoal-light">
                <MapPin className="w-4 h-4" />
                <span className="text-sm">{personalInfo.location}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href={personalInfo.resumeUrl}
                download="Ayush_Vishwakarma_Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-charcoal hover:bg-charcoal-light text-cream rounded-full px-8 py-6 text-lg shadow-cartoon hover:shadow-cartoon-lg transition-all duration-300 hover:-translate-y-1">
                  <Download className="w-5 h-5 mr-2" />
                  Download Resume
                </Button>
              </a>
              
              <Button
                variant="outline"
                onClick={scrollToAbout}
                className="border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full px-8 py-6 text-lg transition-all duration-300 hover:-translate-y-1"
              >
                Explore Portfolio
              </Button>
            </div>
            
            {/* Social Links */}
            <div className="flex gap-4 mt-8 justify-center md:justify-start">
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal/5 rounded-full hover:bg-charcoal hover:text-cream text-charcoal transition-all duration-300 hover:-translate-y-1 shadow-cartoon-sm"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-charcoal/5 rounded-full hover:bg-charcoal hover:text-cream text-charcoal transition-all duration-300 hover:-translate-y-1 shadow-cartoon-sm"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                className="p-3 bg-charcoal/5 rounded-full hover:bg-charcoal hover:text-cream text-charcoal transition-all duration-300 hover:-translate-y-1 shadow-cartoon-sm"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Photo */}
          <div className="order-1 md:order-2 flex justify-center">
            <div className="relative">
              {/* Subtle Background Shapes */}
              <div className="absolute -top-8 -left-8 w-32 h-32 bg-charcoal/5 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-cream-dark/10 rounded-full blur-3xl opacity-50"></div>
              
              {/* Decorative Elements */}
              <div className="absolute -top-4 -left-4 w-full h-full bg-charcoal/10 rounded-3xl transform rotate-3 shadow-lg"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full bg-cream-dark/30 rounded-3xl transform -rotate-3 shadow-lg"></div>
              
              {/* Main Photo */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-cartoon-lg border-4 border-cream bg-cream">
                <img
                  src={personalInfo.photo}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
                />
                {/* Subtle Overlay Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-tr from-charcoal/0 via-transparent to-cream/5 rounded-3xl"></div>
              </div>
              
              {/* Floating Bubbles */}
              <div className="absolute -top-6 -left-10 w-16 h-16 bg-charcoal/15 rounded-full shadow-sm" style={{ animation: 'float 6s ease-in-out infinite' }}></div>
              <div className="absolute -bottom-4 -right-12 w-14 h-14 bg-cream-dark/20 rounded-full shadow-sm" style={{ animation: 'float 8s ease-in-out infinite 1s' }}></div>
              <div className="absolute top-1/3 -right-8 w-12 h-12 bg-charcoal/10 rounded-full shadow-sm" style={{ animation: 'float 7s ease-in-out infinite 2s' }}></div>
              <div className="absolute bottom-1/4 -left-6 w-10 h-10 bg-cream-dark/15 rounded-full shadow-sm" style={{ animation: 'float 7.5s ease-in-out infinite 0.5s' }}></div>
              <div className="absolute top-0 -right-16 w-8 h-8 bg-charcoal/12 rounded-full shadow-sm" style={{ animation: 'float 6.5s ease-in-out infinite 1.5s' }}></div>
              <div className="absolute top-2/3 -left-10 w-9 h-9 bg-cream-dark/18 rounded-full shadow-sm" style={{ animation: 'float 7.2s ease-in-out infinite 0.8s' }}></div>
              <div className="absolute -top-10 left-1/4 w-7 h-7 bg-charcoal/14 rounded-full shadow-sm" style={{ animation: 'float 6.8s ease-in-out infinite 2.2s' }}></div>
              <div className="absolute -bottom-6 left-1/3 w-6 h-6 bg-cream-dark/16 rounded-full shadow-sm" style={{ animation: 'float 7.8s ease-in-out infinite 1.2s' }}></div>
              <div className="absolute top-1/4 -right-20 w-11 h-11 bg-charcoal/11 rounded-full shadow-sm" style={{ animation: 'float 6.3s ease-in-out infinite 0.3s' }}></div>
              <div className="absolute bottom-1/3 -left-12 w-7 h-7 bg-cream-dark/19 rounded-full shadow-sm" style={{ animation: 'float 7.6s ease-in-out infinite 1.8s' }}></div>
            </div>
          </div>
          
          <style>{`
            @keyframes float {
              0%, 100% {
                transform: translateY(0px);
              }
              50% {
                transform: translateY(-20px);
              }
            }
          `}</style>
        </div>
        
        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16">
          <button
            onClick={scrollToAbout}
            className="p-3 rounded-full bg-charcoal/5 hover:bg-charcoal/10 transition-all duration-300 animate-bounce"
          >
            <ArrowDown className="w-6 h-6 text-charcoal" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
