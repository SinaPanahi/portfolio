import ExperienceCard from "./ExperienceCard";

export default function ExperienceWrapper() {
    return (
        <div
            id="experiences"
            className="mx-0 p-0 lg:pr-32 lg:pl-28 lg:pt-16 leading-10 h-min text-slate-300 font-semibold"
        >
            {[
                {
                    endDate: "Now",
                    startDate: "March 2024",
                    title: "Community Capacity Building Training Portal",
                    subtitle: "Government of Canada",
                    descriptions: [
                        "Upgraded from MVC 3 to 4",
                        "Fixed bugs related to password reset, registration system, etc",
                        "Implemented an advertisement system to be used by third party agencies ",
                        "Added reporting features, participation report, bulletin board and discussion forum",
                        "Implemented an anonymous client survey system",
                    ],
                    link: "#",
                    tags: ["Flask", "API", "CSS", "TypeScript"],
                },
                {
                    startDate: "January 2022",
                    title: "Community Capacity Building Training Portal",
                    subtitle: "Government of Canada",
                    descriptions: [
                        "Upgraded from MVC 3 to 4",
                        "Fixed bugs related to password reset, registration system, etc",
                        "Implemented an advertisement system to be used by third party agencies ",
                        "Added reporting features, participation report, bulletin board and discussion forum",
                        "Implemented an anonymous client survey system",
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
