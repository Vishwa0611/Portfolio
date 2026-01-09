import React, { useState } from 'react';
import { Code2, Database, BarChart3, Calculator } from 'lucide-react';
import { skills } from '../data/mock';
import { Tabs, TabsContent, TabsList, TabsTrigger } from './ui/tabs';
import { Progress } from './ui/progress';

const Skills = () => {
  const [activeTab, setActiveTab] = useState('programming');

  const skillCategories = [
    {
      id: 'programming',
      label: 'Programming',
      icon: Code2,
      skills: skills.programming,
      color: 'bg-charcoal'
    },
    {
      id: 'dataAnalysis',
      label: 'Data Analysis',
      icon: Calculator,
      skills: skills.dataAnalysis,
      color: 'bg-charcoal-light'
    },
    {
      id: 'visualization',
      label: 'Visualization',
      icon: BarChart3,
      skills: skills.visualization,
      color: 'bg-charcoal'
    },
    {
      id: 'databases',
      label: 'Databases',
      icon: Database,
      skills: skills.databases,
      color: 'bg-charcoal-light'
    }
  ];

  return (
    <section id="skills" className="py-20 bg-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-charcoal mb-4">
            Technical <span className="text-charcoal-light">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-charcoal mx-auto rounded-full"></div>
          <p className="mt-4 text-charcoal-light max-w-2xl mx-auto">
            A comprehensive toolkit for data analysis, visualization, and software development
          </p>
        </div>

        {/* Skills Tabs */}
        <Tabs defaultValue="programming" className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-transparent h-auto mb-12">
            {skillCategories.map((category) => (
              <TabsTrigger
                key={category.id}
                value={category.id}
                className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-cream data-[state=active]:bg-charcoal data-[state=active]:text-cream shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 data-[state=active]:shadow-cartoon border-2 border-transparent data-[state=active]:border-charcoal"
              >
                <category.icon className="w-6 h-6" />
                <span className="font-medium text-sm">{category.label}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {skillCategories.map((category) => (
            <TabsContent key={category.id} value={category.id}>
              <div className="grid md:grid-cols-2 gap-6">
                {category.skills.map((skill, index) => (
                  <div
                    key={index}
                    className="p-6 bg-cream rounded-2xl shadow-cartoon-sm hover:shadow-cartoon transition-all duration-300 hover:-translate-y-1"
                  >
                    <div className="flex justify-between items-center mb-3">
                      <span className="font-semibold text-charcoal">{skill.name}</span>
                      <span className="text-sm text-charcoal-light font-medium">{skill.level}%</span>
                    </div>
                    <div className="relative">
                      <Progress 
                        value={skill.level} 
                        className="h-3 bg-charcoal/10 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </TabsContent>
          ))}
        </Tabs>

        {/* All Skills Grid */}
        <div className="mt-16">
          <h3 className="text-xl font-semibold text-charcoal text-center mb-8">All Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {[
              'Python', 'SQL', 'Flask', 'NumPy', 'Pandas', 'Matplotlib',
              'Power BI', 'Tableau', 'Excel', 'Looker Studio',
              'MySQL', 'PostgreSQL', 'Statistical Analysis', 'Data Validation',
              'Data Visualization', 'KPI Reporting'
            ].map((tech, index) => (
              <div
                key={index}
                className="group px-5 py-3 bg-cream rounded-full shadow-cartoon-sm hover:shadow-cartoon hover:bg-charcoal hover:text-cream transition-all duration-300 cursor-default border-2 border-charcoal/10 hover:border-charcoal"
              >
                <span className="font-medium text-charcoal group-hover:text-cream transition-colors">
                  {tech}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
