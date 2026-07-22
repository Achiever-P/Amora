import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className="w-screen bg-[#5542ff] py-16 text-black font-sans">
            <div className="container mx-auto px-6 md:px-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-10 border-b border-black/10 pb-12">
                    
                    {/* Column 1: Brand Info */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-2">
                            <img src="/img/logo.jpg" alt="Amora Prime logo" className="w-8 h-8 object-contain rounded-full" />
                            <span className="font-sans text-lg font-bold uppercase tracking-wider">
                                Amora Prime
                            </span>
                        </div>
                        <p className="text-sm text-black/75 max-w-xs leading-relaxed">
                            MSME registered digital agency based in Thirumangalam, Madurai. Building custom websites, mobile apps, and intelligent AI solutions since 2023.
                        </p>
                        <div className="flex gap-4 mt-2">
                            <a
                                href="https://instagram.com/amoraprimeofficial"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
                                aria-label="Instagram"
                            >
                                <FaInstagram className="scale-110" />
                            </a>
                            <a
                                href="https://linkedin.com"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-2 bg-black/5 hover:bg-black hover:text-white rounded-full transition-all duration-300"
                                aria-label="LinkedIn"
                            >
                                <FaLinkedin className="scale-110" />
                            </a>
                        </div>
                    </div>

                    {/* Column 2: Services */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 border-b border-black/10 pb-2 w-fit">
                            Our Services
                        </h4>
                        <ul className="space-y-2.5 text-sm text-black/75">
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">Web Development</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">AI Chatbots</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">Mobile Apps</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">E-Commerce</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">Custom AI & Automation</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">UI/UX Design</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Quick Navigation */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 border-b border-black/10 pb-2 w-fit">
                            Company
                        </h4>
                        <ul className="space-y-2.5 text-sm text-black/75">
                            <li><a href="#about" className="hover:underline hover:text-white transition-colors">About Us</a></li>
                            <li><a href="#services" className="hover:underline hover:text-white transition-colors">Services</a></li>
                            <li><a href="#showcase" className="hover:underline hover:text-white transition-colors">Developer Showcase</a></li>
                            <li><a href="#chatbot" className="hover:underline hover:text-white transition-colors">Interactive Chatbot</a></li>
                            <li><a href="#contact" className="hover:underline hover:text-white transition-colors">Get in Touch</a></li>
                        </ul>
                    </div>

                    {/* Column 4: Contact details */}
                    <div>
                        <h4 className="font-semibold text-sm uppercase tracking-wider mb-4 border-b border-black/10 pb-2 w-fit">
                            Contact Us
                        </h4>
                        <ul className="space-y-2.5 text-sm text-black/75 leading-relaxed">
                            <li>
                                <span className="block font-semibold">General Inquiries:</span>
                                <a href="mailto:support@amoraprime.in" className="hover:underline">support@amoraprime.in</a>
                            </li>
                            <li>
                                <span className="block font-semibold">Sales & Projects:</span>
                                <a href="mailto:sales@amoraprime.in" className="hover:underline">sales@amoraprime.in</a>
                            </li>
                            <li>
                                <span className="block font-semibold">Careers:</span>
                                <a href="mailto:hr@amoraprime.in" className="hover:underline">hr@amoraprime.in</a>
                            </li>
                            <li className="pt-2">
                                <span className="block font-semibold">Address:</span>
                                <address className="not-italic">
                                    Thirumangalam, Madurai,<br />
                                    Tamil Nadu, India
                                </address>
                            </li>
                        </ul>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="flex flex-col sm:flex-row items-center justify-between pt-8 text-xs text-black/60 gap-4">
                    <span>© 2026 Amora Prime. All rights reserved.</span>
                    <div className="flex gap-6">
                        <a href="#privacy" className="hover:underline">Privacy Policy</a>
                        <a href="#terms" className="hover:underline">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;