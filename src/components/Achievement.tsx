'use client';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useRef, useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import TypingAnimation from './TypingAnimation';

const Achievement = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const autoScrollRef = useRef<NodeJS.Timeout | null>(null);

    const certificates = [
        {
            id: 0,
            image: '/certificate/marquee.png',
            description: 'Professional certification in software development practices and team collaboration'
        },
        {
            id: 1,
            image: '/certificate/vlsipro.png',
            description: 'Specialized certification in VLSI design fundamentals'
        },
        {
            id: 2,
            image: '/certificate/internal.png',
            description: 'Internal recognition for active participation in hackathon'
        }
    ];


    const resetTimer = () => {
        if (autoScrollRef.current) {
            clearInterval(autoScrollRef.current);
            autoScrollRef.current = null;
        }
        // Restart timer if not hovered
        if (!isHovered) {
            autoScrollRef.current = setInterval(() => {
                setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
            }, 5000);
        }
    };

    const scrollToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
        resetTimer();
    };

    const scrollToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + certificates.length) % certificates.length);
        resetTimer();
    };

    // Auto-scroll functionality
    useEffect(() => {
        const startAutoScroll = () => {
            if (!isHovered) {
                autoScrollRef.current = setInterval(() => {
                    setCurrentIndex((prevIndex) => (prevIndex + 1) % certificates.length);
                }, 5000); // 5 seconds
            }
        };

        const stopAutoScroll = () => {
            if (autoScrollRef.current) {
                clearInterval(autoScrollRef.current);
                autoScrollRef.current = null;
            }
        };

        if (!isHovered) {
            startAutoScroll();
        } else {
            stopAutoScroll();
        }

        // Cleanup on unmount
        return () => {
            stopAutoScroll();
        };
    }, [certificates.length, isHovered]);


    return (
        <>
            <style jsx>{`
                .certificate-image {
                    transition: all 0.3s ease-in-out;
                }
                .certificate-image:hover {
                    transform: scale(1.05);
                }
            `}</style>
            <section
                id="achievements"
                className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
            >
                <AnimatedCodeBackground />

                {/* Frosted glass background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-50/20 to-violet-100/20 dark:from-gray-900/30 dark:to-purple-900/30 backdrop-blur-[10px] z-10"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>

                <div className="w-full max-w-6xl relative z-30">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex-1">
                            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-600 to-violet-600 dark:from-white dark:via-purple-400 dark:to-violet-400 leading-tight font-serif">
                                <TypingAnimation
                                    text="My Achievements"
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
                                Certifications & Awards
                            </h2>
                        </div>
                    </div>

                    {/* Certificates Container */}
                    <div className="relative flex justify-center">
                        {/* Navigation Buttons */}
                        <button
                            onClick={scrollToPrevious}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                        </button>

                        <button
                            onClick={scrollToNext}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-40 w-12 h-12 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-white/30 hover:scale-110 transition-all duration-300 shadow-lg cursor-pointer"
                        >
                            <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                        </button>

                        {/* Single Certificate Display */}
                        <div className="flex flex-col items-center mt-5">
                            {/* Certificate Image - Free Display */}
                            <img
                                src={certificates[currentIndex].image}
                                alt={`Certificate ${currentIndex + 1}`}
                                className="max-w-2xl object-contain certificate-image"
                                onMouseEnter={() => setIsHovered(true)}
                                onMouseLeave={() => setIsHovered(false)}
                            />

                            {/* Certificate Description */}
                            <div className="text-center mt-4">
                                <p className="text-sm text-gray-300 leading-relaxed">
                                    {certificates[currentIndex].description}
                                </p>
                            </div>
                        </div>

                    </div>
                </div>
            </section>
        </>
    );
};

export default Achievement;
