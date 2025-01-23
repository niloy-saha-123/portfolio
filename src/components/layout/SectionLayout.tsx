// src/components/layout/SectionLayout.tsx
import React from 'react';

interface SectionLayoutProps {
  id: string;
  title: string;
  children: React.ReactNode;
}

const SectionLayout: React.FC<SectionLayoutProps> = ({ id, title, children }) => {
  return (
    <section id={id} className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-8">
          {title}
        </h2>
        {children}
      </div>
    </section>
  );
};

export default SectionLayout;