import { useState, useRef, useEffect } from "react";
import { 
    FaGithub, 
    FaSearch, 
    FaTimes, 
    FaFilter, 
    FaArrowLeft, 
    FaPaperPlane, 
    FaCode, 
    FaBrain, 
    FaLaptopCode, 
    FaExternalLinkAlt
} from "react-icons/fa";
import { TiLocationArrow } from "react-icons/ti";
import { BentoTilt } from "./Features.jsx";

// Mock data for Amora intern projects
const PROJECTS_DATA = [
    {
        id: "aurachat",
        title: "AuraChat AI",
        tagline: "Bilingual AI Chatbot for Kirana Stores",
        category: "AI/ML",
        intern: {
            name: "Priya Dharshini",
            role: "AI/ML Engineering Intern",
            cohort: "Summer 2026",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-purple-600"
        },
        description: "An intelligent, low-latency chatbot built to help local shop owners in Madurai interact with customers in both Tamil and English (Tanglish). It connects to instant inventory and pricing catalogs, allowing shopkeepers to focus on customer checkout while the AI takes orders, checks stock, and answers basic business queries via web and WhatsApp.",
        problem: "Local store owners lose business when they are too busy to respond to customer inquiries. Existing chatbot solutions are expensive, complex, and only support English, making them inaccessible for local business environments in Madurai.",
        solution: "A custom LLM-based RAG chatbot with localized database sync. It responds dynamically in hybrid Tamil-English, recognizes slang (e.g., 'paruppu' for lentils, 'nalla oil' for sesame oil), and displays real-time pricing and availability.",
        techStack: ["React", "Tailwind CSS", "Node.js", "OpenAI API", "PostgreSQL", "Vite"],
        demoAvailable: true,
        githubLink: "https://github.com/amora-prime/aurachat",
        liveLink: "https://aurachat.amoraprime.in",
        visualGradient: "from-purple-900 via-indigo-950 to-black",
        mentorNote: "Priya exhibited incredible grasp of colloquial Tamil tokenization and context retrieval. A stellar addition to our AI division."
    },
    {
        id: "koodal-market",
        title: "Koodal Market",
        tagline: "Decentralized Agri-Logistics Platform",
        category: "Full-Stack",
        intern: {
            name: "Karthik Raja",
            role: "Full Stack Intern",
            cohort: "Summer 2026",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-emerald-600"
        },
        description: "A digital routing and ride-pooling dashboard designed for organic farmers in the Madurai rural belt. Farmers list their weekly produce load, and Koodal Market aggregates shipping requests, auto-routes local mini-trucks and auto-rickshaws, and calculates optimized delivery schedules to Mattuthavani and Nelpettai wholesale markets.",
        problem: "Small-scale farmers pay exorbitant prices for independent transit because they have small cargo sizes. They lack a collective platform to share transportation costs to urban hubs.",
        solution: "A React + Node dashboard utilizing a customized routing algorithm. It groups nearby farm pickups into shared routes, estimates fuel sharing costs, and notifies local transport drivers via automated WhatsApp templates.",
        techStack: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB", "Leaflet.js"],
        demoAvailable: true,
        githubLink: "https://github.com/amora-prime/koodal-market",
        liveLink: "https://koodal.amoraprime.in",
        visualGradient: "from-emerald-900 via-teal-950 to-black",
        mentorNote: "Karthik implemented a greedy route-merging algorithm that cut mock logistic expenses by 35%. Excellent architectural planning!"
    },
    {
        id: "sentimentalist",
        title: "Sentimentalist",
        tagline: "Brand Feedback Sentiment Analyzer",
        category: "AI/ML",
        intern: {
            name: "Vignesh Sundar",
            role: "AI/ML Engineering Intern",
            cohort: "Spring 2026",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-blue-600"
        },
        description: "An AI-powered brand sentiment analytics tool tailored for local retail and dining brands in Madurai. It scrapes public reviews, translates mixed Tamil-English comments, and extracts underlying customer emotion (e.g., happiness with taste, frustration with wait time) with automated professional reply templates.",
        problem: "Local restaurant and apparel owners don't have the time to read through hundreds of reviews on Google Maps and Zomato. They need automated insights that bypass language barriers.",
        solution: "A machine learning pipeline that parses reviews, scores sentiment, labels feature categories, and generates personalized responses using natural language models.",
        techStack: ["React", "Python", "Flask", "Tailwind CSS", "HuggingFace", "D3.js"],
        demoAvailable: true,
        githubLink: "https://github.com/amora-prime/sentimentalist",
        liveLink: "https://sentimentalist.amoraprime.in",
        visualGradient: "from-blue-900 via-cyan-950 to-black",
        mentorNote: "Vignesh's translation layer is extremely robust. It parses phonetic Tamil written in English alphabet accurately. Great work!"
    },
    {
        id: "vibesync",
        title: "VibeSync",
        tagline: "Interactive Music Collaboration Hub",
        category: "Frontend",
        intern: {
            name: "Shalini Dev",
            role: "Frontend Engineering Intern",
            cohort: "Spring 2026",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-pink-600"
        },
        description: "A real-time collaborative workspace for music enthusiasts where users can create dynamic synchronized audio playlists and control real-time, screen-filling audio-reactive canvas animations. Powered by WebSockets and the Web Audio API.",
        problem: "Shared musical playlists are static. Music-sharing communities need a visually interactive, real-time shared listening lounge to connect dynamically.",
        solution: "Built a reactive audio room using WebSocket synchronization and beautiful GSAP animation rendering that maps frequencies to physical visual pulses.",
        techStack: ["React", "GSAP", "Tailwind CSS", "Socket.io", "Web Audio API"],
        demoAvailable: false,
        githubLink: "https://github.com/amora-prime/vibesync",
        liveLink: "https://vibesync.amoraprime.in",
        visualGradient: "from-pink-900 via-rose-950 to-black",
        mentorNote: "Shalini combined Web Audio API frequency analysis with GSAP curves flawlessly, resulting in an exceptionally smooth visual performance."
    },
    {
        id: "medkeep",
        title: "MedKeep Vault",
        tagline: "Secure Patient Records Dashboard",
        category: "Web Security",
        intern: {
            name: "Ajay Kumar",
            role: "Backend & Security Intern",
            cohort: "Winter 2025",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-red-600"
        },
        description: "A secure medical registry that uses client-side Web Crypto API to encrypt sensitive patient records before saving them to the backend server. The server never sees patient identity data in plain text, ensuring HIPAA-grade security for local clinics.",
        problem: "Small medical clinics want cloud databases but fear data leaks and lack budget for expensive enterprise grade security setups.",
        solution: "A local-encryption-first client application. The user's password derives an AES-256 decryption key, keeping data 100% private at minimal hosting costs.",
        techStack: ["React", "Node.js", "Express", "Web Crypto API", "PostgreSQL", "JWT"],
        demoAvailable: false,
        githubLink: "https://github.com/amora-prime/medkeep",
        liveLink: "https://medkeep.amoraprime.in",
        visualGradient: "from-red-900 via-amber-950 to-black",
        mentorNote: "Ajay designed a stellar key-derivation process that prevents side-channel leaks. His security audit report was top tier."
    },
    {
        id: "amora-canvas",
        title: "Amora Canvas",
        tagline: "Vector Workspace with AI Co-Pilot",
        category: "Frontend",
        intern: {
            name: "Sneha Roy",
            role: "Frontend Engineering Intern",
            cohort: "Winter 2025",
            github: "https://github.com",
            linkedin: "https://linkedin.com",
            avatarBg: "bg-yellow-600"
        },
        description: "An infinite vector design whiteboard built on HTML5 Canvas where designers can draft user interfaces and query an integrated AI layout generator to place pre-designed components directly on their boards.",
        problem: "Brainstorming and mockup drafting involve switching between layout tools and writing down prompt scripts. Designers need an active canvas co-pilot.",
        solution: "An interactive canvas with a sidebar AI panel. Users sketch wireframes, and the AI translates their prompt or sketch into SVG rectangles, circles, and buttons.",
        techStack: ["React", "HTML5 Canvas", "Tailwind CSS", "GSAP", "IndexedDB"],
        demoAvailable: false,
        githubLink: "https://github.com/amora-prime/amora-canvas",
        liveLink: "https://canvas.amoraprime.in",
        visualGradient: "from-yellow-900 via-orange-950 to-black",
        mentorNote: "Sneha constructed a high-efficiency zoom and pan layout that works smoothly on mobile. Her clean canvas rendering loop is impressive."
    }
];

