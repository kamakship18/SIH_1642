import React from "react";
import Counter from "@/components/Counter";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { RiTwitterXFill } from "react-icons/ri";
import { IoLogoYoutube } from "react-icons/io5";

function Info() {
  return (
    <>
      <div className="mx-4 md:mx-20 p-6 md:p-10">
        <hr />
        <div>
          <p className="text-xl md:text-3xl font-semibold my-6 md:my-10">
            Portal Summary
          </p>
          <hr />
        </div>

        <div className="flex flex-col gap-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">
                Total Startups Registered
              </h3>
              <Counter />
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">
                Total Investment Opportunities
              </h3>
              <Counter />
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
            <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">
                Total Investor Registered
              </h3>
              <Counter />
            </div>
            <div className="flex flex-col items-center bg-white p-6 rounded-md shadow-lg">
              <h3 className="text-lg md:text-2xl font-bold mb-2 text-center">
                No. of Startups Responded
              </h3>
              <Counter />
            </div>
          </div>
        </div>
      </div>

      <div className="m-4 md:m-10">
        <p className="bg-bg_blue py-6 md:py-10 rounded-2xl p-6 md:p-10 text-xl md:text-2xl font-bold text-center">
          Get started on your Startup / Investor journey - the right way!
        </p>
        <div className="flex flex-col md:flex-row justify-around mt-6 gap-6">
          <div className="bg-bg_blue p-6 md:p-10 rounded-2xl text-center">
            <p className="font-semibold">For Startups</p>
            <p>
              Unlock Your Startup Potential with Ayush – Where Ideas Thrive!
            </p>
          </div>
          <div className="bg-bg_blue p-6 md:p-10 rounded-2xl text-center">
            <p className="font-semibold">For Investors</p>
            <p>
              Discover high-potential startups revolutionizing the Ayush
              industry.
            </p>
          </div>
        </div>
      </div>

      <div className="mt-10 bg-bg_blue">
        <p className="p-5 text-xl md:text-3xl font-bold text-center">
          Social Media
        </p>
        <div className="flex justify-around items-center text-2xl md:text-4xl text-text_blue p-6 md:p-10">
          <div className="bg-main_blue p-4 rounded-2xl">
            <FaFacebook />
          </div>
          <div className="bg-main_blue p-4 rounded-2xl">
            <FaInstagram />
          </div>
          <div className="bg-main_blue p-4 rounded-2xl">
            <RiTwitterXFill />
          </div>
          <div className="bg-main_blue p-4 rounded-2xl">
            <IoLogoYoutube />
          </div>
          <div className="bg-main_blue p-4 rounded-2xl">
            <FaLinkedin />
          </div>
        </div>
      </div>
    </>
  );
}

export default Info;
