import React from 'react';
import { Briefcase, Calendar, MapPin, ExternalLink } from 'lucide-react';
import { experience } from '../data/mock';

const Experience = () => {
  return (
    <section id="experience" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Work <span className="text-charcoal-light">Experience</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
        </div>

        {/* Experience Timeline */}
        <div className="relative max-w-3xl mx-auto">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-1 h-full bg-charcoal/20 rounded-full"></div>

          {experience.map((exp, index) => (
            <div
              key={exp.id}
              className={`relative flex flex-col md:flex-row gap-8 mb-12 ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Timeline Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-5 h-5 bg-charcoal rounded-full border-4 border-cream shadow-cartoon-sm z-10"></div>

              {/* Content Card */}
              <div className={`ml-8 md:ml-0 md:w-1/2 ${
                index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'
              }`}>
                <div className="p-6 bg-cream-light rounded-2xl shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-1 border-2 border-transparent hover:border-charcoal/10">
                  {/* Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center shadow-cartoon-sm">
                      <Briefcase className="w-6 h-6 text-cream" />
                    </div>
                    <span className="px-3 py-1 bg-charcoal/10 text-charcoal-light text-xs font-medium rounded-full">
                      {exp.type}
                    </span>
                  </div>

                  {/* Role & Company */}
                  <h3 className="text-xl font-bold text-charcoal mb-2">
                    {exp.role}
                  </h3>
                  <h4 className="text-lg text-charcoal-light font-medium mb-4">
                    {exp.company}
                  </h4>

                  {/* Meta Info */}
                  <div className="flex flex-wrap gap-4 mb-4 text-sm text-charcoal-light">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{exp.type}</span>
                    </div>
                  </div>

                  {/* Responsibilities */}
                  <ul className="space-y-2">
                    {exp.responsibilities.map((resp, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-charcoal-light">
                        <span className="w-2 h-2 mt-2 bg-charcoal rounded-full flex-shrink-0"></span>
                        <span>{resp}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Looking for Opportunities */}
        <div className="mt-12 text-center">
          <div className="inline-block p-6 bg-charcoal/5 rounded-2xl">
            <p className="text-charcoal-light mb-2">Currently seeking full-time opportunities in</p>
            <p className="text-xl font-semibold text-charcoal">Data Analytics & Software Development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
