import EmailIcon from "./icons/EmailIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";

export default function Header() {
    return (
        // <header className={styles.header}>
        <header className="p-5 leading-5 lg:p-10 lg:leading-10 h-min text-slate-300">
            <h1 className="text-5xl lg:text-6xl">Sina Panahi</h1>
            <h4 className="text-l lg:text-xl font-bold">Web Developer</h4>
            <p className="mt-3 leading-5 font-light lg:mt-4 lg:font-medium">
                Crafting Engaging and Accessible Digital Experiences
            </p>
            <div className="flex mt-5 justify-between pr-10">
                <a href="mailto:s.panahi.m@gmail.com">
                    <EmailIcon className="w-8 h-9 stroke-slate-300 stroke-1 fill-transparent" />
                </a>

                <a href="https://github.com/SinaPanahi" target="_blank">
                    <GithubIcon className="w-9 h-9 stroke-slate-300 stroke-1 fill-transparent" />
                </a>
                <a
                    href="https://www.linkedin.com/in/sina-panahimoradkandi-630a3283/"
                    target="_blank"
                >
                    <LinkedinIcon className="w-8 h-8 stroke-slate-300 stroke-1 fill-transparent" />
                </a>
            </div>
        </header>
    );
}
