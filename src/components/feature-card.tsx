import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";
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
                "bg-neutral-900 border border-white/10 p-6 rounded-3xl",
                className
            )}
        >
            <div className="image-container aspect-video">{children}</div>
            <div className="content">
                <h3 className="text-3xl font-medium mt-6">{title}</h3>
                <p className="text-white/50 mt-2">
                    <Button variant={"link"}>Visit Site</Button>
                </p>
            </div>
        </div>
    );
}
