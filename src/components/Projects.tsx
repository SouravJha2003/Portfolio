'use client';
import { faChevronLeft, faChevronRight, faCode, faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import MiniProjects from './MiniProjects';
import TypingAnimation from './TypingAnimation';

const Projects = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [canScrollLeft, setCanScrollLeft] = useState(false);
    const [canScrollRight, setCanScrollRight] = useState(true);
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalImage, setModalImage] = useState<{ projectId: number; imageIndex: number } | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [cardViewMode, setCardViewMode] = useState<'images' | 'details'>('images');
    const [showMiniProjects, setShowMiniProjects] = useState(false);
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    // Project images mapping
    const projectImages: { [key: number]: string[] } = {
        0: [ // ZOLT project
            '/zolt/zolt1.png',
            '/zolt/zolt2.png',
            '/zolt/zolt3.png',
            '/zolt/zolt4.png',
            '/zolt/zolt5.png',
            '/zolt/zolt6.png'
        ],
        1: [ // Payascript project
            '/payascript/payascript1.png',
            '/payascript/payascript2.png',
            '/payascript/payascript3.png',
            '/payascript/payascript4.png'
        ],
        2: [ // Flipping Clock project
            '/flip/flip1.png',
            '/flip/flip2.png',
            '/flip/flip3.png',
            '/flip/flip4.png',
            '/flip/flip5.png',
            '/flip/flip6.png'
        ]
    };

    const projects = [
        {
            id: 0,
            type: 'official',
            name: 'ZOLT',
            logo: '/aboutme_assets/zolt.png',
            description: 'A comprehensive health and wellness application built with React Native',
            shortDescription: 'Health & Wellness App',
            techStack: ['React Native', 'TypeScript', 'Zustand', 'Supabase', 'Expo'],
            features: [
                'User authentication and profile management',
                'Health tracking and analytics',
                'Real-time data synchronization',
                'Cross-platform mobile support',
                'Offline functionality'
            ],
            status: 'Launched',
            duration: 'Nov 2024 - Present',
            teamSize: '3 developers',
            role: 'Junior React Native Developer',
            company: 'MARQUEESEMI',
            highlights: [
                'Role: Junior React Native Developer',
                'Tech Stack: React Native, TypeScript, Zustand, Supabase',
                'Duration: Nov 2024 - Present',
                'Team Size: 3 developers',
                'Status: In Active Development',
                'Company: MARQUEESEMI'
            ],
            link: 'https://www.zolthealth.com/'
        },
        {
            id: 1,
            type: 'personal',
            name: 'Payascript',
            logo: '/aboutme_assets/payascript.png',
            description: 'Simple, clutter-free, modern and beautiful app for tracking daily transactions',
            shortDescription: 'Payment Tracking App',
            techStack: ['React Native', 'TypeScript', 'Zustand', 'Expo', 'EAS'],
            features: [
                'Clutter free and ad-free ui',
                'On-device storage and Offline functionality',
                'Transaction history and analytics',
                'Theme support',
                'Transaction categorization',
                'Import and export transactions'
            ],
            status: 'In Development',
            duration: 'June 2025 - Present',
            teamSize: 'Solo Project',
            company: 'Personal Project',
            highlights: [
                'Role: Solo Project',
                'Tech Stack: React Native, TypeScript, Zustand, Expo, EAS',
                'Duration: June 2025 - Present',
                'Team Size: Solo Project',
                'Status: In Development',
                'Type: Personal Project'
            ],
            link: null
        },
        {
            id: 2,
            type: 'personal',
            name: 'Flipping Clock',
            logo: '/aboutme_assets/flipclock.png',
            description: 'An interactive digital clock with flip animation effects',
            shortDescription: 'Digital Clock Animation',
            techStack: ['React Native', 'TypeScript', 'Expo', 'EAS'],
            features: [
                'Smooth flip animation effects',
                'Multiple clock themes',
                '12/24 hour format support',
                'Customizable colors and fonts',
                'Responsive design'
            ],
            status: 'Completed',
            duration: 'Jul 2025 - Present',
            teamSize: 'Solo Project',
            role: 'Solo Project',
            company: 'Personal Project',
            highlights: [
                'Role: Solo Project',
                'Tech Stack: React Native, TypeScript, Expo, EAS',
                'Duration: Jul 2025 - Present',
                'Team Size: Solo Project',
                'Status: Completed',
                'Type: Personal Project'
            ],
            link: null
        },
        {
            id: 3,
            type: 'mini',
            name: 'Mini Projects',
            logo: '/aboutme_assets/mini.png',
            description: 'Collection of small utility projects and experiments',
            shortDescription: 'Utility Projects',
            techStack: ['JavaScript', 'HTML5', 'CSS3'],
            miniProjects: [
                'Animated Clock',
                'Sequence memorizing game',
                'Position Memorizing game',
                'More ....',
            ],
            status: 'Completed',
            duration: 'Various',
            teamSize: 'Solo Projects',
            company: 'Personal Projects',
            highlights: [
                'Type: Mini Projects Collection',
                'Tech Stack: JavaScript, HTML5, CSS3',
                'Status: Completed',
                'Team Size: Solo Projects',
                'Focus: Learning & Experimentation',
                'Purpose: Skill Building'
            ],
            link: null
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

    // Handle project hover
    const handleProjectHover = (projectId: number) => {
        if (projectImages[projectId]) {
            setHoveredProject(projectId);
            setCurrentImageIndex(0);
        }
    };

    const handleProjectLeave = () => {
        setHoveredProject(null);
        setCurrentImageIndex(0);
        setCardViewMode('images');
    };

    // Handle image click to open modal
    const handleImageClick = (projectId: number, imageIndex: number) => {
        setModalImage({ projectId, imageIndex });
        setModalImageIndex(imageIndex);
    };

    const closeModal = () => {
        setModalImage(null);
        setModalImageIndex(0);
    };

    // Handle card view mode toggle
    const toggleCardView = () => {
        setCardViewMode(prev => prev === 'images' ? 'details' : 'images');
    };

    // Handle mini project card click
    const handleMiniProjectClick = () => {
        setShowMiniProjects(true);
    };

    // Handle close mini projects
    const closeMiniProjects = () => {
        setShowMiniProjects(false);
    };

    // Handle project link click
    const handleProjectLinkClick = (e: React.MouseEvent, project: any) => {
        e.stopPropagation();
        if (project.link) {
            window.open(project.link, '_blank', 'noopener,noreferrer');
        } else {
            alert('Coming Soon!');
        }
    };

    // Handle modal image navigation
    const nextModalImage = () => {
        if (modalImage && projectImages[modalImage.projectId]) {
            const images = projectImages[modalImage.projectId];
            setModalImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevModalImage = () => {
        if (modalImage && projectImages[modalImage.projectId]) {
            const images = projectImages[modalImage.projectId];
            setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Handle keyboard navigation in modal
    React.useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (modalImage) {
                if (e.key === 'ArrowLeft') {
                    prevModalImage();
                } else if (e.key === 'ArrowRight') {
                    nextModalImage();
                } else if (e.key === 'Escape') {
                    closeModal();
                }
            }
        };

        if (modalImage) {
            document.addEventListener('keydown', handleKeyDown);
            return () => document.removeEventListener('keydown', handleKeyDown);
        }
    }, [modalImage]);

    // Handle image navigation
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoveredProject !== null && projectImages[hoveredProject]) {
            const images = projectImages[hoveredProject];
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoveredProject !== null && projectImages[hoveredProject]) {
            const images = projectImages[hoveredProject];
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Check scroll state on mount and when projects change
    React.useEffect(() => {
        updateScrollButtons();
    }, [projects]);

    // Add scroll event listener
    React.useEffect(() => {
        const container = scrollContainerRef.current;
        if (container) {
            container.addEventListener('scroll', updateScrollButtons);
            return () => container.removeEventListener('scroll', updateScrollButtons);
        }
    }, []);

    return (
        <>
            <style jsx>{`
                .project-card {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .project-card:hover {
                    transform: translateY(-8px) scale(1.02);
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;
                }
            `}</style>
            <section
                id="projects"
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
                                    text="My Projects"
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
                                {projects.filter(p => p.type === 'official').length} Official • {projects.filter(p => p.type === 'personal' || p.type === 'mini').length} Personal
                            </h2>
                        </div>
                    </div>

                    {/* Projects Container */}
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
                            {projects.map((project, index) => (
                                <div
                                    key={project.id}
                                    className="group relative project-card flex-shrink-0"
                                    onMouseEnter={() => handleProjectHover(project.id)}
                                    onMouseLeave={handleProjectLeave}
                                >
                                    <div
                                        className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-purple-500/20 cursor-pointer w-80 h-96 flex flex-col"
                                        onClick={project.type === 'mini' ? handleMiniProjectClick : undefined}
                                    >
                                        {/* Background decoration */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-violet-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                        {/* Project Type Badge */}
                                        <div className="absolute top-4 right-4">
                                            <span className={`px-3 py-1 text-xs font-semibold rounded-full ${project.type === 'official'
                                                ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                                : 'bg-blue-500/20 text-blue-300 border border-blue-500/30'
                                                }`}>
                                                {project.type === 'official' ? 'Official' : 'Personal'}
                                            </span>
                                        </div>

                                        {/* Project Logo */}
                                        <div className="flex justify-center mb-6">
                                            {project.logo ? (
                                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                                    <img
                                                        src={project.logo}
                                                        alt={project.name}
                                                        className="w-full h-full object-cover rounded-2xl"
                                                    />
                                                </div>
                                            ) : (
                                                <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-violet-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                    <FontAwesomeIcon icon={faCode} className="text-3xl text-white" />
                                                </div>
                                            )}
                                        </div>

                                        {/* Project Name */}
                                        <div className="text-center mb-4">
                                            <h3 className="text-2xl font-bold text-purple-300 group-hover:text-purple-200 transition-colors duration-300 mb-2">
                                                {project.name}
                                            </h3>
                                            <p className="text-sm text-gray-400">
                                                {project.shortDescription}
                                            </p>
                                        </div>

                                        {/* Tech Stack or Mini Projects */}
                                        <div className="flex-1 flex flex-col justify-center">
                                            <div className="flex flex-wrap gap-2 justify-center">
                                                {project.type === 'mini' ? (
                                                    project.miniProjects?.map((miniProject, miniIndex) => (
                                                        <span key={miniIndex} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                                                            {miniProject}
                                                        </span>
                                                    ))
                                                ) : (
                                                    project.techStack.map((tech, techIndex) => (
                                                        <span key={techIndex} className="px-3 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                                                            {tech}
                                                        </span>
                                                    ))
                                                )}
                                            </div>
                                        </div>

                                        {/* Application Type Status */}
                                        <div className="mt-4 text-center">
                                            <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                                <FontAwesomeIcon icon={faCode} className="text-purple-400" />
                                                <span>{project.type === 'mini' ? 'Web Application' : 'Mobile Application'}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Image Gallery Overlay - Only show for projects with images and not mini projects */}
                                    {hoveredProject === project.id && projectImages[project.id] && project.type !== 'mini' && (
                                        <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50 transition-all duration-300">
                                            <div className="relative w-full h-full p-4 flex flex-col items-center justify-center">

                                                {/* Info button */}
                                                <button
                                                    onClick={(e) => {
                                                        e.stopPropagation();
                                                        toggleCardView();
                                                    }}
                                                    className="absolute top-4 right-4 w-8 h-8 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
                                                >
                                                    <FontAwesomeIcon icon={faInfoCircle} className="text-sm" />
                                                </button>

                                                {cardViewMode === 'images' ? (
                                                    <>
                                                        {/* Image container with navigation */}
                                                        <div className="relative w-full max-w-sm h-64 mb-4">
                                                            <img
                                                                src={projectImages[project.id][currentImageIndex]}
                                                                alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                                                className="w-full h-full object-contain rounded-lg shadow-2xl cursor-pointer"
                                                                onClick={() => handleImageClick(project.id, currentImageIndex)}
                                                            />

                                                            {/* Navigation arrows for image */}
                                                            {projectImages[project.id].length > 1 && (
                                                                <>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            prevImage(e);
                                                                        }}
                                                                        className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                                                                    >
                                                                        <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                                                                    </button>
                                                                    <button
                                                                        onClick={(e) => {
                                                                            e.stopPropagation();
                                                                            nextImage(e);
                                                                        }}
                                                                        className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                                                                    >
                                                                        <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
                                                                    </button>
                                                                </>
                                                            )}
                                                        </div>

                                                        {/* Project name and link overlay */}
                                                        <div className="text-center mt-2">
                                                            <h4 className="text-white text-lg font-semibold mb-3">{project.name}</h4>

                                                            {/* View Project Button */}
                                                            <button
                                                                onClick={(e) => handleProjectLinkClick(e, project)}
                                                                className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-sm rounded-full border border-purple-500/30 transition-all duration-200 hover:scale-105"
                                                            >
                                                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                                                View Project
                                                            </button>
                                                        </div>
                                                    </>
                                                ) : (
                                                    /* Details view */
                                                    <div className="w-full max-w-lg h-96 overflow-y-auto scrollbar-hide">
                                                        <div className="space-y-4">
                                                            {/* Project header */}
                                                            <div className="text-center">
                                                                <h4 className="text-white text-2xl font-bold mb-2">{project.name}</h4>
                                                                <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                                                {/* View Project Button */}
                                                                <button
                                                                    onClick={(e) => handleProjectLinkClick(e, project)}
                                                                    className="inline-flex items-center gap-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 text-purple-300 text-sm rounded-full border border-purple-500/30 transition-all duration-200 hover:scale-105"
                                                                >
                                                                    <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                                                    View Project
                                                                </button>
                                                            </div>

                                                            {/* Tech Stack */}
                                                            <div>
                                                                <h5 className="text-white text-lg font-semibold mb-2">Tech Stack</h5>
                                                                <div className="flex flex-wrap gap-2">
                                                                    {project.techStack.map((tech, index) => (
                                                                        <span key={index} className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-full border border-purple-500/30">
                                                                            {tech}
                                                                        </span>
                                                                    ))}
                                                                </div>
                                                            </div>

                                                            {/* Project Info */}
                                                            <div>
                                                                <h5 className="text-white text-lg font-semibold mb-2">Project Info</h5>
                                                                <div className="space-y-1 text-gray-300 text-sm">
                                                                    <div><span className="font-medium">Status:</span> {project.status}</div>
                                                                    <div><span className="font-medium">Duration:</span> {project.duration}</div>
                                                                    <div><span className="font-medium">Team Size:</span> {project.teamSize}</div>
                                                                    <div><span className="font-medium">Role:</span> {project.role}</div>
                                                                    <div><span className="font-medium">Company:</span> {project.company}</div>
                                                                </div>
                                                            </div>

                                                            {/* Features */}
                                                            <div>
                                                                <h5 className="text-white text-lg font-semibold mb-2">Key Features</h5>
                                                                <ul className="space-y-1">
                                                                    {project.features?.map((feature, index) => (
                                                                        <li key={index} className="flex items-start text-gray-300 text-sm">
                                                                            <span className="text-purple-400 mr-2">•</span>
                                                                            {feature}
                                                                        </li>
                                                                    ))}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


                {/* Image Modal */}
                {modalImage && (
                    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[200] flex items-center justify-center p-4">
                        <div className="relative max-w-4xl max-h-[90vh] w-full h-full flex items-center justify-center">
                            {/* Close button */}
                            <button
                                onClick={closeModal}
                                className="absolute top-4 right-4 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
                            >
                                ×
                            </button>

                            {/* Navigation arrows */}
                            {projectImages[modalImage.projectId].length > 1 && (
                                <>
                                    <button
                                        onClick={prevModalImage}
                                        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
                                    >
                                        <FontAwesomeIcon icon={faChevronLeft} className="text-lg" />
                                    </button>
                                    <button
                                        onClick={nextModalImage}
                                        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
                                    >
                                        <FontAwesomeIcon icon={faChevronRight} className="text-lg" />
                                    </button>
                                </>
                            )}

                            {/* Modal image */}
                            <img
                                src={projectImages[modalImage.projectId][modalImageIndex]}
                                alt={`${projects.find(p => p.id === modalImage.projectId)?.name} screenshot ${modalImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />


                            {/* Image counter */}
                            {projectImages[modalImage.projectId].length > 1 && (
                                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                                    {modalImageIndex + 1} / {projectImages[modalImage.projectId].length}
                                </div>
                            )}
                        </div>
                    </div>
                )}

                {/* Mini Projects View */}
                {showMiniProjects && (
                    <div className="absolute inset-0 bg-black/80 backdrop-blur-sm rounded-2xl flex items-center justify-center z-50 transition-all duration-300">
                        <div className="relative w-full h-full p-8 flex flex-col items-center justify-center">
                            {/* Close button */}
                            <button
                                onClick={closeMiniProjects}
                                className="absolute top-4 right-4 w-10 h-10 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-all duration-200 z-10"
                            >
                                ×
                            </button>

                            {/* Mini Projects Component */}
                            <MiniProjects />
                        </div>
                    </div>
                )}

            </section>
        </>
    );
};

export default Projects;
