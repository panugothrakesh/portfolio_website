import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";

export default function Metrics() {
    return (
        <div className="flex justify-between items-center font-gilMedium text-white bg-black py-20 px-[6vw] border-t-[1px] border-t-white/20 border-b-[1px] border-b-white/20">
            <div className="grid md:grid-cols-4 w-full grid-cols-2 gap-y-20">
            <MetricItem number={21} label="Skills" />
            <div className="flex flex-col items-center justify-center md:border-r-[1px] md:border-r-white/20 w-full gap-2">
            <h1 className="font-CoolveticaHv text-6xl">
                <AnimatedNumber n={7} />
            </h1>
            <p className="text-md text-white/40">Internships</p>
        </div>
            <MetricItem number={3} label="Projects" />
            <div className="flex flex-col items-center justify-center w-full gap-2">
            <h1 className="font-CoolveticaHv text-6xl">
                <AnimatedNumber n={4} />
            </h1>
            <p className="text-md text-white/40">Achievements</p>
        </div>
            </div>
        </div>
    );
}

function MetricItem({ number, label }) {
    return (
        <div className="flex flex-col items-center justify-center w-full gap-2 border-r-[1px] border-r-white/20">
            <h1 className="font-CoolveticaHv text-6xl">
                <AnimatedNumber n={number} />
            </h1>
            <p className="text-md text-white/40">{label}</p>
        </div>
    );
}

function AnimatedNumber({ n }) {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.3 // Trigger when 10% of the element is visible
    });

    const { number } = useSpring({
        from: { number: 0 },
        number: inView ? n : 0,
        delay: 400,
        config: { mass: 1, tension: 50, friction: 25 }
    });
    const opacity = number.to([0, n], [0, 1]);

    return <animated.div style={{ opacity }} ref={ref}>{number.to((n) => n.toFixed(0))}</animated.div>;
}
