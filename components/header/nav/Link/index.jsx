import Link from "next/link";
import { motion } from "framer-motion";
import { slide, scale } from "../../anim";
import NavText from "../../../button/Navtext";

export default function Index({data, isActive, setSelectedIndicator}) {
    const { title, href, index} = data;
  return (
    <motion.div onMouseEnter={() => {setSelectedIndicator(href)}}  custom={index} variants={slide} animate="enter" exit="exit" initial="initial" className="relative flex items-center">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"}  className="w-[10px] h-[10px] bg-white rounded-full absolute -left-[30px]"></motion.div>
        <Link href={href}><NavText value={title} /></Link>
    </motion.div>
  );
}
