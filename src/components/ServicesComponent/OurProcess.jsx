import React from "react";
import { ourProcessData } from "../../data/data";

function OurProcess() {
  return (
    <div className="mx-[100px] ">
      <h1 className="text-[100px] font-medium leading-[120px] flex justify-start pr-[33px] text-darkText mt-[308px] font-hanken">
        Our Process
      </h1>

      <div className="grid grid-cols-3">
        {ourProcessData.map((item) => {
          if (item.id <= 3) {
            return (
              <div className="h-full " key={item.id}>
                <div className="pl-[50px] pt-[55px]  mt-[50px] flex flex-col border-t-2 border-l-2">
                  <span className="leading-[45px] text-beigeDash text-[64px] font-medium font-hanken">
                    {"0" + item.id}
                  </span>
                </div>
                <div className="pl-[50px] mt-[30px] flex flex-col">
                  <span className="mt-[16px] text-darkText leading-[42px] font-medium text-[32px] font-inter">
                    {item.title}
                  </span>
                  <span className="text-grayText mt-[11px] leading-[26px] text-[16px] font-normal font-inter">
                    {item.text}
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className="grid grid-cols-3">
      <div className="col-span-0"></div> {/* Empty Column */} 
      {ourProcessData.map((item) => {
          if (item.id >= 4) {
            return (
              <div className="h-full mt-[72px]" key={item.id}>
                <div className="pl-[50px] pt-[55px]  mt-[50px] flex flex-col border-t-2 border-l-2">
                  <span className="leading-[45px] text-beigeDash text-[64px] font-medium font-hanken">
                    {"0" + item.id}
                  </span>
                </div>
                <div className="pl-[50px] mt-[30px] flex flex-col">
                  <span className="mt-[16px] text-darkText leading-[42px] font-medium text-[32px] font-inter">
                    {item.title}
                  </span>
                  <span className="text-grayText mt-[11px] leading-[26px] text-[16px] font-normal font-inter">
                    {item.text}
                  </span>
                </div>
              </div>
            );
          }
          return null;
        })}
    </div>

    </div>
  );
}

export default OurProcess;