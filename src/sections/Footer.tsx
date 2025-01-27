import logoImage from "@/assets/images/logo.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
const footerLinks = [
    { href: "https://github.com/MarselDokubo", label: "Gtihub" },
    {
        href: "https://www.linkedin.com/in/marsel-dokubo-7b315722a",
        label: "LinkedIn",
    },
    { href: "https://x.com/MarselDokubo", label: "Twitter" },
    { href: "/resume.pdf", label: "Résumé" },
];

export default function Footer() {
    return (
        <section className="py-16 pt-0 md:pt-16">
            <div className="container">
                <div className="flex flex-col md:flex-row md:justify-between items-center gap-6">
                    <div className="">
                        <Image
                            src={logoImage as unknown as StaticImport}
                            alt="logo image"
                            className="h-9 w-auto"
                        />
                    </div>
                    <div className="">
                        <nav className="flex gap-6">
                            {footerLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="text-white/60 text-sm md:text-base md:font-medium"
                                    target="_blank"
                                >
                                    {link.label}
                                </a>
                            ))}
                        </nav>
                    </div>
                </div>
            </div>
        </section>
    );
}
