"use client";
import React, { useState, useEffect } from "react";
import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "/ayu.png" },
  { url: "/govt.png" },
  { url: "/logo.jpg" },
  { url: "/MOCAI.png" },
  { url: "/modi.png" },
];

const Slide = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw", overflow: "hidden" }}>
      <SimpleImageSlider
        width={window.innerWidth}
        height={504}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay
        autoPlayInterval={3000} // Interval for auto-play
        currentIndex={currentIndex}
        onSlideChange={(index) => setCurrentIndex(index)}
      />
    </div>
  );
};

export default Slide;
