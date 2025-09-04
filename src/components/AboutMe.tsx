import AnimatedCodeBackground from './AnimatedCodeBackground';
import MobileBottomNav from './MobileBottomNav';
import TypingAnimation from './TypingAnimation';

const AboutMe = () => {
    return (
        <section id="about" className="h-[80vh] bg-white/10 dark:bg-gray-900/20 backdrop-blur-[10px] flex items-center justify-center p-8 rounded-2xl shadow-2xl border border-white/30 dark:border-gray-700/50 relative overflow-hidden">
            <AnimatedCodeBackground />

            {/* Frosted glass background overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50/20 to-indigo-100/20 dark:from-gray-900/30 dark:to-blue-900/30 backdrop-blur-[10px] z-10"></div>
            <div className="absolute inset-0 bg-white/5 dark:bg-white/5 backdrop-blur-md z-20"></div>
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
                                <button className="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-semibold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-300 overflow-hidden">
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
                                        <p className="text-gray-600 dark:text-gray-300 text-xl font-semibold">Brutal Jha</p>
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
        </section>
    );
};


export default AboutMe;