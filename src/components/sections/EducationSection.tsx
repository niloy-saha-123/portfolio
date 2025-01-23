'use client';

import React from 'react';
import { GraduationCap, BookOpen } from 'lucide-react';

const courses = [
  "Introduction to Python",
  "Introduction to Java and OOP",
  "Data Structures and Problem Solving",
  "Tools and Techniques for Software Development",
  "Large-scale and Open Source Software Development",
  "Discrete Mathematics",
  "Introduction to Data Science"
];

const EducationSection = () => {
  return (
    <section id="education" className="section-padding bg-gray-50 dark:bg-gray-900/50">
      <div className="container-width">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12">
          Education
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Main Education Card */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start space-x-4">
              <div className="p-3 bg-blue-500/10 dark:bg-blue-500/20 rounded-xl">
                <GraduationCap className="w-8 h-8 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Dickinson College
                </h3>
                <p className="text-blue-500 dark:text-blue-400 font-medium mt-1">
                  Bachelor of Science in Computer Science and Data Analytics
                </p>
                <p className="text-gray-500 dark:text-gray-400 mt-1">
                  Carlisle, PA • Jun. 2027
                </p>
              </div>
            </div>
          </div>

          {/* Relevant Coursework Card */}
          <div className="bg-white dark:bg-gray-800/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-start space-x-4 mb-6">
              <div className="p-3 bg-purple-500/10 dark:bg-purple-500/20 rounded-xl">
                <BookOpen className="w-8 h-8 text-purple-500" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                Relevant Coursework
              </h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {courses.map((course, index) => (
                <div 
                  key={index}
                  className="flex items-center space-x-2 text-gray-600 dark:text-gray-300"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-500" />
                  <span>{course}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;