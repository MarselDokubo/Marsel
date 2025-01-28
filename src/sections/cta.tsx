import Button from "@/components/button";
import Link from "next/link";

export default function CTA() {
    return (
        <section className="py-20">
            <div className="md:container px-[20px]">
                <div className="py-16  px-16 md:px-24 rounded-[31px] block text-center gradient-bg">
                    <div className="md:max-w-xl mx-auto">
                        <h2 className="text-4xl md:text-6xl font-semibold uppercase text-transparent gradient-text">
                            Lets create together
                        </h2>
                        <p className="my-10 text-xl text-white/60">
                            Reach out to me for collaborations, <br />
                            inquiries or just to say hello.
                        </p>
                        <Link
                            href={"mailto:connectmarsel@gmail.com"}
                            target="_blank"
                            className="font-medium mx-auto max-w-max flex"
                        >
                            <Button
                                variant="neutral"
                                className="whitespace-nowrap flex items-center gap-2 m-2"
                            >
                                Contact Me
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}
