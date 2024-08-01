import { animate, motion,  useMotionTemplate, useMotionValue } from "framer-motion"
import Button from "../button/page"
import { useEffect } from "react"

const COLORS = ["#13FFAA", "#1E67C6", "#CE84CF", "#DD335C"]
export default function Landing(){
    const color = useMotionValue(COLORS[0])
    const backgroundImage = useMotionTemplate`radial-gradient(140% 150% at 50% 0%, #000000 50%,${color}`

    useEffect(()=>{
        animate(color, COLORS, {
            ease: 'easeInOut',
            duration: 10,
            repeat: Infinity,
            repeatType: 'mirror',
        })
    },[])
    return(
        <>
        <motion.section style={{backgroundImage}} className="relative overflow-hidden place-content-center">
        <div className="md:h-screen flex flex-col gap-4 text-white justify-center md:items-center md:px-24 px-8 relative">
            <p className="text-sm text-bold font-gilSemiBold">Development & Design Portfolio</p>
            <h1 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight">
                - Hi! I&apos;m Rakesh P, a Software <br className="md:block hidden"/>
                Engineer and a Product Designer based <br className="md:block hidden"/>
                in Hyderabad, India.
            </h1>
            <Button value="CONNECT" color={color}/>
        </div>
        </motion.section>
        </>
    )
}