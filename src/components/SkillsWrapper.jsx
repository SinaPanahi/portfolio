import React from "react";

export default function SkillsWrapper({ children }) {
    return (
        <div
            id="skills"
            className="mx-10 my-10 lg:mx-36 lg:my-24 justify-center flex flex-wrap gap-10 lg:gap-14 text-slate-300"
        >
            {children}
        </div>
    );
}
