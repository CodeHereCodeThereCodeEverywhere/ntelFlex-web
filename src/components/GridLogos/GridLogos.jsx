import React from "react";
//2xl:1536px
//xl:1280
//md:768
//sm:640
function GridLogos({ props }) {
  return (
    <div className=" mt-[65px] h-[152px] w-full ">
      <div className="grid grid-cols-5 gap-x-[20px] zxl:ml-[275px]  zxl:mr-[291px]  phone:mx-auto xxl:mx-[200px] xl:mx-[150px] md:mx-[50px]  ">
        {props.map((logo, index) => (
          <img key={index} src={logo.image} alt={logo.alt} />
        ))}
      </div>
    </div>
  );
}

export default GridLogos;
