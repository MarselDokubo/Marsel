"use client";
import { FragmentContext } from "@/context/fragment-provider";
import CTA from "@/sections/cta";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import { useState } from "react";
import { InView } from "react-intersection-observer";

const sections = [
    { id: "navigation", element: <Navbar /> },
    { id: "hero", element: <Hero /> },
    { id: "logo-ticker", element: <LogoTicker /> },
    { id: "introduction", element: <Introduction /> },
    { id: "features", element: <Features /> },
    { id: "faqs", element: <Faqs /> },
    { id: "cta", element: <CTA /> },
    { id: "footer", element: <Footer /> },
];

export default function Home() {
    const [visibleSection, setVisibleSection] = useState(sections[0].id);
    // @ts-expect-error ignore the type error. I don't know the type
    const setInView = (inView, entry) => {
        if (inView) {
            setVisibleSection(entry.target.getAttribute("id"));
        }
    };

    return (
        <>
            {sections.map((section, index) => (
                <InView onChange={setInView} threshold={0.4} key={index}>
                    {({ ref }) => {
                        return (
                            <FragmentContext.Provider value={visibleSection}>
                                <div
                                    className="relative overflow-x-clip"
                                    id={section.id}
                                    ref={ref}
                                >
                                    {section.element}
                                </div>
                            </FragmentContext.Provider>
                        );
                    }}
                </InView>
            ))}
        </>
    );
}
