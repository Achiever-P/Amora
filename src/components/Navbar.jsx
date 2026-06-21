import clsx from "clsx";
import gsap from "gsap";
import { useWindowScroll } from "react-use";
import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";

import Button from "./Button";

const navItems = ["Services", "Chatbot", "About", "Contact"];

const NavBar = () => {
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
                        <div className="flex items-center gap-2">
                            {/* 
                            <img src="/img/logo.png" alt="logo" className="w-10" />
                            */}
                            <svg className="w-8 h-8 text-[#edff66]" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M12 2L2 22H22L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M12 6L6 18H18L12 6Z" fill="currentColor" opacity="0.3"/>
                            </svg>
                            <span className="font-zentry text-xl font-bold uppercase tracking-wider text-white">Amora Prime</span>
                        </div>

                        <a href="#contact">
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
                            {navItems.map((item, index) => (
                                <a
                                    key={index}
                                    href={`#${item.toLowerCase()}`}
                                    className="nav-hover-btn"
                                >
                                    {item}
                                </a>
                            ))}
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