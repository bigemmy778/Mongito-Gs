import { useState } from 'react'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import './App.css'

gsap.registerPlugin(ScrollTrigger, SplitText); //this makes sure that the plugin is registered and available for use in your GSAP animations globally
//ScrollTrigger, = it will allow us animate things based on the scroll position of the page.
//SplitText = it allows us the break text into individual characters, words, or lines, which can then be animated separately.
function App() {


  return (
    <div>
      <h1 className="text-3xl font-bold underline bg-red">
        Hello world!
      </h1>
    </div>
  )
}

export default App
