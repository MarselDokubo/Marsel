"use client";

import nextLogo from "@/assets/images/lang-icons/nextjs.svg";
import reactLogo from "@/assets/images/lang-icons/react.svg";
import tailwindLogo from "@/assets/images/lang-icons/tailwindcss.svg";
import nodejsLogo from "@/assets/images/lang-icons/nodejs.svg";
import githubLogo from "@/assets/images/lang-icons/github-outline.svg";
import threejsLogo from "@/assets/images/lang-icons/three-js-icon.svg";
import sassLogo from "@/assets/images/lang-icons/sass.svg";
import gsapLogo from "@/assets/images/lang-icons/gsap.svg";
import Image from "next/image";
import Tag from "@/components/tag";
import { Fragment } from "react";
import { motion } from "framer-motion";

const logos = [
    { name: "Nextjs", image: nextLogo },
    { name: "React", image: reactLogo },
    { name: "TailwindCSS", image: tailwindLogo },
    { name: "NodeJS", image: nodejsLogo },
    { name: "Github", image: githubLogo },
    { name: "ThreeJS", image: threejsLogo },
    { name: "Sass", image: sassLogo },
    { name: "GSAP", image: gsapLogo },
];

export default function LogoTicker() {
    return (
        <section className="py-24 overflow-x-clip">
            <div className="container">
                <div className="flex items-center justify-center">
                    <Tag>Tools in my belt</Tag>
                </div>
                <div className="flex overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        animate={{
                            x: "-50%",
                        }}
                        transition={{
                            duration: 120,
                            ease: "linear",
                            repeat: Infinity,
                        }}
                        className="flex gap-24 pr-24 flex-none"
                    >
                        {Array.from({ length: 2 }).map((_, i) => (
                            <Fragment key={i}>
                                {logos.map((logo) => (
                                    <Image
                                        key={logo.name}
                                        src={logo.image}
                                        alt={logo.name}
                                        width={155}
                                        height={34}
                                        className="w-12"
                                    />
                                ))}
                            </Fragment>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
