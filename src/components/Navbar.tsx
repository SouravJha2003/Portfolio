'use client';

import {
    faBolt,
    faBriefcase,
    faChartLine,
    faEnvelope,
    faGraduationCap,
    faPalette,
    faUser
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useCallback, useEffect, useState } from 'react';

interface NavbarProps {
    scrollProgress?: number;
}

export default function Navbar({ scrollProgress = 0 }: NavbarProps) {
    const [activeIcon, setActiveIcon] = useState(0);
    const [currentScrollProgress, setCurrentScrollProgress] = useState(0);

    const icons = [
        { id: 0, name: 'About', icon: faUser },
        { id: 1, name: 'Experience', icon: faChartLine },
        { id: 2, name: 'Projects', icon: faBriefcase },
        { id: 3, name: 'Skills', icon: faBolt },
        { id: 4, name: 'Education', icon: faGraduationCap },
        { id: 5, name: 'Achievements', icon: faPalette },
        { id: 6, name: 'Contact', icon: faEnvelope },
    ];

    // Throttle function for better performance
    const throttle = useCallback((func: Function, limit: number) => {
        let inThrottle: boolean;
        return function (this: any, ...args: any[]) {
            if (!inThrottle) {
                func.apply(this, args);
                inThrottle = true;
                setTimeout(() => (inThrottle = false), limit);
            }
        };
    }, []);

    const handleScroll = useCallback(() => {
        const scrollTop = window.pageYOffset;
        const navbarHeight = 96; // Fixed navbar height (h-24 = 96px)
        const extraOffset = 24; // Additional offset for better positioning
        const totalOffset = navbarHeight + extraOffset;

        // Get all sections with error handling
        const sections = icons.map((icon, index) => {
            const element = document.getElementById(icon.name.toLowerCase());
            return element ? {
                element,
                top: element.offsetTop - totalOffset,
                bottom: element.offsetTop - totalOffset + element.offsetHeight,
                height: element.offsetHeight,
                id: icon.id,
                index: index
            } : null;
        }).filter(Boolean);

        if (sections.length === 0) return;

        // Calculate progress using the exact same method as the original demo
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        let progress = 0;
        if (height > 0) {
            progress = (scrollTop / height) * 100;
            progress = Math.min(100, Math.max(0, progress));
        }

        // Determine active section based on scroll position
        let activeSectionIndex = 0;
        let activeSection = sections[0];

        // Find which section is currently in view
        for (let i = 0; i < sections.length; i++) {
            const section = sections[i];
            if (section && scrollTop >= section.top && scrollTop < section.bottom) {
                activeSectionIndex = i;
                activeSection = section;
                break;
            }
        }

        // If we're past the last section, activate the last icon
        if (sections.length > 0) {
            const lastSection = sections[sections.length - 1];
            if (lastSection && scrollTop >= lastSection.bottom) {
                activeSectionIndex = sections.length - 1;
                activeSection = lastSection;
            }
        }

        // Set active icon
        if (activeSection) {
            setActiveIcon(activeSection.id);
        }

        setCurrentScrollProgress(progress);
    }, [icons]);

    // Throttled scroll handler with minimal throttling for smooth progress
    const throttledHandleScroll = useCallback(
        throttle(handleScroll, 16), // ~60fps for smooth progress
        [handleScroll, throttle]
    );

    useEffect(() => {
        // Initial call
        handleScroll();

        // Add scroll listener with minimal throttling for smooth progress
        window.addEventListener('scroll', throttledHandleScroll, { passive: true });
        window.addEventListener('resize', handleScroll, { passive: true });

        // Cleanup
        return () => {
            window.removeEventListener('scroll', throttledHandleScroll);
            window.removeEventListener('resize', handleScroll);
        };
    }, [handleScroll, throttledHandleScroll]);

    const handleIconClick = useCallback((iconId: number) => {
        const sectionName = icons.find(icon => icon.id === iconId)?.name.toLowerCase();

        if (sectionName) {
            const section = document.getElementById(sectionName);
            if (section) {
                const navbarHeight = 36; // Fixed navbar height (h-24 = 96px)
                const totalOffset = navbarHeight;
                const sectionTop = section.offsetTop - totalOffset;

                // Temporarily set active icon for immediate feedback
                setActiveIcon(iconId);

                // Smooth scroll to section
                window.scrollTo({
                    top: sectionTop,
                    behavior: 'smooth'
                });
            }
        }
    }, [icons]);

    return (
        <nav className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50 w-full max-w-7xl px-8">
            {/* Fixed height card container with enhanced frosted glass effect */}
            <div className="bg-white/10 dark:bg-gray-900/20 backdrop-blur-xl border-2 border-gray-400/70 dark:border-gray-600/70 rounded-2xl shadow-2xl h-24 relative overflow-visible before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/5 before:to-transparent before:rounded-2xl before:pointer-events-none">
                {/* Content container with proper spacing */}
                <div className="relative flex items-center justify-center w-full h-full px-6 sm:px-8">
                    {/* Progress bar container - positioned within card */}
                    <div className="relative flex items-center justify-center w-full max-w-5xl">
                        {/* Single continuous progress bar with glass effect */}
                        <div className="w-full h-2.5 bg-gray-300/40 dark:bg-gray-600/40 backdrop-blur-sm rounded-full relative overflow-hidden border border-gray-200/30 dark:border-gray-500/30">
                            {/* Progress fill with smooth transition */}
                            <div
                                className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-purple-600 rounded-full transition-all duration-75 ease-out"
                                style={{
                                    width: `${currentScrollProgress}%`,
                                    transform: `translateZ(0)`, // Force GPU acceleration
                                    boxShadow: currentScrollProgress > 0 ? '0 0 6px rgba(147, 51, 234, 0.4)' : 'none'
                                }}
                            />

                            {/* Progress indicator dots for each section */}
                            {icons.map((icon, index) => {
                                const sectionProgress = (index / (icons.length - 1)) * 100;
                                const isActive = activeIcon === icon.id;
                                const isReached = currentScrollProgress >= sectionProgress;

                                return (
                                    <div
                                        key={icon.id}
                                        className={`absolute top-1/2 transform -translate-y-1/2 w-3 h-3 rounded-full transition-all duration-200 ease-out backdrop-blur-sm border border-white/20 ${isActive
                                            ? 'bg-white/90 shadow-lg scale-125'
                                            : isReached
                                                ? 'bg-blue-400/80 scale-100'
                                                : 'bg-white/30 dark:bg-gray-500/60 scale-75'
                                            }`}
                                        style={{
                                            left: `${sectionProgress}%`,
                                            transform: `translate(-50%, -50%) ${isActive ? 'scale(1.25)' : isReached ? 'scale(1)' : 'scale(0.75)'}`
                                        }}
                                    />
                                );
                            })}
                        </div>

                        {/* Icons positioned above the progress bar - contained within card */}
                        {icons.map((icon, index) => {
                            const sectionProgress = (index / (icons.length - 1)) * 100;
                            const isActive = activeIcon === icon.id;
                            const isReached = currentScrollProgress >= sectionProgress;

                            return (
                                <div
                                    key={icon.id}
                                    className="absolute flex flex-col items-center"
                                    style={{
                                        left: `${sectionProgress}%`,
                                        transform: 'translateX(-50%)',
                                        top: '-24px' // Position above the progress bar with more space
                                    }}
                                >
                                    {/* Larger icon button */}
                                    <button
                                        onClick={() => handleIconClick(icon.id)}
                                        className={`
                                            w-10 h-10 sm:w-12 sm:h-12 rounded-full flex items-center justify-center
                                            transition-all duration-200 ease-out
                                            hover:scale-110 hover:shadow-lg
                                            border backdrop-blur-sm
                                            focus:outline-none focus:ring-2 focus:ring-blue-500/50
                                            ${isActive
                                                ? 'bg-gradient-to-br from-blue-500/90 to-purple-600/90 text-white scale-110 shadow-lg border-white/30 backdrop-blur-md transform-gpu'
                                                : isReached
                                                    ? 'bg-gradient-to-br from-blue-400/80 to-purple-500/80 text-white scale-105 shadow-md border-blue-300/40 backdrop-blur-sm'
                                                    : 'bg-white/10 dark:bg-gray-800/40 text-gray-300 hover:text-white hover:bg-white/20 dark:hover:bg-gray-700/60 border-white/20 dark:border-gray-600/40 hover:border-white/30 dark:hover:border-gray-500/50 backdrop-blur-sm'
                                            }
                                        `}
                                        style={{
                                            willChange: activeIcon === icon.id ? 'transform' : 'auto'
                                        }}
                                        title={icon.name}
                                        aria-label={icon.name}
                                    >
                                        <FontAwesomeIcon icon={icon.icon} className="text-base sm:text-lg" />
                                    </button>

                                    {/* Larger text label below icon */}
                                    <span className={`
                                            text-sm font-medium mt-2 text-center px-1 transition-all duration-200 whitespace-nowrap
                                            ${isActive
                                            ? 'text-white'
                                            : isReached
                                                ? 'text-blue-300'
                                                : 'text-gray-400'
                                        }
                                        `}>
                                        {icon.name}
                                    </span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </nav>
    );
}