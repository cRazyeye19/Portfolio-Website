import React from 'react';

const SkeletonLoader: React.FC = () => {
  return (
    <div className="bg-gray-200 rounded-md p-2 mb-2 animate-pulse">
      <div className="h-4 bg-gray-300 rounded-md mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 rounded-md mb-2 w-3/5"></div>
      <div className="h-4 bg-gray-300 rounded-md w-4/5"></div>
    </div>
  );
};

export default SkeletonLoader;