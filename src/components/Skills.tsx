'use client';
import { faChevronLeft, faChevronRight, faClock, faCode, faFileCode, faLayerGroup, faProjectDiagram } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import TypingAnimation from './TypingAnimation';

const Skills = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);
    const [hoveredLibrary, setHoveredLibrary] = useState<number | null>(null);
    const [activeTab, setActiveTab] = useState<'skills' | 'libraries'>('skills');
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const skills = [
        {
            id: 0,
            name: 'React Native',
            icon: '/icons/reactnative.svg',
            description: 'Cross-platform mobile development',
            hoursWorked: 1800,
            projectsImplemented: 4,
            linesOfCode: 80000,
            proficiency: 75,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 1,
            name: 'TypeScript',
            icon: '/icons/typescript.png',
            description: 'Typed superset of JavaScript',
            hoursWorked: 1500,
            projectsImplemented: 4,
            linesOfCode: 70000,
            proficiency: 75,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 2,
            name: 'React',
            icon: '/icons/react.svg',
            description: 'JavaScript library for building UIs',
            hoursWorked: 400,
            projectsImplemented: 3,
            linesOfCode: 10000,
            proficiency: 70,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 3,
            name: 'Expo',
            icon: '/icons/expo.png',
            description: 'React Native development platform',
            hoursWorked: 1800,
            projectsImplemented: 4,
            linesOfCode: 10000,
            proficiency: 80,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 4,
            name: 'Zustand',
            icon: '/icons/zustand.svg',
            description: 'Small, fast state management',
            hoursWorked: 400,
            projectsImplemented: 5,
            linesOfCode: 10000,
            proficiency: 70,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 5,
            name: 'CSS',
            icon: '/icons/css.png',
            description: 'Cascading Style Sheets',
            hoursWorked: 1000,
            projectsImplemented: 8,
            linesOfCode: 30000,
            proficiency: 65,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 6,
            name: 'Supabase',
            icon: '/icons/supabase.png',
            description: 'Open source Firebase alternative',
            hoursWorked: 300,
            projectsImplemented: 3,
            linesOfCode: 10000,
            proficiency: 75,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 7,
            name: 'EAS',
            icon: '/icons/expo.png',
            description: 'Expo Application Services',
            hoursWorked: 100,
            projectsImplemented: 4,
            linesOfCode: 1000,
            proficiency: 90,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 8,
            name: 'GIT',
            icon: '/icons/git.png',
            description: 'Version Control System',
            hoursWorked: 1800,
            projectsImplemented: 8,
            linesOfCode: 1000,
            proficiency: 90,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 9,
            name: 'Github',
            icon: '/icons/github.png',
            description: 'Code Repository',
            hoursWorked: 1800,
            projectsImplemented: 8,
            linesOfCode: 1000,
            proficiency: 90,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 10,
            name: 'HTML',
            icon: '/icons/html.png',
            description: 'HyperText Markup Language',
            hoursWorked: 400,
            projectsImplemented: 5,
            linesOfCode: 10000,
            proficiency: 80,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 11,
            name: 'JavaScript',
            icon: '/icons/javascript.png',
            description: 'Dynamic programming language',
            hoursWorked: 600,
            projectsImplemented: 5,
            linesOfCode: 45000,
            proficiency: 60,
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
    ];

    const libraries = [
        {
            id: 0,
            name: 'Gifted Chart',
            icon: '📊',
            description: 'Beautiful charts for React Native',
            usage: 'Data visualization in mobile apps',
            projectsUsed: 2,
            hoursWorked: 300,
            features: ['Line charts', 'Bar charts', 'Pie charts', 'custom-charts'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 1,
            name: 'React Native Zustand',
            icon: '/icons/zustand.svg',
            description: 'State management for React Native',
            usage: 'Global state management',
            projectsUsed: 3,
            hoursWorked: 200,
            features: ['Lightweight', 'TypeScript support', 'DevTools', 'Persistence'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 2,
            name: 'Expo SQLite',
            icon: '💾',
            description: 'Local database for React Native',
            usage: 'Offline data storage',
            projectsUsed: 2,
            hoursWorked: 180,
            features: ['Offline storage', 'SQL queries', 'Encryption', 'Migrations'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 3,
            name: 'React Navigation',
            icon: '🧭',
            description: 'Navigation library for React Native',
            usage: 'App navigation and routing',
            projectsUsed: 4,
            hoursWorked: 300,
            features: ['Stack navigation', 'Tab navigation', 'Drawer navigation', 'Deep linking'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 4,
            name: 'Expo Vector Icons',
            icon: '🎯',
            description: 'Icon library for React Native',
            usage: 'UI icons and symbols',
            projectsUsed: 8,
            hoursWorked: 100,
            features: ['Multiple icon sets', 'Customizable', 'Lightweight', 'TypeScript support'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 5,
            name: 'React Native MMKV Storage',
            icon: '📄',
            description: 'Fast, small, and simple key-value storage solution for React Native',
            usage: 'Local data storage',
            projectsUsed: 4,
            hoursWorked: 150,
            features: ['Fast', 'Small', 'Simple', 'TypeScript support'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        },
        {
            id: 6,
            name: 'React Native Reanimated',
            icon: '🐻',
            description: 'High-performance animation library for React Native',
            usage: 'Animation library',
            projectsUsed: 2,
            hoursWorked: 100,
            features: ['Animated', 'Reanimated', 'TypeScript support'],
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-purple-500/30',
            textColor: 'text-purple-300'
        }
    ];

    const updateScrollButtons = () => {
        if (scrollContainerRef.current) {
            const container = scrollContainerRef.current;
            const maxScroll = container.scrollWidth - container.clientWidth;
            setCanScrollLeft(container.scrollLeft > 0);
            setCanScrollRight(container.scrollLeft < maxScroll);
        }
    };

    const scrollToNext = () => {
        if (scrollContainerRef.current && canScrollRight) {
            const container = scrollContainerRef.current;
            const cardWidth = 320; // Card width + gap
            const maxScroll = container.scrollWidth - container.clientWidth;
            const newScrollLeft = Math.min(container.scrollLeft + cardWidth, maxScroll);
            container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    const scrollToPrevious = () => {
        if (scrollContainerRef.current && canScrollLeft) {
            const container = scrollContainerRef.current;
            const cardWidth = 320; // Card width + gap
            const newScrollLeft = Math.max(container.scrollLeft - cardWidth, 0);
            container.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
        }
    };

    const handleSkillHover = (skillId: number) => {
        setHoveredSkill(skillId);
    };

    const handleSkillLeave = () => {
        setHoveredSkill(null);
    };

    const handleLibraryHover = (libraryId: number) => {
        setHoveredLibrary(libraryId);
    };

    const handleLibraryLeave = () => {
        setHoveredLibrary(null);
    };

    // Check scroll state on mount and when data changes
    React.useEffect(() => {
        updateScrollButtons();
    }, [activeTab]);

    // Add scroll event listener
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            return () => container.removeEventListener('scroll', updateScrollButtons);
        }
    }, []);

    const currentData = activeTab === 'skills' ? skills : libraries;

    return (
        <>
            <style jsx>{`
                .skill-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .skill-card:hover {
                    transform: translateY(-8px) scale(1.02);
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;
                }
                .proficiency-bar {
                    transition: width 1.5s ease-in-out;
                }
            `}</style>
            <section
                id="skills"
                className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
            >
                <AnimatedCodeBackground />

                {/* Frosted glass background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-violet-100/20 dark:from-gray-900/30 dark:to-purple-900/30 backdrop-blur-[10px] z-10"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>

                <div className="w-full max-w-6xl relative z-30">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-600 to-violet-600 dark:from-white dark:via-purple-400 dark:to-violet-400 leading-tight font-serif">
                                <TypingAnimation
                                    text="My Skills"
                                    speed={150}
                                    backspaceSpeed={75}
                                    pauseTime={3000}
                                    className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-600 to-violet-600 dark:from-white dark:via-purple-400 dark:to-violet-400 font-black font-serif"
                                />
                            </h1>
                        </div>
                        <div className="flex items-center">
                            <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 animate-pulse"></div>
                            <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide italic">
                                Technical Expertise
                            </h2>
                        </div>
                    </div>

                    {/* Tab Navigation */}
                    <div className="flex justify-center mb-8">
                        <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-2">
                            <button
                                onClick={() => setActiveTab('skills')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'skills'
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <FontAwesomeIcon icon={faCode} className="mr-2" />
                                Skills
                            </button>
                            <button
                                onClick={() => setActiveTab('libraries')}
                                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${activeTab === 'libraries'
                                    ? 'bg-purple-500/20 text-purple-300 border border-purple-500/30'
                                    : 'text-gray-400 hover:text-white'
                                    }`}
                            >
                                <FontAwesomeIcon icon={faLayerGroup} className="mr-2" />
                                Libraries
                            </button>
                        </div>
                    </div>

                    {/* Skills/Libraries Container */}
                    <div className="relative">
                        {/* Navigation Buttons */}
                        {canScrollLeft && (
                            <button
                                onClick={scrollToPrevious}
                                className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                            </button>
                        )}

                        {canScrollRight && (
                            <button
                                onClick={scrollToNext}
                                className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                            >
                                <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                            </button>
                        )}

                        {/* Scrollable Cards Container */}
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto scrollbar-hide px-16 py-4"
                            style={{ scrollBehavior: 'smooth' }}
                        >
                            {currentData.map((item, index) => (
                                <div
                                    key={item.id}
                                    className="group relative skill-card flex-shrink-0"
                                    onMouseEnter={() => activeTab === 'skills' ? handleSkillHover(item.id) : handleLibraryHover(item.id)}
                                    onMouseLeave={() => activeTab === 'skills' ? handleSkillLeave() : handleLibraryLeave()}
                                >
                                    <div
                                        className={`relative ${item.bgColor} backdrop-blur-sm border ${item.borderColor} rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer w-80 h-96 flex flex-col`}
                                    >
                                        {/* Background decoration */}
                                        <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 -z-10`}></div>

                                        {/* Item Type Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${item.bgColor} ${item.textColor} border ${item.borderColor}`}>
                                                {activeTab === 'skills' ? 'Skill' : 'Library'}
                                            </span>
                                        </div>

                                        {/* Item Icon */}
                                        <div className="flex justify-center mb-6">
                                            {activeTab === 'skills' ? (
                                                // For skills, show images directly without background
                                                <div className="w-20 h-20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                                    {item.icon.startsWith('/') ? (
                                                        <img
                                                            src={item.icon}
                                                            alt={item.name}
                                                            className="w-16 h-16 object-contain"
                                                        />
                                                    ) : (
                                                        <span className="text-4xl">{item.icon}</span>
                                                    )}
                                                </div>
                                            ) : (
                                                // For libraries, keep the blue gradient background with layer group icon
                                                <div className={`w-20 h-20 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <FontAwesomeIcon icon={faLayerGroup} className="text-4xl" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Item Name */}
                                        <div className="text-center mb-4">
                                            <h3 className={`text-2xl font-bold ${item.textColor} group-hover:text-white transition-colors duration-300 mb-2`}>
                                                {item.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {item.description}
                                            </p>
                                        </div>

                                        {/* Skills specific content */}
                                        {activeTab === 'skills' && 'proficiency' in item && (
                                            <div className="flex-1 flex flex-col justify-center space-y-4">
                                                {/* Proficiency Bar */}
                                                <div className="space-y-2">
                                                    <div className="flex justify-between text-sm">
                                                        <span className="text-gray-400">Proficiency</span>
                                                        <span className={`${item.textColor} font-semibold`}>{item.proficiency}%</span>
                                                    </div>
                                                    <div className="w-full bg-gray-700/50 rounded-full h-2">
                                                        <div
                                                            className={`h-2 bg-gradient-to-r ${item.color} rounded-full proficiency-bar`}
                                                            style={{ width: `${item.proficiency}%` }}
                                                        ></div>
                                                    </div>
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-3 gap-2 text-center">
                                                    <div className="bg-white/5 rounded-lg p-2">
                                                        <FontAwesomeIcon icon={faClock} className={`${item.textColor} text-sm mb-1`} />
                                                        <div className="text-xs text-gray-400">{item.hoursWorked}h</div>
                                                    </div>
                                                    <div className="bg-white/5 rounded-lg p-2">
                                                        <FontAwesomeIcon icon={faProjectDiagram} className={`${item.textColor} text-sm mb-1`} />
                                                        <div className="text-xs text-gray-400">{item.projectsImplemented}</div>
                                                    </div>
                                                    <div className="bg-white/5 rounded-lg p-2">
                                                        <FontAwesomeIcon icon={faFileCode} className={`${item.textColor} text-sm mb-1`} />
                                                        <div className="text-xs text-gray-400">{item.linesOfCode.toLocaleString()}</div>
                                                    </div>
                                                </div>
                                            </div>
                                        )}

                                        {/* Libraries specific content */}
                                        {activeTab === 'libraries' && 'usage' in item && (
                                            <div className="flex-1 flex flex-col justify-center space-y-4">
                                                {/* Usage */}
                                                <div className="text-center">
                                                    <p className="text-sm text-gray-300 mb-2">{item.usage}</p>
                                                </div>

                                                {/* Stats */}
                                                <div className="grid grid-cols-2 gap-2 text-center">
                                                    <div className="bg-white/5 rounded-lg p-2">
                                                        <FontAwesomeIcon icon={faProjectDiagram} className={`${item.textColor} text-sm mb-1`} />
                                                        <div className="text-xs text-gray-400">{item.projectsUsed} projects</div>
                                                    </div>
                                                    <div className="bg-white/5 rounded-lg p-2">
                                                        <FontAwesomeIcon icon={faClock} className={`${item.textColor} text-sm mb-1`} />
                                                        <div className="text-xs text-gray-400">{item.hoursWorked}h</div>
                                                    </div>
                                                </div>

                                                {/* Features
                                                <div className="space-y-1">
                                                    {item.features.slice(0, 2).map((feature: string, featureIndex: number) => (
                                                        <div key={featureIndex} className="flex items-center text-xs text-gray-400">
                                                            <span className={`${item.textColor} mr-2`}>•</span>
                                                            {feature}
                                                        </div>
                                                    ))}
                                                    {item.features.length > 2 && (
                                                        <div className="text-xs text-gray-500 text-center">
                                                            +{item.features.length - 2} more
                                                        </div>
                                                    )}
                                                </div> */}
                                            </div>
                                        )}

                                        {/* Hover Overlay for detailed view */}
                                        {(hoveredSkill === item.id || hoveredLibrary === item.id) && (
                                            <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50 transition-all duration-300">
                                                <div className="relative w-full h-full p-4 flex flex-col items-center justify-center">
                                                    <div className="text-center">
                                                        <h4 className="text-white text-xl font-bold mb-4">{item.name}</h4>

                                                        {activeTab === 'skills' && 'proficiency' in item ? (
                                                            <div className="space-y-3 text-sm">
                                                                <div className="flex justify-between">
                                                                    <span className="text-gray-300">Hours Worked:</span>
                                                                    <span className="text-white font-semibold">{item.hoursWorked}h</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-gray-300">Projects:</span>
                                                                    <span className="text-white font-semibold">{item.projectsImplemented}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-gray-300">Lines of Code:</span>
                                                                    <span className="text-white font-semibold">{item.linesOfCode.toLocaleString()}</span>
                                                                </div>
                                                                <div className="flex justify-between">
                                                                    <span className="text-gray-300">Proficiency:</span>
                                                                    <span className="text-white font-semibold">{item.proficiency}%</span>
                                                                </div>
                                                            </div>
                                                        ) : activeTab === 'libraries' && 'usage' in item ? (
                                                            <div className="space-y-3 text-sm">
                                                                <p className="text-gray-300 mb-3">{item.description}</p>
                                                                <div className="space-y-2">
                                                                    <div className="flex justify-between">
                                                                        <span className="text-gray-300">Projects Used:</span>
                                                                        <span className="text-white font-semibold">{item.projectsUsed}</span>
                                                                    </div>
                                                                    <div className="flex justify-between">
                                                                        <span className="text-gray-300">Hours Worked:</span>
                                                                        <span className="text-white font-semibold">{item.hoursWorked}h</span>
                                                                    </div>
                                                                </div>
                                                                <div className="mt-4">
                                                                    <h5 className="text-white font-semibold mb-2">Key Features:</h5>
                                                                    <div className="space-y-1">
                                                                        {item.features.map((feature: string, featureIndex: number) => (
                                                                            <div key={featureIndex} className="flex items-center text-gray-300">
                                                                                <span className="text-purple-400 mr-2">•</span>
                                                                                {feature}
                                                                            </div>
                                                                        ))}
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Skills;
