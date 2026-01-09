import React from 'react';
import { GraduationCap, Calendar, Award, BookOpen } from 'lucide-react';
import { education, certifications } from '../data/mock';
import { Card, CardContent, CardHeader } from './ui/card';

const Education = () => {
  const certIcons = {
    FileText: BookOpen,
    BarChart3: Award,
    Table2: GraduationCap
  };

  return (
    <section id="education" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Education & <span className="text-charcoal-light">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-3">
              <GraduationCap className="w-7 h-7" />
              Education
            </h3>
            
            <div className="space-y-6">
              {education.map((edu) => (
                <Card
                  key={edu.id}
                  className="bg-cream-light border-2 border-transparent hover:border-charcoal/10 shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                >
                  <CardHeader className="pb-2">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <h4 className="text-lg font-bold text-charcoal mb-1">
                          {edu.degree}
                        </h4>
                        <p className="text-charcoal-light font-medium">
                          {edu.institution}
                        </p>
                      </div>
                      {edu.current && (
                        <span className="px-3 py-1 bg-charcoal text-cream text-xs font-medium rounded-full">
                          Current
                        </span>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-4 text-sm text-charcoal-light">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.duration}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{edu.grade}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="text-2xl font-bold text-charcoal mb-8 flex items-center gap-3">
              <Award className="w-7 h-7" />
              Certifications
            </h3>
            
            <div className="space-y-6">
              {certifications.map((cert) => {
                const IconComponent = certIcons[cert.icon] || Award;
                return (
                  <Card
                    key={cert.id}
                    className="bg-cream-light border-2 border-transparent hover:border-charcoal/10 shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden"
                  >
                    <CardContent className="p-6">
                      <div className="flex gap-4">
                        <div className="w-12 h-12 bg-charcoal rounded-xl flex items-center justify-center flex-shrink-0 shadow-cartoon-sm">
                          <IconComponent className="w-6 h-6 text-cream" />
                        </div>
                        <div>
                          <h4 className="text-lg font-bold text-charcoal mb-2">
                            {cert.title}
                          </h4>
                          <p className="text-charcoal-light text-sm">
                            {cert.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
