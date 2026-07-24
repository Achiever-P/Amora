import { useState, useRef } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { FaCode, FaRobot, FaMobileAlt, FaShoppingCart, FaBrain, FaPalette } from "react-icons/fa";
import AnimatedBackdrop from "./visuals/AnimatedBackdrop.jsx";

export const BentoTilt = ({ children, className = "" }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!itemRef.current) return;

        const { left, top, width, height } =
            itemRef.current.getBoundingClientRect();

        const relativeX = (event.clientX - left) / width;
        const relativeY = (event.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 5;
        const tiltY = (relativeX - 0.5) * -5;

        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.95, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle("");
    };

    return (
        <div
            ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}
        >
            {children}
        </div>
    );
};

export const BentoCard = ({ variant, icon, title, description, showButton, btnText, gradientClass, onButtonClick }) => {
    const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
    const [hoverOpacity, setHoverOpacity] = useState(0);
    const hoverButtonRef = useRef(null);

    const handleMouseMove = (event) => {
        if (!hoverButtonRef.current) return;
        const rect = hoverButtonRef.current.getBoundingClientRect();

        setCursorPosition({
            x: event.clientX - rect.left,
            y: event.clientY - rect.top,
        });
    };

    const handleMouseEnter = () => setHoverOpacity(1);
    const handleMouseLeave = () => setHoverOpacity(0);

    return (
        <div className={`relative size-full ${gradientClass || "bg-neutral-900"}`}>
            <AnimatedBackdrop variant={variant} />
            {icon && (
                <span className="pointer-events-none absolute right-5 top-5 z-10 text-6xl md:text-7xl text-white/10">
                    {icon}
                </span>
            )}
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base">{description}</p>
                    )}
                </div>

                {showButton && (
                    <button
                        type="button"
                        ref={hoverButtonRef}
                        onMouseMove={handleMouseMove}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                        onClick={onButtonClick}
                        className="border-hsla relative flex w-fit cursor-pointer items-center gap-1 overflow-hidden rounded-full bg-black px-5 py-2 text-xs uppercase text-white/60 font-sans font-semibold tracking-wider hover:text-white"
                    >
                        {/* Radial gradient hover effect */}
                        <div
                            className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
                            style={{
                                opacity: hoverOpacity,
                                background: `radial-gradient(100px circle at ${cursorPosition.x}px ${cursorPosition.y}px, #656fe288, #00000026)`,
                            }}
                        />
                        <TiLocationArrow className="relative z-20" />
                        <p className="relative z-20">{btnText || "Learn More"}</p>
                    </button>
                )}
            </div>
        </div>
    );
};

const goToSection = (hash) => {
    if (window.location.hash === hash) {
        document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: "smooth", block: "start" });
    } else {
        window.location.hash = hash;
    }
};

const Features = () => (
    <section id="services" className="bg-black pb-52">
        <div className="container mx-auto px-3 md:px-10">
            <div className="px-5 py-32">
                <p className="font-circular-web text-lg text-blue-50">
                    Explore Our Services
                </p>
                <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                    We build cutting-edge digital solutions tailored to help your business scale, engage customers, and streamline workflows.
                </p>
            </div>

            <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                <BentoCard
                    variant={1}
                    icon={<FaCode />}
                    title={
                        <>
                            W<b>e</b>b Dev
                        </>
                    }
                    description="Custom websites built fast, fully responsive, SEO-ready, and optimized for maximum visual engagement."
                    showButton
                    btnText="Explore"
                    gradientClass="bg-gradient-to-br from-[#1b003a] via-[#12002f] to-black"
                    onButtonClick={() => goToSection("#contact")}
                />
            </BentoTilt>

            <div className="grid h-auto md:h-[135vh] w-full grid-cols-1 md:grid-cols-2 md:grid-rows-3 gap-7">
                <BentoTilt className="bento-tilt_1 h-96 md:h-full row-span-1 md:col-span-1 md:row-span-2">
                    <BentoCard
                        variant={2}
                        icon={<FaRobot />}
                        title={
                            <>
                                AI Ch<b>a</b>tbot
                            </>
                        }
                        description="Intelligent AI chatbots that handle customer queries, book appointments, and drive sales 24/7."
                        showButton
                        btnText="Try Demo"
                        gradientClass="bg-gradient-to-br from-[#001f3f] via-[#001122] to-black"
                        onButtonClick={() => goToSection("#chatbot")}
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 h-80 md:h-full row-span-1 md:col-span-1 ms-0 md:ms-32">
                    <BentoCard
                        variant={3}
                        icon={<FaMobileAlt />}
                        title={
                            <>
                                M<b>o</b>bile Apps
                            </>
                        }
                        description="High-performance iOS and Android apps built with smooth UI and native performance."
                        showButton
                        btnText="Explore"
                        gradientClass="bg-gradient-to-br from-[#3b0d11] via-[#1a0507] to-black"
                        onButtonClick={() => goToSection("#contact")}
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_1 h-80 md:h-full md:col-span-1 me-0 md:me-14">
                    <BentoCard
                        variant={4}
                        icon={<FaShoppingCart />}
                        title={
                            <>
                                E-C<b>o</b>mmerce
                            </>
                        }
                        description="Online storefronts with seamless payment gateways, secure transactions, and inventory control."
                        showButton
                        btnText="Explore"
                        gradientClass="bg-gradient-to-br from-[#023e8a] via-[#001d3d] to-black"
                        onButtonClick={() => goToSection("#contact")}
                    />
                </BentoTilt>

                <BentoTilt className="bento-tilt_2 h-80 md:h-auto">
                    <button
                        type="button"
                        onClick={() => goToSection("#contact")}
                        className="relative flex size-full flex-col justify-between bg-[#dfdff0] p-5 text-black text-left cursor-pointer overflow-hidden"
                    >
                        <FaPalette className="pointer-events-none absolute right-5 top-5 text-6xl md:text-7xl text-black/10" />
                        <div>
                            <h1 className="bento-title special-font">UI/<b>U</b>X Des<b>i</b>gn</h1>
                            <p className="mt-3 max-w-64 font-sans text-xs md:text-base text-gray-700">
                                Interfaces that look sharp, feel intuitive, and convert visitors into clients.
                            </p>
                        </div>

                        <TiLocationArrow className="m-5 scale-[4] self-end text-black" />
                    </button>
                </BentoTilt>

                <BentoTilt className="bento-tilt_2 h-80 md:h-auto">
                    <BentoCard
                        variant={2}
                        icon={<FaBrain />}
                        title={
                            <>
                                Cust<b>o</b>m AI
                            </>
                        }
                        description="Tailored machine learning models and business workflow automation tools."
                        showButton
                        btnText="Explore"
                        gradientClass="bg-gradient-to-br from-[#1b4332] via-[#081c15] to-black"
                        onButtonClick={() => goToSection("#contact")}
                    />
                </BentoTilt>
            </div>
        </div>
    </section>
);

export default Features;