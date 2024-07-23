import React from "react";

interface ResearchListProps {
    researchItems?: any; // Optional status message
}

const ResearchList = ({researchItems} : ResearchListProps) => {
  return (
    <div className="mt-8 w-full max-w-2xl">
      {researchItems.map((item: any, index: any) => (
        <div key={index} className="bg-white shadow-md rounded-lg p-4 mb-4">
          <h3 className="text-xl font-semibold">{item.topic}</h3>
          <p className="text-gray-600">{item.summary}</p>
          <p className="text-gray-500">Authors: {item.authors}</p>
          <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 hover:underline"
          >
            View Research
          </a>
          <p className="mt-2 text-gray-700">Search Score: {item.score}</p>
        </div>
      ))}
    </div>
  );
};

export default ResearchList;
