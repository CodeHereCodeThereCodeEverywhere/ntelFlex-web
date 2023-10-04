import React from "react";

function AboutHero() {
  return (
    <div className="mx-[100px] md:mx-[50px] mt-[90px] h-[1109px] flex flex-col font-hanken">
      <div className="">
        <div className="flex flex-row">
          <span className="-ml-[18px] font-medium text-[120px] leading-[130px] text-darkText flex ">
            {" "}
            Learn About Our
          </span>
          <span className="font-medium text-[120px] leading-[130px] text-beigeDash ml-[18px] mt-4  sticky">
            /
          </span>
        </div>
      </div>
      <div
        className="bg-yellow-400 h-[979px] flex -mt-4  bg-cover"
        style={{ backgroundImage: "url(/About/AboutHero.webp" }}
      >
        <span className="font-medium text-[120px] leading-[130px] text-whiteText ml-[253px] md:ml-[110px] xl:ml-[110px]  ">
          Vision and Values
        </span>
      </div>
    </div>
  );
}

export default AboutHero;
