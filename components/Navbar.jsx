import React from "react";
import Image from "next/image";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AccessibilityIcon from "@mui/icons-material/Accessibility";

const Navbar = () => {
  return (
    <div>
      <div className="mx-auto w-full max-w-screen p-4 py-6 px-20 bg-gray-900">
        <div className="flex gap-10 items-center justify-between">
          <div className="flex gap-10 items-center">
            <Image
              src="/govt.png"
              alt="Logo"
              width={200}
              height={200}
              className="hidden lg:block"
            />
            <Image
              src="/MOCAI.png"
              alt="Logo"
              width={200}
              height={200}
              className="hidden lg:block"
            />
            <div className="flex mt-4 gap-4 sm:mt-0">
              <a
                href="https://www.facebook.com/moayush"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FacebookIcon className="text-customBlue" />
              </a>
              <a
                href="https://x.com/moayush"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon className="text-customBlue" />
              </a>
              <a
                href="https://www.youtube.com/@MinistryofAYUSHofficial/videos"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon className="text-customBlue" />
              </a>
              <a
                href="https://www.instagram.com/ministryofayush/"
                className="text-gray-400 hover:text-gray-100"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon className="text-customBlue" />
              </a>
            </div>
          </div>
          <div>
            <p className="text-white text-sm">
              <strong>Our Toll Free Number :</strong> 1800 115 565 (10:00 AM to
              05:30 PM)
            </p>
          </div>
        </div>
      </div>

      <div className="flex justify-between items-center p-4 bg-slate-600 px-20">
        <div>
          <Image src="/logo.jpg" width={200} height={200} alt="logo" />
        </div>
        <div className="flex gap-4 items-center">
          <form className="max-w-md flex flex-grow items-center gap-10 text-white">
            <div className="relative w-full">
              <input
                type="search"
                className="block w-full p-4 ps-10 text-sm text-white rounded-lg bg-slate-700 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search"
              />
              <button
                type="submit"
                className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-customBlue focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2"
              >
                Search
              </button>
            </div>
          </form>
          <div>
            <AccessibilityIcon className="text-3xl text-white" />
          </div>
          <a href="#" className="text-sm text-white">
            Login
          </a>
          <a href="#" className="text-sm text-white">
            Register
          </a>
        </div>
      </div>

      <nav className="w-full  bg-slate-600 text-white border-t-2 border-slate-700">
        <div className=" mx-20 py-2 flex justify-between items-center">
          <div className="relative group">
            <button className="px-4 py-2 hover:bg-slate-700 rounded">
              Link 1
            </button>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 hover:bg-slate-700 rounded">
              Link 2
            </button>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 hover:bg-slate-700 rounded">
              Link 3
            </button>
          </div>
          <div className="relative group">
            <button className="px-4 py-2 hover:bg-slate-700 rounded">
              Link 4
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
