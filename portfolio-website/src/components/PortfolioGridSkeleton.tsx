import React from 'react';

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const PortfolioItemSkeleton = () => (
    <div className="bg-gray-100 p-6 rounded-2xl h-full">
        <SkeletonBlock className="w-1/4 h-5 mb-4" />
        <div className="flex items-start space-x-4">
            <SkeletonBlock className="w-12 h-12 rounded-lg flex-shrink-0" />
            <div className="w-full space-y-2">
                <SkeletonBlock className="w-3/4 h-5" />
                <SkeletonBlock className="w-full h-4" />
            </div>
        </div>
        <div className="flex justify-between items-center mt-6">
            <SkeletonBlock className="w-1/3 h-5" />
            <SkeletonBlock className="w-6 h-6 rounded-full" />
        </div>
    </div>
);

const PortfolioGridSkeleton: React.FC = () => {
  return (
    <section className="py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <PortfolioItemSkeleton />
            <PortfolioItemSkeleton />
            <PortfolioItemSkeleton />
            <PortfolioItemSkeleton />
            <PortfolioItemSkeleton />
            <PortfolioItemSkeleton />
        </div>
    </section>
  );
};

export default PortfolioGridSkeleton;