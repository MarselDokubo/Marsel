import Tag from "@/components/tag";
import figmaIcon from "@/assets/images/figma-logo.svg";
import notionLogo from "@/assets/images/notion-logo.svg";
import slackLogo from "@/assets/images/slack-logo.svg";
import githubLogo from "@/assets/images/github-logo.svg";
import relumeLogo from "@/assets/images/relume-logo.svg";
import framerLogo from "@/assets/images/framer-motion.svg";
import IntegrationColumn from "@/components/integration-column";

const integrations = [
    {
        name: "Figma",
        icon: figmaIcon,
        description: "Pixel perfect Figma to code conversion.",
    },
    {
        name: "Notion",
        icon: notionLogo,
        description: "Notion is an all-in-one workspace for notes and docs.",
    },
    {
        name: "Slack",
        icon: slackLogo,
        description: "Collaborative team projects on slack",
    },
    {
        name: "Relume",
        icon: relumeLogo,
        description: "Relume is a no-code website builder and design system.",
    },
    {
        name: "Framer",
        icon: framerLogo,
        description: "Framer is a professional website prototyping tool.",
    },
    {
        name: "GitHub",
        icon: githubLogo,
        description: "GitHub is the leading platform for code collaboration.",
    },
];

export type IntegrationsType = typeof integrations;

export default function Integrations() {
    return (
        <section className="py-16 md:py-24 overflow-hidden">
            <div className="container">
                <div className="grid lg:grid-cols-2 items-center lg:gap-16">
                    <div className="">
                        <Tag>MY FORTE</Tag>
                        <h2 className="text-5xl md:text-7xl  font-medium mt-6 text-[rgb(204,204,204)]">
                            Areas I{" "}
                            <span className="text-lime-400/90">Excel</span>
                        </h2>
                        <p className="text-white/50 mt-4 text-lg">
                            In the course of my journey, I have picked up and
                            dare I say mastered some very particular set of
                            skills
                        </p>
                    </div>
                    <div className="">
                        <div className="h-[400px] lg:h-[800px] mt-8 lg:mt-0 overflow-hidden [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)] grid md:grid-cols-2 gap-4">
                            <IntegrationColumn integrations={integrations} />
                            <IntegrationColumn
                                integrations={integrations.slice().reverse()}
                                className="hidden md:flex"
                                reverse
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
