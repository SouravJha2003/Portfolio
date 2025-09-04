"use client";

import { useEffect, useState } from 'react';

const codeSnippets = [
    { text: '<TouchableOpacity/>', color: 'text-gray-500' },
    { text: 'const [count, setCount] = useState(0);', color: 'text-gray-500' },
    { text: 'useEffect(() => { ... });', color: 'text-gray-500' },
    { text: '<View style={styles.container}>', color: 'text-gray-500' },
    { text: 'import React from "react";', color: 'text-gray-500' },
    { text: '<Text>Hello, World!</Text>', color: 'text-gray-500' },
    { text: 'props.onPress', color: 'text-gray-500' },
    { text: '() => { navigation.navigate("Home") }', color: 'text-gray-500' },
    { text: '{ flex: 1 }', color: 'text-gray-500' },
    { text: 'padding: 16', color: 'text-gray-500' },
    { text: 'margin: 8', color: 'text-gray-500' },
    { text: 'color: "#fff"', color: 'text-gray-500' },
    { text: 'fontSize: 18', color: 'text-gray-500' },
    { text: 'fontWeight: "bold"', color: 'text-gray-500' },
    { text: '<FlatList />', color: 'text-gray-500' },
    { text: 'data={data}', color: 'text-gray-500' },
    { text: 'renderItem={renderItem}', color: 'text-gray-500' },
    { text: 'keyExtractor={item => item.id}', color: 'text-gray-500' },
];

interface CodeSnippetProps {
    snippet: string;
    color: string;
    style: React.CSSProperties;
}

interface SnippetData {
    id: number;
    snippet: string;
    color: string;
    style: React.CSSProperties;
}

const CodeSnippet = ({ snippet, color, style }: CodeSnippetProps) => (
    <pre
        className={`${color}/50 text-xs absolute whitespace-nowrap font-mono`}
        style={{
            ...style,
        }}
    >
        {snippet}
    </pre>
);

const AnimatedCodeBackground = () => {
    const [snippets, setSnippets] = useState<SnippetData[]>([]);

    useEffect(() => {
        const generateSnippets = () => {
            const newSnippets = Array.from({ length: 12 }).map((_, i) => {
                const top = `${Math.random() * 80 + 10}%`;
                const left = `${Math.random() * 80 + 10}%`;
                const animationDuration = `${15 + Math.random() * 10}s`;
                const animationDelay = `${Math.random() * 5}s`;
                const opacity = Math.random() * 0.15 + 0.1;
                const snippetData = codeSnippets[Math.floor(Math.random() * codeSnippets.length)];

                return {
                    id: i,
                    snippet: snippetData.text,
                    color: snippetData.color,
                    style: {
                        top,
                        left,
                        opacity,
                        animation: `moveUp ${animationDuration} linear infinite`,
                        animationDelay,
                        zIndex: 1,
                    },
                };
            });
            console.log('Generated snippets:', newSnippets.length);
            setSnippets(newSnippets);
        };

        generateSnippets();
    }, []);

    console.log('Rendering AnimatedCodeBackground with', snippets.length, 'snippets');

    return (
        <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
            <style>
                {`
                    @keyframes moveUp {
                        0% {
                            transform: translateY(100vh) rotate(15deg);
                            opacity: 0;
                        }
                        10% {
                            opacity: 0.25;
                        }
                        90% {
                            opacity: 0.25;
                        }
                        100% {
                            transform: translateY(-100%) rotate(-15deg);
                            opacity: 0;
                        }
                    }
                `}
            </style>
            {snippets.map(({ id, snippet, color, style }) => (
                <CodeSnippet key={id} snippet={snippet} color={color} style={style} />
            ))}
        </div>
    );
};

export default AnimatedCodeBackground;