import React from 'react';

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const AboutSkeleton: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto bg-gray-100 p-6 sm:p-8 rounded-2xl my-16">
        <SkeletonBlock className="w-1/4 h-8 mx-auto mb-4" />
        <div className="space-y-2">
            <SkeletonBlock className="w-full h-4" />
            <SkeletonBlock className="w-full h-4" />
            <SkeletonBlock className="w-5/6 h-4" />
        </div>
    </section>
  );
};

export default AboutSkeleton;