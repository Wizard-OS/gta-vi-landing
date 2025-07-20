import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import Hero from "./sections/Hero.jsx";
import NavBar from "./sections/NavBar.jsx";
import FirstVideo from "./sections/FirstVideo.jsx";

gsap.registerPlugin(ScrollTrigger);

const App = () => {

    return (
        <main>
            <NavBar/>
            <Hero/>
            <FirstVideo/>
        </main>
    )
}

export default App