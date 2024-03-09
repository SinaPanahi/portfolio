import "./App.css";
import LeftPanel from "./components/LeftPanel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import TurningBorder from "./components/TurningBorder.jsx";
import LavaBackground from "./components/LavaBackground.jsx";
import ExperienceWrapper from "./components/ExperienceWrapper.jsx";
import SkillsWrapper from "./components/SkillsWrapper.jsx";
import DecorativeBorder from "./components/DecorativeBorder.jsx";

import { Tooltip } from "react-tooltip";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaPython } from "react-icons/fa";
import { SiCsharp } from "react-icons/si";
import { SiPhp } from "react-icons/si";
import { PiFileSqlFill } from "react-icons/pi";
import { SiSqlite } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
import { SiTailwindcss } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiDotnet } from "react-icons/si";
import { SiFlask } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiMariadb } from "react-icons/si";
import { SiJquery } from "react-icons/si";
import { FaGithub } from "react-icons/fa";
import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { CgFigma } from "react-icons/cg";

function App() {
    return (
        <>
            <LeftPanel>
                <TurningBorder>
                    <Header />
                </TurningBorder>
                <Navigation />
            </LeftPanel>
            <RightPanel>
                <About />
                <ExperienceWrapper />
                <SkillsWrapper>
                    <FaHtml5 className="w-8 h-8 lg:w-12 lg:h-12" />
                    <FaCss3Alt className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiJavascript className="w-8 h-8 lg:w-12 lg:h-12 rounded-md" />
                    <SiTypescript className="w-8 h-8 lg:w-12 lg:h-12" />
                    <FaReact className="w-8 h-8 lg:w-12 lg:h-12" />
                    <FaGithub className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiNextdotjs className="w-8 h-8 lg:w-12 lg:h-12" />
                    <FaBootstrap className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiTailwindcss className="w-8 h-8 lg:w-12 lg:h-12" />
                    <FaPython className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiFlask className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiCsharp className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiDotnet className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiPhp className="w-8 h-8 lg:w-12 lg:h-12" />
                    <PiFileSqlFill className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiMongodb className="w-8 h-8 lg:w-12 lg:h-12" />
                    <BiLogoPostgresql className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiSqlite className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiMariadb className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiJquery className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiAdobephotoshop className="w-8 h-8 lg:w-12 lg:h-12" />
                    <SiAdobeillustrator className="w-8 h-8 lg:w-12 lg:h-12" />
                    <CgFigma className="w-8 h-8 lg:w-12 lg:h-12" />
                </SkillsWrapper>
            </RightPanel>
            <LavaBackground />
            <DecorativeBorder />
        </>
    );
}

export default App;
