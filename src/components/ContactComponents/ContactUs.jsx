import React from "react";

function ContactUs() {
  return (
    <div className="w-full flex zxl:flex-row xxl:flex-row xl:flex-row md:flex-col sm:flex-col phone:flex-col mt-[69px] overflow-hidden  font-inter">
<div className=" ml-[100px] w-1/2 pl-[6px] flex flex-col md:flex md:justify-center md:items-center md:mx-auto phone:w-full phone:mx-auto sm:w-full sm:mx-auto">
  <span className="w-[574px] phone:w-full sm:w-full sm:px-[10px] phone:px-[10px] leading-[26px] font-inter text-[16px] font-normal text-grayText ">
    Have a question about our services or want to get started on your
    design project? We're here to help! Fill out the contact form below
    and one of our team members will get back to you within 24 hours.
    Alternatively, you can reach out to us via phone or email using the
    contact information provided below. We can't wait to hear from you!
  </span>
</div>
<div className="w-1/2 flex flex-col  zxl:mr-[100px] xxl:mr-[100px] xl:mr-[100px]  md:mt-[69px] md:justify-center md:mx-auto
phone:mt-[69px] phone:justify-center phone:w-3/4 phone:mx-auto
sm:mt-[69px] sm:justify-center sm:mx-auto">
  <div className="flex flex-row md:whitespace-nowrap md:mx-auto md:justify-center md:items-center phone:justify-center phone:items-center phone:mx-auto ">
    <h1 className=" leading-[120px] text-[110px] text-darkText font-hanken font-medium  md:text-[90px] sm:text-[80px] phone:text-[55px] sm:whitespace-nowrap phone:whitespace-nowrap  ">
      Contact Us
    </h1>{" "}
    <img src="Vector-beige.svg" alt="ArrowGray" className="ml-[93px] md:mx-auto md:pl-[20px] sm:invisible phone:invisible " />
  </div>
  <div className="w-full phone:justify-center phone:flex ">
    <form class="w-full flex flex-col mt-[52px] ">
    <span className=" whitespace-nowrap leading-[26px] font-normal">Your Name*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal">Email*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal ">Phone Number*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="tel"
          placeholder=""
          required
         
        />
        
      </div>
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal">Your Name*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      <button type="button" className="rounded-full border-2 text-darkText w-[170px] h-[50px] mt-[60px] justify-center items-center flex flex-row text-[16px] font-medium tracking-[0.24px] ">Submit <img src='VectorSmall.svg' alt='VectorSmall' className="ml-2 " /></button>
    </form>
  </div>
</div>
</div>
  );
}

export default ContactUs;
{/* <div className="w-full flex flex-row mt-[69px] overflow-hidden  font-inter">
<div className=" ml-[100px] w-1/2 pl-[6px] flex flex-col ">
  <span className="w-[574px] leading-[26px] font-inter text-[16px] font-normal text-grayText">
    Have a question about our services or want to get started on your
    design project? We're here to help! Fill out the contact form below
    and one of our team members will get back to you within 24 hours.
    Alternatively, you can reach out to us via phone or email using the
    contact information provided below. We can't wait to hear from you!
  </span>
</div>
<div className="w-1/2 flex flex-col  mr-[100px] ">
  <div className="flex flex-row ">
    <h1 className=" leading-[120px] text-[110px] text-darkText font-hanken font-medium">
      Contact Us
    </h1>{" "}
    <img src="Vector-beige.svg" alt="ArrowGray" className="ml-[93px] " />
  </div>
  <div className="w-full">
    <form class="w-full flex flex-col mt-[52px] ">
    <span className=" whitespace-nowrap leading-[26px] font-normal">Your Name*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal">Email*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal ">Phone Number*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="tel"
          placeholder=""
          required
         
        />
        
      </div>
      <span className=" whitespace-nowrap mt-[60px] leading-[26px] font-normal">Your Name*</span>
      <div class="flex items-center border-b w-full  py-2">
      
        <input
          className="appearance-none bg-bgColor w-full border-none  text-darkText mr-3 py-1 px-2 leading-tight focus:outline-none"
          type="text"
          placeholder=""
          required
         
        />
        
      </div>
      <button type="button" className="rounded-full border-2 text-darkText w-[170px] h-[50px] mt-[60px] justify-center items-center flex flex-row text-[16px] font-medium tracking-[0.24px] ">Submit <img src='VectorSmall.svg' alt='VectorSmall' className="ml-2 " /></button>
    </form>
  </div>
</div>
</div> */}