"use client";
import { FragmentContext } from "@/context/fragment-provider";
import CallToAction from "@/sections/CallToAction";
import Faqs from "@/sections/Faqs";
import Features from "@/sections/Features";
import Footer from "@/sections/Footer";
import Hero from "@/sections/Hero";
import Integrations from "@/sections/Integrations";
import Introduction from "@/sections/Introduction";
import LogoTicker from "@/sections/LogoTicker";
import Navbar from "@/sections/Navbar";
import { useContext, useEffect, useState } from "react";
import { InView } from "react-intersection-observer";
import { createContext } from "vm";

const sections = [
    { id: "navigation", element: <Navbar /> },
    { id: "hero", element: <Hero /> },
    { id: "logo-ticker", element: <LogoTicker /> },
    { id: "introduction", element: <Introduction /> },
    { id: "features", element: <Features /> },
    { id: "integrations", element: <Integrations /> },
    { id: "faqs", element: <Faqs /> },
    { id: "cta", element: <CallToAction /> },
    { id: "footer", element: <Footer /> },
];

export default function Home() {
    const [visibleSection, setVisibleSection] = useState(sections[0].id);
    const setInView = (inView: boolean, entry: any) => {
        if (inView) {
            setVisibleSection(entry.target.getAttribute("id"));
        }
    };

    useEffect(() => {
        window.location.hash = visibleSection;
    }, [visibleSection]);
    return (
        <>
            {sections.map((section, index) => (
                <InView onChange={setInView} threshold={0.4} key={index}>
                    {({ ref }) => {
                        return (
                            <FragmentContext.Provider value={visibleSection}>
                                <div
                                    className="relative"
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
