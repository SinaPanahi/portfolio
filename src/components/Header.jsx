import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { FaLinkedin } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import resume from "./Sina_Panahimoradkandi_Resume.pdf";

export default function Header() {
    return (
        <header className="p-5 leading-5 lg:p-10 lg:leading-10 h-min text-slate-300">
            <h1 className="text-5xl lg:text-6xl">Sina Panahi</h1>
            <h4 className="text-l lg:text-xl font-bold">Web Developer</h4>
            <p className="mt-3 leading-5 font-light lg:mt-4 lg:font-medium">
                Crafting Engaging and Accessible Digital Experiences
            </p>
            <div className="flex mt-5 justify-between pr-10">
                <a href="mailto:s.panahi.m@gmail.com">
                    <HiMail className="w-9 h-9 text-slate-300" />
                </a>

                <a href="https://github.com/SinaPanahi" target="_blank">
                    <FaGithub className="w-9 h-9 text-slate-300" />
                </a>
                <a
                    href="https://www.linkedin.com/in/sina-panahimoradkandi-630a3283/"
                    target="_blank"
                >
                    <FaLinkedin className="w-9 h-9 text-slate-300" />
                </a>

                <a href={resume} download>
                    <FaFilePdf className="w-9 h-9 text-slate-300" />
                </a>
            </div>
        </header>
    );
}
