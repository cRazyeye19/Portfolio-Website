import type { CardProps } from "../types/card";
const Card = ({
  tag,
  title,
  description,
  icon,
  bgColor,
  tagColor,
  previewLink,
}: CardProps) => {
  return (
    <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col justify-between h-full">
      <div>
        <div
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-4 ${bgColor} ${tagColor}`}
        >
          {tag}
        </div>
        <div className="flex items-start space-x-4">
          <div className="text-3xl">{icon}</div>
          <div>
            <h3 className="font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500 mt-1">{description}</p>
          </div>
        </div>
      </div>
      <div className="flex justify-end items-center mt-6">
        <a
          href={previewLink}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm mx-1 font-semibold text-gray-600 hover:text-gray-900"
        >
          Preview
        </a>
        <a href={previewLink} target="_blank" rel="noopener noreferrer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="text-gray-400 hover:text-gray-800"
            width="22"
            height="22"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Card;
