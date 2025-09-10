'use client';
import { faBuilding, faCalendarAlt, faCode, faTimes, faUserTie } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import TypingAnimation from './TypingAnimation';

const Experience = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [hoveredHighlight, setHoveredHighlight] = useState<{ cardIndex: number, highlightIndex: number } | null>(null);
    const calculateDuration = (startDate: string) => {
        const start = new Date(startDate);
        const current = new Date();

        let years = current.getFullYear() - start.getFullYear();
        let months = current.getMonth() - start.getMonth();

        if (months < 0) {
            years--;
            months += 12;
        }

        if (current.getDate() < start.getDate()) {
            months--;
            if (months < 0) {
                years--;
                months += 12;
            }
        }

        if (years === 0) {
            return months === 1 ? '1 month' : `${months} months`;
        } else if (months === 0) {
            return years === 1 ? '1 year' : `${years} years`;
        } else {
            const yearText = years === 1 ? '1 year' : `${years} years`;
            const monthText = months === 1 ? '1 month' : `${months} months`;
            return `${yearText} ${monthText}`;
        }
    };

    const experiences = [
        {
            id: 0,
            icon: faBuilding,
            content: {
                subtitle: "MARQUEESEMI - Junior Software developer",
                description: "Being the developing member of the team, I have gained experience in the field of mobile application development. I worked with various libraries and resources to develop the features of the application.",
                highlights: [
                    "Role: Junior Software developer",
                    "Skills: React Native, TypeScript, Zustand, Supabase, EAS and Expo",
                    "Duration: Nov 2024 - Present",
                    "Team Size: 3 developers",
                    "Key Achievement: ZOLT application development",
                    "Mentor: Zolthealth"
                ]
            }
        },
        {
            id: 1,
            icon: faCode,
            content: {
                subtitle: "MARQUEESEMI - Software developer intern",
                description: "Worked as a software developer intern at MARQUEESEMI, where I developed skills in web development. I learned about the basics of HTML, CSS, and JavaScript, and how to use Git to manage my code. Worked on tool development for windows application.",
                highlights: [
                    "Role: Software developer intern",
                    "Skills: HTML, CSS, JavaScript, Git",
                    "Duration: Jun 2024 - Nov 2024",
                    "Team Size: 4 developers",
                    "Key Achievement: Gained hands on experience in web development",
                    "Mentor: Abinash Sahu"
                ]
            }
        },
        {
            id: 2,
            icon: faUserTie,
            content: {
                subtitle: "VLSIPRO - VLSI Intern",
                description: "Worked as a VLSI intern at VLSIPRO, where I developed skills in digital design and verification. I learned about the basics of Verilog and VHDL, and how to use Tanner EDA and Xilinx Vivado to design and simulate digital circuits.",
                highlights: [
                    "Role: VLSI Intern",
                    "Skills: Verilog, VHDL, C, Tanner EDA, Xilinx Vivado",
                    "Duration: Feb 2024 - May 2024",
                    "Team Size: 2 engineers",
                    "Key Achievement: Unit cell development",
                    "Mentor: Mukesh Sukla"
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
                id="experience"
                className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
            >
                <AnimatedCodeBackground />

                {/* Frosted glass background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/20 to-teal-100/20 dark:from-gray-900/30 dark:to-emerald-900/30 backdrop-blur-[10px] z-10"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>

                {!isExpanded ? (
                    // Normal View
                    <div className="flex items-center justify-between max-w-6xl w-full gap-12 relative z-30">
                        {/* Left Content */}
                        <div className="flex-1 max-w-2xl">
                            <div className="relative">
                                {/* Background Decoration */}
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl"></div>
                                <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-gradient-to-br from-cyan-200/30 to-blue-200/30 rounded-full blur-2xl"></div>

                                <div className="relative z-10">
                                    <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-emerald-600 to-teal-600 dark:from-white dark:via-emerald-400 dark:to-teal-400 leading-tight font-serif whitespace-nowrap">
                                        <TypingAnimation
                                            text="Professional Experience"
                                            speed={150}
                                            backspaceSpeed={75}
                                            pauseTime={3000}
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-emerald-600 to-teal-600 dark:from-white dark:via-emerald-400 dark:to-teal-400 font-black font-serif"
                                        />
                                    </h1>
                                    <div className="flex items-center mb-8">
                                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 animate-pulse"></div>
                                        <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide italic">
                                            MARQUEESEMI - {(() => {
                                                return calculateDuration('2024-06-01');
                                            })()}
                                        </h2>
                                    </div>

                                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent rounded-full"></span>
                                            Currently working on ZOLT application as a junior react native developer at MARQUEESEMI.
                                        </p>
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-emerald-500 to-transparent rounded-full"></span>
                                            Also worked as a software developer intern at MARQUEESEMI. Worked on tool development for windows application.
                                        </p>

                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-teal-500 to-transparent rounded-full"></span>
                                            Professional journey started as a VLSI intern at VLSIPRO. Worked on unit cell development.
                                        </p>
                                    </div>

                                    {/* Get Overview Button */}
                                    <div className="mt-8">
                                        <button
                                            onClick={handleExpand}
                                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-emerald-600 to-teal-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                                        >
                                            <span className="relative z-10">View Details</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-teal-600 to-emerald-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

                        {/* Right Timeline */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                {/* Timeline Container */}
                                <div className="w-80 space-y-4">
                                    {experiences.map((experience, index) => (
                                        <div key={experience.id} className="group relative flex items-center gap-4">
                                            {/* Timeline Dot */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                                    <img
                                                        src={`/aboutme_assets/2.${index + 1}.png`}
                                                        alt={`Timeline ${index + 1}`}
                                                        className="w-full h-full object-cover rounded-full"
                                                    />
                                                </div>
                                                {/* Pulse effect */}
                                                <div className="absolute inset-0 w-16 h-16 bg-gradient-to-br from-emerald-400/30 to-teal-400/30 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
                                            </div>

                                            {/* Experience Info */}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-emerald-300 group-hover:text-emerald-200 transition-colors duration-300">
                                                    {experience.content.highlights[0]}
                                                </h3>
                                                <p className="text-sm text-gray-400 flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-emerald-400" />
                                                    {experience.content.highlights[2]}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Expanded Experience View - Text-focused layout
                    <div className="w-full h-full flex flex-col relative z-30">
                        {/* Header with Close Button */}
                        <div className="flex justify-between items-center px-4 py-2 mb-2">
                            <h2 className="text-3xl font-bold text-white">Professional Experience</h2>
                            <button
                                onClick={handleClose}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-110"
                            >
                                <FontAwesomeIcon icon={faTimes} className="text-lg" />
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                            <div className="space-y-6">
                                {experiences.map((experience, index) => (
                                    <div key={experience.id} className="group relative">
                                        {/* Experience Card */}
                                        <div className="relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-emerald-500/10">
                                            {/* Background decoration */}
                                            <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/5 via-teal-500/5 to-cyan-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                            {/* Header with icon and title */}
                                            <div className="flex items-start gap-6 mb-4">
                                                <div className="flex-shrink-0">
                                                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                                        <img
                                                            src={`/aboutme_assets/2.${index + 1}.png`}
                                                            alt={`Experience ${index + 1}`}
                                                            className="w-full h-full object-cover rounded-xl"
                                                        />
                                                    </div>
                                                </div>
                                                <div className="flex-1">
                                                    <h3 className="text-2xl font-bold text-emerald-300 mb-2 group-hover:text-emerald-200 transition-colors duration-300">
                                                        {experience.content.subtitle}
                                                    </h3>
                                                    <div className="flex items-center gap-4 text-gray-400 text-sm">
                                                        <div className="flex items-center gap-2">
                                                            <FontAwesomeIcon icon={faCalendarAlt} className="text-emerald-400" />
                                                            <span>{experience.content.highlights[2]}</span>
                                                        </div>
                                                        <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
                                                        <div className="flex items-center gap-2">
                                                            <FontAwesomeIcon icon={faUserTie} className="text-emerald-400" />
                                                            <span>{experience.content.highlights[0]}</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Description */}
                                            <div className="mb-4">
                                                <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                                    {experience.content.description}
                                                </p>
                                            </div>

                                            {/* Details Grid */}
                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                                {experience.content.highlights.map((highlight, highlightIndex) => (
                                                    <div
                                                        key={highlightIndex}
                                                        className="group/detail flex items-center gap-3 p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-all duration-300 hover:translate-x-1"
                                                    >
                                                        <div className="w-2 h-2 bg-gradient-to-r from-emerald-400 to-teal-400 rounded-full flex-shrink-0 group-hover/detail:scale-125 transition-transform duration-300"></div>
                                                        <span className="text-gray-300 text-sm group-hover/detail:text-gray-200 transition-colors duration-300 font-medium">
                                                            {highlight}
                                                        </span>
                                                    </div>
                                                ))}
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

export default Experience;
