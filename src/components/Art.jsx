import { useGSAP } from '@gsap/react'
import React from 'react'
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import gsap from 'gsap'
import { useMediaQuery } from 'react-responsive';
import { goodLists } from '../../constants'


const Art = () => {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    useGSAP(() => {
        const start = isMobile ? 'top 20%' : 'top top'

        const maskedTimeline = gsap.timeline({
            scrollTrigger: {
                trigger: '#art', // trigger the animation when the #art section is in view
                start, // start animation when the top of the #art section reaches 20% of the viewport height on mobile or top of the viewport on desktop
                end: 'bottom center', // end animation when the bottom of the #art section reaches the center of the viewport
                scrub: 1.5, // smooth scrubbing, takes 1.5 seconds to "catch up" to the scrollbar
                pin: true, // pin the #art section in place while the animation is active
            }
        })

        // will fade elements will fade out as the user scrolls through the #art section
        maskedTimeline
            .to('.will-fade', {
                opacity: 0,
                stagger: 0.2,
                ease: 'power1.inOut'
            })
            .to('.masked-img', {
                scale: 1.3,
                maskPosition: 'center',
                duration: 1,
                maskSize: '400%',
                ease: 'power1.inOut'
            })

            .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut' }) // fade in the masked content slightly before the previous animation ends
    })

    return (
        <div id='art'>
            <div className='container mx-auto h-full pt-20'>
                <h2 className='will-fade'> The Art </h2>
                <div className='content'>
                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src="/images/check.png" alt="check" />
                                <p>{feature}</p>
                            </li>
                        ))}
                    </ul>


                    <div className='cocktail-img'>
                        <img src='/images/under-img.jpg' alt='cocktail'
                            className='abs-center masked-img size-full object-contain' />
                    </div>

                    <ul className='space-y-4 will-fade'>
                        {goodLists.map((feature, index) => (
                            <li key={index} className='flex items-center gap-2'>
                                <img src="/images/check.png" alt="check" />
                                <p className='md:w-fit w-60'>{feature}</p>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className='masked-container relative mt-16'>
                    <h2 className='will-fade'>Sip-worthy Perfection</h2>
                    <div id='masked-content' className="relative z-10 mt-8 text-center">
                        <h3 className="text-4xl leading-tight">Made with Craft, Poured with Passion</h3>
                        <p className="mt-6">This isn't just a drink. it's a carefully crafted moment made just for you </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Art