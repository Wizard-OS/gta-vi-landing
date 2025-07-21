import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Hero from "./sections/Hero.jsx";
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";
import JasonDuval from "./sections/JasonDuval.jsx";
import SecondVideo from "./sections/SecondVideo.jsx";
import LuciaCaminos from "./sections/LuciaCaminos.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

    return (
        <main>
            <NavBar/>
            <Hero/>
            <FirstVideo/>
            <JasonDuval/>
            <SecondVideo/>
            <LuciaCaminos/>
        </main>
    )
}

export default App