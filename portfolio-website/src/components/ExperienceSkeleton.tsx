const ExperienceSkeleton = () => {
  return (
    <section className="max-w-6xl mx-auto bg-white p-4 sm:p-6 rounded-3xl shadow-sm my-12 text-center animate-pulse">
      <div className="h-8 bg-gray-300 rounded w-1/2 mx-auto mb-4"></div>
      <div className="relative wrap overflow-hidden p-10 h-full">
        <div className="border-2-2 absolute border-opacity-20 border-gray-300 h-full border-l" style={{ left: "50%" }}></div>
        {[...Array(3)].map((_, index) => (
          <div key={index} className="mb-8 flex justify-center items-center w-full">
            <div className="order-1 w-5/12"></div>
            <div className="z-20 flex items-center order-1 bg-gray-400 shadow-xl w-8 h-8 rounded-full"></div>
            <div className="order-1 bg-gray-200 rounded-lg shadow-xl w-5/12 px-6 py-4">
              <div className="h-4 bg-gray-300 rounded w-3/4 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-1/2 mb-1"></div>
              <div className="h-3 bg-gray-300 rounded w-1/3 mb-2"></div>
              <div className="h-3 bg-gray-300 rounded w-full"></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ExperienceSkeleton;