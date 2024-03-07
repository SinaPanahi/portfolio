import Tag from "./Tag";
import Timeline from "./Timeline";
import GithubLogo from "./icons/GithubIcon";
import LineIcon from "./icons/LineIcon";

export default function ExperienceCard({
    endDate,
    startDate,
    title,
    subtitle,
    descriptions = [],
    link,
    tags,
}) {
    return (
        <div className="leading-10 mt-16 lg:mt-0 px-12 lg:px-0 h-min grid sm:grid-cols-1 lg:grid-cols-5 gap-5 text-md">
            <div className="row-span-2">
                <Timeline endDate={endDate} startDate={startDate} />
            </div>
            <div className="lg:col-span-4">
                <div>
                    <a
                        href={link}
                        target="_blank"
                        className="inline-block align-middle"
                    >
                        <GithubLogo className="w-7 h-7 stroke-slate-300 stroke-1 fill-transparent relative bottom-1 right-3" />
                    </a>
                    {"   "}
                    <span>{title}</span> -{" "}
                    <span className="font-light">{subtitle}</span>
                </div>
                <ul>
                    {descriptions.map((description) => {
                        return (
                            <li className="list-disc leading-6 font-normal text-sm">
                                {description}
                            </li>
                        );
                    })}
                </ul>

                <div className="mt-5">
                    {tags.map((tag) => {
                        return <Tag tagText={tag} />;
                    })}
                </div>
            </div>
        </div>
    );
}
