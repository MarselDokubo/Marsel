import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const myFont = localFont({
    src: "../assets/fonts/helvetica-neue-lt-std-roman.otf",
    display: "swap",
    fallback: ["Helvetica"],
});

export const metadata: Metadata = {
    title: "Marsel Developer Portfolio",
    description:
        "My personal portfolio website for showcasing some of my work and sharing my ideas",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body
                className={`${myFont.className} font-sans antialiased bg-neutral-950 text-white`}
            >
                {children}
            </body>
        </html>
    );
}
