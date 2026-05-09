import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Flame } from 'lucide-react';

// ─────────────────────────────────────────
// Floating particles
// ─────────────────────────────────────────
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
        scale: [1, 1.1, 0.4],
        x: (Math.random() - 0.5) * 90,
        y: -(Math.random() * 90 + 40),
      }}
      transition={{
        duration,
        delay,
        ease: 'easeOut',
      }}
    />
  );
}

// ─────────────────────────────────────────
// Confetti burst
// ─────────────────────────────────────────
function ConfettiBurst() {
  const particles = Array.from({ length: 10 }, (_, i) => ({
    id: i,
    x: `${Math.random() * 100}%`,
    y: `${Math.random() * 50 + 25}%`,
    color: [
      '#00e676',
      '#4ade80',
      '#22c55e',
      '#34d399',
    ][i % 4],
    size: Math.random() * 6 + 4,
    duration: Math.random() * 0.7 + 0.8,
    delay: Math.random() * 0.2,
  }));

  return (
    <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
      {particles.map((p) => (
        <Particle key={p.id} {...p} />
      ))}
    </div>
  );
}

// ─────────────────────────────────────────
// Pulse ring
// ─────────────────────────────────────────
function PulseRing({ delay }) {
  return (
    <motion.div
      className="absolute inset-0 rounded-full border-2 pointer-events-none"
      style={{
        borderColor: 'rgba(0,230,118,0.25)',
      }}
      initial={{
        scale: 0.8,
        opacity: 0.7,
      }}
      animate={{
        scale: 1.6,
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

// ─────────────────────────────────────────
// Main component
// ─────────────────────────────────────────
export default function StreakCelebration({
  streak = 1,
}) {
  const [burst, setBurst] = useState(false);

  useEffect(() => {
    setBurst(false);

    const timer = setTimeout(() => {
      setBurst(true);
    }, 220);

    return () => clearTimeout(timer);
  }, []);

  const isFirstDay = streak === 1;

  const title = isFirstDay ? 'Daily streak started': 'Daily streak maintained';

  const subtitle = isFirstDay
    ? 'Come back tomorrow to keep the streak alive.'
    : `You've solved problems ${streak} days in a row.`;

  return (
    <AnimatePresence>
      <>
        {/* Backdrop */}
        <motion.div
          className="fixed inset-0 z-50 bg-black/45 backdrop-blur-xs"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        />

        {/* Modal */}
        <motion.div
          className="
            fixed left-1/2 top-1/2 z-50
            w-full max-w-sm
            -translate-x-1/2 -translate-y-1/2
            px-4
          "
          initial={{
            opacity: 0,
            scale: 0.8,
            y: 40,
          }}
          animate={{
            opacity: 1,
            scale: 1,
            y: 0,
          }}
          exit={{
            opacity: 0,
            scale: 0.9,
            y: 20,
          }}
          transition={{
            type: 'spring',
            stiffness: 280,
            damping: 22,
          }}
        >
          <div
            className="
              relative overflow-hidden rounded-3xl
              border border-white/6
              p-8 text-center
            "
            style={{
              background: 'rgba(15,17,23,0.96)',
              boxShadow:
                '0 0 70px rgba(0,230,118,0.08), 0 25px 80px rgba(0,0,0,0.75)',
            }}
          >
            {/* Background glow */}
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute left-1/2 top-0 h-56 w-56 -translate-x-1/2 rounded-full bg-green-500/8 blur-3xl" />
            </div>

            {/* Top glow line */}
            <div
              className="absolute left-1/2 top-0 h-px w-40 -translate-x-1/2"
              style={{
                background:
                  'linear-gradient(90deg, transparent, rgba(0,230,118,0.55), transparent)',
              }}
            />

            {/* Confetti */}
            {burst && <ConfettiBurst />}

            {/* Flame */}
            <div className="relative mx-auto mb-5 h-24 w-24">
              <motion.div
                className="
                  relative z-10
                  flex h-24 w-24 items-center justify-center
                  rounded-full
                "
                style={{
                  background: 'rgba(0,230,118,0.08)',
                  border: '2px solid rgba(0,230,118,0.14)',
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
                <Flame className="h-11 w-11 text-green-400" />
              </motion.div>

              <PulseRing delay={0} />
              <PulseRing delay={0.5} />
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
                delay: 0.12,
                type: 'spring',
                stiffness: 260,
                damping: 18,
              }}
            >
              <div className="font-mono text-7xl font-bold leading-none text-green-400">
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
                y: 8,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.2,
              }}
            >
              <h3 className="mb-2 text-xl font-bold">
                {title}
              </h3>

              <p className="mx-auto max-w-xs text-sm leading-relaxed text-base-content/50">
                {subtitle}
              </p>
            </motion.div>
          </div>
        </motion.div>
      </>
    </AnimatePresence>
  );
}