import React from "react";

function Heading({ props }) {
  return (
    <h1 className=" mt-[137px] text-[120px] leading-[130px] phone:leading-normal  font-medium  flex items-center justify-center text-darkText font-hanken phone:text-[60px]">
      
      {props}{" "}
    </h1>
  );
}

export default Heading;
