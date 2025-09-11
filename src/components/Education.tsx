'use client';
import { faAward, faBookOpen, faCalendarAlt, faClock, faGraduationCap, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';
import AnimatedCodeBackground from './AnimatedCodeBackground';
import TypingAnimation from './TypingAnimation';

const Education = () => {
    const [isExpanded, setIsExpanded] = useState(false);

    const educationData = [
        {
            id: 0,
            level: "Graduation (TAT)",
            degree: "Bachelor of Technology",
            field: "Electronics and Telecommunication Engineering",
            school: "Trident Academy of Technology",
            board: "Biju Patnaik University of Technology",
            percentage: "8.42 CGPA",
            grade: "N/A",
            duration: "4 Years",
            completionYear: "2024",
            location: "Bhubaneswar, Odisha",
            language: "English",
            subjects: ['Digital Electronics', 'Analog Electronics', 'Digital Signal Processing', 'Data Structures and Algorithms', 'C', 'JAVA', "DBMS", "Electromagnetic Field Theory", "Microprocessor and Microcontroller", "Network theory"],
            description: "Completed B.Tech in Electronics and Telecommunication Engineering with focus on electronics, telecommunication, and software development. Participated in various coding competitions, hackathons and technical workshops.",
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-300',
            icon: faGraduationCap
        },
        {
            id: 1,
            level: "Higher Secondary (RC)",
            degree: "11th and 12th Grade",
            field: "Science Stream",
            school: "Rajdhani college",
            board: "Council of Higher Secondary Education",
            percentage: "70%",
            grade: "N/A",
            duration: "2 Years",
            completionYear: "2020",
            location: "Bhubaneswar, Odisha",
            language: "English",
            subjects: ["Mathematics", "Physics", "Chemistry", "Computer Science", "English", "Hindi"],
            description: "Completed 12th grade with distinction in Science stream. Focused on Mathematics and Computer Science, laying strong foundation for engineering studies.",
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-300',
            icon: faBookOpen
        },
        {
            id: 2,
            level: "Matriculation (PEMS)",
            degree: "9th and 10th Grade",
            field: "General Studies",
            school: "Prabhujee English Medium School",
            board: "Central Board of Secondary Education",
            percentage: "83.8%",
            grade: "A",
            duration: "2 Years",
            completionYear: "2018",
            location: "Bhubaneswar, Odisha",
            language: "English",
            subjects: ["Mathematics", "Science", "Social Studies", "English", "Hindi"],
            description: "Completed 10th grade with excellent academic performance. Developed strong analytical and problem-solving skills through mathematics and science.",
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-300',
            icon: faAward
        },
        {
            id: 3,
            level: "Primary Education (GNPS)",
            degree: "Elementary School",
            field: "General Studies",
            school: "Guru nanak public school",
            board: "Central Board of Secondary Education",
            percentage: "7.7 CGPA",
            grade: "N/A",
            duration: "1 Year",
            completionYear: "2016",
            location: "Bhubaneswar, Odisha",
            language: "English",
            subjects: ["Mathematics", "Science", "English", "Environmental Studies", "Art & Craft"],
            description: "Completed primary education with outstanding performance. Developed strong foundation in basic subjects and creative thinking through various activities.",
            color: 'from-cyan-500 to-blue-500',
            bgColor: 'bg-gray-500/10',
            borderColor: 'border-blue-500/30',
            textColor: 'text-blue-300',
            icon: faBookOpen
        },
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
                .education-timeline::before {
                    content: '';
                    position: absolute;
                    left: 50%;
                    top: 0;
                    bottom: 0;
                    width: 4px;
                    background: linear-gradient(to bottom, #3b82f6, #8b5cf6, #f59e0b, #ef4444);
                    transform: translateX(-50%);
                    border-radius: 2px;
                }
                .education-card {
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                }
                .education-card:hover {
                    transform: translateY(-8px) scale(1.02);
                }
                .scrollbar-hide {
                    -ms-overflow-style: none;
                    scrollbar-width: none;
                }
                .scrollbar-hide::-webkit-scrollbar { 
                    display: none;
                }
                .floating-animation {
                    animation: float 6s ease-in-out infinite;
                }
                @keyframes float {
                    0%, 100% { transform: translateY(0px); }
                    50% { transform: translateY(-10px); }
                }
            `}</style>
            <section
                id="education"
                className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden"
            >
                <AnimatedCodeBackground />

                {/* Frosted glass background overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-50/20 to-blue-100/20 dark:from-gray-900/30 dark:to-indigo-900/30 backdrop-blur-[10px] z-10"></div>
                <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>

                {!isExpanded ? (
                    // Normal View
                    <div className="flex items-center justify-between max-w-6xl w-full gap-12 relative z-30">
                        {/* Left Content */}
                        <div className="flex-1 max-w-2xl">
                            <div className="relative">
                                {/* Background Decoration */}
                                <div className="absolute -top-8 -left-8 w-32 h-32 bg-gradient-to-br from-indigo-200/30 to-blue-200/30 rounded-full blur-3xl floating-animation"></div>
                                <div className="absolute -bottom-8 -right-4 w-24 h-24 bg-gradient-to-br from-blue-200/30 to-cyan-200/30 rounded-full blur-2xl floating-animation" style={{ animationDelay: '2s' }}></div>

                                <div className="relative z-10">
                                    <h1 className="text-5xl font-black mb-4 text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-indigo-600 to-blue-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 leading-tight font-serif whitespace-nowrap">
                                        <TypingAnimation
                                            text="Educational Journey"
                                            speed={150}
                                            backspaceSpeed={75}
                                            pauseTime={3000}
                                            className="text-transparent bg-clip-text bg-gradient-to-r from-gray-800 via-indigo-600 to-blue-600 dark:from-white dark:via-indigo-400 dark:to-blue-400 font-black font-serif"
                                        />
                                    </h1>
                                    <div className="flex items-center mb-8">
                                        <div className="w-2 h-2 bg-indigo-500 rounded-full mr-3 animate-pulse"></div>
                                        <h2 className="text-2xl text-gray-600 dark:text-gray-300 font-medium tracking-wide italic">
                                            B.Tech ETC - {educationData[0].percentage}
                                        </h2>
                                    </div>

                                    <div className="space-y-6 text-gray-700 dark:text-gray-300 leading-relaxed">
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-indigo-500 to-transparent rounded-full"></span>
                                            Completed Bachelor's in Electronics and Telecommunication Engineering with focus on electronics, telecommunication, and software development.
                                        </p>
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></span>
                                            Completed Higher Secondary education from Rajdhani college and Matriculation from Prabhujee English Medium School with distinction in Science and General Studies.
                                        </p>
                                        <p className="text-lg relative italic">
                                            <span className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-blue-500 to-transparent rounded-full"></span>
                                            Completed Primary education from Guru nanak public school with distinction in General Studies.
                                        </p>
                                    </div>

                                    {/* View Details Button */}
                                    <div className="mt-8">
                                        <button
                                            onClick={handleExpand}
                                            className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden"
                                        >
                                            <span className="relative z-10">View Academic Details</span>
                                            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
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

                        {/* Right Timeline Preview */}
                        <div className="flex-shrink-0">
                            <div className="relative">
                                {/* Mini Timeline */}
                                <div className="w-80 space-y-6">
                                    {educationData.slice(0, 4).map((education, index) => (
                                        <div key={education.id} className="group relative flex items-center gap-4">
                                            {/* Timeline Dot */}
                                            <div className="relative z-10 flex-shrink-0">
                                                <div className={`w-16 h-16 bg-gradient-to-br ${education.color} rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                    <FontAwesomeIcon icon={education.icon} className="text-2xl text-white" />
                                                </div>
                                                {/* Pulse effect */}
                                                <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-br ${education.color} rounded-full animate-ping opacity-0 group-hover:opacity-30`}></div>
                                            </div>

                                            {/* Education Info */}
                                            <div className="flex-1">
                                                <h3 className="text-lg font-bold text-indigo-300 group-hover:text-indigo-200 transition-colors duration-300">
                                                    {education.level}
                                                </h3>
                                                <p className="text-sm text-gray-400 flex items-center gap-2">
                                                    <FontAwesomeIcon icon={faCalendarAlt} className="text-indigo-400" />
                                                    {education.duration}
                                                </p>
                                                <p className="text-md font-bold text-white-500 mt-1">
                                                    {education.percentage}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    // Expanded Education View
                    <div className="w-full h-full flex flex-col relative z-30">
                        {/* Header with Close Button */}
                        <div className="flex justify-between items-center px-4 py-2 mb-4">
                            <h2 className="text-3xl font-bold text-white">Educational Journey</h2>
                            <button
                                onClick={handleClose}
                                className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-all duration-200 backdrop-blur-sm border border-white/20 hover:scale-110"
                            >
                                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Scrollable Content */}
                        <div className="flex-1 overflow-y-auto pr-2 scrollbar-hide">
                            <div className="relative education-timeline max-w-4xl mx-auto">
                                {educationData.map((education, index) => (
                                    <div key={education.id} className="group relative mb-12">
                                        {/* Education Card */}
                                        <div
                                            className={`relative ${education.bgColor} backdrop-blur-sm border ${education.borderColor} rounded-2xl p-8 hover:bg-white/10 hover:border-white/20 transition-all duration-500 hover:shadow-xl hover:shadow-indigo-500/10 education-card`}
                                        >
                                            {/* Background decoration */}
                                            <div className={`absolute inset-0 bg-gradient-to-r ${education.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-all duration-500 -z-10`}></div>

                                            {/* Card Content */}
                                            <div className="relative z-10">
                                                {/* Header */}
                                                <div className="flex items-start justify-between mb-6">
                                                    <div className="flex items-center gap-4">
                                                        <div className={`w-16 h-16 bg-gradient-to-br ${education.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                                                            <FontAwesomeIcon icon={education.icon} className="text-2xl text-white" />
                                                        </div>
                                                        <div>
                                                            <h3 className={`text-2xl font-bold ${education.textColor} group-hover:text-white transition-colors duration-300`}>
                                                                {education.level}
                                                            </h3>
                                                            <p className="text-lg text-gray-300 font-medium">
                                                                {education.degree} • {education.field}
                                                            </p>
                                                        </div>
                                                    </div>
                                                    <div className="text-right">
                                                        <div className={`text-3xl font-bold ${education.textColor} group-hover:text-white transition-colors duration-300`}>
                                                            {education.percentage}
                                                        </div>
                                                        <div className="text-sm text-gray-400">
                                                            Grade: {education.grade}
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* School and Board Info */}
                                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                                                    <div className="flex items-center gap-3">
                                                        <FontAwesomeIcon icon={faGraduationCap} className={`${education.textColor} text-lg`} />
                                                        <div>
                                                            <p className="text-gray-300 font-medium">{education.school}</p>
                                                            <p className="text-sm text-gray-400">{education.board}</p>
                                                        </div>
                                                    </div>
                                                    <div className="flex items-center gap-3">
                                                        <FontAwesomeIcon icon={faMapMarkerAlt} className={`${education.textColor} text-lg`} />
                                                        <div>
                                                            <p className="text-gray-300 font-medium">{education.location}</p>
                                                            <p className="text-sm text-gray-400">{education.language}</p>
                                                        </div>
                                                    </div>
                                                </div>

                                                {/* Duration and Completion */}
                                                <div className="flex items-center gap-6 mb-6">
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faClock} className={`${education.textColor}`} />
                                                        <span className="text-gray-300">{education.duration}</span>
                                                    </div>
                                                    <div className="flex items-center gap-2">
                                                        <FontAwesomeIcon icon={faCalendarAlt} className={`${education.textColor}`} />
                                                        <span className="text-gray-300">Completed: {education.completionYear}</span>
                                                    </div>
                                                </div>

                                                {/* Description */}
                                                <div className="mb-6">
                                                    <p className="text-gray-300 text-lg leading-relaxed group-hover:text-gray-200 transition-colors duration-300">
                                                        {education.description}
                                                    </p>
                                                </div>

                                                {/* Subjects */}
                                                <div>
                                                    <h4 className={`text-lg font-semibold ${education.textColor} mb-3 group-hover:text-white transition-colors duration-300`}>
                                                        Key Subjects
                                                    </h4>
                                                    <div className="flex flex-wrap gap-2">
                                                        {education.subjects.map((subject, subjectIndex) => (
                                                            <span
                                                                key={subjectIndex}
                                                                className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 group-hover:bg-white/20 transition-all duration-300"
                                                            >
                                                                {subject}
                                                            </span>
                                                        ))}
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

export default Education;
