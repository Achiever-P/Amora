import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import BrandVisual from "./visuals/BrandVisual.jsx";
import { FaRocket, FaChartLine, FaCode, FaRobot } from "react-icons/fa";

const ImageClipBox = ({ variant, icon, clipClass, bgClass }) => (
    <div className={`${clipClass} ${bgClass || "bg-neutral-800"} flex items-center justify-center overflow-hidden`}>
        <BrandVisual variant={variant} icon={icon} className="size-full" iconClassName="text-4xl md:text-5xl" />
    </div>
);

const Contact = () => {
    return (
        <div id="contact" className="my-20 min-h-96 w-full px-4 sm:px-10">
            <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
                <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
                    <ImageClipBox
                        variant={1}
                        icon={<FaRocket />}
                        clipClass="contact-clip-path-1"
                        bgClass="bg-gradient-to-br from-[#5542ff] to-[#050014] w-full h-full min-h-[300px]"
                    />
                    <ImageClipBox
                        variant={4}
                        icon={<FaChartLine />}
                        clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
                        bgClass="bg-gradient-to-br from-[#edff66] to-[#050014] w-full h-full min-h-[300px]"
                    />
                </div>

                <div className="absolute -top-40 left-20 w-60 hidden sm:block sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
                    <ImageClipBox
                        variant={1}
                        icon={<FaCode />}
                        clipClass="absolute md:scale-125"
                        bgClass="bg-gradient-to-br from-[#12002f] to-[#5542ff] w-48 h-48"
                    />
                    <ImageClipBox
                        variant={2}
                        icon={<FaRobot />}
                        clipClass="sword-man-clip-path md:scale-125"
                        bgClass="bg-gradient-to-br from-[#edff66] to-[#5542ff] w-48 h-48"
                    />
                </div>

                <div className="flex flex-col items-center text-center">
                    <p className="mb-10 font-general text-[10px] uppercase">
                        Partner with Amora
                    </p>

                    <AnimatedTitle
                        title="let&#39;s b<b>u</b>ild the <br /> new era of <br /> digi<b>t</b>al presence <br /> t<b>o</b>gether."
                        containerClass="special-font w-full font-zentry text-4xl sm:text-5xl md:text-[6.2rem] !font-black !leading-[.9]"
                    />

                    <a href="mailto:sales@amoraprime.in">
                        <Button title="contact us" containerClass="mt-10 cursor-pointer" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Contact;