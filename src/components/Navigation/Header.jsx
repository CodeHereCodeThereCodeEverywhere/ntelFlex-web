
import React, { useEffect, useState } from "react";



//Да се оправи
// home - 54 - About - 54 - Solutions - 64 - Logo - 67 - Services - 28 - Resources - 34 - Contact


function Header({ path }) {

  // const items = [
  //   { id: 1, title: "Home", url: "/",mr:"54px" },
  //   { id: 2, title: "About", url: "/about",mr:"54px" },
  //   { id: 3, title: "Solutions", url: "/solutions",mr:"64px", },    
  //   { id: 5, title: "Services", url: "/service",mr:"28px", },
  //   { id: 6, title: "Resources", url: "/resources",mr:"34px" },
  //   { id: 7, title: "Contact", url: "/contact" },
  // ];
  const [windowWidth, setWindowWidth] = useState(0);
  const [isNavOpen, setIsNavOpen] = useState(false);

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

  const isMobile = windowWidth < 922;

 

  return (
<nav className="flex  items-center  flex-col sticky z-20">
    <div className="max-w-[810px] mt-[25px]  justify-center">
    <a href="" class="flex items-center justify-center  ">
        <img src="logo.svg" className={`${isMobile ? " w-[67px]" : " w-[140px]"}`} alt="Flowbite Logo" />
        
    </a>
    {isMobile ? (
        <nav>
        <section className="flex ">
          <div
            className=""
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
            <img src="/Home/burger.svg"  className={isNavOpen ? "invisible" : "absolute top-0 right-0 px-8 py-8 "}/>
          </div>

          <div className={isNavOpen ? "showMenuNav" : "invisible"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <img src="/Home/burger.svg"  className="bg-grayText rounded-md " />
            </div>
            <ul className="flex flex-col items-center justify-center min-h-[250px] absolute right-0 bg-grayText rounded-xl px-4">
              <li className="border-b border-gray-400 my-8 uppercase ">
                <a href="/about">About</a>
              </li>
              <li className=" my-8 uppercase">
                <a href="/service">Services</a>
              </li>
              <li className="border-b border-gray-400 my-8 uppercase">
                <a href="/contact">Contact</a>
              </li>
            </ul>
          </div>
        </section>

        <ul className=" hidden space-x-8 lg:flex">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/portfolio">Portfolio</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
        </ul>
      </nav>
          
        ) :(
    <div className="grid grid-cols-2 gap-x-[271px] -mt-[30px] ">
      <div className="flex flex-row gap-[54px]">
          <div className={` leading-[26px] font-inter  ${
                    path == "/" ? "font-bold text-darkText" : " font-normal text-grayText "
                  }`}>
            <a href='/'>Home</a>
          </div>
          <div className={` leading-[26px] font-inter  ${
                    path == "/about" ? "font-bold text-darkText" : " font-normal text-grayText "
                  }`}>
            <a href='/about'>About</a>
          </div>
          <div className={` leading-[26px] font-inter  ${
                    path == "/solutions" ? "font-bold text-darkText" : " font-normal text-grayText "
                  }`}>
            <a href='/solutions'>Solutions</a>
          </div>
      </div>
      <div className="flex flex-row ">
      <div 
      className={` leading-[26px] font-inter  mr-[28px] ${
        path == "/service" ? "font-bold text-darkText" : " font-normal text-grayText "
      }`}>
            <a href='/service'>Services</a>
          </div>
          <div 
          className={` leading-[26px] font-inter  mr-[34px] ${
            path == "/resources" ? "font-bold text-darkText" : " font-normal text-grayText "
          }`}
          >
            <a href='/resources'>Resources</a>
          </div>
          <div className={` leading-[26px] font-inter   ${
            path == "/contact" ? "font-bold text-darkText" : " font-normal text-grayText "
          }`}>
            <a href='/contact'>Contact</a>
          </div>
      </div>
    <div>
     
    
    </div>
    
    </div>
     )}
    </div>

</nav>

    


  );
}

export default Header;



{/* <div className="w-full sticky  ">
<div className=" flex flex-row items-center justify-center mt-[25px] gap-x-[49px]  -ml-[32px]  ">
  {items.map((item) => (
    <div key={item.id} className="  flex  ">
      {item.url ? (
        <a   className="mt-[32px]"href={item.url} onClick={() => setCurrentPath(item.url)}>
          <span 
            className={` leading-[26px] font-inter  ${
              path === item.url ? "font-bold text-darkText" : " font-normal text-grayText "
            }`}
          >
            {item.title}
          </span>
        </a>
      ) : (
        <img key={item.id} src={item.src} alt={item.alt} className="" />
      )}
    </div>
  ))}
</div>
</div> */}