"use client"
import Image from "next/image";
import LoadingSpinner from "../../Components/IndicatorWithStatus";

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

        <LoadingSpinner isVisible={true} status="scraping data" />


        <ol className="flex items-center w-full">
    <li className="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block dark:after:border-blue-800">
        <span className="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
            <svg className="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
            </svg>
        </span>
    </li>
    <li className="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
            </svg>
        </span>
    </li>
    <li className="flex items-center w-full">
        <span className="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
            <svg className="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
            </svg>
        </span>
    </li>
</ol>


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