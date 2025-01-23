'use client';

import React from 'react';
import { Code2, Database, Layout, Terminal, Wrench, Library } from 'lucide-react';

const skillCategories = [
  {
    title: "Languages",
    icon: Code2,
    skills: ["Java", "Python", "C", "JavaScript", "TypeScript", "HTML/CSS", "R"],
    color: "blue"
  },
  {
    title: "Developer Tools",
    icon: Wrench,
    skills: ["Git", "Visual Studio", "Supabase", "Clerk", "PyCharm", "Docker", "Eclipse", "JUnit", "Command Line"],
    color: "purple"
  },
  {
    title: "Libraries & Frameworks",
    icon: Library,
    skills: ["React", "Tailwind CSS", "Next.js", "NumPy", "Matplotlib", "Pandas"],
    color: "cyan"
  }
];

const SkillsSection = () => {
  return (
    <section id="skills" className="section-padding bg-white dark:bg-[#0B1121]">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="group relative bg-gray-50 dark:bg-gray-800/50 rounded-2xl p-6 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${category.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative space-y-4">
                {/* Header */}
                <div className="flex items-center space-x-3">
                  <div className={`p-3 bg-${category.color}-500/10 dark:bg-${category.color}-500/20 rounded-xl`}>
                    <category.icon className={`w-6 h-6 text-${category.color}-500`} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>

                {/* Skills grid */}
                <div className="grid grid-cols-2 gap-3">
                  {category.skills.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="group/skill relative px-3 py-2 bg-white dark:bg-gray-800 rounded-lg hover:shadow-md transition-all duration-300"
                    >
                      <div className={`absolute inset-0 bg-${category.color}-500/10 rounded-lg opacity-0 group-hover/skill:opacity-100 transition-opacity duration-300`} />
                      <span className="relative text-gray-700 dark:text-gray-300">
                        {skill}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;