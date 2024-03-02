import "./App.css";
import CubeBackground from "./components/CubeBackground.jsx";
import TwoColumnLayout from "./components/TwoColumnLayout.jsx";
import OneColumnLayout from "./components/OneColumnLayout.jsx";
import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";

function App() {
    return (
        <CubeBackground>
            <TwoColumnLayout>
                <OneColumnLayout>
                    <Header />
                    <Navigation />
                </OneColumnLayout>
                <OneColumnLayout></OneColumnLayout>
            </TwoColumnLayout>
        </CubeBackground>
    );
}

export default App;
