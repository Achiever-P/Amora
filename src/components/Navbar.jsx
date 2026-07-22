import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Services", "Chatbot", "About", "Showcase", "Contact"];

const NavBar = ({ currentView }) => {
    const [isAudioPlaying, setIsAudioPlaying] = useState(false);
    const [isIndicatorActive, setIsIndicatorActive] = useState(false);


    const audioElementRef = useRef(null);
    const navContainerRef = useRef(null);

    const { y: currentScrollY } = useWindowScroll();
    const [isNavVisible, setIsNavVisible] = useState(true);
    const [lastScrollY, setLastScrollY] = useState(0);


    const toggleAudioIndicator = () => {
        setIsAudioPlaying((prev) => !prev);
        setIsIndicatorActive((prev) => !prev);
    };

    useEffect(() => {
        if (isAudioPlaying) {
            audioElementRef.current.play();
        } else {
            audioElementRef.current.pause();
        }
    }, [isAudioPlaying]);

    useEffect(() => {
        if (currentScrollY === 0) {
            setIsNavVisible(true);
            navContainerRef.current.classList.remove("floating-nav");
        } else if (currentScrollY > lastScrollY) {
            setIsNavVisible(false);
            navContainerRef.current.classList.add("floating-nav");
        } else if (currentScrollY < lastScrollY) {
            setIsNavVisible(true);
            navContainerRef.current.classList.add("floating-nav");
        }

        setLastScrollY(currentScrollY);
    }, [currentScrollY, lastScrollY]);

    useEffect(() => {
        gsap.to(navContainerRef.current, {
            y: isNavVisible ? 0 : -100,
            opacity: isNavVisible ? 1 : 0,
            duration: 0.2,
        });
    }, [isNavVisible]);

    return (
        <div
            ref={navContainerRef}
            className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
        >
            <header className="absolute top-1/2 w-full -translate-y-1/2">
                <nav className="flex size-full items-center justify-between p-4">

                    <div className="flex items-center gap-7">
                        <a href={currentView !== 'home' ? "/#" : "#"} className="flex items-center gap-2 select-none cursor-pointer">
                            <img src="/img/logo.jpg" alt="Amora Prime logo" className="w-8 h-8 object-contain rounded-full" />
                            <span className="font-sans text-xl font-bold uppercase tracking-wider text-white">Amora Prime</span>
                        </a>

                        <a href={currentView !== 'home' ? "/#contact" : "#contact"}>
                            <Button
                                id="contact-button"
                                title="Get in Touch"
                                rightIcon={<TiLocationArrow />}
                                containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1"
                            />
                        </a>
                    </div>


                    <div className="flex h-full items-center">
                        <div className="hidden md:block">
                            {navItems.map((item, index) => {
                                const isShowcase = item === "Showcase";
                                const href = isShowcase 
                                    ? "#showcase" 
                                    : (currentView !== 'home' ? `/#${item.toLowerCase()}` : `#${item.toLowerCase()}`);
                                
                                return (
                                    <a
                                        key={index}
                                        href={href}
                                        className={clsx("nav-hover-btn", {
                                            "!text-[#edff66] font-bold": isShowcase && currentView === 'showcase'
                                        })}
                                    >
                                        {item}
                                    </a>
                                );
                            })}
                        </div>

                        <button
                            onClick={toggleAudioIndicator}
                            className="ml-10 flex items-center space-x-0.5"
                        >
                            <audio
                                ref={audioElementRef}
                                className="hidden"
                                src="/audio/loop.mp3"
                                loop
                            />
                            {[1, 2, 3, 4].map((bar) => (
                                <div
                                    key={bar}
                                    className={clsx("indicator-line", {
                                        active: isIndicatorActive,
                                    })}
                                    style={{
                                        animationDelay: `${bar * 0.1}s`,
                                    }}
                                />
                            ))}
                        </button>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default NavBar;