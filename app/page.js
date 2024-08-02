'use client'

import { useEffect } from "react";
import Landing from "../components/landing/page";
import Metrics from "../components/metrics/page";
import Para from "../components/paragraph/Para";
import Lenis from 'lenis'
import Projects from "../components/projects/project.jsx";
import Expeiences from "../components/Experience/page"

export default function Home() {
  useEffect(()=>{
    const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)
  },[])

  return (
    <main className="bg-black text-white">
      <Landing/>
      <Metrics/>
      <div className="flex justify-between w-full items-center">
      <Para const para = "An Innovative Computer Science Engineer, Specialized in Creating Intuitive and Engaging Digital Experiences by Merging Cutting-edge Technology with Elegant Design, Leading Projects that Consistently Exceed User Expectations."/>
      </div>
      <div className="border-b-[1px] border-b-white/20"></div>
      <h2 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight pt-24">PROJECTS</h2>
      <Projects />
      <div className="border-b-[1px] border-b-white/20"></div>
      <h2 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight pt-24">EXPERIENCE</h2>
      <Expeiences />
      <div className="border-b-[1px] border-b-white/20"></div>
    </main>
  );
}
