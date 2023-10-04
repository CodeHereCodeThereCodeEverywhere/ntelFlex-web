import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

function WhatWeDo() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [showMore, setShowMore] = useState(false);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const isMobile = windowWidth <= 600 && windowWidth >299;

//385
  return (
    <div className="flex justify-center mt-[128px] phone:mt-[28px]">
      <div className={!showMore&&isMobile ? "max-w-[1749px] h-[385px] relative w-full" : "max-w-[1749px] h-[834px] relative w-full"}>
      <img src="/Home/wwd.webp" alt="image" className="top-0 left-0 max-h-[760px] phone:invisible " />
      {/* <p className=' top-[58px] max-w-[365px] left-[741px] text-[110px] font-medium leading-[120px]  absolute   text-darkText font-hanken'>What  <br />We Do</p> */}
      <p className='phone:top-0 phone:right-[225px] phone:text-[25px] phone:leading-normal phone:max-w-[120px] phone:max-h-[66px]
       top-[58px] max-w-[365px] right-[680px] text-darkText font-hanken text-[110px] font-medium leading-[120px]  absolute   '>What  <br />We Do</p>
      <p className=' phone:top-[-43px] phone:right-[220px] phone:text-[30px] 
       top-[55px] right-[630px] font-hanken text-beigeDash text-[110px] font-medium leading-[120px]  absolute'>/</p>
      <p className=" phone:max-w-[300px] phone:max-h-[66px] phone:text-[18px] phone:leading-normal phone:top-[90px] phone:right-[20px]
      top-[371px] right-[170px]   max-w-[509px] text-grayText text-[32px] font-inter font-medium leading-[42px] absolute ">We design, engineer, program,<br /> install, and maintain smart home <br /> automation systems</p>
      
      {isMobile ? (
        <p  onClick={() => setShowMore(!showMore)} 
        className="phone:top-[190px] phone:max-w-[300px] phone:max-h-[188px] phone:text-[15px]
        top-[522px] right-0 max-w-[645px]  max-h-[312px] text-inter text-[16px] font-normal leading-[26px]  text-grayText font-inter  text-left absolute">
       We create an all round experience for your home or business<br/>
 Home is where fun and comfort come together and should be the place where you can kick back, take a deep breath, and truly relax. 
    <br/>{!showMore ? (
      <p className="text-inter text-[16px]  leading-[26px] font-semibold  text-grayText">more...</p>
    ):(
      <motion.p 
      initial={{ opacity: 0,x:-100, }}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:100}}
      className="text-inter text-[16px]  leading-[26px] font-normal  text-grayText">
          Smart Homes Innovations can give you that and more. We can enhance your living environment by providing you with the most advanced in home automation, home theater, security systems, audio video systems, and networking systems. With our unique mix of professional installers and creative system designers, you will get a flawless and unique system for your dream home!<br/>
We Take Care of Everything<br />
We provide system design and installation , the equipment, as well as a lifetime of service. When installed, you’ll appreciate our attention to detail, aesthetics, and the intuitive way the system works for you.


      </motion.p>
    )}
        
 
 
       </p>
      ): (
        <p className="
       top-[522px] right-0 max-w-[645px]  max-h-[312px] text-inter text-[16px] font-normal leading-[26px]  text-grayText font-inter  text-left absolute">
      We create an all round experience for your home or business<br/>
Home is where fun and comfort come together and should be the place where you can kick back, take a deep breath, and truly relax. Smart Homes Innovations can give you that and more. We can enhance your living environment by providing you with the most advanced in home automation, home theater, security systems, audio video systems, and networking systems. With our unique mix of professional installers and creative system designers, you will get a flawless and unique system for your dream home!<br/>
We Take Care of Everything<br />
We provide system design and installation , the equipment, as well as a lifetime of service. When installed, you’ll appreciate our attention to detail, aesthetics, and the intuitive way the system works for you.


      </p>
      )}
               
      
      </div>
    </div>
  );
}

export default WhatWeDo
//v1
{
  /* <div className='ml-[100px] mr-[71px] flex h-[832px] mt-[128px] overflow-hidden z-20'>
<div className='max-w-[832px] h-[820px]  '>
    <img src='/Home/wwd.webp' alt='image' className=" flex h-[720px] " />
    
</div>

<div className='max-w-[917px] flex flex-col '>
        <div className=' h-1/2 w-full'>
            <div className=' flex flex-row'>
            <span className=' text-[110px] font-medium leading-[120px] mt-[58px] -ml-[29px] flex text-darkText font-hanken'>What  <br />We Do</span>
            <span className='text-[110px] font-medium leading-[120px] mt-[58px] -ml-[29px] flex text-beigeDash font-hanken'>/</span>
            </div>
     
        </div>
        <div className=' h-1/2  flex flex-col ml-[267px] text-grayText font-inter'>
               <span className="text-[32px] font-medium leading-[42px] ">We design, engineer, program,<br /> install, and maintain smart home <br /> automation systems</span>
               <span className="text-[16px] font-normal leading-[26px]  mt-[25px] text-left">We create an all round experience for your home or business
Home is where fun and comfort come together and should be the place where you can kick back, take a deep breath, and truly relax. Smart Homes Innovations can give you that and more. We can enhance your living environment by providing you with the most advanced in home automation, home theater, security systems, audio video systems, and networking systems. With our unique mix of professional installers and creative system designers, you will get a flawless and unique system for your dream home!
We Take Care of Everything
We provide system design and installation , the equipment, as well as a lifetime of service. When installed, you’ll appreciate our attention to detail, aesthetics, and the intuitive way the system works for you.</span>
               
        </div>
</div>

</div> */
}

//v2

{
  /* <div className="ml-[100px] mr-[71px] flex h-[832px] mt-[128px] overflow-hidden">
<div className="grid grid-cols-2 md:grid-rows-1 md:order-2 w-full">
  <div className="w-[832px] md:invisible ">
    <img src="/Home/wwd.webp" alt="image" className=" flex h-[720px]  " />
  </div>
  <div className="flex flex-col z-20 ">
    <div className=" w-full flex ">
      <div className=" flex flex-row -ml-[140px] ">
        <span className=" text-[110px] font-medium leading-[120px] mt-[58px] -ml-[29px] flex text-darkText font-hanken">
          What <br />
          We Do
        </span>
        <span className=" text-[110px] font-medium leading-[120px] mt-[58px] flex text-beigeDash font-hanken">
          /
        </span>
      </div>
    </div>
    <div className="w-full  flex flex-col ml-[187px]  mt-[73px] text-grayText font-inter  ">
      <span className="text-[32px] font-medium leading-[42px]     ">
        We design, engineer, program,
        <br /> install, and maintain smart home <br /> automation systems
      </span>
      <span className="text-[16px] font-normal leading-[26px]  mt-[25px]  max-w-[645px] justify-end flex text-left">
        We create an all round experience for your home or business Home
        is where fun and comfort come together and should be the place
        where you can kick back, take a deep breath, and truly relax.
        Smart Homes Innovations can give you that and more. We can enhance
        your living environment by providing you with the most advanced in
        home automation, home theater, security systems, audio video
        systems, and networking systems. With our unique mix of
        professional installers and creative system designers, you will
        get a flawless and unique system for your dream home! We Take Care
        of Everything We provide system design and installation , the
        equipment, as well as a lifetime of service. When installed,
        you’ll appreciate our attention to detail, aesthetics, and the
        intuitive way the system works for you.
      </span>
    </div>
  </div>
</div>
</div> */
}
