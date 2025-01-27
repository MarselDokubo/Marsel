import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
import Link from "next/link";
import { Button } from "./ui/button";

export default function FeatureCard(props: {
    children: ReactNode;
    title: string;
    description: string;
    className?: string;
}) {
    const { children, title, description, className } = props;
    return (
        <div
            className={twMerge(
                "bg-neutral-900 border border-white/10 p-10 rounded-3xl flex flex-col  justify-between h-[429px]",
                className
            )}
        >
            <div className="content">
                <div className="flex justify-between items-center">
                    <h3 className="text-3xl font-medium ">{title}</h3>
                </div>
                <p className="text-white/50 leading-5 mt-4">{description}</p>
            </div>
            <div className="image-container relative aspect-video flex items-center justify-center">
                {children}
            </div>
            <div className="links flex items-center">
                <Button variant={"secondary"} className="text-base">
                    <Link href={""}>Live site</Link>
                </Button>
                <Button variant={"link"} className="text-white text-base">
                    Source Code
                </Button>
            </div>
        </div>
    );
}
