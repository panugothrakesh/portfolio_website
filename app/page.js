'use client'

import { useEffect } from "react";
import Landing from "../components/landing/page";
import Metrics from "../components/metrics/page";
import Para from "../components/paragraph/Para";
import Lenis from 'lenis'
import Projects from "../components/projects/project.jsx";
import Expeiences from "../components/Experience/page"
import { IconCloudDemo } from "../components/Icon_cloud/iconDemoCloud";

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
      <Para const para = "An Innovative Computer Science Engineer, Specialized in Creating Intuitive and Engaging Digital Experiences by Merging Cutting-edge Technology with Elegant Design, Leading Projects that Consistently Exceed User Expectations."/>
      <div className="border-b-[1px] border-b-white/20"></div>
      <IconCloudDemo/>
      <div className="border-b-[1px] border-b-white/20"></div>
      <h2 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight pt-24">Projects</h2>
      <Projects />
      <div className="border-b-[1px] border-b-white/20"></div>
      <h2 className="md:text-center md:text-4xl text-2xl font-gilBold leading-tight pt-24">Experience</h2>
      <Expeiences />
      <div className="border-b-[1px] border-b-white/20"></div>
      <div className="h-[100vh] bg-slate-300"></div>
      <div className="h-[100vh] bg-slate-500"></div>
    </main>
  );
}
