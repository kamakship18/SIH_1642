import React from "react";
import { FaDotCircle } from "react-icons/fa";

function Main() {
  return (
    <>
      <div className="m-4 md:m-10 px-4 md:px-20 py-6 md:py-10">
        <div className="flex items-center bg-main_blue px-6 py-4 md:px-10 md:py-5 border border-blue-900 rounded-3xl gap-4">
          <FaDotCircle className="text-lg md:text-2xl" />
          <p className="text-lg md:text-2xl font-semibold">Update & Insights</p>
        </div>

        <div className="border border-black rounded-2xl mt-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-20 m-4 md:m-5 p-4 md:p-5 rounded-2xl bg-blue-100">
            <div>
              <p className="font-semibold text-xl md:text-3xl">Lorem ipsum</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-sm md:text-base">DD-MM-YY</p>
              <p className="cursor-pointer text-blue-500 hover:underline">
                Know more
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 md:gap-20 m-4 md:m-5 p-4 md:p-5 rounded-xl bg-blue-100">
            <div>
              <p className="font-semibold text-xl md:text-3xl">Lorem ipsum</p>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="flex flex-col text-right">
              <p className="text-sm md:text-base">DD-MM-YY</p>
              <p className="cursor-pointer text-blue-500 hover:underline">
                Know more
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Main;
