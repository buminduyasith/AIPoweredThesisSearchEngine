"use client"
import Image from "next/image";
import LoadingSpinner from "../../Components/IndicatorWithStatus";
import Stepper from "../../Components/Stepper";

const researchItems = [
  {
    topic: "Artificial Intelligence in Healthcare",
    summary: "This research explores the applications of AI in diagnosing diseases and improving patient outcomes.",
    authors: "Jane Doe, John Smith",
    link: "https://example.com/research1",
    score: 92,
  },
  {
    topic: "Blockchain Technology in Supply Chain",
    summary: "An analysis of how blockchain can enhance transparency and efficiency in supply chains.",
    authors: "Alice Johnson, Bob Brown",
    link: "https://example.com/research2",
    score: 88,
  },
  {
    topic: "Renewable Energy Solutions",
    summary: "A comprehensive study on the impact of renewable energy sources on reducing carbon emissions.",
    authors: "Emily Davis, Michael Wilson",
    link: "https://example.com/research3",
    score: 95,
  },
];
export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="min-h-screen flex flex-col items-center my-10">
        <h2 className="text-2xl font-bold mb-4">AI-powered thesis search engine</h2>
        <div className="my-4 w-full max-w-md"> {/* Set max width for the container */}
          <input
            type="text"
            className="w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            placeholder="Enter your topic here"
          />
          <button className="px-4 w-full py-4 my-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
            Search
          </button>
        </div>

        <LoadingSpinner isVisible={false} status="scraping data" />


        <Stepper isVisible={false} />

        <div className="mt-8 w-full max-w-2xl">
          {researchItems.map((item, index) => (
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

      </div>
    </main>
  );
}