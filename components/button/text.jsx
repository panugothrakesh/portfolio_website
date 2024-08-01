import { stagger, useAnimate } from "framer-motion";
import { useEffect } from "react";

export default function Text({ value, isActive }) {
  const alphabets = value.split("");
  const [scope, animate] = useAnimate();

  useEffect(() => {
    const handleMouseEnter = () => {
      animate([
        [".letter", { y: "-100%" }, { duration: 0.5, delay: stagger(0.016), ease: [0.76, 0, 0.24, 1] }]
      ]);
    };

    const handleMouseLeave = () => {
      animate([
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
  }, [scope, animate]);

  const handleClick = () => {
    animate([
      [".letter", { scale: [1, 1.2, 1] }, { duration: 0.3, delay: stagger(0.05) }]
    ]);
  };

  return (
    <div
      ref={scope}
      onClick={handleClick}
      className={`${
        isActive ? "font-bold" : ""
      }`}
    >
      <span className="sr-only">{value}</span>
      <span className="flex justify-center h-6 items-center overflow-hidden">
        {alphabets.map((char, i) => (
          <span
            data-letter={char}
            className="letter h-6 after:h-6 leading-6 after:leading-6 relative after:absolute after:left-0 after:top-full after:content-[attr(data-letter)] whitespace-pre"
            key={`${char}-${i}`}
          >
            {char}
          </span>
        ))}
      </span>
    </div>
  );
}
