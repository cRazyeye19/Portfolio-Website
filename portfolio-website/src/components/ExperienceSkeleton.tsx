import React from "react";

const SkeletonBlock = ({ className }: { className: string }) => (
  <div className={`bg-gray-200 rounded-md animate-pulse ${className}`}></div>
);

const ExperienceSkeleton: React.FC = () => {
  return (
    <section className="max-w-4xl mx-auto text-center my-12 animate-pulse">
      <SkeletonBlock className="h-8 w-1/2 mx-auto mb-4" />

      <div className="relative wrap overflow-hidden lg:px-10 h-full">
        <div className="border absolute border-opacity-20 border-gray-300 h-full left-[10.2%] hidden md:block"></div>

        {[...Array(2)].map((_, index) => (
          <div
            key={index}
            className="my-4 flex justify-center items-center w-full"
          >
            <div className="z-10 bg-gray-300 shadow-xl w-8 h-8 rounded-full hidden md:flex md:items-center"></div>

            <div className="bg-gray-100 grow md:grow-0 rounded-lg w-10/12 px-6 py-4 md:ml-8">
              <SkeletonBlock className="h-5 w-3/4 mb-3" />
              <SkeletonBlock className="h-4 w-1/2 mb-2" />
              <SkeletonBlock className="h-3 w-1/3 mb-1" />
              <SkeletonBlock className="h-3 w-full mb-1" />
              <SkeletonBlock className="h-3 w-5/6" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSkeleton;
