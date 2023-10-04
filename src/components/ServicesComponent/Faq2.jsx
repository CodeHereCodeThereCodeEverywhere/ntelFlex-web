import React, { useState } from 'react'
import {motion} from 'framer-motion'

function Faq2({ title, props }) {
    const [activeId, setActiveId] = useState(0);
    const [imageRotation, setImageRotation] = useState(0)
    const handleClick = (itemId) => {
      setActiveId(activeId === itemId ? "0" : itemId)
      setImageRotation(imageRotation === 0 ? 180 : 0)
    }
  return (
    <div className=' w-full'>
        <div className='max-w-[1740px] justify-between flex flex-row w-full '>
        <h1 className=' pl-[100px] leading-[120px] text-[110px] font-medium  font-hanken text-darkText top-0'>
        FAQ
        </h1>
        <div className=''>        
        
       
        </div>
    </div>
    </div>
  )
}

export default Faq2