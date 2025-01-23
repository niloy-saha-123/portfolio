'use client';

import React from 'react';
import Image from 'next/image';
import { useTheme } from '@/context/ThemeContext';

const AboutSection = () => {
  const { theme } = useTheme();

  return (
    <section id="about" className="section-padding bg-[var(--about-bg)] transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative w-[500px] h-[500px] mx-auto">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-blue-500/20 to-purple-500/20 animate-pulse" />
              <div className={`absolute inset-4 rounded-2xl ${theme === 'dark' ? 'bg-gray-800' : 'bg-white'} shadow-xl overflow-hidden transition-colors duration-300`}>
                <Image
                  src="/images/Me.png"
                  alt="About Me"
                  fill
                  className="object-cover object-center"
                  priority
                />
              </div>
              <div className="absolute inset-4 rounded-2xl bg-gradient-to-tr from-blue-500/10 to-purple-500/10 mix-blend-overlay" />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className={`text-5xl leading-snug transition-colors duration-500 ${
              theme === 'dark' ? 'text-blue-500' : theme === 'light' ? 'text-[#1f2937]' : 'text-[#4b5563]'
            }`}>
              About Me
            </h2>
            <p className={`text-primary transition-colors duration-500 ${
              theme === 'dark' ? 'text-white' : theme === 'light' ? 'text-[#1f2937]' : 'text-[#4b5563]'
            }`}>
              I am a Computer Science and Data Analytics student at Dickinson College with a passion for AI, machine learning, and large language models (LLMs). With experience in full-stack development and data analysis, I combine technical expertise and creative problem-solving to build innovative, impactful solutions. My focus is on applying machine learning and LLMs to drive meaningful advancements in technology.
            </p>


            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className={`text-secondary transition-colors duration-300`}>
                  <span className="font-semibold">Experience:</span> Software Development, Data Analysis
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
                <p className={`text-secondary transition-colors duration-300`}>
                  <span className="font-semibold">Location:</span> Carlisle, PA
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <p className={`text-secondary transition-colors duration-300`}>
                  <span className="font-semibold">Email:</span> <a href="mailto:sahan@dickinson.edu" className="hover:text-blue-500 transition-colors">sahan@dickinson.edu</a>
                </p>
              </div>
            </div>

            <div className="pt-4">
              <a href="#contact" className={`inline-flex items-center space-x-2 px-6 py-3 ${theme === 'dark' ? 'bg-blue-500 hover:bg-blue-600' : 'bg-blue-600 hover:bg-blue-700'} text-white rounded-lg transition-colors duration-300`}>
                <span>Get in Touch</span>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;