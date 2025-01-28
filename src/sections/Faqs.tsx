"use client";
import Tag from "@/components/tag";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
// import Button from "@/components/button";

// const faqs = [
//     {
//         question: "How long does it take to build a website?",
//         answer: "It depends on the complexity of the website and the scope of the project.",
//     },
//     {
//         question: "What is your development process like?",
//         answer: "I follow a hands-on approach starting with project planning, building out the core features, and regular check-ins to make sure everything matches your needs.",
//     },
//     {
//         question: "Do you work with international clients?",
//         answer: "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
//     },
//     {
//         question: "What industries do you specialize in?",
//         answer: "I have experience across various industries including technology, retail, hospitality, and professional services, bringing fresh perspectives to each project.",
//     },
// ];

const faqs = [
    {
        question: "Are you open to collaborations?",
        answer: "Teaming up is a yes. I view collaborations as opportunity network, express creativity and learn from a group or community.",
    },
    {
        question: "Would you join a startup?",
        answer: "Startups are a thrill. The idea of building something from the ground up is a famous ritual in this field particularly and is definitely one that I would partake in.",
    },
    {
        question: "Do you work with international clients?",
        answer: "Yes, I work with clients globally and can accommodate different time zones for meetings and communication.",
    },
    {
        question: "Do you work remotely?",
        answer: "Yes I do. I've worked remotely before and have all the tools and setup I need to stay productive and in sync with a team.",
    },
];

export default function Faqs() {
    const [selectedIndex, setSelectedIndex] = useState(0);
    return (
        <section id="faqs" className="py-20 md:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>FAQs</Tag>
                </div>
                <h2 className="text-5xl md:text-7xl  font-medium mt-6 text-center max-w-xl mx-auto text-white">
                    Questions? I&apos;ve got{" "}
                    <span className="text-lime-400/90">answers.</span>
                </h2>
                <div className="mt-12 flex flex-col gap-6 max-w-xl mx-auto">
                    {faqs.map((faq, faqIndex) => (
                        <div
                            className="bg-neutral-900 rounded-2xl border border-white/10 p-6"
                            key={faq.question}
                        >
                            <div
                                onClick={() => setSelectedIndex(faqIndex)}
                                className="flex justify-between items-center"
                            >
                                <h3 className="font-medium">{faq.question}</h3>
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
                                    className={twMerge(
                                        "feather feather-plus text-lime-400 flex-shrink-0 transition duration-300",
                                        selectedIndex === faqIndex &&
                                            "rotate-45"
                                    )}
                                >
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                </svg>
                            </div>
                            <AnimatePresence>
                                {selectedIndex === faqIndex && (
                                    <motion.div
                                        initial={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        animate={{
                                            height: "auto",
                                            marginTop: 24,
                                        }}
                                        exit={{
                                            height: 0,
                                            marginTop: 0,
                                        }}
                                        className={twMerge("overflow-hidden")}
                                    >
                                        <p className="text-white/50">
                                            {faq.answer}
                                        </p>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
                {/* <form
                    action=""
                    id="faq"
                    className="flex flex-col max-w-xl mx-auto gap-2 mt-6"
                >
                    <textarea
                        placeholder="Ask a question"
                        className="h-24 bg-neutral-900 rounded-2xl border border-white/10 p-6 focus:outline-none focus:border-white/50"
                    ></textarea>{" "}
                    <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Enter an email"
                        className="bg-neutral-900 rounded-2xl border border-white/10 p-6 focus:outline-none focus:border-white/50"
                    />
                    <Button className="max-w-max self-end" variant="primary">
                        Submit
                    </Button>
                </form> */}
            </div>
        </section>
    );
}
