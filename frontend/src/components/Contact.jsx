import React from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, ExternalLink } from 'lucide-react';
import { personalInfo } from '../data/mock';

const Contact = () => {

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: personalInfo.email,
      href: `mailto:${personalInfo.email}`
    },
    {
      icon: Phone,
      label: 'Phone',
      value: personalInfo.phone,
      href: `tel:${personalInfo.phone}`
    },
    {
      icon: MapPin,
      label: 'Location',
      value: personalInfo.location,
      href: null
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: 'GitHub',
      href: personalInfo.github,
      username: '@Vishwa0611'
    },
    {
      icon: Linkedin,
      label: 'LinkedIn',
      href: personalInfo.linkedin,
      username: 'Ayush Vishwakarma'
    }
  ];

  return (
    <section id="contact" className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Get In <span className="text-charcoal-light">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, collaborations, or just having a chat about data!
          </p>
        </div>

        <div className="grid lg:grid-cols-1 gap-12 max-w-2xl mx-auto">
          {/* Contact Info */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8">Contact Information</h3>
            
            <div className="space-y-6 mb-10">
              {contactInfo.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-4 p-4 bg-cream rounded-2xl shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center shadow-cartoon-sm">
                    <item.icon className="w-5 h-5 text-cream" />
                  </div>
                  <div>
                    <p className="text-sm text-charcoal-light font-medium">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-charcoal font-semibold hover:text-charcoal-light transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-charcoal font-semibold">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <h4 className="text-lg font-semibold text-charcoal mb-4">Connect With Me</h4>
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-3 p-4 bg-cream rounded-2xl shadow-cartoon-sm hover:shadow-cartoon hover:bg-charcoal transition-all duration-300 hover:-translate-y-1"
                >
                  <social.icon className="w-5 h-5 text-charcoal group-hover:text-cream transition-colors" />
                  <div>
                    <p className="text-xs text-charcoal-light group-hover:text-cream/70 transition-colors">
                      {social.label}
                    </p>
                    <p className="text-sm font-medium text-charcoal group-hover:text-cream transition-colors">
                      {social.username}
                    </p>
                  </div>
                  <ExternalLink className="w-4 h-4 text-charcoal-light group-hover:text-cream transition-colors" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
