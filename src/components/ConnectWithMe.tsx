'use client';
import { faChevronLeft, faChevronRight, faCode, faEnvelope, faHeart, faQuoteLeft, faQuoteRight, faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useEffect, useState } from 'react';
import TypingAnimation from './TypingAnimation';

const ConnectWithMe = () => {
    const [currentTestimonial, setCurrentTestimonial] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isHovered, setIsHovered] = useState(false);

    const testimonials = [
        {
            id: 1,
            name: "Sarah Johnson",
            role: "Senior Developer",
            company: "TechCorp",
            content: "Sourav is an exceptional React Native developer. His attention to detail and problem-solving skills are outstanding. He delivered our mobile app ahead of schedule with zero bugs.",
            avatar: "SJ"
        },
        {
            id: 2,
            name: "Michael Chen",
            role: "Product Manager",
            company: "StartupXYZ",
            content: "Working with Sourav was a game-changer for our project. His technical expertise and collaborative approach made complex features seem effortless to implement.",
            avatar: "MC"
        },
        {
            id: 3,
            name: "Emily Rodriguez",
            role: "UI/UX Designer",
            company: "DesignStudio",
            content: "Sourav's ability to translate design concepts into pixel-perfect mobile applications is remarkable. He's always open to feedback and suggestions for improvement.",
            avatar: "ER"
        },
        {
            id: 4,
            name: "David Thompson",
            role: "CTO",
            company: "InnovateLab",
            content: "Sourav's code quality and architecture decisions are top-notch. He consistently delivers scalable solutions that exceed our expectations. Highly recommended!",
            avatar: "DT"
        }
    ];

    const contactLinks = [
        {
            name: "Gmail",
            icon: faEnvelope,
            url: "mailto:sk7381jha@gmail.com",
            color: "from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700",
            hoverColor: "hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:to-gray-800"
        },
        {
            name: "LinkedIn",
            icon: faUser,
            url: "https://www.linkedin.com/in/sourav-kumar-jha-mqs/",
            color: "from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700",
            hoverColor: "hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:to-gray-800"
        },
        {
            name: "GitHub",
            icon: faCode,
            url: "https://github.com/SouravJha2003",
            color: "from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700",
            hoverColor: "hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:to-gray-800"
        },
        {
            name: "Instagram",
            icon: faHeart,
            url: "https://www.instagram.com/8480souravkumar?igsh=MTF3Y3Y5ejV3c3p4cg==",
            color: "from-gray-200 to-gray-300 dark:from-gray-600 dark:to-gray-700",
            hoverColor: "hover:from-gray-300 hover:to-gray-400 dark:hover:from-gray-700 dark:hover:to-gray-800"
        }
    ];

    // Auto-play testimonials - pause when hovered
    useEffect(() => {
        if (!isAutoPlaying || isHovered) return;

        const interval = setInterval(() => {
            setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [isAutoPlaying, isHovered, testimonials.length]);

    const nextTestimonial = () => {
        setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
        // Reset auto-play timer
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 100);
    };

    const prevTestimonial = () => {
        setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
        // Reset auto-play timer
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 100);
    };

    const goToTestimonial = (index: number) => {
        setCurrentTestimonial(index);
        // Reset auto-play timer
        setIsAutoPlaying(false);
        setTimeout(() => setIsAutoPlaying(true), 100);
    };

    return (
        <>
            <style jsx>{`
                .testimonial-slide {
                    transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .testimonial-enter {
                    opacity: 0;
                    transform: translateX(30px);
                }
                .testimonial-enter-active {
                    opacity: 1;
                    transform: translateX(0);
                }
                .testimonial-exit {
                    opacity: 1;
                    transform: translateX(0);
                }
                .testimonial-exit-active {
                    opacity: 0;
                    transform: translateX(-30px);
                }
                .contact-button {
                    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .contact-button:hover {
                    transform: translateY(-2px) scale(1.05);
                }
                .testimonial-dot {
                    transition: all 0.3s ease;
                }
                .testimonial-dot.active {
                    transform: scale(1.2);
                }
            `}</style>

            <section
                id="contact"
                className="h-[80vh] bg-gradient-to-br from-gray-50 to-slate-100 dark:from-gray-900 dark:to-slate-800 flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/20 dark:border-gray-700/30 relative overflow-hidden"
            >
                {/* Background decorations */}
                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>
                <div className="absolute -bottom-8 -right-8 w-24 h-24 bg-gradient-to-br from-pink-200/20 to-orange-200/20 rounded-full blur-2xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 bg-gradient-to-br from-green-200/10 to-blue-200/10 rounded-full blur-3xl"></div>

                <div className="max-w-7xl w-full relative z-10">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex-1">
                            <h1 className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-purple-600 to-violet-600 dark:from-white dark:via-purple-400 dark:to-violet-400 leading-tight font-serif">
                                <TypingAnimation
                                    text="Connect with Me"
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
                                Let&apos;s Collaborate
                            </h2>
                        </div>
                    </div>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Half - Testimonials Carousel */}
                        <div className="relative">
                            <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border border-white/30 dark:border-gray-700/50">
                                <div className="flex items-center justify-between mb-6">
                                    <h3 className="text-2xl font-semibold text-gray-800 dark:text-white">
                                        What People Say
                                    </h3>
                                    <div className="flex space-x-2">
                                        <button
                                            onClick={prevTestimonial}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faChevronLeft} className="text-gray-600 dark:text-gray-300" />
                                        </button>
                                        <button
                                            onClick={nextTestimonial}
                                            className="p-2 rounded-full bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                                        >
                                            <FontAwesomeIcon icon={faChevronRight} className="text-gray-600 dark:text-gray-300" />
                                        </button>
                                    </div>
                                </div>

                                <div
                                    className="relative h-48 overflow-hidden"
                                    onMouseEnter={() => setIsHovered(true)}
                                    onMouseLeave={() => setIsHovered(false)}
                                >
                                    <div
                                        className="testimonial-slide absolute inset-0 flex flex-col justify-center"
                                        key={currentTestimonial}
                                    >
                                        <div className="flex items-start space-x-4">
                                            <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                                                {testimonials[currentTestimonial].avatar}
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-800 dark:text-white">
                                                    {testimonials[currentTestimonial].name}
                                                </h4>
                                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                                    {testimonials[currentTestimonial].role} at {testimonials[currentTestimonial].company}
                                                </p>
                                            </div>
                                        </div>

                                        <div className="mt-4 relative">
                                            <FontAwesomeIcon
                                                icon={faQuoteLeft}
                                                className="absolute -top-2 -left-2 text-blue-400/30 text-2xl"
                                            />
                                            <p className="text-gray-700 dark:text-gray-300 leading-relaxed pl-6">
                                                {testimonials[currentTestimonial].content}
                                            </p>
                                            <FontAwesomeIcon
                                                icon={faQuoteRight}
                                                className="absolute -bottom-2 -right-2 text-blue-400/30 text-2xl"
                                            />
                                        </div>
                                    </div>
                                </div>

                                {/* Dots indicator */}
                                <div className="flex justify-center space-x-2 mt-6">
                                    {testimonials.map((_, index) => (
                                        <button
                                            key={index}
                                            onClick={() => goToTestimonial(index)}
                                            className={`testimonial-dot w-3 h-3 rounded-full transition-all ${index === currentTestimonial
                                                ? 'bg-blue-500 scale-125'
                                                : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Right Half - Contact Buttons */}
                        <div className="space-y-8">

                            <div className="grid grid-cols-2 gap-4">
                                {contactLinks.map((contact, index) => (
                                    <a
                                        key={contact.name}
                                        href={contact.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`contact-button group relative overflow-hidden rounded-xl p-6 bg-gradient-to-br ${contact.color} ${contact.hoverColor} text-gray-800 dark:text-white shadow-lg hover:shadow-xl transition-all duration-300`}
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="absolute inset-0 bg-gray-400/10 dark:bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                        <div className="relative z-10 flex flex-col items-center space-y-3">
                                            <div className="w-12 h-12 bg-gray-300/30 dark:bg-white/20 rounded-full flex items-center justify-center group-hover:bg-gray-400/40 dark:group-hover:bg-white/30 transition-colors">
                                                <FontAwesomeIcon
                                                    icon={contact.icon}
                                                    className="text-2xl"
                                                />
                                            </div>
                                            <span className="font-semibold text-lg">
                                                {contact.name}
                                            </span>
                                        </div>

                                        {/* Hover effect overlay */}
                                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                                    </a>
                                ))}
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ConnectWithMe;
