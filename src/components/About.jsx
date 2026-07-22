import AnimatedTitle from "./AnimatedTitle";

const About = () => {
    return (
        <div id="about" className="min-h-[80vh] w-screen bg-[#dfdff0] flex flex-col items-center justify-center py-24">
            <div className="relative flex flex-col items-center gap-5 text-center px-4">
                <p className="font-general text-sm uppercase md:text-[10px] tracking-wider text-gray-500">
                    Welcome to Amora Prime
                </p>

                <AnimatedTitle
                    title="We bu<b>i</b>ld custom <br /> web and AI s<b>o</b>lutions"
                    containerClass="mt-5 !text-black text-center"
                />

                <div className="flex flex-col items-center gap-6 mt-12 max-w-2xl">
                    <p className="font-sans text-lg font-medium text-black">
                        Empowering businesses in Madurai and across South India.
                    </p>
                    <p className="text-gray-600 font-sans text-sm max-w-md leading-relaxed">
                        Amora Prime is an MSME registered digital agency building fast websites, custom AI assistants, native mobile apps, and robust backend software.
                    </p>
                    
                    <div className="flex gap-8 mt-8 text-center justify-center">
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">100+</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider mt-1">Projects Completed</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 self-center"></div>
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">98%</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider mt-1">Satisfaction</p>
                        </div>
                        <div className="border-l border-gray-300 h-10 self-center"></div>
                        <div>
                            <h3 className="font-zentry text-3xl font-black text-black">10+</h3>
                            <p className="text-[10px] uppercase text-gray-500 font-general font-bold tracking-wider mt-1">Expert Team</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;