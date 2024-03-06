import ExperienceCard from "./ExperienceCard";

export default function ExperienceWrapper() {
    return (
        <div
            id="experiences"
            className="mx-0 p-0 lg:pr-32 lg:pl-28 lg:py-16 leading-10 h-min text-slate-300 font-semibold"
        >
            {[
                {
                    date: "2021-Now",
                    title: "Fiona",
                    subtitle: "E-Commerce Website",
                    descriptions: [
                        "Developed a complete e-commerce website featuring an independent painter’s works using Flask",
                        "Designed a full-fledged, easy to use admin panel",
                        "Implemented a login system with email activation and password reset functionalities",
                        "Installed SSL certification for the website",
                    ],
                    link: "#",
                    tags: ["Flask", "API", "CSS", "TypeScript"],
                },
            ].map((experienceCard) => {
                return <ExperienceCard {...experienceCard} />;
            })}
        </div>
    );
}
