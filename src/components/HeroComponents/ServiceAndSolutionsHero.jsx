import React from "react";

function ServiceHero({ props }) {
  return (
    <div className='flex justify-center mt-[89px]' >
    <div className="relative w-full max-w-[1750px] h-[1063px] font-hanken text-darkText">
      <img
        src={props.bigImage}
        alt="SolutionsBigImage"
        className="absolute left-0 top-0 max-w-[574px]"
      />
      <img
        src={props.smallImage}
        alt="SolutionsSmallImage"
        className="absolute left-[596px] bottom-0 max-w-[333px] "
      />
      <p className="absolute right-[151px] top-[143px] font-medium text-[120px] leading-[130px]  ">
      {props.firstText}
      </p>
      <p className="absolute right-[309px] top-[273px] font-medium text-[120px] leading-[130px]  ">
      {props.secondText}
      </p>
      <p className="absolute right-[730px] top-[403px] font-medium text-[120px] leading-[130px] text-beigeDash ">
      /
      </p>
      <p className="absolute right-0 top-[403px] font-medium text-[120px] leading-[130px]  ">
      {props.thirdText}
      </p>
    </div>
    </div>
  );
}

export default ServiceHero;

//oldv
{/* <div className="ml-[100px] mr-[70px] flex flex-row mt-[89px] h-[1063px] text-darkText  ">
<div className="w-1/2   flex flex-row  sm:hidden md:flex ">
  <div className="w-[574px] bg-slate-400 mb-[116px] flex  flex-shrink-0">
    <img src={props.bigImage} alt="SolutionsBigImage" />
  </div>
  <div className=" mt-[646px] ml-[21px] w-[333px] flex flex-shrink-0 ">
    <img src={props.smallImage} alt="SolutionsSmallImage" />
  </div>
</div>
<div className="w-1/2  flex flex-col  ">
  <span className=" font-medium text-[120px] leading-[130px]  mt-[143px] pl-[118px] mr-[70px] 2xl:pl-[78px] xl:pl-[48px] md:pl-[28px] font-hanken ">
    {props.firstText}
  </span>
  <span className=" font-medium text-[120px] leading-[130px]  -ml-[89px] whitespace-nowrap font-hanken ">
    {props.secondText}
  </span>
  <div className="flex flex-row w-full   ">
    <span className=" font-medium text-[140px] leading-[130px] text-beigeDash font-hanken pt-2">
      /
    </span>
    <span className=" font-medium text-[120px] leading-[130px]  ml-[26px] font-hanken ">
      {props.thirdText}
    </span>
  </div>
</div>
</div> */}