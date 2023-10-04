import React, { useRef }  from 'react'
import { useState,useEffect } from 'react'
import {motion} from 'framer-motion'
import { useInView } from "framer-motion";

function ServicesComponent({serviceTitle,props}) {
  const [clicked,setClicked] = useState('')
  const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });

  // console.log(title,props)
  
  useEffect(() => {
    console.log(clicked)
  }, [clicked])
  
  
  return (
    <>
    
      <div
          
          className={` ${
            serviceTitle === "Our Services" ? "mt-[105px] ml-[103px] mr-[100px] phone:mx-auto " : "mx-[67px] mt-[204px] phone:mx-auto"
          }`}
               >
            {serviceTitle === "Our Services" ? (
              <h1 className=" text-[40px] font-medium leading-[50px] text-darkText font-inter ">{serviceTitle}</h1>
            ) : (
              <h1 className=" text-[100px] phone:text-[40px] font-medium leading-[120px] flex justify-end pr-[33px] phone:pr-0 phone:mx-auto text-darkText font-hanken">
                {serviceTitle}
              </h1>
            )}
            {!props.text &&props.map((service) => (
              <motion.div   
              whileInView={{opacity:1,x:0}}        
              initial={{opacity:0,x:-100}}       
              transition={{delay:`0.${24}`}}  //0.2 + 10% = 0.22 //service.id
               key={service.id} 
              className='hover:font-bold  '>
                <div  className=" border-t-2 border-grayText mt-[72px] font-hanken "></div>
                <div className="mt-[27px]  text-[16px] font-normal leading-[26px] text-grayText ">
                {"0" + service.id}
                </div>
                <div className="flex   justify-between items-center font-medium text-grayText hover:text-darkText hover:font-bold  ease-in-out  ">
                  <span  onClick={()=> setClicked('kurec')}className="leading-[74px]  phone:text-[20px]  phone:leading-[74px] opacity-50 hover:opacity-100 text-[64px]  ml-[48px] ">
                    
                    {service.Title}
                  </span>            
                    <img src="Arrow.svg" className=" flex justify-end items-end " />
                </div>
              </motion.div>
            ))}
          </div>
    
 
    
    </>
    
  );
}

export default ServicesComponent