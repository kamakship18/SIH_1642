import React from "react";
import GridItem from "./Grid";

const Main = () => {
  return (
    <div>
      <div className="p-4 mt-10 mb-10 pr-20 pl-20">
        <div className="flex flex-row space-x-4">
          <div className="w-1/3 bg-blue-800 p-4 rounded-md text-white">
            <h2 className="text-lg font-bold text-center mb-6">News</h2>
            <li className="text-gray-300 mb-4">News</li>
            <li className="text-gray-300 mb-4">News</li>
            <li className="text-gray-300 mb-4">News</li>
            <li className="text-gray-300 mb-4">News</li>
          </div>

          <div className="w-2/3 grid grid-cols-3 gap-4">
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">Health</p>
              <p className="text-gray-700 text-sm text-justify">
                Ministry of Ayush provides healthcare facility across the
                country by using six conventional treatment procedures.
              </p>
            </div>
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">
                Education
              </p>
              <p className="text-gray-700 text-sm text-justify">
                The Ministry of Ayush regulates the educational standards of the
                Indian Systems of Medicine and Homoeopathy colleges in the
                country.
              </p>
            </div>
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">
                Research & Development
              </p>
              <p className="text-gray-700 text-sm text-justify">
                The Ministry of Ayush has established Research Councils to
                promote research activities in the Ayush System.
              </p>
            </div>
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">
                Medicinal Plants
              </p>
              <p className="text-gray-700 text-sm text-justify">
                The Ministry of Ayush has established the National Medicinal
                Plants Board, an apex national body that coordinates all matters
                relating to medicinal plants in the country.
              </p>
            </div>
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">
                Quality & Standard
              </p>
              <p className="text-gray-700 text-sm text-justify">
                The Ministry of Ayush draws policies and regulations to evolve
                Pharmacopoeial standards of Indian Systems of Medicine and
                Homoeopathy drugs.
              </p>
            </div>
            <div className="border border-gray-300 shadow-lg p-6 rounded-md">
              <p className="font-bold text-center mb-6 p-4 text-lg">
                Partnership & Collaboration
              </p>
              <p className="text-gray-700 text-sm text-justify">
                The Ministry of Ayush has collaborated with different
                institutions for the growth of traditional medicines.
              </p>
            </div>
          </div>
        </div>

        <div className="border border-gray-300 shadow-lg p-6 rounded-md mt-20">
          <h2 className="text-2xl font-bold mb-4">All About us...</h2>
          <p className="text-sm leading-relaxed">
            The Ministry of Ayush was formed on the 9th of November 2014 with a
            vision of reviving the profound knowledge of our ancient systems of
            medicine and ensuring the optimal development and propagation of the
            Ayush systems of healthcare. Earlier, the Department of Indian
            System of Medicine and Homoeopathy (ISM&H) formed in 1995, was
            responsible for the development of these systems. It was then
            renamed as the Department of Ayurveda, Yoga, and Naturopathy, Unani,
            Siddha and Homoeopathy (Ayush) in November 2003 with focused
            attention towards education and research in Ayurveda, Yoga and
            Naturopathy, Unani, Siddha, and Homoeopathy.
          </p>
        </div>
      </div>

      <div>
        <p className="text-3xl font-bold m-10 mt-20">News</p>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
          <GridItem
            image="/demo.jpg"
            heading="Health"
            text="Ministry of Ayush provides healthcare facility"
          />
          <GridItem
            image="/demo.jpg"
            heading="Education"
            text="The Ministry of Ayush regulates the educational standards"
          />
          <GridItem
            image="/demo.jpg"
            heading="Research & Development"
            text="The Ministry of Ayush has established Research Councils"
          />
          <GridItem
            image="/demo.jpg"
            heading="Medicinal Plants"
            text="The Ministry of Ayush has established the National Medicinal Plants Board"
          />
          <GridItem
            image="/demo.jpg"
            heading="Quality & Standard"
            text="The Ministry of Ayush draws policies"
          />
          <GridItem
            image="/demo.jpg"
            heading="Partnership & Collaboration"
            text="The Future Of Portfolio"
          />
        </div>
      </div>
    </div>
  );
};

export default Main;
