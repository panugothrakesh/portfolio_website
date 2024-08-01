import { stagger, useAnimate, motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Button({ value , color}) {
  const [isHovered, setIsHovered] = useState(false);

  const alphabets = value.split("");
  const [scope, animatee] = useAnimate();

  useEffect(() => {
    const handleMouseEnter = () => {
      setIsHovered(true);
      animatee([
        [".letter", { y: "-100%" }, { duration: 0.5, delay: stagger(0.016), ease: [0.76, 0, 0.24, 1] }]
      ]);
    };

    const handleMouseLeave = () => {
      setIsHovered(false);
      animatee([
        [".letter", { y: "0%" }, { duration: 0.5, delay: stagger(0.016), ease: [0.76, 0, 0.24, 1] }]
      ]);
    };

    const buttonElement = scope.current;
    buttonElement.addEventListener("mouseenter", handleMouseEnter);
    buttonElement.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      buttonElement.removeEventListener("mouseenter", handleMouseEnter);
      buttonElement.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [scope, animatee]);

  const handleClick = () => {
    animatee([
      [".letter", { scale: [1, 1.2, 1] }, { duration: 0.3, delay: stagger(0.05) }]
    ]);
  };

  return (
      <motion.div
        ref={scope}
        onClick={handleClick}
        style={{ color: isHovered ? color : 'white' }}
        className="pt-4 cursor-pointer text-white pb-[14px] px-16 border-white border text-xl font-gilBold bg-black rounded-full"
      >
        <span className="sr-only">{value}</span>
        <span className="flex justify-center h-6 items-center overflow-hidden">
          {alphabets.map((char, i) => (
            <span
              data-letter={char}
              className="letter h-6 after:h-6 leading-6 after:leading-6 relative after:absolute after:left-0 after:top-full after:content-[attr(data-letter)]"
              key={`${char}-${i}`}
            >
              {char}
            </span>
          ))}
        </span>
      </motion.div>

  );
}
