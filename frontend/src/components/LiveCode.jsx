import { NavLink } from 'react-router';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';


const CODE_STRING =
`function twoSum(nums, target) {
  const map = new Map();
  for (let i = 0; i < nums.length; i++) {
    const diff = target - nums[i];
    if (map.has(diff)) {
      return [map.get(diff), i];
    }
    map.set(nums[i], i);
  }
}`;

const CHARS_PER_SEC = 26;

// Tokenise the full string for syntax colouring
function tokenise(code) {
  const spans = [];
  let i = 0;
  code = code.replace(/\t/g, '  '); // or '    '
  while (i < code.length) {
    const slice = code.slice(i);
    const kw = slice.match(/^(function|const|let|var|for|if|return|new)\b/);
    if (kw) { spans.push({ v: kw[0], c: '#ff79c6' }); i += kw[0].length; continue; }
    const fn = slice.match(/^(Map|has|get|set|twoSum)\b/);
    if (fn) { spans.push({ v: fn[0], c: '#50fa7b' }); i += fn[0].length; continue; }
    const num = slice.match(/^\d+/);
    if (num) { spans.push({ v: num[0], c: '#bd93f9' }); i += num[0].length; continue; }
    spans.push({ v: code[i], c: 'rgba(230,237,243,0.6)' });
    i++;
  }
  return spans;
}

const ALL_SPANS   = tokenise(CODE_STRING);
const TOTAL_CHARS = CODE_STRING.length;

// Slice ALL_SPANS to `n` visible characters
function spansUpTo(n) {
  const out = [];
  let left = n;
  for (const span of ALL_SPANS) {
    if (left <= 0) break;
    if (left >= span.v.length) { out.push(span); left -= span.v.length; }
    else { out.push({ v: span.v.slice(0, left), c: span.c }); left = 0; }
  }
  return out;
}

// Convert flat spans → array-of-lines (split on \n chars)
function spansToLines(spans) {
  const lines = [[]];
  for (const span of spans) {
    const parts = span.v.split('\n');
    parts.forEach((part, idx) => {
      if (idx > 0) lines.push([]);
      if (part.length) lines[lines.length - 1].push({ v: part, c: span.c });
    });
  }
  return lines;
}

function useLiveCoding() {
  const [chars, setChars] = useState(0);
  // phases: 'typing' | 'running' | 'accepted' | 'reset'
  const [phase, setPhase] = useState('typing');

  useEffect(() => {
    if (phase !== 'typing') return;
    if (chars >= TOTAL_CHARS) { setTimeout(() => setPhase('running'), 500); return; }
    const ms = 1000 / CHARS_PER_SEC + (Math.random() * 18 - 9);
    const t = setTimeout(() => setChars(c => c + 1), ms);
    return () => clearTimeout(t);
  }, [chars, phase]);

  useEffect(() => {
    if (phase === 'running') { const t = setTimeout(() => setPhase('accepted'), 1400); return () => clearTimeout(t); }
    if (phase === 'accepted') { const t = setTimeout(() => setPhase('reset'), 3500); return () => clearTimeout(t); }
    if (phase === 'reset')    { const t = setTimeout(() => { setChars(0); setPhase('typing'); }, 1000); return () => clearTimeout(t); }
  }, [phase]);

  const lines     = spansToLines(spansUpTo(chars));
  const isTyping   = phase === 'typing';
  const isRunning  = phase === 'running';
  const isAccepted = phase === 'accepted';

  return { lines, isTyping, isRunning, isAccepted };
}

