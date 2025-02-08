import FeatureCard from "@/components/feature-card";
import Tag from "@/components/tag";
import Image from "next/image";
import Avatar from "@/components/avatar";
import qpayyImage from "@/assets/images/portfolio/qpayy.png";
import currateImage from "@/assets/images/portfolio/Currate.png";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";

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
            <div className="px-[20px] md:px-16">
                <div className="flex justify-center">
                    <Tag>Featured Projects</Tag>
                </div>

                <h2 className="text-5xl md:text-7xl  tracking-tight font-medium text-center mt-6 max-w-2xl mx-auto text-white">
                    Next-Gen <span className="text-lime-400/90">Apps</span>
                </h2>
                <div className="feature-cards mt-12 max-w-[1280px] mx-auto grid grid-cols-1 md:grid-cols-4  lg:grid-cols-3 gap-8">
                    <FeatureCard
                        title="Currate"
                        description="Integrate and automate seemlessly across different platforms."
                        className="md:col-span-2 lg:col-span-1"
                        link="#"
                    >
                        <div className="overflow-hidden relative flex items-center justify-center h-full w-full rounded-2xl">
                            <div
                                className="
                            shadow-sm absolute inset-0 m-auto"
                            >
                                <Image
                                    src={currateImage}
                                    alt="MildPay Image"
                                    className="object-cover absolute m-auto"
                                />
                            </div>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Dionysus"
                        description="An AI powered collaborative platform with github integration for coordinating team workflows."
                        className="md:col-span-2 lg:col-span-1"
                        link="#"
                    >
                        <div className="flex gap-2 flex-wrap">
                            <Avatar className="z-40 border-teal-700">
                                <Image
                                    src={avatar1}
                                    alt=""
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-30 border-indigo-500">
                                <Image
                                    src={avatar2}
                                    alt=""
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt=""
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 z-10 border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full flex gap-1 items-center justify-center">
                                    <span className="size-1.5 rounded-full bg-white inline-block"></span>
                                    <span className="size-1.5 rounded-full bg-white inline-block"></span>
                                    <span className="size-1.5 rounded-full bg-white inline-block"></span>
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="QPayy"
                        description="A country based payment platform for web based products with clickstream monitoring integration."
                        className="md:col-span-2 md:col-start-2 lg:col-span-1"
                        link="https://qpayy.vercel.app"
                    >
                        <div className="overflow-hidden relative flex items-center justify-center h-full w-full rounded-2xl">
                            <div
                                className="
                            shadow-sm absolute inset-0 m-auto"
                            >
                                <Image
                                    src={qpayyImage}
                                    alt="MildPay Image"
                                    className="object-cover absolute m-auto opacity-90"
                                />
                            </div>
                        </div>
                    </FeatureCard>
                </div>
                <div className="mt-8 flex flex-wrap gap-3 justify-center container">
                    {features.map((feature) => (
                        <div
                            className="bg-neutral-900 border border-white/10 inline-flex px-3 md:px-5 py-1.5 md:py-2 rounded-2xl gap-3 items-center hover:scale-105 transition duration-500 group"
                            key={feature}
                        >
                            <span className="bg-lime-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl group-hover:rotate-45 transition duration-500">
                                &#10038;
                            </span>
                            <span className="font-medium md:text-lg text-white/60">
                                {feature}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
