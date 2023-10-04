import React from 'react'

function AboutDescription() {

    let text={
        first:"With the rise of remote work and flexible work arrangements, more and more people are finding themselves in need of a functional home office space.",
        second:"Whether you're a full-time remote worker or simply need a space to handle your personal finances and correspondence, creating an office space that is comfortable, functional, and aesthetically pleasing is key to ensuring that you can be productive and successful in your work.",
        third:"Here are some tips for creating a functional home office space:",
        last:"By following these tips and investing in a well-designed and functional home office space, you can ensure that you're able to stay productive and focused in your work, no matter where you are.",
    }
    let textGrid= [
        {
            id:1,
            header:"1. Start with the basics",
            text:"Invest in a comfortable and supportive chair, a sturdy desk, and good lighting. Your comfort and well-being are essential to your productivity, so don't skimp on these essentials.",

        },
        {
            id:2,
            header:"2. Consider your storage needs",
            text:"Depending on the type of work you do, you may need ample storage space for paperwork, office supplies, and other materials. Consider adding bookshelves, filing cabinets, or other storage solutions to keep your workspace clutter-free.",

        },
        {
            id:3,
            header:"3. Design for productivity",
            text:"The design of your office space can have a significant impact on your productivity. Consider using color, texture, and lighting to create a space that inspires and motivates you. For example, a bright and cheerful color scheme can boost your mood and energy, while good lighting can reduce eye strain and headaches.",

        },
        {
            id:4,
            header:"4. Incorporate personal touches",
            text:"Your home office should reflect your personal style and interests. Consider incorporating personal touches like artwork, photos, or plants to make your workspace feel more welcoming and inspiring.",

        },
        {
            id:5,
            header:"5. Don't forget about ergonomics",
            text:"Proper ergonomics are essential for avoiding strain and injury, especially if you spend long hours at your desk. Invest in an ergonomic keyboard and mouse, and consider using a standing desk or other ergonomic furniture to promote good posture and reduce the risk of repetitive strain injuries.",

        },
        

    ]
  return (
    <div className=' justify-center items-center place-content-center flex flex-col text-grayText  font-inter'>
       <div className='zxl:[834px] zxl:mx-[543px] xl:mx-[240px] mdx:mx-[100px] mt-[130px] flex flex-col '>
       <span className='leading-[50px] text-[40px] font-medium text-darkText '>{text.first}</span>
        <span className='mt-[51px] '>{text.second}</span>
        <span className='mt-[48px]'>{text.third}</span>
        <div className='grid grid-cols-1'>
            {textGrid.map((item) => (
             <div className='flex flex-col'>
                <span className='leading-[26px] text-[16px] font-medium mt-[28px]'>{item.header}</span>
                <span className='pl-[17px] mt-[11px] font-normal'>{item.text}</span>
             </div>
            ))}
        </div>
        <span className='mt-[53px]'>{text.last}</span>
       </div>
    </div>
  )
}

export default AboutDescription