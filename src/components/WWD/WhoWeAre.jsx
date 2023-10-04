import React, { useEffect, useState } from "react";
import {motion} from 'framer-motion'

function WhoWeAre() {
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

  return (
    <div className="flex justify-center mt-[217px] phone:mt-[19px]">
    <div className={!showMore&&isMobile ? "max-w-[1749px] h-[410px] relative w-full" : "max-w-[1749px] h-[760px] relative w-full"}>
    <img src="/Home/wwa.webp" alt="image" className="top-0 left-0 max-h-[760px] phone:invisible " />
    {/* <p className=' top-[58px] max-w-[365px] left-[741px] text-[110px] font-medium leading-[120px]  absolute   text-darkText font-hanken'>What  <br />We Do</p> */}
    <p className='phone:top-0 phone:right-[216px] phone:text-[25px] phone:leading-normal phone:max-w-[120px] phone:max-h-[66px]
     top-[58px] max-w-[365px] right-[648px] text-darkText font-hanken text-[110px] font-medium leading-[120px]  absolute   '>Who  <br />We Are</p>
    <p className=' phone:top-[-43px] phone:right-[220px] phone:text-[30px] 
     top-[55px] right-[648px] font-hanken text-beigeDash text-[110px] font-medium leading-[120px]  absolute'>/</p>
    <p className="phone:max-w-[300px] phone:max-h-[66px] phone:text-[18px] phone:leading-normal phone:top-[90px] phone:right-[25px]
    top-[371px] right-[170px]   max-w-[509px] text-grayText text-[32px] font-medium leading-[42px] absolute ">We design, engineer, program,<br /> install, and maintain smart home <br /> automation systems</p>
    {isMobile ? 
    (
      <p  onClick={() => setShowMore(!showMore)} 
      className="phone:top-[190px] phone:max-w-[300px] phone:max-h-[188px] phone:text-[15px]
      bottom-[30px] right-0 max-w-[645px]  max-h-[208px] text-inter text-[16px] font-normal leading-[26px]  text-grayText  text-left absolute">
     We are a full-service audio-visual design and home automation company based in Cape May County, South Jersey Areas. We are fully licensed and insured so you’re not gambling on your investment and offer a wide variety of lifestyle solutions for your home including:
     <br /><br />
     {!showMore ? (
      <p className="font-semibold text-inter text-[16px]  leading-[26px]  text-grayText">Learn more...</p>
     ) : (
      <motion.p
      initial={{ opacity: 0,x:-100, }}
      animate={{opacity:1,x:0}}
      exit={{opacity:0,x:100}}
      className="text-inter text-[16px]  leading-[26px] font-normal  text-grayText"
      >
        We are also fanatical about customer satisfaction and are in it to build a long-term relationship. In short, you can count on our AV company when you need us. In the end, we want you to be thrilled you chose to work with us!
      </motion.p>
     )}
      
     </p>

    ):(  <p className="phone:top-[190px] phone:max-w-[300px] phone:max-h-[188px] phone:text-[15px]
     bottom-[30px] right-0 max-w-[645px]  max-h-[208px] text-inter text-[16px] font-normal leading-[26px]  text-grayText  text-left absolute">
    We are a full-service audio-visual design and home automation company based in Cape May County, South Jersey Areas. We are fully licensed and insured so you’re not gambling on your investment and offer a wide variety of lifestyle solutions for your home including:
    <br /><br />
    We are also fanatical about customer satisfaction and are in it to build a long-term relationship. In short, you can count on our AV company when you need us. In the end, we want you to be thrilled you chose to work with us!
    </p>)}
   
             
    
    </div>
  </div>

  )
}

export default WhoWeAre

{/* <p className="
bottom-[30px] right-0 max-w-[645px]  max-h-[208px] text-inter text-[16px] font-normal leading-[26px]  text-grayText  text-left absolute">
We are a full-service audio-visual design and home automation company based in Cape May County, South Jersey Areas. We are fully licensed and insured so you’re not gambling on your investment and offer a wide variety of lifestyle solutions for your home including:
<br /><br />
We are also fanatical about customer satisfaction and are in it to build a long-term relationship. In short, you can count on our AV company when you need us. In the end, we want you to be thrilled you chose to work with us!
</p> */}

//oldv
{/* <div className='ml-[100px] mr-[71px] flex h-[760px] mt-[227px] '>
<div className='max-w-[832px] max-h-[760px] '>
    <img src='/Home/wwa.webp' alt='image' />
</div>
<div className='max-w-[917px] flex flex-col '>
        <div className=' h-1/2 w-full'>
            <div className=' flex flex-row'>
            <span className=' text-[110px] font-medium leading-[120px] mt-[58px] -ml-[29px] flex text-darkText font-hanken'>Who  <br />We Are</span>
            <span className='text-[110px] font-medium leading-[120px] mt-[58px] -ml-[29px] flex text-beigeDash font-hanken'>/</span>
            </div>
     
        </div>
        <div className=' h-1/2  flex flex-col ml-[267px] text-grayText font-inter'>
               <span className="text-[32px] font-medium leading-[42px] ">We design, engineer, program,<br /> install, and maintain smart home <br /> automation systems</span>
               <span className="text-[16px] font-normal leading-[26px]  mt-[25px] text-left">We are a full-service audio-visual design and home automation company based in Cape May County, South Jersey Areas. We are fully licensed and insured so you’re not gambling on your investment and offer a wide variety of lifestyle solutions for your home including:</span>
               <span className="text-[16px] font-normal leading-[26px]  mt-[25px] text-left">We are also fanatical about customer satisfaction and are in it to build a long-term relationship. In short, you can count on our AV company when you need us. In the end, we want you to be thrilled you chose to work with us!</span>
        </div>
</div>

</div> */}