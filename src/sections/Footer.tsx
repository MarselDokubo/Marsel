import logoImage from "@/assets/images/logo_svg.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
const footerLinks = [
    { href: "#", label: "Gtihub" },
    { href: "#", label: "LinkedIn" },
    { href: "#", label: "Twitter" },
    { href: "#", label: "Résumé" },
];

export default function Footer() {
    return (
        <section className="py-16">
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
                                    className="text-white text-sm"
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
