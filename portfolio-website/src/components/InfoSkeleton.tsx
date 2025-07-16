import React from 'react';

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const InfoSkeleton: React.FC = () => {
  return (
    <section className="max-w-3xl mx-auto bg-gray-100 p-6 sm:p-8 rounded-2xl my-16 flex items-center space-x-6">
        <SkeletonBlock className="w-16 h-16 rounded-lg flex-shrink-0" />
        <div className="w-full space-y-2">
            <SkeletonBlock className="w-full h-5" />
            <SkeletonBlock className="w-3/4 h-5" />
        </div>
    </section>
  );
};

export default InfoSkeleton;