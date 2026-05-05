import { motion, useInView } from "motion/react";
import { useRef } from "react";

const SOCIALS = [
  {
    label: "GitHub",
    href: "https://github.com/hetvirani18",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/hetvirani18",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/hetvirani-gec-ldce-it-dte/",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function Footer() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  return (
    <footer className="relative bg-base-300 border-t border-base-content/[0.07] overflow-hidden">

      {/* Top green gradient line */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-75 h-px pointer-events-none"
        style={{ background: "linear-gradient(90deg, transparent, rgba(0,230,118,0.4), transparent)" }}
      />

      {/* Subtle bottom glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-125 h-37.5 blur-[100px] pointer-events-none"
        style={{ background: "rgba(0,230,118,0.04)" }}
      />

      <div
        ref={ref}
        className="max-w-7xl mx-auto px-6 lg:px-16 py-10 relative z-10
                   flex flex-col sm:flex-row items-center justify-between gap-6"
      >

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="font-mono text-xl font-bold"
        >
          code<span className="text-green-400">Lab</span>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-mono text-xs text-base-content/25 text-center"
        >
          © {new Date().getFullYear()} codeLab. Built for developers.
        </motion.p>

        {/* Right: Status + Socials */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="flex items-center gap-4"
        >

          {/* All systems operational */}
          <div className="hidden sm:flex items-center gap-1.5 font-mono text-xs text-base-content/25">
            <span className="relative flex h-1.5 w-1.5">
              <span
                className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-60"
                style={{ background: "var(--green)" }}
              />
              <span
                className="relative inline-flex rounded-full h-1.5 w-1.5"
                style={{ background: "var(--green)" }}
              />
            </span>
            All systems operational
          </div>

          <div className="w-px h-4 bg-base-content/10 hidden sm:block" />

          {/* Social icons */}
          <div className="flex items-center gap-2">
            {SOCIALS.map((s, i) => (
              <motion.a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                title={s.label}
                initial={{ opacity: 0, scale: 0.7 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.2 }}
                whileHover={{ scale: 1.15, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="w-8 h-8 rounded-lg bg-base-200 border border-base-content/8
                           flex items-center justify-center text-base-content/35
                           hover:text-green-400 hover:border-green-500/30
                           transition-colors duration-200"
              >
                {s.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>

      </div>
    </footer>
  );
}