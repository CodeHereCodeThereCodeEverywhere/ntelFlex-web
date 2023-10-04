import React, { useState } from "react";
import {motion} from 'framer-motion'

function Faq({ title, props }) {

//! Трябва да се погледне дали ще има картинка или не при разпъването 
//! И реално дали да го разделям на 2 ,защото единият title идва прекалено голям и трябва да се смали или шрифт или текст или картинка-размери

  const [activeId, setActiveId] = useState(0);
  const [imageRotation, setImageRotation] = useState(0)
  const handleClick = (itemId) => {
    setActiveId(activeId === itemId ? "0" : itemId)
    setImageRotation(imageRotation === 0 ? 180 : 0)
  }

  return (
    <>
      {title == "FAQ" && (
        <div className="mt-[82px] flex flex-row mx-[100px]">
          <div className="leading-[120px] text-[110px] font-medium  font-hanken">
            {title}
          </div>
          <div className="flex flex-col ml-[381px] w-full">
            {props.map((item) => (
              <motion.div
              whileInView={{opacity:1,y:0}}        
              initial={{opacity:0,y:100}}       
              transition={{delay:`${item.delay}`}}
                key={item.id}
                className="w-full -mt-14  mb-[32px] font-inter  "
              >
                <div className=" border-t-[1px] mt-[72px] border-[#636363]  "></div>
                <div className="mt-[46px]  text-[16px] font-normal leading-[26px] text-grayText ">
                  {"0" + item.id}
                </div>
                <div onClick={() =>handleClick(item.id) } className="flex -mt-8 justify-between items-center font-medium text-grayText cursor-pointer   ">
                  <span className="leading-[42px] font-medium text-[32px] text-darkText ml-[48px] ">
                    {item.title}
                  </span>

                  <motion.img
                  initial={{ rotate: 0 }} 
                  animate={{ rotate: activeId == item.id ? imageRotation :  0 }}
                    src="Arrow.svg"
                    className=" flex justify-end items-end "
                  />
                </div>
                {activeId == item.id && (
                  <div className=" pt-[25px] ml-[51px] mr-[200px]">
                    <span className="text-grayText leading-[26px] text-[16px]">
                      {item.text}
                    </span>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      )}

      {title == "Why Choose NtelFlex?" && (
        <div className="mt-[215px] flex flex-row mx-[100px] ">
          <div className="leading-[120px] text-[110px] font-medium  text-darkText">
            {title}
          </div>
          <div className="flex flex-col ml-[381px] w-full ">
            <div className="-mt-2">
            {props.map((item) => (
              <div
                // onClick={() => handleClick(item.id)}
                key={item.id}
                className="w-full  items-center justify-center   cursor-pointer  text-grayText "
              >
                <div className=" mt-6 text-[16px] font-normal leading-[26px] text-grayText ">
                  {"0" + item.id}
                </div>
                <div className="flex justify-between items-center font-medium text-grayText   ">
                  <span className="leading-[42px] -mt-[30px] font-medium text-[32px] text-grayText ml-[48px] ">
                    {item.title}
                  </span>
                </div>
                {activeId == item.id && (
                  <div className=" pt-[25px] ml-[51px] mr-[200px] justify-between flex flex-row w-full">
                    <span className="text-grayText leading-[26px] text-normal text-[16px] max-w-[514px]">
                      {item.text}
                    </span>
                    <motion.img 
                    
                      src="/About/kitchen.png"
                      className=" flex justify-end items-end "
                    />
                  </div>
                )}
                <div className=" border-b-[1px] mt-[30px]  border-grayText   "></div>
              </div>
            ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Faq;


