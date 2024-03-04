import Tag from "./Tag";

export default function ExperienceCard({ date, role, description, tags }) {
    return (
        <div className="mx-10 p-10 leading-10 h-min grid sm:grid-cols-1 lg:grid-cols-3 bg-red-500">
            <div>
                <span>{date}</span>
                <h4>{role}</h4>
            </div>
            <div className="lg:col-span-2">
                <p>{description}</p>
                <div className="mt-5">
                    {tags.map((tag) => {
                        return <Tag tagText={tag} />;
                    })}
                </div>
            </div>
        </div>
    );
}
