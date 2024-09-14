"use client";
import React, { useEffect, useState } from "react";

const Main = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let timer;
    if (count < 100) {
      timer = setInterval(() => setCount((prev) => prev + 1), 50); // Increment every 50ms
    }
    return () => clearInterval(timer);
  }, [count]);

  return (
    <div className="p-4 mt-10 mb-10 pr-20 pl-20">
      {}

      <div className="flex justify-center space-x-4 mt-20">
        <div className="w-1/4 bg-white text-black p-6 rounded-md shadow-lg flex flex-col items-center">
          <div className="text-4xl font-bold">{count}</div>
          <h3 className="mt-4 text-lg font-semibold">Count</h3>
        </div>
        <div className="w-1/2 bg-white text-black p-6 rounded-md shadow-lg flex flex-col items-center">
          <div className="text-6xl font-bold">{count}</div>
          <h3 className="mt-4 text-xl font-semibold">Count</h3>
        </div>
        <div className="w-1/4 bg-white text-black p-6 rounded-md shadow-lg flex flex-col items-center">
          <div className="text-4xl font-bold">{count}</div>
          <h3 className="mt-4 text-lg font-semibold">Count</h3>
        </div>
      </div>
    </div>
  );
};

export default Main;
