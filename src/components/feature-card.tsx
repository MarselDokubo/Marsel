import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

export default function FeatureCard(props: {
    children: ReactNode;
    title: string;
    description: string;
    link: string;
    className?: string;
}) {
    const { children, title, description, className, } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-[10px] rounded-3xl  justify-between md:h-[500px]",
                className
            )}
        >
            <div className="content">
                <div className="header flex justify-between items-center p-1">
                    <div className="logo text-2xl font-extrabold"></div>
                    <div className="external-link size-9 rounded-full bg-neutral-800 text-white/80 font-semibold flex items-center justify-center text-2xl">
                        &#11047;
                    </div>
                </div>
                <div className="card-title my-4 uppercase flex justify-center">
                    <h2 className="text-3xl font-semibold">{title}</h2>
                </div>
            </div>
            <div className="image-container relative flex items-center justify-center rounded-[20px] aspect-[16/12] overflow-hidden bg-[rgb(17_17_17)]">
                {children}
                {/* <div className="absolute bottom-3">
                    <a href={link} target="_blank">
                        <Button
                            variant={"secondary"}
                            className="rounded-full py-1 text-base bg-white backdrop-blur shadow-md"
                        >
                            Live Site
                        </Button>
                    </a>
                </div> */}
            </div>
            <div className="card-description my-5 px-3">
                <p className="text-white/50 leading-5 mt-4 text-center ">
                    {description}
                </p>
            </div>
        </div>
    );
}
