import React from "react";
import { TypeAnimation } from "react-type-animation";

const Page = () => {
  return (
    <div>
      <div>
        <h1 className="text-[#D03737] mb-4  text-3xl lg:text-5xl font-extrabold justify-center items-center flex">
          <span className="">Happy </span>
          {". "}
          <TypeAnimation
            sequence={[
              " family in Mongolia",
              1000,
              " family in Mongolia",
              1000,
            ]}
            wrapper="span"
            speed={10}
            repeat={Infinity}
          />
        </h1>
      </div>
      <div className="justify-center items-center flex mt-10">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2770/2770519.png"
          className="h-52 w-52  "
        />
      </div>
      <div className="justify-center items-center flex">
        <h1 className="text-2xl font-medium mt-5">
          Гэр бүлийн аз жаргалын төлөө
        </h1>
      </div>
      <div className="border mt-10 border-[#D03737]"></div>
    </div>
  );
};

export default Page;
