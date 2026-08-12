import React from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

const Hero = () => {
    useGSAP(()=> {
      const heroSplit = new SplitText('.title', { type: "chars, words"}) ;
      const paragrahpSplit = new SplitText('.subtitle', { type: "lines"}) ;

      heroSplit.chars.forEach((char, index) => char.classList.add("text-gradient"))

    //   gsap animation for the title and paragraph
      gsap.from(heroSplit.chars,{
        yPercent: 100,
        duration: 1.8,
        ease: "expo.out", // smooth Springy feel 
        stagger: 0.06, //each character will animate one after another with a delay of 0.05 seconds
      })

      gsap.from(paragrahpSplit.lines,{
        yPercent: 100,
        opacity:0,
        duration: 1.8,
        ease: "expo.out", // smooth Springy feel 
        stagger: 0.06, //each character will animate one after another with a delay of 0.05 seconds
        delay: 1, // delay the animation of the paragraph by 1 second after the title animation starts
      })


    // gsap animation for the left and right leaf images 
    //bases on the scroll position of the page, the left and right leaf images will animate in from the left and right respectively

    gsap.timeline({
        scrollTrigger: {
            trigger: '#hero',
            start: "top top",
            end: "bottom top",
            scrub:  true,
        }
    })
    .to('.right-leaf', { y: 200  }, 0)
    .to('.left-leaf', { y: -200  }, 0)
    }, []);


   

    return (
        <>
            <section id='hero' className='noisy'>
                 <h1 className='title'>
                 ELIXIR
                 </h1>

                 <img src="/images/hero-left-leaf.png"
                 alt="left-leaf"
                 className='left-leaf'
                 />

                 <img src="/images/hero-right-leaf.png"
                 alt="right-leaf"
                 className='right-leaf'
                 />

                 <div className='body'>
                    <div className='content'>
                        <div className='space-y-5 hidden md:block'>
                            <p className=''> Cool. Crisp. Classic.</p>
                            <p className='subtitle'>
                                Sip the Spirit <br/> of summer
                            </p>
                        </div>

                        <div className='view-cocktails'>
                            <p className='subtitle'>
                               Every cocktail on our menu is a blend of premium ingridients,
                               creative flair, and timeless recipes --designed to delight your
                               sense.  
                            </p>

                            <a href='#cocktails'>View Cocktails</a>
                        </div>
                    </div>
                 </div>

            </section>
        </>
    )
}

export default Hero