export default function LiveCode() {
  const { lines, isTyping, isRunning, isAccepted } = useLiveCoding();

  return (
    <div className="hidden lg:flex flex-1 flex-col p-12 relative overflow-hidden border-r border-base-content/[0.07]">

      {/* Grid */}
      <div className="absolute inset-0 pointer-events-none" style={{
        backgroundImage: `linear-gradient(to right,rgba(255,255,255,0.04) 1px,transparent 1px),linear-gradient(to bottom,rgba(255,255,255,0.04) 1px,transparent 1px)`,
        backgroundSize: '40px 40px',
        WebkitMaskImage: 'radial-gradient(ellipse 90% 90% at 30% 50%,black 20%,transparent 100%)',
        maskImage: 'radial-gradient(ellipse 90% 90% at 30% 50%,black 20%,transparent 100%)',
      }} />

      {/* Ambient glow — pulses on accepted */}
      <motion.div
        className="absolute top-1/2 left-0 -translate-y-1/2 w-120 h-120 blur-[130px] pointer-events-none"
        animate={{ opacity: isAccepted ? 1 : 0.45, scale: isAccepted ? 1.2 : 1 }}
        transition={{ duration: 0.8 }}
        style={{ background: 'rgba(0,230,118,0.08)' }}
      />

      {/* Logo */}
      <NavLink to="/" className="relative z-10 font-mono text-2xl font-bold">
        <span className="text-3xl font-bold">
            code<span className="text-green-400">Lab</span>
          </span>
      </NavLink>

      {/* Code editor card */}
      <div className="relative z-10 mt-50 max-w-200">
        <motion.div
          className="rounded-2xl border overflow-hidden bg-base-200 transition-shadow duration-700"
          animate={{
            borderColor: isAccepted ? 'rgba(0,230,118,0.4)' : 'rgba(255,255,255,0.08)',
            boxShadow:   isAccepted ? '0 0 55px rgba(0,230,118,0.18)' : '0 0 30px rgba(0,0,0,0.3)',
          }}
          transition={{ duration: 0.6 }}
        >
          {/* Title bar */}
          <div className="flex items-center gap-1.5 px-4 py-3 bg-base-300 border-b border-base-content/8">
            <span className="w-3 h-3 rounded-full bg-error   opacity-70" />
            <span className="w-3 h-3 rounded-full bg-warning opacity-70" />
            <span className="w-3 h-3 rounded-full bg-success opacity-70" />
            <span className="font-mono text-xs text-base-content/30 ml-2">Two Sum</span>
            <div className="ml-auto min-w-20 text-right">
              {isRunning && (
                <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                  className="inline-flex items-center gap-1.5 font-mono text-xs text-base-content/40">
                  <span className="loading loading-spinner loading-xs" />Running…
                </motion.span>
              )}
              {isAccepted && (
                <motion.span
                  initial={{ opacity: 0, scale: 0.75 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ type: 'spring', stiffness: 320, damping: 18 }}
                  className="font-mono text-xs font-bold"
                  style={{ color: 'var(--green)' }}
                >
                  ✓ Accepted
                </motion.span>
              )}
            </div>
          </div>

          {/* Code body */}
          <div className="p-5 text-[13px] leading-[1.8] min-h-57.5 font-mono tabular-nums">
            {lines.map((line, li) => (
              <div key={li} className="flex">
                {/* Line number */}
                <span className="select-none w-5 shrink-0 text-right mr-4 text-base-content/20 text-xs leading-[1.8]">
                  {li + 1}
                </span>
                <span className="whitespace-pre overflow-x-auto">
                  {line.map((tok, ti) => (
                    <span key={ti} style={{ color: tok.c }}>{tok.v}</span>
                  ))}
                  {/* Blinking cursor on last line while typing */}
                  {li === lines.length - 1 && isTyping && (
                    <motion.span
                      animate={{ opacity: [1, 0, 1] }}
                      transition={{ duration: 0.75, repeat: Infinity }}
                      className="inline-block w-0.5 h-3.25 rounded-sm ml-px self-center"
                      style={{ background: 'var(--green)' }}
                    />
                  )}
                </span>
              </div>
            ))}
          </div>

          {/* Stats footer — slides up on accepted */}
          <motion.div
            animate={{ opacity: isAccepted ? 1 : 0, y: isAccepted ? 0 : 8 }}
            transition={{ duration: 0.45, delay: 0.1 }}
            className="flex gap-5 items-center px-5 py-3 bg-base-300 border-t border-base-content/8 font-mono text-xs"
          >
            <span className="text-base-content/40">Runtime: <span className="font-semibold" style={{ color: 'var(--green)' }}>48ms</span></span>
            <span className="text-base-content/40">Memory: <span className="font-semibold" style={{ color: 'var(--green)' }}>42.1 MB</span></span>
            <span className="text-base-content/40">Beats: <span className="font-semibold" style={{ color: 'var(--green)' }}>96.3%</span></span>
            <span className="ml-auto badge badge-success badge-sm badge-outline">Easy</span>
          </motion.div>
        </motion.div>

        {/* Test case pills */}
        <div className="mt-3 flex gap-2">
          {['Case 1', 'Case 2', 'Case 3'].map((c, i) => (
            <motion.div
              key={c}
              animate={{
                background:   isAccepted ? 'rgba(0,230,118,0.08)' : 'rgba(255,255,255,0.03)',
                borderColor:  isAccepted ? 'rgba(0,230,118,0.3)'  : 'rgba(255,255,255,0.07)',
                color:        isAccepted ? '#00e676'               : 'rgba(230,237,243,0.25)',
              }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg border"
            >
              {isAccepted ? '✓' : '○'} {c}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}