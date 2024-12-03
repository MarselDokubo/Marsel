"use client";
import { AnimationPlaybackControls, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
export default function CallToAction() {
    const [isHovered, setIsHovered] = useState(false);
    const [scope, animate] = useAnimate();
    const animation = useRef<AnimationPlaybackControls>();
    useEffect(() => {
        animation.current = animate(
            scope.current,
            { x: "-50%" },
            { duration: 120, ease: "linear", repeat: Infinity }
        );
    }, [animate, scope]);
    useEffect(() => {
        if (animation.current) {
            if (isHovered) {
                animation.current.speed = 0.5;
            } else {
                animation.current.speed = 1;
            }
        }
    }, [isHovered]);
    return (
        <section className="py-24">
            <div className="overflow-x-clip p-4 flex ">
                <motion.div
                    ref={scope}
                    className="flex flex-none gap-16 pr-16 text-5xl md:text-7xl font-medium group"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {Array.from({ length: 10 }).map((_, i) => (
                        <div
                            key={i}
                            className="flex items-center gap-8 md:gap-16"
                        >
                            <span className="text-lime-400 ">&#10038;</span>
                            <span className="uppercase group-hover:text-lime-500">
                                I&apos;ll be seeing ya
                            </span>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
