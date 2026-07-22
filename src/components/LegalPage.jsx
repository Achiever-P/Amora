import { useEffect } from "react";
import { FaArrowLeft } from "react-icons/fa";

const PRIVACY_SECTIONS = [
    {
        heading: "Information We Collect",
        body: "When you fill out our contact form, apply through the intern showcase, or message our chatbot, we collect the details you provide - such as your name, email address, GitHub profile, and project notes - so we can respond to you.",
    },
    {
        heading: "How We Use Your Information",
        body: "We use the information you share to respond to inquiries, evaluate internship applications, and improve the services we offer. We do not sell your personal information to third parties.",
    },
    {
        heading: "Data Storage",
        body: "Form submissions are processed to route your request to the right team at Amora Prime. We retain this information only as long as necessary to fulfil the purpose it was collected for.",
    },
    {
        heading: "Cookies",
        body: "Our site may use minimal, functional cookies to remember your preferences, such as audio playback state. We do not use third-party advertising trackers.",
    },
    {
        heading: "Contact Us",
        body: "If you have questions about this policy or want your data removed, reach out to support@amoraprime.in.",
    },
];

const TERMS_SECTIONS = [
    {
        heading: "Acceptance of Terms",
        body: "By using this website, you agree to these Terms & Conditions. If you do not agree, please discontinue use of the site.",
    },
    {
        heading: "Services",
        body: "Amora Prime provides web development, AI chatbot, mobile app, e-commerce, and custom software consulting services. Project scope, timelines, and pricing are agreed upon separately with each client.",
    },
    {
        heading: "Intellectual Property",
        body: "All content on this site, including the Amora Prime name, logo, and showcase project descriptions, belongs to Amora Prime or is used with permission and may not be reproduced without consent.",
    },
    {
        heading: "Intern Showcase",
        body: "Projects featured in the Intern Cohort Showcase are demonstration builds created during our internship program and are shown for portfolio and recruitment purposes.",
    },
    {
        heading: "Limitation of Liability",
        body: "Amora Prime is not liable for any indirect or incidental damages arising from the use of this website or its interactive demos, which are provided for illustrative purposes.",
    },
    {
        heading: "Changes to These Terms",
        body: "We may update these terms from time to time. Continued use of the site after changes constitutes acceptance of the revised terms.",
    },
];

const LegalPage = ({ page, onBackHome }) => {
    const isPrivacy = page === "privacy";
    const title = isPrivacy ? "Privacy Policy" : "Terms & Conditions";
    const sections = isPrivacy ? PRIVACY_SECTIONS : TERMS_SECTIONS;

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [page]);

    return (
        <div className="min-h-screen w-screen bg-[#07070a] text-blue-50 relative pb-24 overflow-x-hidden font-sans">
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5724ff]/10 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 pt-32 relative z-10 max-w-3xl">
                <button
                    onClick={onBackHome}
                    className="group mb-8 flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs uppercase px-5 py-2.5 rounded-full tracking-wider cursor-pointer text-[#dfdff0]"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Agency Home
                </button>

                <span className="text-[10px] uppercase font-bold tracking-widest text-[#edff66] bg-yellow-300/10 px-3 py-1 rounded-full border border-yellow-300/20 w-fit block mb-4">
                    Amora Prime
                </span>
                <h1 className="special-font text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-none text-white mb-8">
                    {title}
                </h1>
                <p className="text-sm text-gray-400 mb-12">
                    Last updated: January 2026
                </p>

                <div className="space-y-8">
                    {sections.map((section) => (
                        <div key={section.heading} className="border-t border-white/10 pt-6">
                            <h2 className="text-sm font-semibold uppercase tracking-wider text-white mb-3">
                                {section.heading}
                            </h2>
                            <p className="text-sm text-gray-400 leading-relaxed">
                                {section.body}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LegalPage;
