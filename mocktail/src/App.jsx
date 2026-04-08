import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";

gsap.registerPlugin(ScrollTrigger, SplitText);
// ScrollTrigger synchronizes animations with the page scroll, starting, pausing, or reversing effects as the user scrolls.
// SplitText divides text into characters, words, or lines to enable more detailed and creative animations.

const App = () => {
  return (
    <div>
      <h1 className="text-3xl text-indigo-800">mocktail</h1>
    </div>
  );
};

export default App;
