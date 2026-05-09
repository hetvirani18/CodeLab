import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame } from 'lucide-react';


function Particle({ x, y, color, size, duration, delay }) {
    return (
        <motion.div
            className="absolute rounded-full pointer-events-none"
            style={{
                left: x,
                top: y,
                width: size,
                height: size,
                background: color,
            }}
            initial={{
                opacity: 1,
                scale: 1,
                x: 0,
                y: 0,
            }}
            animate={{
                opacity: [1, 1, 0],
                scale: [1, 1.15, 0.4],
                x: (Math.random() - 0.5) * 140,
                y: -(Math.random() * 120 + 50),
            }}
            transition={{
                duration,
                delay,
                ease: 'easeOut',
            }}
        />
    );
}


function ConfettiBurst() {
    const particles = Array.from({ length: 16 }, (_, i) => ({
        id: i,
        x: `${Math.random() * 100}%`,
        y: `${Math.random() * 60 + 20}%`,
        color: [
            '#00e676',
            '#4ade80',
            '#fb923c',
            '#facc15',
        ][i % 4],
        size: Math.random() * 7 + 4,
        duration: Math.random() * 0.8 + 0.8,
        delay: Math.random() * 0.25,
    }));

    return (
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
            {particles.map((p) => (
                <Particle key={p.id} {...p} />
            ))}
        </div>
    );
}


function PulseRing({ color, delay }) {
    return (
        <motion.div
            className="absolute inset-0 rounded-full border-2 pointer-events-none"
            style={{
                borderColor: color,
            }}
            initial={{
                scale: 0.8,
                opacity: 0.8,
            }}
            animate={{
                scale: 1.65,
                opacity: 0,
            }}
            transition={{
                duration: 1.4,
                delay,
                repeat: Infinity,
                repeatDelay: 0.4,
                ease: 'easeOut',
            }}
        />
    );
}


export default function StreakCelebration({
    streak = 1,
    show,
    onClose,
}) {
    const [burst, setBurst] = useState(false);

    useEffect(() => {
        if (show) {
            setBurst(false);

            const burstTimer = setTimeout(() => {
                setBurst(true);
            }, 250);

            const closeTimer = setTimeout(() => {
                onClose?.();
            }, 4500);

            return () => {
                clearTimeout(burstTimer);
                clearTimeout(closeTimer);
            };
        }
    }, [show, onClose]);

    const isFirstDay = streak === 1;
    const isMilestone = streak % 10 === 0;

    const title = isFirstDay
        ? 'Streak started!'
        : isMilestone
            ? `${streak} day milestone!`
            : 'Streak extended!';

    const subtitle = isFirstDay
        ? 'Solve a problem tomorrow to keep the streak alive.'
        : `You've solved problems ${streak} days in a row. Keep pushing forward.`;

    return (
        <AnimatePresence>
            {show && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/40 backdrop-blur-[3px]"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    />

                    {/* Modal */}
                    <motion.div
                        className="fixed left-1/2 top-1/2 z-50 w-full max-w-sm
                       -translate-x-1/2 -translate-y-1/2 px-4"
                        initial={{
                            opacity: 0,
                            scale: 0.75,
                            y: 50,
                        }}
                        animate={{
                            opacity: 1,
                            scale: 1,
                            y: 0,
                        }}
                        exit={{
                            opacity: 0,
                            scale: 0.85,
                            y: 20,
                        }}
                        transition={{
                            type: 'spring',
                            stiffness: 300,
                            damping: 24,
                        }}
                    >
                        <div
                            className="relative overflow-hidden rounded-3xl border p-8 text-center"
                            style={{
                                background: 'rgba(15,17,23,0.94)',
                                borderColor: 'rgba(251,146,60,0.18)',
                                boxShadow:
                                    '0 0 80px rgba(251,146,60,0.12), 0 25px 80px rgba(0,0,0,0.7)',
                            }}
                        >
                            {/* Background glow */}
                            <div className="absolute inset-0 overflow-hidden">
                                <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-orange-500/10 blur-3xl" />
                            </div>

                            {/* Top accent line */}
                            <div
                                className="absolute left-1/2 top-0 h-px w-44 -translate-x-1/2 rounded-full"
                                style={{
                                    background:
                                        'linear-gradient(90deg, transparent, rgba(251,146,60,0.7), transparent)',
                                }}
                            />

                            {/* Confetti */}
                            {burst && <ConfettiBurst />}

                            {/* Flame */}
                            <div className="relative mx-auto mb-5 h-24 w-24">
                                <motion.div
                                    className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full"
                                    style={{
                                        background: 'rgba(251,146,60,0.12)',
                                        border: '2px solid rgba(251,146,60,0.24)',
                                    }}
                                    animate={{
                                        scale: [1, 1.08, 1],
                                        rotate: [0, -2, 2, 0],
                                    }}
                                    transition={{
                                        duration: 1.8,
                                        repeat: Infinity,
                                        ease: 'easeInOut',
                                    }}
                                >
                                    <Flame className="h-11 w-11 text-orange-400" />
                                </motion.div>

                                <PulseRing
                                    color="rgba(251,146,60,0.45)"
                                    delay={0}
                                />

                                <PulseRing
                                    color="rgba(251,146,60,0.25)"
                                    delay={0.5}
                                />
                            </div>

                            {/* Streak number */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    scale: 0.5,
                                }}
                                animate={{
                                    opacity: 1,
                                    scale: 1,
                                }}
                                transition={{
                                    delay: 0.15,
                                    type: 'spring',
                                    stiffness: 280,
                                    damping: 18,
                                }}
                            >
                                <div className="font-mono text-7xl font-bold leading-none text-orange-400">
                                    {streak}
                                </div>

                                <div className="mb-5 mt-2 font-mono text-[11px] uppercase tracking-[0.35em] text-base-content/30">
                                    day streak
                                </div>
                            </motion.div>

                            {/* Text */}
                            <motion.div
                                initial={{
                                    opacity: 0,
                                    y: 10,
                                }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                }}
                                transition={{
                                    delay: 0.25,
                                }}
                            >
                                <h3 className="mb-2 text-xl font-bold">
                                    {title}
                                </h3>

                                <p className="mx-auto max-w-xs text-sm leading-relaxed text-base-content/50">
                                    {subtitle}
                                </p>
                            </motion.div>

                            {/* Milestone */}
                            {isMilestone && (
                                <motion.div
                                    initial={{
                                        opacity: 0,
                                        scale: 0.8,
                                    }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                    }}
                                    transition={{
                                        delay: 0.45,
                                    }}
                                    className="mt-4"
                                >
                                    <div
                                        className="inline-flex items-center gap-2 rounded-full border px-4 py-2
                               font-mono text-[11px] uppercase tracking-widest"
                                        style={{
                                            background: 'rgba(251,146,60,0.08)',
                                            borderColor: 'rgba(251,146,60,0.18)',
                                            color: '#fb923c',
                                        }}
                                    >
                                        STREAK CORE UNLOCKED
                                    </div>
                                </motion.div>
                            )}

                            {/* Button */}
                            <motion.button
                                initial={{
                                    opacity: 0,
                                }}
                                animate={{
                                    opacity: 1,
                                }}
                                transition={{
                                    delay: 0.55,
                                }}
                                onClick={onClose}
                                className="btn btn-sm mt-6 w-full border border-white/5
                           bg-white/3 font-mono text-xs
                           text-base-content/60 transition-all
                           hover:bg-white/6"
                            >
                                Keep grinding →
                            </motion.button>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}