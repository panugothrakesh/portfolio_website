"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Nav from "./nav/index";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);
  const burger = useRef(null)

  useLayoutEffect(()=>{
    gsap.registerPlugin(ScrollTrigger)
    gsap.to(burger.current, {
        scrollTrigger: {
            trigger: document.documentElement,
            start: 0,
            end: window.innerHeight * 3 / 4,
            onLeave: () => {gsap.to(burger.current, {scale: 1, duration: 0.25, ease: "power1.out"})},
            onEnterBack: () => {gsap.to(burger.current, {scale: 0, duration: 0.25, ease: "power1.out"},setIsActive(false))}
        }
    })
  },[])

  return (
    <>
      <div className="absolute flex z-[1] top-0 p-[35px] justify-between w-full box-border items-center">
        <div className="logo group flex items-center cursor-pointer">
          <p className="copyright m-0 transition-all duration-500 ease-olivier-bes group-hover:-rotate-[360deg]">©</p>
          <div className="names flex overflow-hidden whitespace-nowrap relative group-hover:pr-[30px] transition-all duration-500 ease-olivier-bes">
            <p className="codeby pl-[0.3em] group-hover:-translate-x-[100%] transition-all duration-500 ease-olivier-bes">Code by</p>
            <p className="dennis pl-[0.3em] group-hover:-translate-x-[65px] transition-all duration-500 ease-olivier-bes">Rakesh</p>
            <p className="snellenberg absolute left-[128px] pl-[0.3em] group-hover:-translate-x-[65px] transition-all duration-500 ease-olivier-bes">Panugoth</p>
          </div>
        </div>

        <div className="nav items-center hidden md:flex">
            <div className="el p-[15px] relative group/about flex cursor-pointer">
                <p>About</p>
                <div className="indicator transition-all duration-200 ease-olivier-bes group-hover/about:scale-100 w-[6px] h-[6px] bg-black absolute rounded-full top-[100%] left-[50%] scale-0 -translate-x-[50%]"></div>
            </div>
            <div className="el p-[15px] relative flex group/projects cursor-pointer">
                <p>Projects</p>
                <div className="indicator transition-all duration-200 ease-olivier-bes group-hover/projects:scale-100 w-[6px] h-[6px] bg-black absolute rounded-full top-[100%] left-[50%] scale-0 -translate-x-[50%]"></div>
            </div>
            <div className="el p-[15px] relative flex group/connect cursor-pointer">
                <p>Connect</p>
                <div className="indicator transition-all duration-200 ease-olivier-bes group-hover/connect:scale-100 w-[6px] h-[6px] bg-black absolute rounded-full top-[100%] left-[50%] scale-0 -translate-x-[50%]"></div>
            </div>
        </div>

        <div ref={burger} className="hidden md:block fixed top-0 right-0 z-10 scale-0">
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="fixed right-0 top-0 m-[20px] w-[80px] h-[80px] bg-[#1C1D20] rounded-full flex items-center justify-center cursor-pointer"
          >
            <div
              className={`w-full z-[1] after:content-[""] before:content-[""] after:-top-[5px] before:top-[5px] after:h-[1px] before:h-[1px] after:block after:w-[40%] after:m-auto after:bg-white after:relative after:transition-all after:duration-300 before:block before:w-[40%] before:m-auto before:bg-white before:relative before:transition-all before:duration-300 ${
                isActive
                  ? "after:-top-[1px] before:top-[1px] after:rotate-45 before:-rotate-45"
                  : ""
              }`}
            ></div>
          </div>
        </div>
          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="md:hidden fixed right-0 top-0 m-[20px] w-[80px] h-[80px] bg-[#1C1D20] rounded-full flex items-center justify-center cursor-pointer"
          >
            <div
              className={`w-full z-[1] after:content-[""] before:content-[""] after:-top-[5px] before:top-[5px] after:h-[1px] before:h-[1px] after:block after:w-[40%] after:m-auto after:bg-white after:relative after:transition-all after:duration-300 before:block before:w-[40%] before:m-auto before:bg-white before:relative before:transition-all before:duration-300 ${
                isActive
                  ? "after:top-[1px] before:-top-[1px] after:rotate-45 before:-rotate-45"
                  : ""
              }`}
            ></div>
          </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav />}
            </AnimatePresence>
      </div>
    </>
  );
}
