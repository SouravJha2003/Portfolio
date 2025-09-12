'use client';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faBriefcase, faChartLine, faEnvelope, faTimes, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MobileBottomNav from './MobileBottomNav';
import TypingAnimation from './TypingAnimation';

const AboutMe = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredHighlight, setHoveredHighlight] = useState<{ cardIndex: number, highlightIndex: number } | null>(null);

    const socialLinks = [
        {
            name: "Gmail",
            icon: faEnvelope,
            url: "mailto:sk7381jha@gmail.com",
            color: "hover:bg-red-500"
        },
        {
            name: "LinkedIn",
            icon: faLinkedin,
            url: "https://www.linkedin.com/in/sourav-kumar-jha-mqs/",
            color: "hover:bg-blue-600"
        },
        {
            name: "GitHub",
            icon: faGithub,
            url: "https://github.com/SouravJha2003",
            color: "hover:bg-gray-700"
        }
    ];

    const cards = [
        {
            id: 0,
            icon: faUser,
            content: {
                subtitle: "My Demographics",
                description: "I am sourav kumar jha, a passionate and dedicated software developer with keen interest in shaping ideas into real world practical applications. I have completed all of my education from private english focused institution.",
                highlights: [
                    "D.O.B: 14th July 2003",
                    "Gender: Male",
                    "Nationality: Indian",
                    "Location: Bhubaneswar, Odisha, India",
                    "Languages: English, Hindi, Odia and Maithili",
                ]
            }
        },
        {
            id: 1,
            icon: faChartLine,
            content: {
                subtitle: "Professional Growth",
                description: "I began my career as a VLSI intern, where I developed skills in digital design and verification. Although I had some knowledge of software development at the time, it wasn't extensive. When I got the opportunity to work on software projects, I embraced it and gradually gained hands-on experience in the field. Building on that foundation, I continued to strengthen my software development skills, which eventually led me to join a startup as a software developer, where I further enhanced my expertise and practical experience.",
                highlights: [
                    "Software Engineer @ MARQUEESEMI",
                    "Software Intern @ MARQUEESEMI",
                    "VLSI Intern @ VLSIPRO",
                ]
            }
        },
        {
            id: 2,
            icon: faBriefcase,
            content: {
                subtitle: "My thoughts",
                description: "I believe in the philosophy of clean code, continuous learning, and a user-first approach. For me, every project is an opportunity to create something meaningful and impactful. I strive to learn new concepts and apply them practically. I am open to failure, criticism, and mistakes, as I see them as stepping stones to growth. My focus always remains on learning from every experience and evolving both as a professional and as a person.",
                highlights: [
                    "you fail, you start, you learn, you grow",
                    "Search knowledge, not fame",
                    "Prototype is more powerful than ideation"
                ]
            }
        }
    ];

    const handleExpand = () => {
        setIsExpanded(true);
    };

    const handleClose = () => {
        setIsExpanded(false);
    };

    const getImageExtension = (cardIndex: number, highlightIndex: number): string => {
        // Section 1 (My Demographics): 1.1.jpg, 1.2.jpg, 1.3.jpg, 1.4.jpg, 1.5.png
        if (cardIndex === 0) {
            return highlightIndex === 4 ? 'png' : 'jpg';
        }
        // Section 2 (Professional Growth): 2.1.png, 2.2.png, 2.3.png
        if (cardIndex === 1) {
            return 'png';
        }
        // Section 3 (My thoughts): 3.1.png, 3.2.png, 3.3.jpg
        if (cardIndex === 2) {
            return highlightIndex === 2 ? 'jpg' : 'png';
        }
        // Default fallback
        return 'jpg';
    };





    return (
        <>
            <style jsx>{`
                .rotate-y-180 {
                    transform: rotateY(180deg);
                }
                .rotate-y-0 {
                    transform: rotateY(0deg);
                }
                .flip-container {
                    perspective: 1000px;
                }
                .flip-container .flip-inner {
                    position: relative;
                    width: 100%;
                    height: 100%;
                    text-align: center;
                    transition: transform 0.7s;
                    transform-style: preserve-3d;
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;  /* Internet Explorer 10+ */
                    scrollbar-width: none;  /* Firefox */
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;  /* Safari and Chrome */
                }
            `}</style>
            <section
                id="about"
                className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
            >
                <AnimatedCodeBackground />

                {/* Frosted glass background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-100/20 dark:from-gray-900/30 dark:to-blue-900/30 backdrop-blur-[10px] z-10"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>

                {!isExpanded ? (
                    // Normal View
                    <div className="flex items-center justify-between max-w-6xl w-full gap-12 relative z-30">
                        {/* Left Content */}
                        <div className="flex-1 max-w-2xl">
                            <div className="relative">
                                {/* Background Decoration */}
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200/30 to-purple-200/30 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-gradient-to-br from-pink-200/30 to-orange-200/30 rounded-full blur-2xl"></div>

                                <div className="relative z-10">
                                    <h1 className="text-6xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 leading-tight font-serif">
                                        <TypingAnimation
                                            text="Sourav Kumar Jha"
                                            speed={150}
                                            backspaceSpeed={75}
                                            pauseTime={3000}
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-blue-600 to-purple-600 dark:from-white dark:via-blue-400 dark:to-purple-400 font-black font-serif"
                                        />
                                    </h1>
                                    <div className="flex items-center mb-8">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                                        <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide italic">
                                            React Native Developer
                                        </h2>
                                    </div>

                                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></span>
                                            I'm a React Native developer with over a year of experience building cross-platform mobile apps. My professional journey has expanded into software development, where I continued to build impactful solutions.
                                        </p>
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></span>
                                            I face challenges with a mindset of learning from setbacks and finding value even in tough situations. To me, it's not just about the glass being half full or empty, but about learning from both views.
                                        </p>

                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-purple-500 to-transparent rounded-full"></span>
                                            I believe in a philosophy of clean code, continuous learning, and a user-first approach.
                                        </p>
                                    </div>

                                    {/* Get Overview Button */}
                                    <div className="mt-8">
                                        <button
                                            onClick={handleExpand}
                                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                                        >
                                            <span className="relative z-10">Get Overview</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                            <svg
                                                className="w-5 h-5 ml-2 relative z-10 group-hover:translate-x-1 transition-transform duration-300"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Phone Mockup */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                {/* Phone Frame */}
                                <div className="w-64 h-[500px] bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 rounded-[3rem] p-1.5 shadow-2xl relative overflow-hidden group border border-gray-600/50">
                                    {/* Metallic shine overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-[3rem] opacity-60 group-hover:opacity-80 transition-opacity duration-500"></div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-transparent via-white/10 to-white/30 rounded-[3rem] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
                                    {/* Animated shine effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent rounded-[3rem] transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"></div>
                                    {/* Edge highlight for 3D metallic effect */}
                                    <div className="absolute inset-0 rounded-[3rem] border border-white/20 pointer-events-none"></div>
                                    <div className="absolute inset-[1px] rounded-[calc(3rem-1px)] border border-gray-500/30 pointer-events-none"></div>
                                    {/* Phone Screen */}
                                    <div className="w-full h-full bg-gray-200 dark:bg-gray-800 rounded-[2.75rem] flex flex-col relative overflow-hidden">
                                        {/* Main Content Area */}
                                        <div className="flex-1 flex items-center justify-center">
                                            <div className="text-center">
                                                {/* Profile Image */}
                                                <div className="mb-4">
                                                    <img
                                                        src="/profile.jpg"
                                                        alt="Profile"
                                                        className="w-[90%] mx-auto rounded-full object-cover border-2 border-gray-300 dark:border-gray-600"
                                                    />
                                                </div>
                                                {/* Subtitle */}
                                                <p className="text-gray-600 dark:text-gray-300 text-xl font-semibold mb-4">Sourav Kumar Jha</p>

                                                {/* Social Media Icons */}
                                                <div className="flex justify-center space-x-4">
                                                    {socialLinks.map((social, index) => (
                                                        <a
                                                            key={social.name}
                                                            href={social.url}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className={`w-8 h-8 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.color} group`}
                                                            title={social.name}
                                                        >
                                                            <FontAwesomeIcon
                                                                icon={social.icon}
                                                                className="text-gray-600 dark:text-gray-300 group-hover:text-white text-sm transition-colors duration-300"
                                                            />
                                                        </a>
                                                    ))}
                                                </div>
                                            </div>
                                        </div>

                                        {/* Mobile Bottom Navigation */}
                                        <MobileBottomNav className="rounded-b-[2.75rem]" />

                                        {/* Notch */}
                                        <div className="absolute top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-black rounded-full"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Expanded Overview View with Scrolling Content
                    <div className="w-full h-full flex flex-col relative z-30">
                        {/* Header with Close Button */}
                        <div className="flex justify-between items-center p-4 mb-4">
                            <h2 className="text-2xl font-bold text-white">Overview</h2>
                            <button
                                onClick={handleClose}
                                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-sm" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                            <div className="space-y-16">
                                {cards.map((card, index) => (
                                    <div key={card.id} className={`group relative flex items-center gap-16 ${index % 2 === 1 ? 'flex-row-reverse' : ''}`}>
                                        {/* Background decoration for each card */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-pink-500/5 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                        {/* Image/Icon Section */}
                                        <div className="flex-shrink-0 relative">
                                            {/* Outer glow ring */}
                                            <div className="absolute inset-0 w-44 h-44 bg-gradient-to-br from-blue-400/30 via-purple-500/30 to-pink-500/30 rounded-3xl blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                            {/* Main icon container with flip animation */}
                                            <div className="relative w-40 h-40 bg-gradient-to-br from-blue-500/95 via-purple-600/95 to-pink-600/95 rounded-3xl transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-blue-500/25 group-hover:rotate-3">
                                                {/* Inner shine effect */}
                                                <div className="absolute inset-2 bg-gradient-to-br from-white/20 via-transparent to-transparent rounded-2xl opacity-60 group-hover:opacity-80 transition-opacity duration-300"></div>

                                                {/* Flip container */}
                                                <div className="relative w-full h-full rounded-3xl">
                                                    {/* Front side - Default icon */}
                                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${hoveredHighlight && hoveredHighlight.cardIndex === index ? 'rotate-y-180 opacity-0' : 'rotate-y-0 opacity-100'}`}>
                                                        <FontAwesomeIcon
                                                            icon={card.icon}
                                                            className="text-5xl text-white drop-shadow-lg group-hover:drop-shadow-xl transition-all duration-300 group-hover:scale-110"
                                                        />
                                                    </div>

                                                    {/* Back side - Image */}
                                                    <div className={`absolute inset-0 flex items-center justify-center transition-all duration-700 ${hoveredHighlight && hoveredHighlight.cardIndex === index ? 'rotate-y-0 opacity-100' : 'rotate-y-180 opacity-0'}`}>
                                                        <div className="w-32 h-32 rounded-2xl shadow-inner flex items-center justify-center border border-white/20 overflow-hidden bg-white/10">
                                                            {hoveredHighlight && hoveredHighlight.cardIndex === index ? (
                                                                <img
                                                                    src={`/aboutme_assets/${index + 1}.${hoveredHighlight.highlightIndex + 1}.${getImageExtension(index, hoveredHighlight.highlightIndex)}`}
                                                                    alt={`About me image ${hoveredHighlight.highlightIndex + 1}`}
                                                                    className="w-full h-full object-cover rounded-2xl"
                                                                />
                                                            ) : (
                                                                <FontAwesomeIcon
                                                                    icon={card.icon}
                                                                    className="text-3xl text-white"
                                                                />
                                                            )}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Animated border */}
                                                <div className="absolute inset-0 rounded-3xl border-2 border-white/20 group-hover:border-white/40 transition-all duration-300"></div>
                                            </div>
                                        </div>

                                        {/* Text Content Section */}
                                        <div className="flex-1 relative">
                                            {/* Content background with subtle border */}
                                            <div className="relative p-8 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10 group-hover:bg-white/10 group-hover:border-white/20 transition-all duration-500">
                                                {/* Subtle gradient overlay */}
                                                <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/5 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                                                <div className="relative z-10">
                                                    {/* Subtitle with enhanced styling */}
                                                    <div className="mb-8">
                                                        <div className="inline-flex items-center space-x-3">
                                                            <div className="w-2 h-2 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-pulse"></div>
                                                            <p className="text-blue-300 text-2xl font-semibold tracking-wide group-hover:text-blue-200 transition-colors duration-300">
                                                                {card.content.subtitle}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <div className="space-y-8">
                                                        {/* Description with improved typography */}
                                                        <p className="text-gray-300 text-xl leading-relaxed group-hover:text-gray-200 transition-colors duration-300 relative">
                                                            <span className="absolute -left-6 top-0 w-1 h-full bg-gradient-to-b from-blue-400/50 to-purple-400/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                                                            {card.content.description}
                                                        </p>

                                                        {/* Highlights with enhanced design */}
                                                        <div className="space-y-5">
                                                            {card.content.highlights.map((highlight, highlightIndex) => (
                                                                <div
                                                                    key={highlightIndex}
                                                                    className="group/highlight flex items-center space-x-5 transition-all duration-300 hover:translate-x-2"
                                                                    onMouseEnter={() => setHoveredHighlight({ cardIndex: index, highlightIndex })}
                                                                    onMouseLeave={() => setHoveredHighlight(null)}
                                                                >
                                                                    {/* Enhanced bullet point */}
                                                                    <div className="relative flex-shrink-0">
                                                                        <div className="w-4 h-4 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full flex items-center justify-center transition-all duration-300 group-hover/highlight:scale-125 group-hover/highlight:shadow-lg group-hover/highlight:shadow-blue-400/30">
                                                                            <div className="w-2 h-2 bg-white rounded-full opacity-80 group-hover/highlight:opacity-100 transition-opacity duration-300"></div>
                                                                        </div>
                                                                        {/* Animated ring */}
                                                                        <div className="absolute inset-0 w-4 h-4 border border-blue-400/30 rounded-full animate-ping opacity-0 group-hover/highlight:opacity-100"></div>
                                                                    </div>

                                                                    {/* Highlight text */}
                                                                    <span className="text-gray-300 text-lg group-hover/highlight:text-gray-200 transition-colors duration-300 font-medium">
                                                                        {highlight}
                                                                    </span>
                                                                </div>
                                                            ))}
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                )}
            </section>
        </>
    );
};


export default AboutMe;