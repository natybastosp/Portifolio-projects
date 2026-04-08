import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);
// ScrollTrigger synchronizes animations with the page scroll, starting, pausing, or reversing effects as the user scrolls.
// SplitText divides text into characters, words, or lines to enable more detailed and creative animations.

const App = () => {
  return (
    <main>
      <Navbar />
    </main>
  );
};

export default App;
