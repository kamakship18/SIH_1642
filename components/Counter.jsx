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
      <div className="flex justify-center mt-20">
        <div className="bg-main_blue text-text_blue p-6 rounded-md shadow-lg flex flex-col items-center">
          <div className="text-6xl font-bold">{count}</div>
        </div>
      </div>
    </div>
  );
};

export default Main;
