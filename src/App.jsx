import "./App.css";
import CubeBackground from "./components/CubeBackground.jsx";
import LeftPanel from "./components/LeftPanel.jsx";
import RightPanel from "./components/RightPanel.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";
import ExperienceCard from "./components/ExperienceCard.jsx";
import ResumeLink from "./components/ResumeLink.jsx";
import TurningBorder from "./components/TurningBorder.jsx";
import DecorativeBorder from "./components/DecorativeBorder.jsx";
import LavaBackground from "./components/LavaBackground.jsx";
import ExperienceWrapper from "./components/ExperienceWrapper.jsx";

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
                <ExperienceWrapper></ExperienceWrapper>
            </RightPanel>
            <LavaBackground />
        </>
    );
}

export default App;
