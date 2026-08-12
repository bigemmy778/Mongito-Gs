import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import Navabar from './components/Navabar';
import Hero from "./components/Hero";
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText); //this makes sure that the plugin is registered and available for use in your GSAP animations globally
//ScrollTrigger = it will allow us animate things based on the scroll position of the page.
//SplitText = it allows us the break text into individual characters, words, or lines, which can then be animated separately.
function App() {


  return (
  <main>
    <Navabar/>
    <Hero/>
    <div className="h-dvh bg-black">

    </div>
  </main>
  )
}

export default App
