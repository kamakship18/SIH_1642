import React from "react";

const InfoSection = () => {
  return (
    <div className="p-4 mt-10 mb-10 pr-20 pl-20">
      <h2 className="text-2xl font-bold mb-6 text-center">Startup Insights</h2>
      <div className="flex justify-center space-x-4">
        <div className="w-1/3 bg-blue-500 text-white p-6 rounded-md shadow-lg flex flex-col">
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                States Startup Ranking
              </h3>
              <p className="text-sm text-center mb-4">
                The States’ Startup Ranking is an annual capacity building
                exercise which has been developed with the objective to build a
                conducive startup ecosystem across the country, through
                sustained efforts of States and Union Territories.
              </p>
            </div>
            <a
              href="#"
              className="bg-white text-blue-500 py-2 px-4 rounded-md font-semibold text-center hover:bg-gray-100"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="w-1/3 bg-green-500 text-white p-6 rounded-md shadow-lg flex flex-col">
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Schemes & Policies
              </h3>
              <p className="text-sm text-center mb-4">
                An insight into the schemes and policies landscape of the Indian
                Startup Ecosystem, including steps taken by Startup India to
                ease the regulatory burden.
              </p>
            </div>
            <a
              href="#"
              className="bg-white text-green-500 py-2 px-4 rounded-md font-semibold text-center hover:bg-gray-100"
            >
              Know More
            </a>
          </div>
        </div>
        <div className="w-1/3 bg-red-500 text-white p-6 rounded-md shadow-lg flex flex-col">
          <div className="flex-grow flex flex-col justify-between">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-center">
                Additional Info
              </h3>
              <p className="text-sm text-center mb-4">
                Additional information and resources related to startup
                initiatives and their impact.
              </p>
            </div>
            <a
              href="#"
              className="bg-white text-red-500 py-2 px-4 rounded-md font-semibold text-center hover:bg-gray-100"
            >
              Know More
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
