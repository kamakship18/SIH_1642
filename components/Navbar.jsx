import React from "react";
import Image from "next/image";
import Slide from "./Slide";
import { FaUserAlt } from "react-icons/fa";
import { IoCreateOutline, IoReaderOutline } from "react-icons/io5";
import {
  MdOutlineTextIncrease,
  MdOutlineTextDecrease,
  MdOutlineFormatColorText,
} from "react-icons/md";
import { CgDarkMode } from "react-icons/cg";
import { LiaLanguageSolid } from "react-icons/lia";

function Navbar() {
  return (
    <>
      <div className="bg-main_blue px-4 py-2 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-2 md:mb-0">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Logo_Ministry_of_AYUSH.png/798px-Logo_Ministry_of_AYUSH.png?20220214193920"
            alt="ayush logo"
            width={250}
            height={250}
            className="h-auto"
          />
        </div>

        <div className="flex gap-3 md:gap-5 text-text_blue text-xs md:text-sm font-semibold items-center">
          <p className="hidden md:block">Skip to Main Content</p>
          <p className="flex items-center">
            <IoReaderOutline className="mr-1" />
            Screen Reader
          </p>
          <p className="text-md">
            <MdOutlineTextIncrease />
          </p>
          <p className="text-md">
            <MdOutlineFormatColorText />
          </p>
          <p className="text-md">
            <MdOutlineTextDecrease />
          </p>
          <p className="text-md">
            <CgDarkMode />
          </p>
          <p className="text-md">
            <LiaLanguageSolid />
          </p>
        </div>
      </div>

      <div className="text-text_blue font-semibold text-xs md:text-sm bg-white flex flex-col md:flex-row justify-between px-5 py-4 md:py-8">
        <div className="flex justify-center gap-5 md:gap-10 items-center">
          <p>Home</p>
          <p>About</p>
          <p>For Startups</p>
          <p>For Investors</p>
          <p>FAQs</p>
        </div>
        <div className="flex justify-center gap-3 md:gap-5 items-center mt-4 md:mt-0">
          <p className="flex items-center gap-2">
            <FaUserAlt />
            Login
          </p>
          <p className="flex items-center gap-1">
            <IoCreateOutline className="text-xl" />
            Register
          </p>
        </div>
      </div>

      <div className="text-text_blue text-center bg-blue-100">
        <div className="px-4 md:px-40 py-10">
          <Slide />
        </div>
        <div className="px-4 md:px-0">
          <p className="font-bold text-xl md:text-2xl mb-2">
            Empowering Startups, Inspiring Investors - Ayush for Startups!
          </p>
          <p className="font-semibold leading-relaxed pb-10">
            Join a dynamic platform where bold ideas meet strategic
            <br className="hidden md:block" /> investment, building the future
            together.
          </p>
        </div>
      </div>
    </>
  );
}

export default Navbar;
