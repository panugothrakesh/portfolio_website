"use client";
import { useState, useEffect, useLayoutEffect, useRef } from "react";
import Nav from "../header/nav/index";
import { AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from "gsap";
import Image from "next/image";
import Link from "next/link";
import Text from "../button/text";

export default function Index() {
  const [isActive, setIsActive] = useState(false);
  const [hoveredLink, setHoveredLink] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  const burger = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(burger.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight / 4,
        onLeave: () => {
          gsap.to(burger.current, {
            scale: 1,
            transformOrigin: "-50px 50px",
            duration: 0.25,
            ease: "power1.out",
          });
        },
        onEnterBack: () => {
          gsap.to(burger.current, {
            scale: 0,
            transformOrigin: "-50px 50px",
            duration: 0.25,
            ease: "power1.out",
          });
          setIsActive(false);
        },
      },
    });
  }, []);

  const handleMouseEnter = (link) => {
    setHoveredLink(link);
  };

  const handleMouseLeave = () => {
    setHoveredLink(null);
  };

  return (
    <>
      <div className="flex justify-center items-center">
        <div className="absolute flex z-[1] top-0 bg-black text-white p-[35px] justify-between w-full box-border items-center">
          <Link href="/">
            <div className="logo group flex items-center cursor-pointer">
              <p className="copyright m-0 transition-all duration-500 ease-olivier-bes group-hover:-rotate-[360deg]">
                <Image src="rp.svg" alt="logo" width={240} height={80} className="w-6 invert" />
              </p>
              <div className="names flex overflow-hidden whitespace-nowrap relative group-hover:pr-[30px] transition-all duration-500 ease-olivier-bes">
                <p className="codeby pl-[0.3em] group-hover:-translate-x-[102%] transition-all duration-500 ease-olivier-bes">
                  Portfolio |
                </p>
                <p className="dennis pl-[0.3em] group-hover:-translate-x-[75px] transition-all duration-500 ease-olivier-bes">
                  Rakesh
                </p>
                <p className="snellenberg absolute left-[140px] pl-[0.3em] group-hover:-translate-x-[82px] transition-all duration-500 ease-olivier-bes">
                  Panugoth
                </p>
              </div>
            </div>
          </Link>

          <div className="nav items-center hidden md:flex">
            <div
              className="el p-[15px] relative group/about flex cursor-pointer"
              onMouseEnter={() => handleMouseEnter('/about')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/about">
                <Text value="ABOUT" isActive={pathname === "/about"} />
              </Link>
            </div>
            <div
              className="el p-[15px] relative flex group/projects cursor-pointer"
              onMouseEnter={() => handleMouseEnter('/projects')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/projects">
                <Text value="PROJECTS" isActive={pathname === "/projects"} />
              </Link>
            </div>
            <div
              className="el p-[15px] relative flex group/connect cursor-pointer"
              onMouseEnter={() => handleMouseEnter('/connect')}
              onMouseLeave={handleMouseLeave}
            >
              <Link href="/connect">
                <Text value="CONNECT" isActive={pathname === "/connect"} />
              </Link>
            </div>
          </div>

          <div ref={burger} className="hidden md:block fixed top-0 right-0 z-10 scale-0 origin-center">
            <div
              onClick={() => {
                setIsActive(!isActive);
              }}
              className="fixed right-0 top-0 m-[20px] w-[80px] h-[80px] bg-[#ffffff] shadow-lg rounded-full flex items-center justify-center cursor-pointer"
            >
              <div
                className={`w-full z-[1] after:content-[""] before:content-[""] after:-top-[5px] before:top-[5px] after:h-[1.5px] before:h-[1.5px] after:block after:w-[40%] after:m-auto after:bg-[#1C1C1C] after:relative after:transition-all after:duration-300
                  after:origin-[66%_50%] 
                  before:origin-[66%_50%]
                  before:block before:w-[40%] before:m-auto before:bg-[#1C1C1C] before:relative before:transition-all before:duration-300 ${isActive ? 'after:-top-[1px] after:-rotate-45 before:top-[1px] before:rotate-45' : ''}`}
              ></div>
            </div>
          </div>

          <div
            onClick={() => {
              setIsActive(!isActive);
            }}
            className="md:hidden fixed right-0 top-0 m-[20px] w-[60px] h-[60px] bg-[#ffffff] shadow-lg rounded-full flex items-center justify-center cursor-pointer z-[1]"
          >
            <div
              className={`w-full z-[1] after:content-[""] before:content-[""] after:-top-[5px] before:top-[5px] after:h-[1.5px] before:h-[1.5px] after:block after:w-[40%] after:m-auto after:bg-[#1C1C1C] after:relative after:transition-all after:duration-300
                after:origin-[66%_50%] 
                before:origin-[74%_0%]
                before:block before:w-[40%] before:m-auto before:bg-[#1C1C1C] before:relative before:transition-all before:duration-300 ${isActive ? 'after:-top-[1px] after:-rotate-45 before:top-[1px] before:rotate-45' : ''}`}
            ></div>
          </div>

          <AnimatePresence mode="wait">
            {isActive && <Nav />}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}
