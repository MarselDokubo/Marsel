import FeatureCard from "@/components/feature-card";
import Tag from "@/components/tag";
import avatar1 from "@/assets/images/avatar-ashwin-santiago.jpg";
import avatar2 from "@/assets/images/avatar-lula-meyers.jpg";
import avatar3 from "@/assets/images/avatar-florence-shaw.jpg";
import Image from "next/image";
import Avatar from "@/components/avatar";
import Key from "@/components/key";
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
                        <div className="flex items-center justify-center aspect-video">
                            <Avatar className="z-40">
                                <Image
                                    src={avatar1}
                                    alt="avatar 1"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border border-indigo-500 z-30">
                                <Image
                                    src={avatar2}
                                    alt="avatar 2"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border-amber-500 z-20">
                                <Image
                                    src={avatar3}
                                    alt="avatar 3"
                                    className="rounded-full"
                                />
                            </Avatar>
                            <Avatar className="-ml-6 border border-transparent">
                                <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1">
                                    {Array.from({ length: 3 }).map((_, i) => (
                                        <span
                                            className="size-1.5 rounded-full bg-white inline-flex"
                                            key={i}
                                        ></span>
                                    ))}
                                </div>
                            </Avatar>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Interactive Prototyping"
                        description="Engage your client with prototypes that react to user actions"
                        className="md:col-span-2"
                    >
                        <div className="aspect-video  flex items-center justify-center">
                            <p className="text-4xl font-extrabold text-white/20 text-center">
                                We&apos;ve achieved{" "}
                                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                                    incredible
                                </span>{" "}
                                growth this year.
                            </p>
                        </div>
                    </FeatureCard>
                    <FeatureCard
                        title="Keyboard Quick Action"
                        description="Powerful commands to help you create design more quickly"
                        className="md:col-span-2 md:col-start-2"
                    >
                        <div className="aspect-video flex items-center justify-center gap-4">
                            <Key className="w-28">shift</Key>
                            <Key className="">alt</Key>
                            <Key className="">C</Key>
                        </div>
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
