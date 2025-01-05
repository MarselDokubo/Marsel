import FeatureCard from "@/components/feature-card";
import Tag from "@/components/tag";

import Image from "next/image";
import currateImg from "@/assets/images/portfolio/Currate.png";
import dionysusImg from "@/assets/images/portfolio/Dionysus.png";
const features = [
    "Interactive",
    "Pixel Perfect",
    "Secure",
    "Scalable",
    "Accessible",
    "User Friendly",
    "Responsive",
];

export default function Features() {
    return (
        <section id="projects" className="py-16 md:py-24">
            <div className="container">
                <div className="flex justify-center">
                    <Tag>Featured Projects</Tag>
                </div>

                <h2 className="text-5xl md:text-7xl  tracking-tight font-medium text-center mt-6 max-w-2xl mx-auto">
                    Next-Gen <span className="text-lime-400">Apps</span>
                </h2>
                <div className="feature-cards mt-12 grid grid-cols-1 md:grid-cols-4  lg:grid-col-span-3 gap-8">
                    <FeatureCard
                        title="Real Time Collaboration"
                        description="Work together seemlessly with conflict free team editing"
                        className="md:col-span-2"
                    >
                        <div className="flex items-center justify-center aspect-video bg-slate-950 rounded-2xl overflow-hidden">
                            <Image
                                src={currateImg}
                                className="rounded-2xl"
                                alt=""
                            />
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your client with prototypes that react to user actions"
                        className="md:col-span-2"
                    >
                        <div className="flex items-center justify-center aspect-video bg-slate-950 rounded-2xl overflow-hidden">
                            <Image
                                src={dionysusImg}
                                className="rounded-2xl"
                                alt=""
                            />
                        </div>{" "}
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Action"
                        description="Powerful commands to help you create design more quickly"
                        className="md:col-span-2 md:col-start-2"
                    >
                        <div className="flex items-center justify-center aspect-video bg-slate-950 rounded-2xl overflow-hidden">
                            <Image
                                src={currateImg}
                                className="rounded-2xl"
                                alt=""
                            />
                        </div>{" "}
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center">
                    {features.map((feature) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                            key={feature}
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
