"use client";
import Button from "@/components/button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/pointer";
import { motion, useAnimate } from "framer-motion";
import { useEffect } from "react";
import cursorYouImage from "@/assets/images/cursor-you.svg";
import portrait from "@/assets/images/web-portrait.png";

const Hero = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [leftPointerScope, leftPointerAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [rightPointerScope, rightPointerAnimate] = useAnimate();
    useEffect(() => {
        leftDesignAnimate([
            [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftDesignScope.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ]);
        leftPointerAnimate([
            [leftPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
            [leftPointerScope.current, { y: 0, x: -100 }, { duration: 0.5 }],
            [
                leftPointerScope.current,
                { y: [0, 16, 0], x: 0 },
                { duration: 0.5, ease: "easeInOut" },
            ],
        ]);
        rightDesignAnimate([
            [
                rightDesignScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        ]);
        rightPointerAnimate([
            [
                rightPointerScope.current,
                { opacity: 1 },
                { duration: 0.5, delay: 1.5 },
            ],
            [rightPointerScope.current, { x: 175, y: 0 }, { duration: 0.5 }],
            [
                rightPointerScope.current,
                { x: 0, y: [0, 20, 0] },
                { duration: 0.5 },
            ],
        ]);
    }, [
        leftDesignAnimate,
        leftPointerAnimate,
        rightDesignAnimate,
        rightPointerAnimate,
    ]);

    return (
        <section
            className="hero py-12 mt-20 md:mt-28 overflow-x-clip"
            style={{
                cursor: `url(${cursorYouImage.src}), auto `,
            }}
        >
            <div className="container relative">
                <motion.div
                    ref={leftDesignScope}
                    initial={{ opacity: 0, y: 100, x: -100 }}
                    drag
                    className="absolute -left-32 top-16 hidden"
                >
                    <Image src={designExample1Image} alt="" draggable="false" />
                </motion.div>
                <motion.div
                    ref={leftPointerScope}
                    initial={{ opacity: 0, y: 100, x: -200 }}
                    className="absolute left-56 top-96 hidden"
                >
                    <Pointer name="Explore" />
                </motion.div>
                <motion.div
                    ref={rightDesignScope}
                    initial={{ opacity: 0, x: 100, y: 100 }}
                    className="absolute -right-64 -top-16 hidden"
                    drag
                >
                    <Image src={designExample2Image} alt="" draggable="false" />
                </motion.div>

                <motion.div
                    ref={rightPointerScope}
                    initial={{ opacity: 0, x: 275, y: 100 }}
                    className="absolute right-80 -top-4 hidden"
                >
                    <Pointer name="Show Reel" color="red" />
                </motion.div>

                <div className="portrait size-32 rounded-full mx-auto mb-4">
                    <Image src={portrait} alt="Profile Image" className="" />
                </div>
                <div className="flex justify-center">
                    <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold gap-2">
                        <span>👋</span> {"  "}I&apos;m Marsel. I specialize in
                    </div>
                </div>
                <h1 className="text-5xl md:text-7xl lg:text-[90px] tracking-tight font-medium text-center mt-6 text-white">
                    Crafting state-of-the-art digital experiences
                </h1>
                <p className="text-center text-lg md:text-2xl text-white/50 mt-8 max-w-2xl mx-auto">
                    I apply cutting-edge tools to deliver feature-rich
                    applications that both feels great and satisfies client
                    requirements. Let me take your ideas from concept to{" "}
                    <span className="inline-block relative ">
                        {" "}
                        product.
                        {/* <span className="hidden md:block text-4xl text-lime-500 absolute -right-5 top-5 ">
                            ⤸
                        </span> */}
                    </span>
                </p>
                <div className="flex rounded-full mt-8 justify-center items-center min-w-max max-w-lg mx-auto">
                    <Button
                        variant="primary"
                        className="whitespace-nowrap flex items-center gap-2 m-2"
                    >
                        <span className="font-medium">SAY HI</span>
                        {/* <span className="btn-icon flex items-center ">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                width="24"
                                height="24"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="lucide lucide-send"
                            >
                                <path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z" />
                                <path d="m21.854 2.147-10.94 10.939" />
                            </svg>
                        </span> */}
                    </Button>
                </div>
            </div>
        </section>
    );
};

export default Hero;
