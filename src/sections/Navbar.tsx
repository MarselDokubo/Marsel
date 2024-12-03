"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo_svg.svg";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { HireMeBtn } from "@/components/hire-btn";
import HomeIcon from "@/assets/images/nav-icons/house";
import ProfileIcon from "@/assets/images/nav-icons/profile-icon";
import ProjectIcon from "@/assets/images/nav-icons/project-icon";
import FAQIcon from "@/assets/images/nav-icons/faq-icon";
import { useFragmentContext } from "@/context/fragment-provider";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const currentSection = useFragmentContext();

    return (
        <section className="py-4 lg:py-8 fixed w-full top-0 z-50 ">
            <div className="container max-w-5xl">
                <div className="border border-white/15 rounded-full bg-neutral-950/70 backdrop-blur ">
                    <div className="flex justify-between border border-white/15  rounded-full p-2 px-4 items-center ">
                        <div className="">
                            <Image
                                src={logoImage}
                                alt="logo Image"
                                className="h-7 w-auto"
                            />
                        </div>
                        <div className="nav-container flex-1 flex justify-center items-center  ">
                            <nav className="flex justify-center items-center gap-8 font-medium">
                                <a href={"#"} className="flex gap-1">
                                    <HomeIcon
                                        className={twMerge(
                                            "md:hidden transtion duration-300 text-white/90",
                                            (currentSection === "navigation" ||
                                                currentSection ===
                                                    "logo-ticker" ||
                                                currentSection === "hero") &&
                                                "text-lime-200"
                                        )}
                                    />
                                    <span className="hidden md:inline-block">
                                        Home
                                    </span>
                                </a>
                                <a href={"#about"} className="flex gap-1">
                                    <ProfileIcon
                                        className={twMerge(
                                            "md:hidden transtion duration-300 text-white/90",
                                            currentSection === "introduction" &&
                                                "text-lime-200"
                                        )}
                                    />
                                    <span className="hidden md:inline-block">
                                        About
                                    </span>
                                </a>
                                <a href={"#projects"} className="flex gap-1">
                                    <ProjectIcon
                                        className={twMerge(
                                            "md:hidden transtion duration-300 text-white/90",
                                            (currentSection === "features" ||
                                                currentSection ===
                                                    "integrations") &&
                                                "text-lime-200"
                                        )}
                                    />
                                    <span className="hidden md:inline-block">
                                        Works
                                    </span>
                                </a>
                                <a href={"#faqs"} className="flex gap-1">
                                    <FAQIcon
                                        className={twMerge(
                                            "md:hidden transtion duration-300 text-white/90",
                                            currentSection === "faqs" &&
                                                "text-lime-200"
                                        )}
                                    />
                                    <span className="hidden md:inline-block">
                                        FAQs
                                    </span>
                                </a>
                            </nav>
                        </div>
                        <div className="flex gap-4">
                            <HireMeBtn />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
