import {motion} from 'framer-motion'

export default function Index(){
    const initialPath = `M50 0 L50 ${window.innerHeight} Q-50 ${window.innerHeight/2} 50 0`
    const targetPath = `M50 0 L50 ${window.innerHeight} Q50 ${window.innerHeight/2} 50 0`
  
  const curve = {
    initial: {
        d: initialPath
    },
    enter: {
        d: targetPath,
        transition: {duration: 1.2, ease: [0.76, 0, 0.24, 1]}
    },
    exit: {
        d: initialPath,
        transition: {duration: 1, ease: [0.76, 0, 0.24, 1]}
    }
  }
    return(
        <svg className="absolute top-0 left-[-49px] w-[50px] h-full fill-[#292929] stroke-none">
            <motion.path variants={curve} initial="initial" animate="enter" exit="exit"></motion.path>
        </svg>
    )
}