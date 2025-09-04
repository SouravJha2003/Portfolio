'use client';

import { useEffect, useState } from 'react';

interface TypingAnimationProps {
    text: string;
    speed?: number;
    backspaceSpeed?: number;
    pauseTime?: number;
    className?: string;
}

const TypingAnimation = ({
    text,
    speed = 100,
    backspaceSpeed = 50,
    pauseTime = 2000,
    className = ''
}: TypingAnimationProps) => {
    const [displayedText, setDisplayedText] = useState('');
    const [isTyping, setIsTyping] = useState(true);
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        let timeout: NodeJS.Timeout;

        if (isTyping) {
            // Typing phase
            if (currentIndex < text.length) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev + text[currentIndex]);
                    setCurrentIndex(prev => prev + 1);
                }, speed);
            } else {
                // Finished typing, wait before backspacing
                timeout = setTimeout(() => {
                    setIsTyping(false);
                }, pauseTime);
            }
        } else {
            // Backspacing phase
            if (currentIndex > 0) {
                timeout = setTimeout(() => {
                    setDisplayedText(prev => prev.slice(0, -1));
                    setCurrentIndex(prev => prev - 1);
                }, backspaceSpeed);
            } else {
                // Finished backspacing, start typing again
                timeout = setTimeout(() => {
                    setIsTyping(true);
                }, 500);
            }
        }

        return () => clearTimeout(timeout);
    }, [currentIndex, text, speed, backspaceSpeed, pauseTime, isTyping]);

    return (
        <span className={className}>
            {displayedText}
            <span className="inline-block w-1 h-12 bg-white dark:bg-white animate-pulse ml-1 align-middle"></span>
        </span>
    );
};

export default TypingAnimation;
