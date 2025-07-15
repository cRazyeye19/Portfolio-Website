import React from 'react';

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const HeaderSkeleton: React.FC = () => {
  return (
    <header className="py-8 flex justify-center items-center">
        <SkeletonBlock className="w-32 h-10 rounded-full" />
    </header>
  );
};

export default HeaderSkeleton;