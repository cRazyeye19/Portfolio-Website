import React from 'react';
import Timeline from './Timeline';

const Experience: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-white p-4 sm:p-6 rounded-3xl shadow-sm my-12 text-center">
      <h2 className="text-center text-2xl font-bold text-gray-800 mb-4">Professional Experience</h2>
      <Timeline />
    </section>
  );
};

export default Experience;