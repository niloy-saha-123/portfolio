'use client';

import React from 'react';
import { ExternalLink, Github, Bot, Brain } from 'lucide-react';

const projects = [
  {
    title: "StudyBuddy - AI-Powered Learning Platform",
    period: "Dec. 2023 – Present",
    description: [
      "Designed and launched an AI-powered learning platform that transforms lecture content into structured study materials, integrating live transcription, interactive note-taking, and dynamic demo questions, providing value to 50+ active users.",
      "Engineered a responsive UI with Next.js and TypeScript, implementing real-time AI transcription and summarization, achieving a 98% accuracy rate and enhancing study efficiency for users."
    ],
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "AI APIs", "React", "Clerk"],
    link: "#",
    github: "#",
    icon: Bot,
    color: "blue"
  },
  {
    title: "Automated Sentiment Analysis",
    period: "Nov. 2023 – Dec. 2023",
    description: [
      "Developed a machine learning-based sentiment analysis system using Python for processing movie reviews.",
      "Achieved 82% accuracy on a dataset of 5000+ reviews, with 95% precision for strongly positive/negative sentiments."
    ],
    technologies: ["Python", "Data Processing", "Machine Learning"],
    github: "#",
    icon: Brain,
    color: "purple"
  }
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Featured Projects
        </h2>

        <div className="space-y-12">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative bg-white dark:bg-gray-800/50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300"
            >
              {/* Decorative gradient */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${project.color}-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

              <div className="relative">
                {/* Header */}
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4">
                    <div className={`p-3 bg-${project.color}-500/10 dark:bg-${project.color}-500/20 rounded-xl`}>
                      <project.icon className={`w-6 h-6 text-${project.color}-500`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                        {project.title}
                      </h3>
                      <p className="text-gray-500 dark:text-gray-400 mt-1">
                        {project.period}
                      </p>
                    </div>
                  </div>

                  {/* Links */}
                  <div className="flex items-center space-x-3">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        <Github className="w-5 h-5" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
                      >
                        <ExternalLink className="w-5 h-5" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Description */}
                <div className="mt-6 space-y-4">
                  {project.description.map((desc, i) => (
                    <p key={i} className="text-gray-600 dark:text-gray-300">
                      {desc}
                    </p>
                  ))}
                </div>

                {/* Technologies */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className={`px-3 py-1 text-sm bg-${project.color}-500/10 text-${project.color}-600 dark:text-${project.color}-400 rounded-full`}
                    >
                      {tech}
                    </span>
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

export default ProjectsSection;