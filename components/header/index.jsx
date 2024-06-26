'use client'
import { useState, useEffect } from "react"
import Nav from './nav/index'
import { AnimatePresence } from "framer-motion"
import { usePathname } from "next/navigation"

export default function Index(){

    const [isActive, setIsActive] = useState(false);
    const pathname = usePathname();

  useEffect( () => {
    if(isActive) setIsActive(false)
        // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname])

    return(
        <>
        <div onClick={() => {setIsActive(!isActive)}} className="fixed right-0 top-0 m-[20px] w-[80px] h-[80px] bg-[#455CE9] rounded-full flex items-center justify-center cursor-pointer z-10">
            <div className={`w-full after:content-[""] before:content-[""] after:-top-[5px] before:top-[5px] after:h-[1px] before:h-[1px] after:block after:w-[40%] after:m-auto after:bg-white after:relative after:transition-all after:duration-300 before:block before:w-[40%] before:m-auto before:bg-white before:relative before:transition-all before:duration-300 ${isActive ? "after:top-[0px] before:-top-[0px] after:rotate-45 before:-rotate-45" : ""}`}></div>
        </div>
        <AnimatePresence mode="wait">
            {isActive && <Nav/>}
        </AnimatePresence>
        </>
    )
}