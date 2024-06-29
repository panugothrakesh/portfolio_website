'use client'
import { useScroll, motion, useTransform } from "framer-motion"
import { useRef } from "react"

export default function Paragraph({value}){
    const element = useRef(null)
    const { scrollYProgress } = useScroll({
        target: element,
        offset:['start .9', 'start .1']
    })

    const words = value.split(" ")

    return (
        <div className="bg-black text-white flex justify-center items-center py-24">
            <p  ref={element} style={{opacity:scrollYProgress}} className="flex flex-wrap md:justify-center font-gilBold md:text-4xl text-2xl text-center p-10 md:px-28 px-8">
                {words.map((word, i)=>{
                    const start = i / words.length;
                    const end = start + (1/words.length)
                    return <Wordd key={i} range={[start, end]} progress={scrollYProgress}>{word}</Wordd>
                })}
            </p>
        </div>
    )
}


const Wordd = ({children, range, progress}) =>{
    const characters = children.split("")
    const amount = range[1] - range[0];
    const step = amount / children.length
    return (
        <span className="md:mr-[10px] mr-[8px] md:mt-5 mt-3">
            {characters.map((char, i)=>{
                const start = range[0] + (step * i);
                const end = range[0] + (step * (i+1))
                return <Character key={i} range={[start, end]} progress={progress}>{char}</Character>
            })}
        </span>
    )
}

const Character = ({children, range, progress})=>{
    const opacity = useTransform(progress, range,[0,1])
    return(
        <span className="relative">
            <span className="absolute opacity-15">{children}</span>
            <motion.span style={{opacity}}>
                {children}
            </motion.span>
        </span>
    )
}