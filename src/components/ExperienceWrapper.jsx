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
                        "Fixed bugs related to password reset, registration system, etc",
                        "Implemented an advertisement system to be used by third party agencies ",
                        "Added reporting features, participation report, bulletin board and discussion forum",
                        "Implemented an anonymous client survey system",
                    ],
                    link: "https://www.homelessnessccbtraining.ca/",
                    tags: [
                        "C#",
                        ".NET",
                        "MVC",
                        "Bootstrap",
                        "SQL Server",
                        "JavaScript",
                    ],
                },
                {
                    startDate: "May 2023",
                    title: "Fiona",
                    subtitle: "Self-Motivated",
                    descriptions: [
                        "Developed a complete e-commerce website featuring an independent painter's works using Flask",
                        "Designed a full-fledged, easy to use admin panel",
                        "Implemented a login system with email activation and password reset functionalities",
                        "Installed SSL certification for the website",
                    ],
                    githubLink: "https://github.com/SinaPanahi/Fiona",
                    tags: [
                        "Python",
                        "Flask",
                        "SQL Alchemy",
                        "SQLite",
                        "CSS",
                        "ORM",
                        "OOP",
                    ],
                },
                {
                    startDate: "March 2023",
                    title: "BRER (Bet Respect Earn Respect)",
                    subtitle: "Cross Platform Web Design Course",
                    descriptions: [
                        "Developed a betting website using Flask in which the users would bet on the upcoming games in the National Hockey League (Non monetary bets. Users received respect points upon registration which could be used for betting.)",
                        "Used the NHL API to fetch data and cache them in an SQLite database",
                        "Implemented a robust system for betting on the games and awarding/deducting credits (respect points) to and from users",
                    ],
                    githubLink: "https://github.com/SinaPanahi/Bet-for-Respect",
                    tags: [
                        "Python",
                        "Flask",
                        "SQL Alchemy",
                        "MariaDB",
                        "Tailwind",
                        "OOP",
                        "JavaScript",
                        "Fetch API",
                    ],
                },
                {
                    startDate: "August 2017",
                    title: "ESLToolkit",
                    subtitle: "Self-Motivated",
                    descriptions: [
                        "Developed and maintained an interactive games website with over 200 games for young learners of English using the LAMP Stack",
                        "Created and maintained a database for storing game data and user information",
                        "Developed an API using PHP",
                    ],
                    githubLink: "https://github.com/SinaPanahi/esltoolkit",
                    tags: [
                        "HTML",
                        "CSS",
                        "JavaScript",
                        "MariaDB",
                        "JQuery",
                        "PHP",
                        "API",
                    ],
                },
            ].map((experienceCard, index) => {
                return <ExperienceCard key={index} {...experienceCard} />;
            })}
        </div>
    );
}
