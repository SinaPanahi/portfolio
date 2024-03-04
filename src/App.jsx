import "./App.css";
import CubeBackground from "./components/CubeBackground.jsx";
import ThreeColumnLayout from "./components/ThreeColumnLayout.jsx";
import TwoColumnLayout from "./components/TwoColumnLayout.jsx";
import OneColumnLayout from "./components/OneColumnLayout.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import About from "./components/About.jsx";

function App() {
    return (
        <CubeBackground>
            <ThreeColumnLayout>
                <Header />
                {/* <Navigation /> */}
            </ThreeColumnLayout>
            {/* <ThreeColumnLayout>
                
                <TwoColumnLayout>
                    <About />
                </TwoColumnLayout>
            </ThreeColumnLayout> */}
        </CubeBackground>
    );
}

export default App;
