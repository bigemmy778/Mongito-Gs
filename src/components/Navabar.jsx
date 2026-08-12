import React from 'react'
import { navLinks } from '../../constants'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'

function Navabar() {
    useGSAP(() => {
        // gsap timeline based on scroll trigger
        const navTween = gsap.timeline({
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top', //controls when the animation starts and ends [position of the nav && viewport of the position ]
            },

        })

        navTween.fromTo('nav', { backgroundColor: 'transparent' }, {
            backgroundColor: '#000000050',
            backgroundFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inout'
        }) // ensure the nav always starts from a known style(transparent) and it ends with a specific effects
})


return (
    <nav>

        <div>
            <a href='#home' className='flex items-center gap-2'>
                <img src="/images/logo.png" alt="logo" />
                <p> Velvet Pour </p>

            </a>


            <ul>
                {navLinks.map((link) => (
                    <li key={link.id}>
                        <a href={`#${link.id}`}>{link.title}</a>

                    </li>
                ))}
            </ul>
        </div>
    </nav>
)
}

export default Navabar