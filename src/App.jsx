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
                    <FaHtml5 className="w-20 h-20" />
                    <FaCss3Alt className="w-20 h-20" />
                    <SiJavascript className="w-20 h-20 rounded-md" />
                    <SiTypescript className="w-20 h-20" />
                    <FaReact className="w-20 h-20" />
                    <SiNextdotjs className="w-20 h-20" />
                    <FaBootstrap className="w-24 h-24" />
                    <SiTailwindcss className="w-20 h-20" />
                    <FaPython className="w-20 h-20" />
                    <SiFlask className="w-20 h-20" />
                    <SiCsharp className="w-20 h-20" />
                    <SiDotnet className="w-20 h-20" />
                    <SiPhp className="w-20 h-20" />
                    <PiFileSqlFill className="w-20 h-20" />
                    <SiMongodb className="w-20 h-20" />
                    <BiLogoPostgresql className="w-20 h-20" />
                    <SiSqlite className="w-20 h-20" />
                    <SiMariadb className="w-20 h-20" />
                </SkillsWrapper>
            </RightPanel>
            <LavaBackground />
        </>
    );
}

export default App;
