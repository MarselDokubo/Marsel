import Link from "next/link";
import Button from "./button";

export function HireMeBtn() {
    return (
        <Link
            href={""}
            className="border rounded-full font-medium border-transparent md:border-white inline-flex justify-end md:justify-start gap-2 items-center min-w-max max-w-max relative py-3 md:px-6"
        >
            <span className="hidden md:flex">AVAILABLE</span>
            <span className="relative flex h-5 w-5 md:hidden">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-5 w-5 bg-lime-500"></span>
            </span>
        </Link>
    );
}
