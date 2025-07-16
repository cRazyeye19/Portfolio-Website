import React from 'react';
import type { Experience } from '../types/experience';

interface TimelineItemProps {
  item: Experience;
  index: number;
}

const TimelineItem: React.FC<TimelineItemProps> = React.memo(({ item, index }) => {
  return (
    <div className="my-4 flex justify-center items-center w-full">
      <div className="z-10 bg-gray-800 shadow-xl w-8 h-8 rounded-full hidden md:flex md:items-center">
        <h1 className="mx-auto font-semibold text-lg text-white">{index + 1}</h1>
      </div>
      <div className="bg-gray-100 rounded-lg shadow-xl w-10/12 px-6 py-4 md:ml-8">
        <h3 className="mb-3 font-bold text-gray-800 text-xl">{item.title}</h3>
        <p className="text-sm font-medium text-gray-600">{item.company}</p>
        <p className="text-sm text-gray-500">{item.startDate} - {item.endDate}</p>
        <p className="text-sm text-gray-700 mt-2">{item.description}</p>
      </div>
    </div>
  );
});

export default TimelineItem;