const ALL_TECH_STACKS = Array.from(
    new Set(PROJECTS_DATA.flatMap((p) => p.techStack))
).sort();

const ALL_COHORTS = ["All", "Summer 2026", "Spring 2026", "Winter 2025"];
const ALL_CATEGORIES = ["All", "AI/ML", "Full-Stack", "Frontend", "Web Security"];

const Showcase = ({ onBackHome }) => {
    // Search and Filters State
    const [searchQuery, setSearchQuery] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [selectedCohort, setSelectedCohort] = useState("All");
    const [selectedTechs, setSelectedTechs] = useState([]);
    
    // Active project modal
    const [activeProject, setActiveProject] = useState(null);
    
    // Application Form State
    const [formSubmitted, setFormSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        github: "",
        skills: "",
        message: "",
        role: "Frontend"
    });
    const [formErrors, setFormErrors] = useState({});

    // Filter projects
    const filteredProjects = PROJECTS_DATA.filter((project) => {
        const matchesSearch = 
            project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.intern.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase());
        
        const matchesCategory = 
            selectedCategory === "All" || project.category === selectedCategory;
        
        const matchesCohort = 
            selectedCohort === "All" || project.intern.cohort === selectedCohort;
        
        const matchesTech = 
            selectedTechs.length === 0 || 
            selectedTechs.every((tech) => project.techStack.includes(tech));

        return matchesSearch && matchesCategory && matchesCohort && matchesTech;
    });

    const handleTechToggle = (tech) => {
        if (selectedTechs.includes(tech)) {
            setSelectedTechs(selectedTechs.filter((t) => t !== tech));
        } else {
            setSelectedTechs([...selectedTechs, tech]);
        }
    };

    const clearAllFilters = () => {
        setSearchQuery("");
        setSelectedCategory("All");
        setSelectedCohort("All");
        setSelectedTechs([]);
    };

    // Form submission handler
    const handleFormSubmit = (e) => {
        e.preventDefault();
        const errors = {};
        
        if (!formData.name.trim()) errors.name = "Name is required";
        if (!formData.email.trim()) {
            errors.email = "Email is required";
        } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            errors.email = "Email is invalid";
        }
        if (!formData.github.trim()) {
            errors.github = "GitHub profile link is required";
        } else if (!formData.github.includes("github.com")) {
            errors.github = "Must be a valid GitHub URL";
        }
        if (!formData.skills.trim()) errors.skills = "Please enter some skills";
        if (!formData.message.trim()) errors.message = "Please write a short note";

        if (Object.keys(errors).length > 0) {
            setFormErrors(errors);
            return;
        }

        setFormErrors({});
        setFormSubmitted(true);
        console.log("Intern Application Submitted:", formData);
    };

    const handleFormChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (formErrors[name]) {
            setFormErrors((prev) => ({ ...prev, [name]: "" }));
        }
    };

    // Simulated Demos State & Logic
    const [aurachatInput, setAurachatInput] = useState("");
    const [aurachatMessages, setAurachatMessages] = useState([
        { sender: "bot", text: "Vanakkam! Welcome to Kirana AuraChat. How can I help you today? (You can type in English, Tamil, or Tanglish)" }
    ]);
    const [isAuraTyping, setIsAuraTyping] = useState(false);

    const handleAuraChatSend = (e, text = "") => {
        if (e) e.preventDefault();
        const msg = text || aurachatInput;
        if (!msg.trim()) return;

        setAurachatMessages((prev) => [...prev, { sender: "user", text: msg }]);
        setAurachatInput("");
        setIsAuraTyping(true);

        setTimeout(() => {
            setIsAuraTyping(false);
            const lower = msg.toLowerCase();
            let response = "Excuse me, I couldn't find details on that item. Type 'oil', 'rice', or 'closing time' for a test!";
            
            if (lower.includes("oil") || lower.includes("ennai")) {
                response = "Gold Winner Sunflower Oil 1L is available at ₹165. Sesame Oil (Nalla Ennai) 500ml is available at ₹190. Shall I add it to your bag?";
            } else if (lower.includes("rice") || lower.includes("arisi")) {
                response = "Ponni Rice 5kg pack is available at ₹320. Basmati Rice (Premium) 1kg is ₹110. Stock is high!";
            } else if (lower.includes("closing") || lower.includes("time") || lower.includes("eppa") || lower.includes("open")) {
                response = "We are open from 7:00 AM to 9:30 PM every day. Located near Thirumangalam Railway Gate, Madurai.";
            } else if (lower.includes("hello") || lower.includes("hi") || lower.includes("vanakkam")) {
                response = "Hello! How can I help you? Ask me about 'rice price', 'sunflower oil', or 'shop timings'.";
            }
            
            setAurachatMessages((prev) => [...prev, { sender: "bot", text: response }]);
        }, 800);
    };

    // Koodal Market simulator
    const [koodalDistance, setKoodalDistance] = useState(15);
    const [koodalWeight, setKoodalWeight] = useState(50);
    const [koodalVehicle, setKoodalVehicle] = useState("Auto");
    const [koodalResult, setKoodalResult] = useState(null);
    const [isKoodalLoading, setIsKoodalLoading] = useState(false);

    const handleKoodalCalculate = (e) => {
        e.preventDefault();
        setIsKoodalLoading(true);
        setKoodalResult(null);

        setTimeout(() => {
            setIsKoodalLoading(false);
            const dist = Number(koodalDistance);
            const wt = Number(koodalWeight);
            
            let ratePerKm = 8;
            if (koodalVehicle === "Mini Truck") ratePerKm = 15;
            if (koodalVehicle === "2-Wheeler") ratePerKm = 4;
            
            const baseCharge = 50;
            const weightCharge = wt * 0.5;
            const totalCost = baseCharge + (dist * ratePerKm) + weightCharge;

            const drivers = {
                "2-Wheeler": "Saravanan P. (Active, 3 mins away)",
                "Auto": "Muthu Kumar M. (Active, 5 mins away)",
                "Mini Truck": "Ganesan K. (Active, 10 mins away)"
            };

            const route = dist < 20 ? "Thirumangalam Hub ➔ Mattuthavani Wholesale" : "Usilampatti Farm Gate ➔ Nelpettai Market";

            setKoodalResult({
                cost: Math.round(totalCost),
                driver: drivers[koodalVehicle],
                route: route,
                carbonSaved: Math.round(dist * 0.12),
                eta: Math.round(dist * 2.2 + 8)
            });
        }, 1000);
    };

    // Sentimentalist simulator
    const [sentimentText, setSentimentText] = useState("");
    const [sentimentResult, setSentimentResult] = useState(null);
    const [isSentimentLoading, setIsSentimentLoading] = useState(false);

    const handleSentimentAnalyze = (e) => {
        e.preventDefault();
        if (!sentimentText.trim()) return;

        setIsSentimentLoading(true);
        setSentimentResult(null);

        setTimeout(() => {
            setIsSentimentLoading(false);
            const text = sentimentText.toLowerCase();
            
            let score = 50;
            let emotion = "Neutral";
            let replyText = "Thank you for sharing your feedback with us! We appreciate you taking the time.";

            if (
                text.includes("good") || 
                text.includes("great") || 
                text.includes("amazing") || 
                text.includes("taste") || 
                text.includes("super") ||
                text.includes("nalla") ||
                text.includes("arputham")
            ) {
                score = Math.floor(Math.random() * 20) + 80;
                emotion = "Delighted";
                replyText = "Thank you so much! We are thrilled to hear you loved our service and quality. Looking forward to welcoming you back soon!";
            } else if (
                text.includes("bad") || 
                text.includes("worst") || 
                text.includes("late") || 
                text.includes("slow") || 
                text.includes("waste") ||
                text.includes("mosam")
            ) {
                score = Math.floor(Math.random() * 25) + 10;
                emotion = "Frustrated";
                replyText = "We are deeply sorry for the inconvenience caused. This is not the standard we strive for. Please email us at contact@brand.com so we can make this right.";
            } else if (text.includes("expensive") || text.includes("costly") || text.includes("price")) {
                score = 45;
                emotion = "Concerned";
                replyText = "Thank you for the review. We try to balance premium ingredients with fair pricing. We hope to deliver better value on your next visit!";
            }

            setSentimentResult({
                score,
                emotion,
                reply: replyText
            });
        }, 900);
    };

    // Reset simulators when changing modal
    useEffect(() => {
        if (activeProject) {
            setAurachatMessages([
                { sender: "bot", text: "Vanakkam! Welcome to Kirana AuraChat. How can I help you today? (You can type in English, Tamil, or Tanglish)" }
            ]);
            setKoodalResult(null);
            setSentimentResult(null);
            setSentimentText("");
        }
    }, [activeProject]);

    // Handle scroll to top on mount
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen w-screen bg-[#07070a] text-blue-50 relative pb-24 overflow-x-hidden font-sans">
            
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#5724ff]/10 rounded-full blur-[150px] pointer-events-none" />
            <div className="absolute top-[80vh] right-1/4 w-[400px] h-[400px] bg-yellow-300/5 rounded-full blur-[130px] pointer-events-none" />
            <div className="absolute bottom-1/4 left-1/3 w-[600px] h-[600px] bg-emerald-500/5 rounded-full blur-[180px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 pt-32 relative z-10">
                
                {/* Back Button */}
                <button 
                    onClick={onBackHome}
                    className="group mb-8 flex items-center gap-2 border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-xs uppercase px-5 py-2.5 rounded-full tracking-wider cursor-pointer text-[#dfdff0]"
                >
                    <FaArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                    Back to Agency Home
                </button>

                {/* Platform Header */}
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8 text-left">
                    <div>
                        <span className="text-[10px] uppercase font-bold tracking-widest text-[#edff66] bg-yellow-300/10 px-3 py-1 rounded-full border border-yellow-300/20 w-fit block mb-4">
                            Amora Labs
                        </span>
                        <h1 className="special-font text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-none text-white">
                            IN<b>T</b>ERN CO<b>H</b>ORT <br />SH<b>O</b>WCASE
                        </h1>
                        <p className="mt-6 text-sm md:text-base text-gray-400 max-w-xl font-circular-web">
                            Explore production-grade software engineered by our student developers during their intensive cohorts at Amora Prime. Browse source code, filter by stack, and try out live interactive simulators of their final apps.
                        </p>
                    </div>

                    {/* Stats Panel */}
                    <div className="grid grid-cols-2 gap-4 bg-neutral-900/60 border border-white/10 p-6 rounded-2xl backdrop-blur-md min-w-[280px] max-w-sm md:w-[350px]">
                        <div className="border-r border-white/10 pr-2">
                            <h3 className="font-zentry text-3xl font-black text-[#edff66] leading-none">6</h3>
                            <p className="text-[10px] text-gray-500 font-general uppercase tracking-wider mt-1">Featured Apps</p>
                        </div>
                        <div className="pl-2">
                            <h3 className="font-zentry text-3xl font-black text-white leading-none">12</h3>
                            <p className="text-[10px] text-gray-500 font-general uppercase tracking-wider mt-1">Cohort Alumni</p>
                        </div>
                        <div className="border-t border-r border-white/10 pt-3 pr-2 mt-2">
                            <h3 className="font-zentry text-3xl font-black text-white leading-none">15+</h3>
                            <p className="text-[10px] text-gray-500 font-general uppercase tracking-wider mt-1">Tech Stacks</p>
                        </div>
                        <div className="border-t border-white/10 pt-3 pl-2 mt-2">
                            <h3 className="font-zentry text-3xl font-black text-[#5724ff] leading-none">100%</h3>
                            <p className="text-[10px] text-gray-500 font-general uppercase tracking-wider mt-1">Open Source</p>
                        </div>
                    </div>
                </div>

                {/* Filters & Control Center */}
                <div className="bg-neutral-950/80 border border-white/10 rounded-3xl p-6 md:p-8 mb-12 backdrop-blur-lg">
                    <div className="flex flex-col gap-6">
                        
                        {/* Search and Category Row */}
                        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
                            <div className="relative w-full lg:max-w-md">
                                <FaSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 text-sm" />
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Search projects, interns, stacks..."
                                    className="w-full bg-white/5 border border-white/10 text-white rounded-full pl-11 pr-5 py-3 text-sm focus:outline-none focus:border-[#5724ff] focus:ring-1 focus:ring-[#5724ff] transition-all placeholder:text-gray-500 font-sans"
                                />
                                {searchQuery && (
                                    <button 
                                        onClick={() => setSearchQuery("")}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-white"
                                    >
                                        <FaTimes className="text-xs" />
                                    </button>
                                )}
                            </div>

                            {/* Category Filter Chips */}
                            <div className="flex flex-wrap items-center gap-2 w-full lg:w-auto justify-start lg:justify-end">
                                <span className="text-xs text-gray-500 flex items-center gap-1.5 mr-2">
                                    <FaFilter className="text-[10px]" /> Category:
                                </span>
                                {ALL_CATEGORIES.map((cat) => (
                                    <button
                                        key={cat}
                                        onClick={() => setSelectedCategory(cat)}
                                        className={`text-xs px-4 py-2 rounded-full cursor-pointer transition-all duration-300 ${
                                            selectedCategory === cat
                                                ? "bg-white text-black font-semibold"
                                                : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                                        }`}
                                    >
                                        {cat}
                                    </button>
                                ))}
                            </div>
                        </div>

                        {/* Cohort and Tech stack list */}
                        <div className="border-t border-white/15 pt-6 flex flex-col md:flex-row gap-6 text-left">
                            
                            {/* Cohort list */}
                            <div className="min-w-[160px]">
                                <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">Cohort</h4>
                                <div className="flex flex-col gap-2">
                                    {ALL_COHORTS.map((ch) => (
                                        <button
                                            key={ch}
                                            onClick={() => setSelectedCohort(ch)}
                                            className={`text-left text-xs py-1.5 px-3 rounded-lg transition-colors cursor-pointer ${
                                                selectedCohort === ch
                                                    ? "bg-[#5724ff] text-white font-medium"
                                                    : "text-gray-400 hover:text-white hover:bg-white/5"
                                            }`}
                                        >
                                            {ch}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Tech Stack Multiselect chips */}
                            <div className="flex-1">
                                <div className="flex justify-between items-center mb-3">
                                    <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider">Filter By Tech Stack (Multi-select)</h4>
                                    {(selectedTechs.length > 0 || searchQuery || selectedCategory !== "All" || selectedCohort !== "All") && (
                                        <button
                                            onClick={clearAllFilters}
                                            className="text-[11px] text-[#edff66] hover:underline flex items-center gap-1 cursor-pointer font-general"
                                        >
                                            Clear Filters
                                        </button>
                                    )}
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {ALL_TECH_STACKS.map((tech) => {
                                        const isSelected = selectedTechs.includes(tech);
                                        return (
                                            <button
                                                key={tech}
                                                onClick={() => handleTechToggle(tech)}
                                                className={`text-[11px] px-3.5 py-1.5 rounded-full cursor-pointer transition-all duration-300 ${
                                                    isSelected
                                                        ? "bg-[#edff66] text-black font-semibold border border-yellow-300"
                                                        : "bg-white/5 border border-white/10 text-gray-400 hover:text-white hover:bg-white/10"
                                                }`}
                                            >
                                                {tech}
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

                {/* Filter Status */}
                <div className="mb-6 flex justify-between items-center">
                    <p className="text-xs text-gray-400">
                        Showing <span className="text-white font-semibold">{filteredProjects.length}</span> of {PROJECTS_DATA.length} projects
                    </p>
                </div>

                {/* Showcase Cards Grid */}
                {filteredProjects.length === 0 ? (
                    <div className="bg-neutral-950/40 border border-white/5 rounded-3xl py-24 text-center">
                        <span className="text-5xl block mb-4">🔍</span>
                        <h3 className="font-zentry text-2xl font-bold uppercase text-white mb-2">No Projects Match Your Criteria</h3>
                        <p className="text-sm text-gray-500 max-w-sm mx-auto">
                            Try loosening your search query or removing some filters to explore other projects.
                        </p>
                        <button
                            onClick={clearAllFilters}
                            className="mt-6 border border-white/20 bg-white/5 hover:bg-white/10 text-xs uppercase px-6 py-2.5 rounded-full tracking-wider font-semibold cursor-pointer text-[#dfdff0]"
                        >
                            Reset All Filters
                        </button>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {filteredProjects.map((project) => (
                            <BentoTilt 
                                key={project.id} 
                                className="border-hsla bg-neutral-950 rounded-2xl overflow-hidden group hover:border-[#5724ff]/50 transition-all duration-500 cursor-pointer flex flex-col h-[520px]"
                            >
                                <div 
                                    onClick={() => setActiveProject(project)}
                                    className="flex flex-col h-full justify-between"
                                >
                                    {/* Media visual representation */}
                                    <div className={`h-48 w-full bg-gradient-to-br ${project.visualGradient} p-6 flex flex-col justify-between relative overflow-hidden border-b border-white/10 text-left`}>
                                        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                                        
                                        <div className="flex justify-between items-start z-10">
                                            <span className="text-[10px] uppercase font-bold text-white bg-black/40 border border-white/10 px-3 py-1 rounded-full backdrop-blur-xs">
                                                {project.category}
                                            </span>
                                            {project.demoAvailable && (
                                                <span className="text-[9px] uppercase font-bold text-black bg-[#edff66] px-2.5 py-0.5 rounded-sm">
                                                    Live Demo Inside
                                                </span>
                                            )}
                                        </div>

                                        <div className="z-10 mt-auto">
                                            <h3 className="font-zentry text-3xl font-black text-white leading-none tracking-wide group-hover:text-[#edff66] transition-colors">
                                                {project.title.split(" ").map((w, i) => i === 1 ? <b key={i} className="text-[#edff66] font-black">{w}</b> : w + " ")}
                                            </h3>
                                            <p className="text-xs text-white/70 font-sans tracking-wide mt-1">
                                                {project.tagline}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Card Info */}
                                    <div className="p-6 flex-1 flex flex-col justify-between bg-neutral-950 text-left">
                                        <div>
                                            <p className="text-xs text-gray-400 line-clamp-4 leading-relaxed font-sans mb-4">
                                                {project.description}
                                            </p>

                                            {/* Stack badges */}
                                            <div className="flex flex-wrap gap-1.5 mb-4">
                                                {project.techStack.slice(0, 4).map((tech) => (
                                                    <span 
                                                        key={tech} 
                                                        className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-2 py-0.5 rounded-sm font-mono"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                                {project.techStack.length > 4 && (
                                                    <span className="text-[10px] bg-white/5 border border-white/10 text-gray-500 px-2 py-0.5 rounded-sm">
                                                        +{project.techStack.length - 4}
                                                    </span>
                                                )}
                                            </div>
                                        </div>

                                        {/* Intern Developer Details */}
                                        <div className="border-t border-white/10 pt-4 flex items-center justify-between">
                                            <div className="flex items-center gap-3">
                                                <div className={`w-8 h-8 rounded-full ${project.intern.avatarBg} text-white flex items-center justify-center font-bold text-xs uppercase shadow-inner`}>
                                                    {project.intern.name.split(" ").map(w => w[0]).join("")}
                                                </div>
                                                <div>
                                                    <h4 className="text-xs font-semibold text-white leading-none">{project.intern.name}</h4>
                                                    <span className="text-[9px] text-gray-500 tracking-wide uppercase mt-0.5 block">{project.intern.cohort}</span>
                                                </div>
                                            </div>

                                            <div className="flex items-center gap-1">
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        window.open(project.githubLink, "_blank");
                                                    }}
                                                    className="p-2 bg-white/5 border border-white/10 hover:border-white/20 rounded-full hover:bg-white/10 text-gray-400 hover:text-white transition-colors cursor-pointer"
                                                    title="View GitHub Repository"
                                                >
                                                    <FaGithub className="text-sm" />
                                                </button>
                                                <button 
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        setActiveProject(project);
                                                    }}
                                                    className="p-2 bg-[#5724ff]/15 border border-[#5724ff]/20 hover:border-[#5724ff]/40 rounded-full hover:bg-[#5724ff]/35 text-[#edff66] transition-colors cursor-pointer"
                                                    title="View Project Details & Live Demo"
                                                >
                                                    <TiLocationArrow className="text-sm rotate-45 scale-110" />
                                                </button>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </BentoTilt>
                        ))}
                    </div>
                )}

                {/* Apply/Internship Program CTA section */}
                <section className="mt-28 relative rounded-3xl bg-neutral-950 border border-white/10 overflow-hidden px-8 py-16 md:p-16 backdrop-blur-sm">
                    <div className="absolute top-1/2 left-0 w-80 h-80 bg-[#5724ff]/5 rounded-full blur-[100px] pointer-events-none" />
                    <div className="absolute right-0 bottom-0 w-60 h-60 bg-emerald-500/5 rounded-full blur-[80px] pointer-events-none" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center gap-12">
                        
                        {/* Copy Column */}
                        <div className="w-full lg:w-1/2 flex flex-col text-left">
                            <span className="text-[10px] uppercase font-bold tracking-widest text-[#5724ff] mb-4">
                                Join Amora Labs
                            </span>
                            <h2 className="special-font text-4xl sm:text-5xl font-black uppercase text-white leading-none">
                                LA<b>U</b>NCH Y<b>O</b>UR <br />DEVE<b>L</b>OPER C<b>A</b>REER
                            </h2>
                            <p className="mt-6 text-sm text-gray-400 font-sans leading-relaxed max-w-md">
                                Are you an aspiring developer or AI engineer looking to build real-world software, receive direct mentoring from seasoned professionals, and showcase your achievements to clients worldwide?
                            </p>
                            
                            <div className="mt-8 space-y-4">
                                <div className="flex gap-4 items-start">
                                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#edff66] text-xs">
                                        <FaCode />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-white uppercase tracking-wide">Production Level Codebases</h4>
                                        <p className="text-xs text-gray-500 mt-1">We don't do simple todo-apps. You will commit code directly to functional commercial solutions.</p>
                                    </div>
                                </div>
                                <div className="flex gap-4 items-start">
                                    <div className="p-2.5 rounded-lg bg-white/5 border border-white/10 text-[#edff66] text-xs">
                                        <FaBrain />
                                    </div>
                                    <div>
                                        <h4 className="text-xs font-semibold text-white uppercase tracking-wide">AI & Modern Stack Focus</h4>
                                        <p className="text-xs text-gray-500 mt-1">Acquire real expertise in large language model integrations, vector databases, and highly responsive React architectures.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Interactive Form Column */}
                        <div className="w-full lg:w-1/2 bg-neutral-900/40 border border-white/10 p-6 md:p-8 rounded-2xl backdrop-blur-md">
                            {formSubmitted ? (
                                <div className="py-12 text-center flex flex-col items-center">
                                    <div className="w-16 h-16 rounded-full bg-[#edff66]/10 border border-[#edff66]/20 flex items-center justify-center text-[#edff66] text-2xl mb-6 animate-pulse">
                                        ✓
                                    </div>
                                    <h3 className="font-zentry text-2xl font-black uppercase text-white mb-2">Application Received</h3>
                                    <p className="text-sm text-gray-400 max-w-sm mx-auto mb-6">
                                        Thanks for applying, {formData.name}! Our engineering mentors review portfolios weekly and will get back to you shortly.
                                    </p>
                                    <button 
                                        onClick={() => {
                                            setFormSubmitted(false);
                                            setFormData({ name: "", email: "", github: "", skills: "", message: "", role: "Frontend" });
                                        }}
                                        className="text-xs uppercase text-[#edff66] font-semibold border-b border-[#edff66] pb-1 hover:text-white hover:border-white transition-all cursor-pointer bg-transparent border-0"
                                    >
                                        Submit Another Application
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleFormSubmit} className="space-y-4 text-left font-sans text-xs">
                                    <h3 className="text-sm font-semibold uppercase text-white tracking-wider mb-6 pb-2 border-b border-white/10">
                                        Apply for the Internship
                                    </h3>
                                    
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-gray-400 uppercase tracking-wider font-semibold">Your Name</label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleFormChange}
                                                placeholder="e.g. Anand R."
                                                className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] placeholder:text-gray-600 ${formErrors.name ? "border-red-500" : "border-white/10"}`}
                                            />
                                            {formErrors.name && <span className="text-[10px] text-red-500 block">{formErrors.name}</span>}
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-gray-400 uppercase tracking-wider font-semibold">Email Address</label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleFormChange}
                                                placeholder="e.g. anand@domain.com"
                                                className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] placeholder:text-gray-600 ${formErrors.email ? "border-red-500" : "border-white/10"}`}
                                            />
                                            {formErrors.email && <span className="text-[10px] text-red-500 block">{formErrors.email}</span>}
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                        <div className="space-y-1.5">
                                            <label className="text-gray-400 uppercase tracking-wider font-semibold">GitHub Profile URL</label>
                                            <input
                                                type="text"
                                                name="github"
                                                value={formData.github}
                                                onChange={handleFormChange}
                                                placeholder="github.com/yourusername"
                                                className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] placeholder:text-gray-600 ${formErrors.github ? "border-red-500" : "border-white/10"}`}
                                            />
                                            {formErrors.github && <span className="text-[10px] text-red-500 block">{formErrors.github}</span>}
                                        </div>

                                        <div className="space-y-1.5">
                                            <label className="text-gray-400 uppercase tracking-wider font-semibold">Preferred Cohort Track</label>
                                            <select
                                                name="role"
                                                value={formData.role}
                                                onChange={handleFormChange}
                                                className="w-full bg-[#121216] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] cursor-pointer"
                                            >
                                                <option value="AI/ML Engineering">AI/ML Engineering</option>
                                                <option value="Frontend Development">Frontend Dev (React/GSAP)</option>
                                                <option value="Full-Stack Engineering">Full Stack (Node/Postgres)</option>
                                                <option value="Web Security & Cloud">Security & Cloud DevOps</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-gray-400 uppercase tracking-wider font-semibold">Primary Tech Stack & Skills</label>
                                        <input
                                            type="text"
                                            name="skills"
                                            value={formData.skills}
                                            onChange={handleFormChange}
                                            placeholder="e.g. React, Python, Express, Tailwind"
                                            className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] placeholder:text-gray-600 ${formErrors.skills ? "border-red-500" : "border-white/10"}`}
                                        />
                                        {formErrors.skills && <span className="text-[10px] text-red-500 block">{formErrors.skills}</span>}
                                    </div>

                                    <div className="space-y-1.5">
                                        <label className="text-gray-400 uppercase tracking-wider font-semibold">What would you like to build at Amora?</label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleFormChange}
                                            rows="3"
                                            placeholder="Introduce yourself and describe a project concept you'd like to bring to life during the cohort..."
                                            className={`w-full bg-white/5 border rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-[#5724ff] placeholder:text-gray-600 resize-none ${formErrors.message ? "border-red-500" : "border-white/10"}`}
                                        />
                                        {formErrors.message && <span className="text-[10px] text-red-500 block">{formErrors.message}</span>}
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-white text-black hover:bg-[#edff66] py-3.5 rounded-lg flex items-center justify-center gap-2 font-semibold tracking-wider uppercase cursor-pointer transition-colors duration-300"
                                    >
                                        <FaPaperPlane className="text-[10px]" />
                                        Submit Portfolio & Apply
                                    </button>
                                </form>
                            )}
                        </div>

                    </div>
                </section>

            </div>

            {/* FULL SCREEN DETAILED PROJECT MODAL & INTERACTIVE SIMULATION */}
            {activeProject && (
                <div className="fixed inset-0 z-[100] overflow-y-auto bg-black/95 backdrop-blur-md flex justify-center items-start pt-10 pb-16 px-4 md:px-6">
                    <div className="w-full max-w-4xl bg-[#0b0b0f] border border-white/10 rounded-2xl overflow-hidden shadow-2xl relative">
                        
                        <button
                            onClick={() => setActiveProject(null)}
                            className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full text-gray-400 hover:text-white transition-all cursor-pointer z-50"
                        >
                            <FaTimes className="text-sm" />
                        </button>

                        {/* Modal Visual Banner */}
                        <div className={`bg-gradient-to-br ${activeProject.visualGradient} px-8 py-14 flex flex-col justify-between border-b border-white/10 relative text-left`}>
                            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />
                            
                            <div>
                                <span className="text-[10px] uppercase font-bold text-[#edff66] bg-yellow-300/10 border border-yellow-300/20 px-3 py-1 rounded-full">
                                    {activeProject.category} Project
                                </span>
                                <h2 className="font-zentry text-4xl md:text-5xl lg:text-6xl font-black text-white leading-none mt-6 tracking-wide">
                                    {activeProject.title}
                                </h2>
                                <p className="text-sm md:text-base text-white/80 font-sans mt-2 max-w-lg">
                                    {activeProject.tagline}
                                </p>
                            </div>
                        </div>

                        {/* Modal Body */}
                        <div className="p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
                            
                            {/* Left Side: Text Details */}
                            <div className="lg:col-span-2 text-left space-y-6 text-xs md:text-sm">
                                <div>
                                    <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">Project Overview</h4>
                                    <p className="text-gray-300 leading-relaxed font-sans">{activeProject.description}</p>
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div>
                                        <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">The Challenge</h4>
                                        <p className="text-gray-400 leading-relaxed font-sans text-xs">{activeProject.problem}</p>
                                    </div>
                                    <div>
                                        <h4 className="text-xs uppercase font-bold text-gray-500 tracking-wider mb-2">The Solution</h4>
                                        <p className="text-gray-400 leading-relaxed font-sans text-xs">{activeProject.solution}</p>
                                    </div>
                                </div>

                                {/* Simulated Interactive Demo Section (If available) */}
                                {activeProject.demoAvailable && (
                                    <div className="border border-white/10 bg-black/40 rounded-xl p-6 text-left">
                                        <div className="flex items-center justify-between mb-4">
                                            <h4 className="text-xs uppercase font-bold text-[#edff66] tracking-wider flex items-center gap-1.5">
                                                <FaLaptopCode /> Live Interactive Simulation
                                            </h4>
                                            <span className="text-[9px] bg-emerald-500/10 text-emerald-400 px-2 py-0.5 rounded-full border border-emerald-500/20 font-general uppercase">
                                                Fully Interactive
                                            </span>
                                        </div>

                                        {/* SIMULATOR 1: AuraChat */}
                                        {activeProject.id === "aurachat" && (
                                            <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden text-xs">
                                                <div className="bg-black px-4 py-2 border-b border-white/10 flex items-center justify-between">
                                                    <span className="font-mono text-gray-400">aurachat-preview-agent.bin</span>
                                                    <div className="flex gap-1.5">
                                                        <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                                                        <span className="w-2.5 h-2.5 rounded-full bg-green-500" />
                                                    </div>
                                                </div>
                                                <div className="h-44 overflow-y-auto p-4 space-y-3 font-sans">
                                                    {aurachatMessages.map((msg, i) => (
                                                        <div key={i} className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}>
                                                            <div className={`max-w-[85%] px-3 py-2 rounded-xl leading-relaxed ${
                                                                msg.sender === "user" ? "bg-[#5724ff] text-white rounded-tr-none" : "bg-white/10 text-gray-300 rounded-tl-none"
                                                            }`}>
                                                                {msg.text}
                                                            </div>
                                                        </div>
                                                    ))}
                                                    {isAuraTyping && (
                                                        <div className="flex justify-start">
                                                            <div className="bg-white/10 text-gray-400 px-3 py-2 rounded-xl rounded-tl-none animate-pulse">
                                                                Typing...
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>
                                                <div className="bg-black/60 p-2.5 border-t border-white/10 flex flex-wrap gap-1.5 items-center justify-center">
                                                    <button onClick={() => handleAuraChatSend(null, "How much is Ponni rice?")} className="bg-white/5 hover:bg-white/10 text-[10px] px-2.5 py-1.5 rounded-full text-gray-300 cursor-pointer">"How much is Ponni rice?"</button>
                                                    <button onClick={() => handleAuraChatSend(null, "Do you sell Sunflower Oil?")} className="bg-white/5 hover:bg-white/10 text-[10px] px-2.5 py-1.5 rounded-full text-gray-300 cursor-pointer">"Do you sell Sunflower Oil?"</button>
                                                    <button onClick={() => handleAuraChatSend(null, "What are the shop timings?")} className="bg-white/5 hover:bg-white/10 text-[10px] px-2.5 py-1.5 rounded-full text-gray-300 cursor-pointer">"Shop timings?"</button>
                                                </div>
                                                <form onSubmit={handleAuraChatSend} className="p-3 bg-black border-t border-white/10 flex gap-2">
                                                    <input
                                                        type="text"
                                                        value={aurachatInput}
                                                        onChange={(e) => setAurachatInput(e.target.value)}
                                                        placeholder="Type: 'rice', 'oil', or 'timings'..."
                                                        className="flex-1 bg-white/5 border border-white/10 rounded-md px-3 py-1.5 text-white text-xs focus:outline-none focus:border-[#5724ff]"
                                                    />
                                                    <button type="submit" className="bg-[#5724ff] text-white hover:bg-[#4317df] px-3 py-1.5 rounded-md text-xs font-semibold cursor-pointer">Send</button>
                                                </form>
                                            </div>
                                        )}

                                        {/* SIMULATOR 2: Koodal Market */}
                                        {activeProject.id === "koodal-market" && (
                                            <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden p-4 font-sans text-xs">
                                                <form onSubmit={handleKoodalCalculate} className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-4 text-left">
                                                    <div>
                                                        <label className="text-[10px] text-gray-500 uppercase font-semibold">Distance (km)</label>
                                                        <input 
                                                            type="number" 
                                                            value={koodalDistance} 
                                                            onChange={(e) => setKoodalDistance(e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-2.5 py-1.5 mt-1 text-white focus:outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-[10px] text-gray-500 uppercase font-semibold">Weight (kg)</label>
                                                        <input 
                                                            type="number" 
                                                            value={koodalWeight} 
                                                            onChange={(e) => setKoodalWeight(e.target.value)}
                                                            className="w-full bg-white/5 border border-white/10 rounded px-2.5 py-1.5 mt-1 text-white focus:outline-none"
                                                        />
                                                    </div>
                                                    <div>
                                                        <label className="text-[10px] text-gray-500 uppercase font-semibold">Vehicle</label>
                                                        <select 
                                                            value={koodalVehicle} 
                                                            onChange={(e) => setKoodalVehicle(e.target.value)}
                                                            className="w-full bg-[#121216] border border-white/10 rounded px-2.5 py-1.5 mt-1 text-white focus:outline-none"
                                                        >
                                                            <option value="2-Wheeler">2-Wheeler (Moped)</option>
                                                            <option value="Auto">Auto-Rickshaw</option>
                                                            <option value="Mini Truck">Tata Ace Mini Truck</option>
                                                        </select>
                                                    </div>
                                                </form>

                                                <button 
                                                    onClick={handleKoodalCalculate}
                                                    className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-semibold py-2 rounded transition-colors uppercase tracking-wider text-[10px] cursor-pointer"
                                                >
                                                    {isKoodalLoading ? "Optimizing Route..." : "Calculate Freight & Pool Share"}
                                                </button>

                                                {koodalResult && (
                                                    <div className="mt-4 p-4 bg-black/40 border border-white/10 rounded-lg text-left space-y-2 font-mono text-[11px] relative overflow-hidden">
                                                        <div className="absolute right-4 bottom-2 text-emerald-500/20 text-3xl font-black uppercase pointer-events-none">KOODAL</div>
                                                        <div><span className="text-gray-500">Estimated Cost:</span> <span className="text-[#edff66] font-bold">₹{koodalResult.cost}</span> <span className="text-gray-500 text-[10px]">(Shared Pooling Rate)</span></div>
                                                        <div><span className="text-gray-500">Driver Assigned:</span> <span className="text-white">{koodalResult.driver}</span></div>
                                                        <div><span className="text-gray-500">Cargo Route:</span> <span className="text-white">{koodalResult.route}</span></div>
                                                        <div><span className="text-gray-500">CO2 Emissions Saved:</span> <span className="text-emerald-400">{koodalResult.carbonSaved} kg CO2</span></div>
                                                        <div><span className="text-gray-500">Est. Dispatch ETA:</span> <span className="text-white">{koodalResult.eta} minutes</span></div>
                                                    </div>
                                                )}
                                            </div>
                                        )}

                                        {/* SIMULATOR 3: Sentimentalist */}
                                        {activeProject.id === "sentimentalist" && (
                                            <div className="bg-neutral-900 border border-white/10 rounded-xl overflow-hidden p-4 font-sans text-xs">
                                                <div className="text-left mb-3">
                                                    <label className="text-[10px] text-gray-500 uppercase font-semibold">Paste Review to Analyze</label>
                                                    <textarea 
                                                        value={sentimentText} 
                                                        onChange={(e) => setSentimentText(e.target.value)}
                                                        rows="2"
                                                        placeholder="Try: 'The biryani taste was excellent!' or 'Worst delivery delay, food cold.'"
                                                        className="w-full bg-white/5 border border-white/10 rounded p-2 mt-1 text-white focus:outline-none focus:border-blue-500"
                                                    />
                                                </div>

                                                <div className="flex gap-2 mb-3">
                                                    <button onClick={() => setSentimentText("The biryani taste was excellent! Full of spices and hot.")} className="bg-white/5 hover:bg-white/10 text-[9px] px-2 py-1 rounded text-gray-400 cursor-pointer">"Excellent Taste"</button>
                                                    <button onClick={() => setSentimentText("Worst delivery service, the package arrived 1 hour late.")} className="bg-white/5 hover:bg-white/10 text-[9px] px-2 py-1 rounded text-gray-400 cursor-pointer">"Worst Delay"</button>
                                                </div>

                                                <button 
                                                    onClick={handleSentimentAnalyze}
                                                    className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded transition-colors uppercase tracking-wider text-[10px] cursor-pointer"
                                                >
                                                    {isSentimentLoading ? "Running Translation & NLP..." : "Run Sentiment Analysis"}
                                                </button>

                                                {sentimentResult && (
                                                    <div className="mt-4 p-4 bg-black/40 border border-white/10 rounded-lg text-left space-y-3 font-sans">
                                                        <div className="flex justify-between items-center border-b border-white/10 pb-2">
                                                            <span className="font-mono text-gray-500">Emotion: <span className={`font-bold ${sentimentResult.score > 70 ? "text-emerald-400" : sentimentResult.score < 40 ? "text-rose-400" : "text-amber-400"}`}>{sentimentResult.emotion}</span></span>
                                                            <span className="font-bold text-[#edff66] font-mono">{sentimentResult.score}% Pos</span>
                                                        </div>
                                                        <div className="w-full bg-white/5 h-2 rounded-full overflow-hidden">
                                                            <div 
                                                                className={`h-full transition-all duration-1000 ${
                                                                    sentimentResult.score > 70 ? "bg-emerald-500" : sentimentResult.score < 40 ? "bg-red-500" : "bg-amber-500"
                                                                }`}
                                                                style={{ width: `${sentimentResult.score}%` }}
                                                            />
                                                        </div>
                                                        <div>
                                                            <h5 className="text-[10px] text-gray-500 uppercase font-semibold mb-1 font-mono">Suggested Reply Template:</h5>
                                                            <p className="text-xs text-gray-300 italic bg-black/30 border border-white/5 p-2.5 rounded leading-relaxed">{sentimentResult.reply}</p>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        )}
                                    </div>
                                )}
                            </div>

                            {/* Right Side: Sidebar Meta Details */}
                            <div className="lg:col-span-1 text-left space-y-6">
                                
                                {/* Developer Meta Block */}
                                <div className="border border-white/10 bg-neutral-950/80 p-5 rounded-xl">
                                    <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-3">Project Developer</h4>
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className={`w-12 h-12 rounded-full ${activeProject.intern.avatarBg} text-white flex items-center justify-center font-bold text-base uppercase`}>
                                            {activeProject.intern.name.split(" ").map(w => w[0]).join("")}
                                        </div>
                                        <div>
                                            <h4 className="text-sm font-semibold text-white leading-none">{activeProject.intern.name}</h4>
                                            <span className="text-[10px] text-gray-400 tracking-wide uppercase mt-1 block font-general">{activeProject.intern.role}</span>
                                            <span className="text-[9px] text-[#edff66] bg-yellow-300/10 px-2 py-0.5 rounded border border-yellow-300/20 tracking-wide uppercase mt-1.5 inline-block font-mono">{activeProject.intern.cohort}</span>
                                        </div>
                                    </div>
                                    <div className="flex gap-2">
                                        <button 
                                            onClick={() => window.open(activeProject.intern.github, "_blank")}
                                            className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                                        >
                                            <FaGithub /> GitHub
                                        </button>
                                        <button 
                                            onClick={() => window.open(activeProject.intern.linkedin, "_blank")}
                                            className="flex-1 bg-white/5 hover:bg-white/10 text-white border border-white/10 py-2 rounded-lg text-xs font-semibold cursor-pointer transition-colors flex items-center justify-center gap-1.5"
                                        >
                                            LinkedIn
                                        </button>
                                    </div>
                                </div>

                                {/* Tech stack tags list */}
                                <div className="border border-white/10 bg-neutral-950/80 p-5 rounded-xl">
                                    <h4 className="text-[10px] uppercase font-bold text-gray-500 tracking-wider mb-3">Stack Details</h4>
                                    <div className="flex flex-wrap gap-2">
                                        {activeProject.techStack.map((tech) => (
                                            <span 
                                                key={tech} 
                                                className="text-[10px] bg-white/5 border border-white/10 text-gray-300 px-3 py-1 rounded-md font-mono"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                {/* Mentor Statement block */}
                                <div className="border border-yellow-300/10 bg-yellow-300/5 p-5 rounded-xl border-l-[3px] border-l-[#edff66]">
                                    <h4 className="text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-2 font-mono">Mentor Evaluation</h4>
                                    <p className="text-xs text-gray-300 leading-relaxed italic">
                                        "{activeProject.mentorNote}"
                                    </p>
                                    <span className="text-[9px] text-gray-500 uppercase tracking-widest mt-2 block font-general">— Amora Engineering Mentor</span>
                                </div>

                                {/* Live Links Actions */}
                                <div className="flex flex-col gap-2 pt-2">
                                    <button 
                                        onClick={() => window.open(activeProject.liveLink, "_blank")}
                                        className="w-full bg-[#5724ff] hover:bg-[#4317df] text-white py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer flex items-center justify-center gap-2 transition-all"
                                    >
                                        Visit Live Deployment <FaExternalLinkAlt className="text-[10px]" />
                                    </button>
                                    <button 
                                        onClick={() => window.open(activeProject.githubLink, "_blank")}
                                        className="w-full bg-white/5 hover:bg-white/10 border border-white/10 hover:border-white/20 text-white py-3.5 rounded-xl text-xs uppercase font-bold tracking-wider cursor-pointer flex items-center justify-center gap-2 transition-all"
                                    >
                                        Explore Source Code <FaGithub />
                                    </button>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            )}

        </div>
    );
};

export default Showcase;
