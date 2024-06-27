import { menuSlide } from '../anim'
import Link from './Link/index'
import {motion} from 'framer-motion'
import Footer from './footer/index'
import Curve from './Curve/index'
import { usePathname } from 'next/navigation'
import { useState } from 'react'

const navItems = [
    { title: 'Home', href: '/' },
    { title: 'About', href: '/about' },
    { title: 'Projects', href: '/projects' },
    { title: 'Connect', href: '/connect' },
  ]

export default function Index(){

      const pathname = usePathname();
      const [selectedIndicator, setSelectedIndicator] = useState(pathname);
    return(
        <motion.div variants={menuSlide} exit="exit" initial="initial" animate="enter" className="h-[100vh] bg-[#161616] w-full sm:max-w-[50vw] md:max-w-[40vw] lg:max-w-[30vw] fixed right-0 top-0 text-white">
            <div className="box-border h-full flex flex-col justify-between px-14 py-11 md:px-20 md:py-14">
                <div onMouseLeave={() => {setSelectedIndicator(pathname)}}  className="flex flex-col text-4xl gap-8">
                    {
                        navItems.map((data,index)=>{
                            return <Link  key={index} data={{...data, index}} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator}/>
                        })
                    }
                </div>
            <Footer/>
            </div>
            <Curve/>
        </motion.div>
    )
}