import { useState, useRef, useEffect } from 'react';
import Button from './Button.jsx';
import { TiLocationArrow } from 'react-icons/ti';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';

// Register ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [isloading, setIsloading] = useState(false);

    const totalGradients = 4;

    const upcomingIndex = (currentIndex % totalGradients) + 1;

    const handleMiniBoxClick = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingIndex);
    };

    useGSAP(() => {
        if (hasClicked) {
            gsap.set('#next-video', { visibility: 'visible' });

            gsap.to('#next-video', {
                transformOrigin: 'center center',
                scale: 1,
                width: '100%',
                height: '100%',
                duration: 1,
                ease: 'power1.inOut',
            });

            gsap.from('#current-video', {
                transformOrigin: 'center center',
                scale: 0,
                duration: 1.5,
                ease: 'power1.inOut',
            });
        }
    }, { dependencies: [currentIndex], revertOnUpdate: true });

    useGSAP(() => {
        gsap.set('#video-frame', {
            clipPath: 'polygon(20% 0%, 72% 0, 90% 90%, 0% 100%)',
            borderRadius: '0 0 40% 10%',
        });

        gsap.from('#video-frame', {
            clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)',
            borderRadius: '0% 0% 0% 0%',
            ease: 'power1.inOut',
            scrollTrigger: {
                trigger: '#video-frame',
                start: 'center center',
                end: 'bottom center',
                scrub: true,
            },
        });
    });

    const getGradientClass = (index) => {
        const gradients = {
            1: "bg-gradient-to-br from-[#12002f] via-[#050014] to-black",
            2: "bg-gradient-to-br from-[#001829] via-[#000814] to-black",
            3: "bg-gradient-to-br from-[#2a080c] via-[#0f0003] to-black",
            4: "bg-gradient-to-br from-[#0a2f1d] via-[#020d06] to-black",
        };
        return gradients[index] || gradients[1];
    };

    return (
        <div className="relative h-dvh w-screen overflow-x-hidden">

            {isloading && (
                <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                    <div className="three-body">
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                        <div className="three-body__dot"></div>
                    </div>
                </div>
            )}

            {/* Video Frame */}
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-black">
                {/* Mini Box */}
                <div>
                    <div
                        className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div
                            onClick={handleMiniBoxClick}
                            className="origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100 size-full"
                        >
                            <div
                                id="current-video"
                                className={`size-64 origin-center scale-150 object-cover object-center ${getGradientClass(upcomingIndex)}`}
                            />
                        </div>
                    </div>

                    {/* Main Video */}
                    <div
                        id="next-video"
                        className={`absolute-center invisible absolute z-20 size-64 ${getGradientClass(currentIndex)}`}
                    />

                    {/* Background Video */}
                    <div
                        className={`absolute left-0 top-0 size-full ${getGradientClass(currentIndex === totalGradients - 1 ? 1 : currentIndex)}`}
                    />
                </div>

                {/* Heading and Subtext */}
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    Gr<b>o</b>wth
                </h1>

                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            Am<b>o</b>ra
                        </h1>
                        <p className="mb-5 max-w-64 font-sans text-blue-100">
                            Your Digital Growth Partner
                            <br/>
                            Web Development & AI Solutions
                        </p>
                        <a href="#contact">
                            <Button
                                id="request-demo"
                                title="Request a Demo"
                                leftIcon={<TiLocationArrow/>}
                                containerClass="!bg-yellow-300 flex-center gap-1"
                            />
                        </a>
                    </div>
                </div>
            </div>

            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                GR<b>O</b>WTH
            </h1>

        </div>
    );
};

export default Hero;
