import React from 'react';
import { Code2, Database, BarChart3, Brain } from 'lucide-react';
import { personalInfo, coreCompetencies } from '../data/mock';

const About = () => {
  const highlights = [
    {
      icon: Code2,
      title: 'Programming',
      description: 'Python, SQL, Flask'
    },
    {
      icon: Database,
      title: 'Databases',
      description: 'MySQL, PostgreSQL'
    },
    {
      icon: BarChart3,
      title: 'Visualization',
      description: 'Tableau, Power BI'
    },
    {
      icon: Brain,
      title: 'Analytics',
      description: 'Statistical Analysis'
    }
  ];

  return (
    <section id="about" className="py-20 bg-cream">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            About <span className="text-charcoal-light">Me</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h3 className="text-2xl font-semibold text-charcoal mb-6">
              Data Analyst & Software Developer
            </h3>
            
            <p className="text-charcoal-light leading-relaxed mb-6">
              {personalInfo.summary}
            </p>
            
            <p className="text-charcoal-light leading-relaxed mb-8">
              I'm passionate about transforming raw data into meaningful insights that drive business decisions. 
              With a strong foundation in both technical skills and analytical thinking, I bring a unique perspective 
              to every project I undertake.
            </p>

            {/* Core Competencies */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold text-charcoal mb-4">Core Competencies</h4>
              <div className="flex flex-wrap gap-2">
                {coreCompetencies.map((competency, index) => (
                  <span
                    key={index}
                    className="px-4 py-2 bg-charcoal/5 text-charcoal-light rounded-full text-sm font-medium hover:bg-charcoal hover:text-cream transition-all duration-300 cursor-default"
                  >
                    {competency}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="group p-6 bg-cream-light rounded-2xl shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-2 border-2 border-transparent hover:border-charcoal/10"
              >
                <div className="w-14 h-14 bg-charcoal/5 rounded-xl flex items-center justify-center mb-4 group-hover:bg-charcoal group-hover:text-cream transition-all duration-300">
                  <item.icon className="w-7 h-7 text-charcoal group-hover:text-cream transition-colors" />
                </div>
                <h4 className="text-lg font-semibold text-charcoal mb-2">{item.title}</h4>
                <p className="text-charcoal-light text-sm">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Fun Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: '9', label: 'Projects Completed' },
            { number: '3', label: 'Certifications' },
            { number: '10+', label: 'Technical Skills' },
            { number: '2026', label: 'Graduation Year' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-charcoal/5 rounded-2xl hover:bg-charcoal group transition-all duration-300 cursor-default"
            >
              <div className="text-3xl sm:text-4xl font-bold text-charcoal group-hover:text-cream transition-colors mb-2">
                {stat.number}
              </div>
              <div className="text-charcoal-light group-hover:text-cream/80 transition-colors text-sm">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
