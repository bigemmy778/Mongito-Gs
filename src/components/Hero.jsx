import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react';
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";
import { useMediaQuery } from 'react-responsive';
import './Hero.css'

const Hero = () => {

    const videoRef = useRef()
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const videoTimelineRef = useRef();


    useGSAP(() => {
        const heroSplit = new SplitText('.title', { type: "chars, words" });
        const paragrahpSplit = new SplitText('.subtitle', { type: "lines" });

        heroSplit.chars.forEach((char, index) => char.classList.add("text-gradient"))

        //   gsap animation for the title and paragraph
        gsap.from(heroSplit.chars, {
            yPercent: 100,
            duration: 1.8,
            ease: "expo.out", // smooth Springy feel 
            stagger: 0.06, //each character will animate one after another with a delay of 0.05 seconds
        })

        gsap.from(paragrahpSplit.lines, {
            yPercent: 100,
            opacity: 0,
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
                scrub: true,
            }
        })
            .to('.right-leaf', { y: 200 }, 0)
            .to('.left-leaf', { y: -200 }, 0)

        // we want to figure out where the animation will start an§d end based on the screen size, so we can use the useMediaQuery hook to check if the screen is mobile or not
        const startValue = isMobile ? 'top 50%' : 'center 60%'; //50% of the viewport height for mobile and 60% for desktop
        const endValue = isMobile ? '120px top' : 'bottom top'; // 120px from the top of the viewport for mobile and bottom of the hero section for desktop


        // gsap animation for the video
        // create the timeline with a defualt duration
        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: 'video',
                start: startValue,
                end: endValue,
                scrub: true,
                pin: true,
                // onEnter: () => videoRef.current.play(),
                // onEnterBack: () => videoRef.current.play(),
                // onLeave: () => videoRef.current.pause(),
                // onLeaveBack: () => videoRef.current.pause(),
            }
        })

        videoRef.current.onloadedmetadata = () => {
            tl.to(videoRef.current, {
                currentTime: videoRef.current.duration
            })
        }

    }, []);




    return (
        <>
            <section id='hero' className='noisy relative'>
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

                <div className='body' >
                    <div className='content content-div'>
                        <div className='space-y-5 sip-div'>
                            <p className='text'> Cool. Crisp. Classic.</p>
                            <p className='subtitle sub1'>
                                Sip the Spirit <br /> of summer
                            </p>
                        </div>

                        <div className='view-cocktails md:flex flex-col items-center text-center md:items-start md:text-left'>
                            <p className='subtitle sub2' >
                                Every cocktail on our menu is a blend of premium ingridients,
                                creative flair, and timeless recipes --designed to delight your
                                sense.
                            </p>

                            <a href='#cocktails'>View Cocktails</a>
                        </div>
                    </div>
                </div>

            </section>

            <div className='video absolute inset-0'>
                <video src='/videos/output.mp4'
                    ref={videoRef}
                    autoPlay muted playsInline>

                </video>
            </div>

        </>
    )
}


export default Hero



    // < div className = 'space-y-5 md:hidden' >
    //                         <p className='text-center text-sm sm:text-base'>
    //                             Cool. Crisp. Classic.
    //                         </p>

    //                         <p className='subtitle text-center text-2xl sm:text-3xl'>
    //                             Sip the Spirit <br /> of summer
    //                         </p>
    //                     </div >


    // <div className='view-cocktails flex flex-col items-center text-center md:items-start md:text-left'>

    //     <p className='subtitle max-w-[320px] sm:max-w-[450px] md:max-w-none text-sm sm:text-base md:text-lg'>
    //         Every cocktail on our menu is a blend of premium ingridients,
    //         creative flair, and timeless recipes --designed to delight your
    //         sense.
    //     </p>

    //     <a
    //         href='#cocktails'
    //         className='mt-5'
    //     >
    //         View Cocktails
    //     </a>

    // </div>