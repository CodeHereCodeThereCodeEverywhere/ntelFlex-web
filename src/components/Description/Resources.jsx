import React from "react";
import {motion} from 'framer-motion'
// import { resourceText } from "./descriptionData.astro";
function Resources({ props }) {
  return (
    <article className=' justify-center flex-col flex items-center mt-[19px] w-full  '>
    {props.map((data,index) => (
       <motion.section
       whileInView={{opacity:1,x:0}}        
       initial={{opacity:0,x:-200}}       
       transition={{delay:0.2}}
        key={index} className='max-w-[850px] mt-[45px]' >
       <h1 className=' text-grayText leading-[26px] font-semibold text-[16px]'>{data.Heading}</h1>
       <p className='text-grayText  leading-[26px] font-normal text-[16px] pl-[22px]'>{data.text}</p>
       </motion.section>
    ))}
         
    
  </article>
  );
}

export default Resources;
//old.v
{/* <div className=" mx-[530px] xl:mx-[420px] md:mx-[130px] sm:mx-auto  font-inter">
      <div className="grid grid-cols-1 mt-[64px]">
        {props.map((data, index) => (
          <div className="mt-[45px]">
            <h1 className="ml-[10px] text-grayText leading-[26px] font-semibold text-[16px]">
              {data.Heading}
            </h1>
            <div className="pl-[32px] mt-[11px]">
              <span className="mt-[11px] ">{data.text}</span>
            </div>
          </div>
        ))}
      </div>
    </div> */}