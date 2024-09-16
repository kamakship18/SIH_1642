"use client";
import Image from "next/image";
import React from "react";

const GridItem = ({ image, heading, text }) => {
  return (
    <div className="p-6 rounded-md">
      <div className="relative w-full h-64 mb-4 rounded-md">
        <Image
          src={image}
          alt={heading}
          layout="fill"
          objectFit="cover"
          className="rounded-md"
        />
      </div>
      <h3 className="text-lg font-bold mb-2">{heading}</h3>
      <a href="#" className="text-gray-700 hover:underline text-xl">
        {text}
      </a>
    </div>
  );
};

export default GridItem;
