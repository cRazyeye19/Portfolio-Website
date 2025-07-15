import React from 'react';
import { experienceData } from '../data/experienceData';

const Timeline: React.FC = () => {
  return (
    <div className="relative wrap overflow-hidden p-10 h-full">
      <div className="border-2-2 absolute border-opacity-20 border-gray-700 h-full border-l" style={{ left: "50%" }}></div>
      {experienceData.map((item, index) => (
        <div key={index} className="mb-8 flex justify-center items-center w-full">
          <div className="order-1 w-5/12"></div> {/* This div acts as a spacer for the left side */}
          <div className="z-20 flex items-center order-1 bg-gray-800 shadow-xl w-8 h-8 rounded-full">
            <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
          </div>
          <div className="order-1 bg-gray-100 rounded-lg shadow-xl w-5/12 px-6 py-4">
            <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
            <p className="text-sm font-medium text-gray-600">{item.company}</p>
            <p className="text-sm text-gray-500">{item.startDate} - {item.endDate}</p>
            <p className="text-sm text-gray-700 mt-2">{item.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;