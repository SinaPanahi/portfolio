import Tag from "./Tag";
import Timeline from "./Timeline";
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa";

export default function ExperienceCard({
    endDate,
    startDate,
    title,
    subtitle,
    descriptions = [],
    tags,
    githubLink = "",
    link = "",
}) {
    return (
        <div className="leading-10 mt-16 lg:mt-0 px-12 lg:px-0 h-min grid grid-cols-5 gap-5 text-md">
            <div>
                <Timeline endDate={endDate} startDate={startDate} />
            </div>
            <div className="col-span-4">
                <div>
                    {githubLink !== "" && (
                        <a
                            href={githubLink}
                            target="_blank"
                            className="inline-block align-middle"
                        >
                            <FaGithub className="w-6 h-6 text-slate-300 relative right-5" />
                        </a>
                    )}
                    {link !== "" && (
                        <a
                            href={link}
                            target="_blank"
                            className="inline-block align-middle ml-3"
                        >
                            <FaLink className="w-6 h-6 text-slate-300 relative right-5" />
                        </a>
                    )}
                    <span>{title}</span> -{" "}
                    <span className="font-light">{subtitle}</span>
                </div>
                <ul>
                    {descriptions.map((description, index) => {
                        return (
                            <li
                                key={index}
                                className="list-disc leading-6 font-normal text-sm"
                            >
                                {description}
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-5">
                    {tags.map((tag, index) => {
                        return <Tag key={index} tagText={tag} />;
                    })}
                </div>
            </div>
        </div>
    );
}
