//!PERFORMANCE VERSION
"use client";
import React, { useState, useEffect, useRef, FC } from 'react';
import styles from '@/styles/StarryNight.module.css';

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    opacity: number;
    blinkSpeed: number;
    glowIntensity: number;
    hue: number;
    floatSpeedX: number;
    floatSpeedY: number;
    floatRange: number;
}

interface StarryNightProps {
    starCount?: number;
    blinkSpeed?: number;
    glowIntensity?: number;
    hueShift?: number;
    floatSpeedX?: number;
    floatSpeedY?: number;
    size?: number;
    opacity?: number;
}

const StarryNight: FC<StarryNightProps> = ({
    starCount = 150,
    blinkSpeed = 1.5,
    glowIntensity = 0.5,
    hueShift = 200,
    floatSpeedX = 10.0,
    floatSpeedY = 10.0,
    size = 2,
    opacity = 0.2
}) => {
    const [stars, setStars] = useState<Star[]>([]);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const generateStars = () => {
            const starArray: Star[] = [];
            const numStars = starCount;

            for (let i = 0; i < numStars; i++) {
                starArray.push({
                    id: i,
                    x: Math.random() * 100,
                    y: Math.random() * 100,
                    size: Math.random() * 8 + size,
                    opacity: Math.random() * 0.8 + opacity,
                    blinkSpeed: Math.random() * 2 + blinkSpeed,
                    glowIntensity: Math.random() * 0.5 + glowIntensity,
                    hue: Math.random() * 60 + hueShift,
                    floatSpeedX: (Math.random() - 0.5) * floatSpeedX,
                    floatSpeedY: (Math.random() - 0.5) * floatSpeedY,
                    floatRange: Math.random() * 20 + 15,
                });
            }
            setStars(starArray);
        };

        generateStars();
    }, [starCount, blinkSpeed, glowIntensity, hueShift, floatSpeedX, floatSpeedY, size, opacity]);

    return (
        <div
            ref={containerRef}
            className="relative w-full h-full bg-black overflow-hidden"
        >
            {stars.map((star) => {
                const floatX = star.floatSpeedX * star.floatRange;
                const floatY = star.floatSpeedY * star.floatRange;

                return (
                    <div
                        key={star.id}
                        className={`${styles.star} absolute rounded-full transition-all duration-300 ease-out`}
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            backgroundColor: `hsl(${star.hue}, 80%, 70%)`,
                            opacity: star.opacity,
                            boxShadow: `
                                0 0 ${10 * star.glowIntensity}px hsl(${star.hue}, 80%, 70%),
                                0 0 ${20 * star.glowIntensity}px hsl(${star.hue}, 60%, 50%),
                                0 0 ${30 * star.glowIntensity}px hsl(${star.hue}, 40%, 30%)
                            `,
                            '--animation-blink-speed': `${star.blinkSpeed}s`,
                            '--animation-twinkle-speed': `${star.blinkSpeed * 1.5}s`,
                            '--animation-float-speed': `${6 + star.id * 0.1}s`,
                            '--float-x-range': `${floatX}px`,
                            '--float-y-range': `${floatY}px`,
                            '--star-opacity': `${star.opacity}`,
                            '--glow-intensity': `${star.glowIntensity}`,
                            '--star-hue': `${star.hue}`,
                        } as React.CSSProperties}
                    />
                );
            })}
            <div className="absolute text-white/70 text-sm"></div>
        </div>
    );
};

export default StarryNight;

//!BEAUTY VERSION
// "use client";
// import React, { useState, useEffect, useRef, FC } from 'react';

// interface Star {
//     id: number;
//     x: number;
//     y: number;
//     size: number;
//     opacity: number;
//     blinkSpeed: number;
//     glowIntensity: number;
//     hue: number;
//     floatSpeedX: number;
//     floatSpeedY: number;
//     floatRange: number;
// }

// interface StarryNightProps {
//     starCount?: number;
//     blinkSpeed?: number;
//     glowIntensity?: number;
//     hueShift?: number;
//     floatSpeedX?: number;
//     floatSpeedY?: number;
//     size?: number;
//     opacity?: number;
// }

// const StarryNight: FC<StarryNightProps> = ({
//     starCount = 150,
//     blinkSpeed = 0.9,
//     glowIntensity = 0.5,
//     hueShift = 200,
//     floatSpeedX = 1.2,
//     floatSpeedY = 1.0,
//     size = 2,
//     opacity = 0.2
// }) => {
//     const [stars, setStars] = useState<Star[]>([]);
//     const [dynamicCss, setDynamicCss] = useState<string>('');
//     const containerRef = useRef<HTMLDivElement>(null);

//     useEffect(() => {
//         const generateStars = () => {
//             const starArray: Star[] = [];
//             const numStars = starCount;

