import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";

import AnimatedTitle from "./AnimatedTitle";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
    useGSAP(() => {
        const clipAnimation = gsap.timeline({
            scrollTrigger: {
                trigger: "#clip",
                start: "center center",
                end: "+=800 center",
                scrub: 0.5,
                pin: true,
                pinSpacing: true,
            },
        });

        clipAnimation.to(".mask-clip-path", {
            width: "100vw",
            height: "100vh",
            borderRadius: 0,
        });
    });

    return (
        <div id="about" className="min-h-screen w-screen">
            <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
                <p className="font-general text-sm uppercase md:text-[10px]">
                    Welcome to Amora Prime
                </p>

                <AnimatedTitle
                    title="We bu<b>i</b>ld custom <br /> web and AI s<b>o</b>lutions"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="about-subtext flex flex-col items-center gap-4">
                    <p className="font-sans text-base font-medium">Empowering businesses in Madurai and across South India.</p>
                    <p className="text-gray-500 font-sans text-sm max-w-md">
                        Amora Prime is an MSME registered digital agency building fast websites, custom AI assistants, native mobile apps, and robust backend software.
                    </p>
                    
                    <div className="flex gap-8 mt-6 text-center justify-center">
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">100+</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider">Projects Completed</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 self-center"></div>
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">98%</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider">Satisfaction</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 self-center"></div>
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">10+</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider">Expert Team</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="h-dvh w-screen" id="clip">
                <div className="mask-clip-path about-image bg-gradient-to-br from-[#5542ff] via-[#edff66] to-[#010101] flex items-center justify-center">
                    {/* 
                    <img
                        src="img/about.webp"
                        alt="Background"
                        className="absolute left-0 top-0 size-full object-cover"
                    />
                    */}
                    <div className="absolute inset-0 bg-black/10 backdrop-blur-xs flex items-center justify-center">
                        <span className="font-zentry text-5xl md:text-8xl text-white font-bold opacity-20 tracking-widest uppercase">Amora Prime</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;