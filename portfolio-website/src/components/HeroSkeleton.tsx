import React from 'react';

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const HeroSkeleton: React.FC = () => {
  return (
    <main className="text-center py-10 md:py-16">
        <SkeletonBlock className="w-3/5 h-12 md:h-14 mx-auto" />
        <SkeletonBlock className="w-4/5 h-12 md:h-14 mx-auto mt-4" />
      
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-8 mt-12 max-w-4xl mx-auto">
            {/* Left Column Skeleton */}
            <div className="flex flex-col space-y-4">
                <SkeletonBlock className="w-full h-14 rounded-2xl" />
                <SkeletonBlock className="w-full h-14 rounded-2xl" />
                <SkeletonBlock className="w-full h-14 rounded-2xl" />
            </div>

            {/* Center Illustration Skeleton */}
            <div className="relative flex justify-center items-center my-8 scale-90 md:scale-100">
                <SkeletonBlock className="w-64 h-64 rounded-full" />
            </div>

            {/* Right Column Skeleton */}
            <div className="bg-gray-100/50">
                <SkeletonBlock className="w-full h-4 mb-2" />
                <SkeletonBlock className="w-3/4 h-4" />
            </div>
        </div>
    </main>
  );
};

export default HeroSkeleton;