//             for (let i = 0; i < numStars; i++) {
//                 starArray.push({
//                     id: i,
//                     x: Math.random() * 100,
//                     y: Math.random() * 100,
//                     size: Math.random() * 8 + size,
//                     opacity: Math.random() * 0.8 + opacity,
//                     blinkSpeed: Math.random() * 2 + blinkSpeed,
//                     glowIntensity: Math.random() * 0.5 + glowIntensity,
//                     hue: Math.random() * 60 + hueShift,
//                     floatSpeedX: (Math.random() - 0.5) * floatSpeedX,
//                     floatSpeedY: (Math.random() - 0.5) * floatSpeedY,
//                     floatRange: Math.random() * 20 + 15,
//                 });
//             }
//             setStars(starArray);
//         };

//         generateStars();
//     }, [starCount, blinkSpeed, glowIntensity, hueShift, floatSpeedX, floatSpeedY, size, opacity]);

//     useEffect(() => {
//         const newCss = stars.map(star => `
//             @keyframes blink-${star.id} {
//                 0% { opacity: ${star.opacity * 0.1}; transform: translate(-50%, -50%) scale(0.5); }
//                 50% { opacity: ${Math.min(1, star.opacity * 1.5)}; transform: translate(-50%, -50%) scale(1.2); }
//                 100% { opacity: ${star.opacity * 0.2}; transform: translate(-50%, -50%) scale(0.8); }
//             }
//             @keyframes twinkle-${star.id} {
//                 0%, 100% {
//                     box-shadow:
//                         0 0 ${5 * star.glowIntensity}px hsl(${star.hue}, 80%, 70%),
//                         0 0 ${10 * star.glowIntensity}px hsl(${star.hue}, 60%, 50%);
//                 }
//                 25% {
//                     box-shadow:
//                         0 0 ${15 * star.glowIntensity}px hsl(${star.hue}, 90%, 80%),
//                         0 0 ${25 * star.glowIntensity}px hsl(${star.hue}, 70%, 60%),
//                         0 0 ${35 * star.glowIntensity}px hsl(${star.hue}, 50%, 40%);
//                 }
//                 75% {
//                     box-shadow:
//                         0 0 ${8 * star.glowIntensity}px hsl(${star.hue}, 85%, 75%),
//                         0 0 ${18 * star.glowIntensity}px hsl(${star.hue}, 65%, 55%);
//                 }
//             }
//             @keyframes float-${star.id} {
//                 0% {
//                     left: ${star.x}%;
//                     top: ${star.y}%;
//                 }
//                 50% {
//                     left: ${Math.max(0, Math.min(100, star.x + star.floatSpeedX * star.floatRange))}%;
//                     top: ${Math.max(0, Math.min(100, star.y + star.floatSpeedY * star.floatRange))}%;
//                 }
//                 100% {
//                     left: ${Math.max(0, Math.min(100, star.x + star.floatSpeedX * star.floatRange * 0.3))}%;
//                     top: ${Math.max(0, Math.min(100, star.y + star.floatSpeedY * star.floatRange * 0.3))}%;
//                 }
//             }
//         `).join('');
//         setDynamicCss(newCss);
//     }, [stars]);

//     return (
//         <div
//             ref={containerRef}
//             className="relative w-full h-full bg-black overflow-hidden"
//         >
//             {/* Stars */}
//             {stars.map((star) => {
//                 return (
//                     <div
//                         key={star.id}
//                         className="absolute rounded-full transition-all duration-300 ease-out"
//                         style={{
//                             left: `${star.x}%`,
//                             top: `${star.y}%`,
//                             width: `${star.size}px`,
//                             height: `${star.size}px`,
//                             backgroundColor: `hsl(${star.hue}, 80%, 70%)`,
//                             boxShadow: `
//                                 0 0 ${10 * star.glowIntensity}px hsl(${star.hue}, 80%, 70%),
//                                 0 0 ${20 * star.glowIntensity}px hsl(${star.hue}, 60%, 50%),
//                                 0 0 ${30 * star.glowIntensity}px hsl(${star.hue}, 40%, 30%)
//                             `,
//                             opacity: star.opacity,
//                             animation: `
//                                 blink-${star.id} ${star.blinkSpeed}s ease-in-out infinite alternate,
//                                 twinkle-${star.id} ${star.blinkSpeed * 1.5}s linear infinite,
//                                 float-${star.id} ${6 + star.id * 0.1}s ease-in-out infinite alternate
//                             `,
//                             transform: `translate(-50%, -50%)`,
//                         }}
//                     />
//                 );
//             })}

//             <style dangerouslySetInnerHTML={{ __html: dynamicCss }} />

//             <div className="absolute top-0 left-0 text-sm"></div>
//         </div>
//     );
// };

// export default StarryNight;