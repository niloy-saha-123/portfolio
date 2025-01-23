'use client';

import React from 'react';
import { Building2, Briefcase } from 'lucide-react';

const experiences = [
  {
    title: "Software Development Intern",
    company: "Development Initiative for Social Awareness (DISA)",
    location: "Dhaka, Bangladesh",
    period: "Jul. 2024 – Aug. 2024",
    description: [
      "Built a microfinance management system with Bootstrap and JavaScript, integrating secure authentication and real-time data processing for 500+ users.",
      "Optimized MySQL queries, improving system efficiency by 40% and cutting data retrieval time by 25%, enhancing the Aloghar digital library's performance."
    ]
  },
  {
    title: "Student Researcher",
    company: "84 Lumber",
    location: "Carlisle, PA",
    period: "Nov. 2023 – Mar. 2024",
    description: [
      "Engineered an ML-driven pipeline modernizing a 10,000+ line legacy C Basic codebase, enhancing processing efficiency and system maintainability.",
      "Translated 30% of a legacy C Basic codebase into Java and Python, improving code readability and system maintenance efficiency, boosting developer productivity."
    ]
  }
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-[#0B1121]">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Work Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-800 transform -translate-x-1/2" />

          {/* Experience cards */}
          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div 
                key={index}
                className={`relative flex flex-col md:flex-row gap-8 ${
                  index % 2 === 0 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-8 h-8 bg-blue-500 rounded-full transform -translate-x-1/2 flex items-center justify-center">
                  {index === 0 ? (
                    <Building2 className="w-4 h-4 text-white" />
                  ) : (
                    <Briefcase className="w-4 h-4 text-white" />
                  )}
                </div>

                {/* Content */}
                <div className={`ml-12 md:ml-0 md:w-1/2 ${
                  index % 2 === 0 ? 'md:pr-16' : 'md:pl-16'
                }`}>
                  <div className="bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      {exp.title}
                    </h3>
                    <div className="text-blue-500 dark:text-blue-400 font-medium mb-2">
                      {exp.company}
                    </div>
                    <div className="flex items-center text-gray-500 dark:text-gray-400 text-sm mb-4">
                      <span>{exp.location}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.period}</span>
                    </div>
                    <ul className="space-y-3">
                      {exp.description.map((item, i) => (
                        <li key={i} className="flex items-start">
                          <span className="flex-shrink-0 w-1.5 h-1.5 mt-2 rounded-full bg-blue-500 mr-3" />
                          <span className="text-gray-600 dark:text-gray-300">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;