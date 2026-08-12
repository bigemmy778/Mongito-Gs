import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { cocktailLists, mockTailLists } from "../../constants"


const Cocktaills = () => {
    useGSAP(() => {
// create the animation that will be triggered when the #cocktails section is in view
        const parallaxTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: "#cocktails", // trigger the animation when the #cocktails section is in view
                start: "top 30%", // start animation when the top of the #cocktails section reaches 30% of the viewport height
                end: "bottom  80", // end animation when the bottom of the #cocktails section reaches 80% of the viewport height
                scrub: true, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
            }
        })

        // animate the left and right leaf images to move in opposite directions as the user scrolls through the #cocktails section 

        parallaxTimeline.from("#c-left-leaf", {
            x: -100, // move the left leaf 100px to the left
            y: 100, // move the left leaf 100px down
        })
        .from("#c-right-leaf", {
            x: 100, // move the right leaf 100px to the right
            y: 100, // move the right leaf 100px up
        })
    })

    return (
        <section id='cocktails' className="noisy">
            <img src="/images/cocktail-left-leaf.png" alt="l-leaf" id="c-left-leaf" />
            <img src="/images/cocktail-right-leaf.png" alt="r-leaf" id="c-right-leaf" />

            <div className="list">
                <div className="popular">
                    <h2>Most popular cocktails:</h2>

                    <ul>
                        {cocktailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="md:me-28">
                                    <h3> {name} </h3>
                                    <p> {country} | {detail} </p>
                                </div>
                                <span> {price} </span>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="loved">
                    <h2>Most loved mocktails:</h2>

                    <ul>
                        {mockTailLists.map(({ name, country, detail, price }) => (
                            <li key={name}>
                                <div className="me-28">
                                    <h3> {name} </h3>
                                    <p> {country} | {detail} </p>
                                </div>
                                <span> {price} </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Cocktaills