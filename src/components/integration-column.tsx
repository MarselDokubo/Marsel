"use client";

import { type IntegrationsType } from "@/sections/Integrations";
import Image from "next/image";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";
import { Fragment } from "react";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
export default function IntegrationColumn(props: {
    integrations: IntegrationsType;
    className?: string;
    reverse?: boolean;
}) {
    const { integrations, className, reverse } = props;
    return (
        <motion.div
            animate={{ y: reverse ? 0 : "-50%" }}
            initial={{
                y: reverse ? "-50%" : 0,
            }}
            transition={{
                duration: 30,
                repeat: Infinity,
                ease: "linear",
            }}
            className={twMerge("flex flex-col gap-4 pb-4", className)}
        >
            {Array.from({ length: 2 }).map((_, i) => (
                <Fragment key={i}>
                    {integrations.map((integration) => (
                        <div
                            className="bg-neutral-900 border border-white/10 rounded-3xl p-6"
                            key={integration.name}
                        >
                            <div className="flex justify-center">
                                <Image
                                    src={
                                        integration.icon as unknown as StaticImport
                                    }
                                    alt=""
                                    className="size-24"
                                />
                            </div>
                            <h3 className="title text-3xl text-center mt-6"></h3>
                            <p className="desc text-center text-white/50  mt-2">
                                {integration.description}
                            </p>
                        </div>
                    ))}
                </Fragment>
            ))}
        </motion.div>
    );
}
