import React from "react";

function Hero() {
  return (
    <div className="flex phone:-mt-[64px] sm:-mt-[70px] md:-mt-[70px] mdx:-mt-[100px]  xl:-mt-[100px] xxl:-mt-[140px]   top-0  z-0 flex-shrink-0 ">
      <img src="/Home/hero.webp" alt="heroimage" className=" w-full " />
    </div>
  );
}

export default Hero;


// bg-cover bg-center flex justify-center items-center bg-[url('/Home/hero.webp')]