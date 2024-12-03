import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
    axes: ["opsz"],
});

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
                className={`${myFont.className} font-sans antialiased  bg-[rgb(15,14,14)] bg-black text-white`}
            >
                {children}
            </body>
        </html>
    );
}
