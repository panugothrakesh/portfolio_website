import Image from "next/image"
import Link from "next/link"

export default function index() {
  return (
    <div className="flex flex-wrap w-full justify-between items-center text-xs gap-0 pb-12 md:pb-0">
        <Link target="blank" href="https://www.linkedin.com/in/rakesh-p-10b831222/"><div className="group hover:bg-white transition-all duration-500 p-3 rounded-full"><Image className="fill-white group-hover:invert-0 h-[20px] flex invert w-auto cursor-pointer" src="linkedin.svg" alt="in" width={100} height={100}></Image></div></Link>
        <Link target="blank" href="https://github.com/panugothrakesh"><div className="group hover:bg-white transition-all duration-500 p-3 rounded-full"><Image className="fill-white group-hover:invert-0 h-[20px] flex invert w-auto cursor-pointer" src="github.svg" alt="in" width={100} height={100}></Image></div></Link>
        <Link target="blank" href="https://www.behance.net/panugothrakesh"><div className="group hover:bg-white transition-all duration-500 p-3 rounded-full"><Image className="fill-white group-hover:invert-0 h-[25px] flex invert w-auto cursor-pointer" src="behance.svg" alt="in" width={100} height={100}></Image></div></Link>
        <Link target="blank" href="https://www.gleedesignstudio.com"><div className="group hover:bg-white transition-all duration-500 p-3 rounded-full"><Image className="fill-white group-hover:invert-0 h-[23px] flex invert w-auto cursor-pointer" src="gleedesign.svg" alt="in" width={100} height={100}></Image></div></Link>
    </div>
  )
}