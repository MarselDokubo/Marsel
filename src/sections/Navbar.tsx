"use client";
import Image from "next/image";
import logoImage from "@/assets/images/craft_logo.svg";
import { twMerge } from "tailwind-merge";
import { HireMeBtn } from "@/components/hire-btn";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section className="lg:py-8 z-50 w-screen fixed top-0 text-white/70">
            <div className="md:container px-6 py-8 md:py-4">
                <div className=" flex justify-between items-center">
                    <div className="">
                        <Image
                            src={logoImage}
                            alt="logo Image"
                            className="h-[40px] w-auto"
                        />
                    </div>
                    <div className="border-[0.5px] border-neutral-950/20 rounded-full bg-[#17171799] backdrop-blur hidden md:block relative left-8">
                        <div className="flex justify-between border border-neutral-800  rounded-full items-center ">
                            <div className="nav-container flex justify-center items-center  ">
                                <nav className="flex justify-center items-center gap-8 font-medium md:py-4 md:px-8 text-white/60">
                                    <Link
                                        href={"#"}
                                        className="flex hover:text-white/90 transition-all duration-300"
                                    >
                                        Home{" "}
                                    </Link>
                                    <Link
                                        href={"#about"}
                                        className="flex hover:text-white/90 transition-all duration-500"
                                    >
                                        About
                                    </Link>
                                    <Link
                                        href={"#projects"}
                                        className="flex hover:text-white/90 transition-all duration-500"
                                    >
                                        Works
                                    </Link>
                                    <Link
                                        href={"#faqs"}
                                        className="flex hover:text-white/90 transition-all duration-500"
                                    >
                                        FAQs
                                    </Link>
                                </nav>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:flex gap-4">
                        <HireMeBtn />
                    </div>
                    <div className="menu md:hidden border border-neutral-800 rounded-full p-2 bg-[#17171799] backdrop-blur">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="36"
                            height="36"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-menu"
                            onClick={() => setIsOpen(!isOpen)}
                        >
                            <line
                                x1="3"
                                y1="6"
                                x2="21"
                                y2="6"
                                className={twMerge(
                                    "origin-left transition",
                                    isOpen && "rotate-45 -translate-y-1"
                                )}
                            ></line>
                            <line
                                x1="3"
                                y1="12"
                                x2="21"
                                y2="12"
                                className={twMerge(
                                    "transition",
                                    isOpen && "opacity-0"
                                )}
                            ></line>
                            <line
                                x1="3"
                                y1="18"
                                x2="21"
                                y2="18"
                                className={twMerge(
                                    "origin-left transition",
                                    isOpen && "-rotate-45 translate-y-1"
                                )}
                            ></line>
                        </svg>
                    </div>
                </div>
                <div
                    className={twMerge(
                        "flex flex-col items-center gap-4 rounded-[27px] border border-neutral-800 bg-[#17171799] backdrop-blur md:hidden py-8 mt-4 text-xl font-medium text-white/60 transition-all duration-500 will-change-auto opacity-0 -translate-y-2",
                        isOpen && "opacity-100 translate-y-0"
                    )}
                >
                    <Link
                        href={"#"}
                        className="flex hover:text-white/90 transition-all duration-300"
                    >
                        Home{" "}
                    </Link>
                    <Link
                        href={"#about"}
                        className="flex hover:text-white/90 transition-all duration-500"
                    >
                        About
                    </Link>
                    <Link
                        href={"#projects"}
                        className="flex hover:text-white/90 transition-all duration-500"
                    >
                        Works
                    </Link>
                    <Link
                        href={"#faqs"}
                        className="flex hover:text-white/90 transition-all duration-500"
                    >
                        FAQs
                    </Link>
                    <Link
                        href={"/resume.pdf"}
                        className="flex hover:text-white/90 transition-all duration-500"
                    >
                        Resume
                    </Link>
                </div>
            </div>
        </section>
    );
}
