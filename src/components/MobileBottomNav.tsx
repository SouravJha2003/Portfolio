'use client';

interface MobileBottomNavProps {
    className?: string;
}

const MobileBottomNav = ({ className = '' }: MobileBottomNavProps) => {
    const handleBackClick = () => {
        // Button click animation only, no state change
    };

    const handleHomeClick = () => {
        // Button click animation only, no state change
    };

    const handleRecentClick = () => {
        // Button click animation only, no state change
    };

    return (
        <div className={`${className}`} style={{ backgroundColor: 'transparent' }}>
            <div className="flex justify-around items-center py-1.5 px-1">
                {/* Back Button */}
                <button
                    onClick={handleBackClick}
                    className="flex items-center justify-center p-1 rounded-md transition-all duration-200 transform active:scale-90 active:rotate-3 text-gray-500 dark:text-gray-400"
                >
                    <svg
                        className="w-3 h-3"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                </button>

                {/* Home Button */}
                <button
                    onClick={handleHomeClick}
                    className="flex items-center justify-center p-1 rounded-md transition-all duration-200 transform active:scale-90 active:rotate-3 text-gray-500 dark:text-gray-400"
                >
                    <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                    </svg>
                </button>

                {/* Recent Apps Button */}
                <button
                    onClick={handleRecentClick}
                    className="flex items-center justify-center p-1 rounded-md transition-all duration-200 transform active:scale-90 active:rotate-3 text-gray-500 dark:text-gray-400"
                >
                    <svg
                        className="w-3 h-3"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z" />
                    </svg>
                </button>
            </div>
        </div>
    );
};

export default MobileBottomNav;