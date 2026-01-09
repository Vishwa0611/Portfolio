import React from 'react';
import { ExternalLink, Github, Calendar, Sparkles } from 'lucide-react';
import { projects } from '../data/mock';
import { Button } from './ui/button';
import { Badge } from './ui/badge';

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Featured <span className="text-charcoal-light">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
            Real-world data analysis projects showcasing analytical thinking and technical expertise
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-cream rounded-3xl shadow-cartoon hover:shadow-cartoon-lg transition-all duration-500 hover:-translate-y-2 overflow-hidden border-2 border-transparent hover:border-charcoal/10"
            >
              {/* Project Header */}
              <div className="p-6 bg-charcoal">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-cream" />
                    <span className="text-cream/80 text-sm font-medium">Project #{index + 1}</span>
                  </div>
                  <div className="flex items-center gap-2 text-cream/60 text-sm">
                    <Calendar className="w-4 h-4" />
                    <span>{project.year}</span>
                  </div>
                </div>
                <h3 className="text-2xl font-bold text-cream mb-2">
                  {project.title}
                </h3>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <p className="text-charcoal-light mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Highlights */}
                <div className="mb-6">
                  <h4 className="text-sm font-semibold text-charcoal mb-3">Key Highlights:</h4>
                  <ul className="space-y-2">
                    {project.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-charcoal-light text-sm">
                        <span className="w-1.5 h-1.5 mt-2 bg-charcoal rounded-full flex-shrink-0"></span>
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div className="mb-6">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, idx) => (
                      <Badge
                        key={idx}
                        variant="secondary"
                        className="bg-charcoal/5 text-charcoal-light hover:bg-charcoal hover:text-cream transition-colors rounded-full px-3 py-1"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1"
                  >
                    <Button
                      variant="outline"
                      className="w-full border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-cream rounded-full transition-all duration-300"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      View Code
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* More Projects CTA */}
        <div className="mt-12 text-center">
          <a
            href="https://github.com/Vishwa0611"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-charcoal hover:bg-charcoal-light text-cream rounded-full px-8 py-6 text-lg shadow-cartoon hover:shadow-cartoon-lg transition-all duration-300 hover:-translate-y-1">
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
