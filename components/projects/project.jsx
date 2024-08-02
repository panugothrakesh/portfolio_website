"use Client"
import { projects } from "./data"
import Card from "../Card/index"
import {useScroll} from "framer-motion"
import {useRef } from "react"

export default function Projects(){

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end']
      })

    return (
        <div ref={container} className="text-black">
            {projects.map((project, i)=>{
                const targetScale = 1 - ((projects.length - i) * 0.05)
                return <Card key={i} i={i} {...project} range={[1*0.25, 1]} target={targetScale} prog={scrollYProgress}/>
            })}
        </div>
    )
}