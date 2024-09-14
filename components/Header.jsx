import React from "react";
import Image from "next/image";

const Header = () => {
  return (
    <div className="grid grid-cols-4 gap-4 items-center bg-slate-300 pt-10 pb-10">
      <div className="col-span-1">
        <Image
          src="/ayu.png"
          width={100}
          height={100}
          alt="ayu logo"
          layout="responsive"
        />
      </div>

      <div className="col-span-2">
        <p className="text-center text-2xl text-green-900 ">
          India is a treasure trove of herbal plants, it is, in a way our{" "}
          <span className="font-bold">Green Gold.</span>
        </p>
      </div>

      <div className="col-span-1">
        <Image
          src="/modi.png"
          width={100}
          height={100}
          alt="modi img"
          layout="responsive"
        />
      </div>
    </div>
  );
};

export default Header;
