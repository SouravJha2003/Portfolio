'use client';
import { faChevronLeft, faChevronRight, faCode, faExternalLinkAlt, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';

const MiniProjects = () => {
    const [hoveredProject, setHoveredProject] = useState<number | null>(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const [modalImage, setModalImage] = useState<{ projectId: number; imageIndex: number } | null>(null);
    const [modalImageIndex, setModalImageIndex] = useState(0);
    const [cardViewMode, setCardViewMode] = useState<'images' | 'details'>('images');
    const [logoErrors, setLogoErrors] = useState<Set<number>>(new Set());

    // Mock data for mini projects
    const miniProjects = [
        {
            id: 0,
            name: 'Animated Clock',
            logo: '/aboutme_assets/mini.png',
            description: 'A simple but animated digital clock design',
            shortDescription: 'Animated digital clock',
            techStack: ['HTML5', 'CSS3', 'JavaScript'],
            features: [
                'Shifting animation',
                'Real-time time display',
            ],
            status: 'Completed',
            duration: '1 day',
            teamSize: 'Solo Mini Project',
            images: [
                '/mini/mini3.png'
            ],
            link: 'https://regulabs2k.github.io/Animated-Clock/'
        },
        {
            id: 1,
            name: 'Sequence memorizing game',
            logo: '/aboutme_assets/mini.png',
            description: 'A simple but challenging game to memorize the sequence of card glowing',
            shortDescription: 'Task Management App',
            techStack: ['HTML5', 'CSS3', 'JavaScript'],
            features: [
                'Sequence memorizing game',
                'Real-time sequence display',
                'User interaction',
                'Responsive design',
                'Clean UI design'
            ],
            status: 'Completed',
            duration: '1 day',
            teamSize: 'Solo Mini Project',
            images: [
                '/mini/mini2.png'
            ],
            link: 'https://souravjha2003.github.io/Sequence-memorizer/'
        },
        {
            id: 2,
            name: 'Position Memorizing game',
            logo: '/aboutme_assets/mini.png',
            description: 'A modern calculator application with advanced mathematical operations',
            shortDescription: 'Math Calculator',
            techStack: ['JavaScript', 'HTML5', 'CSS3', 'Math.js'],
            features: [
                'Basic arithmetic operations',
                'Advanced mathematical functions',
                'Memory operations',
                'Keyboard support',
                'Responsive design'
            ],
            status: 'Completed',
            duration: '3 days',
            teamSize: 'Solo Project',
            role: 'Frontend Developer',
            company: 'Personal Project',
            images: [
                '/mini/mini1.png',
            ],
            link: 'https://souravjha2003.github.io/flip-cards/'
        }
    ];

    // Handle project hover
    const handleProjectHover = (projectId: number) => {
        setHoveredProject(projectId);
        setCurrentImageIndex(0);
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

    // Handle image navigation
    const nextImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoveredProject !== null && miniProjects[hoveredProject]) {
            const images = miniProjects[hoveredProject].images;
            setCurrentImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevImage = (e: React.MouseEvent) => {
        e.stopPropagation();
        if (hoveredProject !== null && miniProjects[hoveredProject]) {
            const images = miniProjects[hoveredProject].images;
            setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

    // Handle modal image navigation
    const nextModalImage = () => {
        if (modalImage && miniProjects[modalImage.projectId]) {
            const images = miniProjects[modalImage.projectId].images;
            setModalImageIndex((prev) => (prev + 1) % images.length);
        }
    };

    const prevModalImage = () => {
        if (modalImage && miniProjects[modalImage.projectId]) {
            const images = miniProjects[modalImage.projectId].images;
            setModalImageIndex((prev) => (prev - 1 + images.length) % images.length);
        }
    };

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

            <div className="w-full max-w-6xl relative z-30">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div className="flex-1">
                        <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-orange-600 to-red-600 dark:from-white dark:via-orange-400 dark:to-red-400 leading-tight font-serif">
                            Mini Projects
                        </h1>
                    </div>
                    <div className="flex items-center">
                        <div className="w-2 h-2 bg-orange-500 rounded-full mr-3 animate-pulse"></div>
                        <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide italic">
                            {miniProjects.length} Projects
                        </h2>
                    </div>
                </div>

                {/* Projects Container */}
                <div className="relative">
                    {/* Scrollable Cards Container */}
                    <div className="flex gap-6 overflow-x-auto scrollbar-hide py-4">
                        {miniProjects.map((project) => (
                            <div
                                key={project.id}
                                className="group relative project-card flex-shrink-0"
                                onMouseEnter={() => handleProjectHover(project.id)}
                                onMouseLeave={handleProjectLeave}
                            >
                                <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 hover:border-white/30 transition-all duration-500 hover:shadow-xl hover:shadow-orange-500/20 cursor-pointer w-80 h-96 flex flex-col">
                                    {/* Background decoration */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 via-red-500/10 to-pink-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-500 -z-10"></div>

                                    {/* Project Type Badge */}
                                    <div className="absolute top-4 right-4">
                                        <span className="px-3 py-1 text-xs font-semibold rounded-full bg-orange-500/20 text-orange-300 border border-orange-500/30">
                                            Mini Project
                                        </span>
                                    </div>

                                    {/* Project Logo */}
                                    <div className="flex justify-center mb-6">
                                        {project.logo && !logoErrors.has(project.id) ? (
                                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300 overflow-hidden">
                                                <img
                                                    src={project.logo}
                                                    alt={`${project.name} logo`}
                                                    className="w-full h-full object-cover rounded-2xl"
                                                    onError={() => {
                                                        setLogoErrors(prev => new Set(prev).add(project.id));
                                                    }}
                                                />
                                            </div>
                                        ) : (
                                            <div className="w-20 h-20 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                                                <FontAwesomeIcon icon={faCode} className="text-3xl text-white" />
                                            </div>
                                        )}
                                    </div>

                                    {/* Project Name */}
                                    <div className="text-center mb-4">
                                        <h3 className="text-2xl font-bold text-orange-300 group-hover:text-orange-200 transition-colors duration-300 mb-2">
                                            {project.name}
                                        </h3>
                                        <p className="text-sm text-gray-400">
                                            {project.shortDescription}
                                        </p>
                                    </div>

                                    {/* Tech Stack */}
                                    <div className="flex-1 flex flex-col justify-center">
                                        <div className="flex flex-wrap gap-2 justify-center">
                                            {project.techStack.map((tech, techIndex) => (
                                                <span key={techIndex} className="px-3 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Application Type Status */}
                                    <div className="mt-4 text-center">
                                        <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
                                            <FontAwesomeIcon icon={faCode} className="text-orange-400" />
                                            <span>Web Application</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Image Gallery Overlay */}
                                {hoveredProject === project.id && project.images && (
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
                                                            src={project.images[currentImageIndex]}
                                                            alt={`${project.name} screenshot ${currentImageIndex + 1}`}
                                                            className="w-full h-full object-contain rounded-lg shadow-2xl cursor-pointer"
                                                            onClick={() => handleImageClick(project.id, currentImageIndex)}
                                                        />

                                                        {/* Navigation arrows for image */}
                                                        {project.images.length > 1 && (
                                                            <>
                                                                <button
                                                                    onClick={prevImage}
                                                                    className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/50 hover:bg-black/70 rounded-full flex items-center justify-center text-white transition-all duration-200"
                                                                >
                                                                    <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
                                                                </button>
                                                                <button
                                                                    onClick={nextImage}
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
                                                        <a
                                                            href={project.link}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-sm rounded-full border border-orange-500/30 transition-all duration-200 hover:scale-105"
                                                            onClick={(e) => e.stopPropagation()}
                                                        >
                                                            <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                                            View Project
                                                        </a>
                                                    </div>
                                                </>
                                            ) : (
                                                /* Details view */
                                                <div className="w-full max-w-lg h-96 overflow-y-auto">
                                                    <div className="space-y-4">
                                                        {/* Project header */}
                                                        <div className="text-center">
                                                            <h4 className="text-white text-2xl font-bold mb-2">{project.name}</h4>
                                                            <p className="text-gray-300 text-sm mb-4">{project.description}</p>

                                                            {/* View Project Button */}
                                                            <a
                                                                href={project.link}
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500/20 hover:bg-orange-500/30 text-orange-300 text-sm rounded-full border border-orange-500/30 transition-all duration-200 hover:scale-105"
                                                                onClick={(e) => e.stopPropagation()}
                                                            >
                                                                <FontAwesomeIcon icon={faExternalLinkAlt} className="text-xs" />
                                                                View Project
                                                            </a>
                                                        </div>

                                                        {/* Tech Stack */}
                                                        <div>
                                                            <h5 className="text-white text-lg font-semibold mb-2">Tech Stack</h5>
                                                            <div className="flex flex-wrap gap-2">
                                                                {project.techStack.map((tech, index) => (
                                                                    <span key={index} className="px-2 py-1 bg-orange-500/20 text-orange-300 text-xs rounded-full border border-orange-500/30">
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
                                                                        <span className="text-orange-400 mr-2">•</span>
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
                            {miniProjects[modalImage.projectId].images.length > 1 && (
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
                                src={miniProjects[modalImage.projectId].images[modalImageIndex]}
                                alt={`${miniProjects[modalImage.projectId].name} screenshot ${modalImageIndex + 1}`}
                                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl"
                            />

                            {/* Image counter */}
                            {miniProjects[modalImage.projectId].images.length > 1 && (
                                <div className="absolute top-4 left-4 bg-black/50 px-3 py-1 rounded-full text-white text-sm">
                                    {modalImageIndex + 1} / {miniProjects[modalImage.projectId].images.length}
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default MiniProjects;
