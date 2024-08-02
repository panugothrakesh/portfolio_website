"use client"
import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Text from "../button/text";
import { motion , useScroll, useTransform } from "framer-motion";

export default function Cards({i, title, description, src, stack, link, color, prog, range, target }) {

    const container = useRef(null)
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'start start'],
    })

    const imageScale = useTransform(scrollYProgress, [0,1], [2,1])
    const scale = useTransform(prog, range, [1, target])

  return (
    <>
      <div ref={container} className="cardContainer h-screen overflow-hidden flex justify-center items-center sticky top-0">
        <motion.div
          className="card flex gap-8 flex-col items-center md:w-[70vw] rounded-3xl w-[90vw] h-[70vh] relative p-12"
          style={{scale, backgroundColor: color, imageScale, top:`calc(-5vh + ${i * 25}px)`}} 
        >
          <h2 className="text-3xl font-gilBold">{title}</h2>
          <div className="body flex h-full w-full gap-14">
            <div className="description w-[40%] relative top-10">
              <p className="text-md font-gilSemiBold">{description}</p>
              <p className="text-md font-gilSemiBold pt-6">
                Stack - &nbsp;
                {stack.map((single, index)=>{
                  return (
                    <span key={index} className="text-sm opacity-70">
                      {single}{index < stack.length - 1 && " | "}
                    </span>
                  )
                })}
              </p>
              <span className="flex items-center mt-4">
                <Link
                  href={link}
                  rel="noopener noreferrer"
                  className="pt-2 cursor-pointer flex justify-center items-center pb-[5px] px-6 border-black border text-md font-gilBold rounded-full"
                >
                  <Text value={"OPEN WEBSITE"}></Text>
                </Link>
              </span>
            </div>
            
            <div className="imgcont relative w-[60%] h-full rounded-lg overflow-hidden">
              <motion.div className="inner w-full h-full" style={{scale: imageScale}}>
                <Image
                  className="object-cover"
                  src={src}
                  alt={title}
                  layout="fill"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
