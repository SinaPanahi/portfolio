import React from "react";

export default function SkillsWrapper({ children }) {
    return (
        <div
            id="skills"
            className="mx-36 my-12 flex flex-wrap gap-24 text-slate-300"
        >
            {children}
        </div>
    );
}
