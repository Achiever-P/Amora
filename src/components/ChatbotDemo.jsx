import { useState, useRef, useEffect } from "react";
import { TiLocationArrow } from "react-icons/ti";
import AnimatedTitle from "./AnimatedTitle";

const ChatbotDemo = () => {
    const [messages, setMessages] = useState([
        {
            sender: "bot",
            text: "Hi! I'm Amora Prime's virtual assistant. How can I help you today? You can type a message or select one of the topics below.",
        },
    ]);
    const [inputValue, setInputValue] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const chatEndRef = useRef(null);

    const quickReplies = [
        "Web Development",
        "AI Chatbots",
        "E-Commerce",
        "Contact Info",
        "Our Location",
    ];

    // Scroll to the bottom of the chat list whenever messages change
    useEffect(() => {
        chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages, isTyping]);

    const handleSendMessage = (text) => {
        if (!text || text.trim() === "") return;

        // Add user message
        const userMsg = { sender: "user", text };
        setMessages((prev) => [...prev, userMsg]);
        setInputValue("");
        setIsTyping(true);

        // Simulate typing and reply
        setTimeout(() => {
            setIsTyping(false);
            const botReply = getBotResponse(text);
            setMessages((prev) => [...prev, { sender: "bot", text: botReply }]);
        }, 1000);
    };

    const getBotResponse = (input) => {
        const query = input.toLowerCase();

        if (query.includes("web") || query.includes("website") || query.includes("dev")) {
            return "We build fast, modern, and SEO-optimized custom websites tailored to your business needs. We specialize in React, Next.js, Node, and premium UI animations.";
        }
        if (query.includes("chatbot") || query.includes("bot") || query.includes("chat")) {
            return "Amora Prime constructs intelligent AI chatbots that handle client queries, book appointments, and capture leads 24/7 on websites, WhatsApp, and Telegram.";
        }
        if (query.includes("ecommerce") || query.includes("e-commerce") || query.includes("shop") || query.includes("store")) {
            return "We build secure E-Commerce platforms complete with payment gateway integration, live order tracking, and custom admin control panels for inventory.";
        }
        if (query.includes("contact") || query.includes("email") || query.includes("support") || query.includes("phone")) {
            return "You can reach our team via support@amoraprime.in, sales@amoraprime.in, or hr@amoraprime.in. You can also fill out the contact form right below!";
        }
        if (query.includes("location") || query.includes("address") || query.includes("where") || query.includes("madurai")) {
            return "We are headquartered in Thirumangalam, Madurai, Tamil Nadu, India. We serve clients across South India and internationally.";
        }
        if (query.includes("pricing") || query.includes("cost") || query.includes("price")) {
            return "Our pricing is project-dependent. We offer competitive rates for premium quality custom work. Drop us an email at sales@amoraprime.in to get a free estimate!";
        }
        if (query.includes("hello") || query.includes("hi") || query.includes("hey")) {
            return "Hello! How can we assist you with your web or AI automation needs today?";
        }

        return "Thank you for reaching out! Amora Prime specializes in Web Development, AI Chatbots, Mobile Apps, Custom Software, and UI/UX Design. Let us know what you'd like to build!";
    };

    return (
        <section id="chatbot" className="my-20 w-screen px-10">
            <div className="relative rounded-lg bg-black py-20 text-blue-50 sm:overflow-hidden px-5 md:px-16 flex flex-col lg:flex-row items-center gap-10">
                
                {/* Visual Copy Panel */}
                <div className="flex flex-col lg:w-1/2">
                    <p className="mb-6 font-general text-xs uppercase tracking-wider text-gray-400">
                        Interactive Demo
                    </p>
                    <AnimatedTitle
                        title="Talk t<b>o</b> Our <br /> AI Ass<b>i</b>stant"
                        containerClass="text-left !leading-[0.9]"
                    />
                    <p className="mt-6 font-circular-web text-lg text-blue-50/70 max-w-md">
                        Experience first-hand how an intelligent AI assistant can interact with your visitors, resolve customer questions instantly, and funnel leads to your team.
                    </p>
                    
                    <div className="mt-8 flex flex-wrap gap-2">
                        {quickReplies.map((reply, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleSendMessage(reply)}
                                className="border border-white/20 bg-white/5 hover:bg-white/10 transition-colors duration-300 text-xs px-4 py-2 rounded-full font-sans tracking-wide cursor-pointer"
                            >
                                {reply}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Chat Widget Panel */}
                <div className="w-full lg:w-1/2 flex flex-col h-[480px] bg-neutral-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl">
                    {/* Header */}
                    <div className="flex items-center justify-between px-6 py-4 bg-black border-b border-white/15">
                        <div className="flex items-center gap-3">
                            <div className="flex gap-1.5">
                                <span className="w-3 h-3 rounded-full bg-[#ef4444]" />
                                <span className="w-3 h-3 rounded-full bg-[#f59e0b]" />
                                <span className="w-3 h-3 rounded-full bg-[#22c55e]" />
                            </div>
                            <span className="font-zentry text-sm uppercase text-gray-300 tracking-wider">
                                Amora Assistant
                            </span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2.5 h-2.5 rounded-full bg-[#22c55e] animate-pulse" />
                            <span className="text-[10px] text-gray-500 font-general uppercase tracking-wider">Online</span>
                        </div>
                    </div>

                    {/* Messages Container */}
                    <div className="flex-1 overflow-y-auto p-6 space-y-4 font-sans text-sm">
                        {messages.map((msg, idx) => (
                            <div
                                key={idx}
                                className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                            >
                                <div
                                    className={`max-w-[80%] rounded-2xl px-4 py-3 leading-relaxed transition-all duration-300 ${
                                        msg.sender === "user"
                                            ? "bg-[#5542ff] text-white rounded-br-none"
                                            : "bg-white/10 text-blue-50 rounded-bl-none"
                                    }`}
                                >
                                    {msg.text}
                                </div>
                            </div>
                        ))}

                        {/* Typing Indicator */}
                        {isTyping && (
                            <div className="flex justify-start">
                                <div className="bg-white/10 text-blue-50 rounded-2xl rounded-bl-none px-4 py-3 flex items-center gap-1">
                                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "0ms" }} />
                                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "150ms" }} />
                                    <span className="w-2 h-2 rounded-full bg-gray-400 animate-bounce" style={{ animationDelay: "300ms" }} />
                                </div>
                            </div>
                        )}
                        <div ref={chatEndRef} />
                    </div>

                    {/* Input Row */}
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            handleSendMessage(inputValue);
                        }}
                        className="px-6 py-4 bg-black border-t border-white/15 flex items-center gap-3"
                    >
                        <input
                            type="text"
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            placeholder="Type your question..."
                            className="flex-1 bg-white/5 border border-white/10 text-blue-50 rounded-full px-5 py-3 text-sm focus:outline-none focus:border-[#5542ff] placeholder:text-gray-500 font-sans"
                        />
                        <button
                            type="submit"
                            className="bg-[#5542ff] text-white hover:bg-[#4332eb] p-3 rounded-full flex items-center justify-center transition-colors duration-300 cursor-pointer"
                        >
                            <TiLocationArrow className="scale-125 -rotate-45" />
                        </button>
                    </form>
                </div>
                
            </div>
        </section>
    );
};

export default ChatbotDemo;
