"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Carousel = () => {
  const settings = {
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    dots: true,
    arrows: true,
    prevArrow: <button className="slick-prev">Prev</button>,
    nextArrow: <button className="slick-next">Next</button>,
  };

  return (
    <div className="relative w-full">
      <Slider {...settings}>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <Image
            src="/demo.jpg"
            alt="Slide 1"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <Image
            src="/demo.jpg"
            alt="Slide 2"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
        <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
          <Image
            src="/demo.jpg"
            alt="Slide 3"
            layout="fill"
            objectFit="cover"
            className="rounded-lg"
          />
        </div>
      </Slider>
      <style jsx>{`
        .slick-prev,
        .slick-next {
          background: rgba(0, 0, 0, 0.5);
          border: none;
          color: white;
          width: 40px;
          height: 40px;
          border-radius: 50%;
        }
        .slick-prev {
          left: 10px;
        }
        .slick-next {
          right: 10px;
        }
        .slick-prev:before,
        .slick-next:before {
          font-size: 20px;
          color: white;
        }
      `}</style>
    </div>
  );
};

export default Carousel;
