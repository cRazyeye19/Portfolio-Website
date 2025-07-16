import React from 'react';
import { experienceData } from '../data/experienceData';
import TimelineItem from './TimelineItem'; // Import the new component

const Timeline: React.FC = () => {
  if (!experienceData || experienceData.length === 0) {
    return <div className="text-center p-10 text-gray-500">No experience data available.</div>;
  }

  return (
    <div className="relative wrap overflow-hidden px-10 h-full">
      <div className="border absolute border-opacity-20 border-gray-700 h-full left-[10.2%] hidden md:block"></div>
      {experienceData.map((item, index) => (
        <TimelineItem key={item.id} item={item} index={index} />
      ))}
    </div>
  );
};

export default Timeline;