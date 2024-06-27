import Landing from "../components/landing/page";
import Metrics from "../components/metrics/page";
import Para from "../components/paragraph/Para";

export default function Home() {
  return (
    <main className="">
      <Landing/>
      <Metrics/>
      <Para const para = "An Innovative Computer Science Engineer, I'm Specialized in Creating Intuitive and Engaging Digital Experiences by Merging Cutting-edge Technology with Elegant Design, Leading Projects that Consistently Exceed User Expectations."/>
      <div className="h-[100vh] bg-slate-300"></div>
      <div className="h-[100vh] bg-slate-500"></div>
    </main>
  );
}
