export default function Logo({ size = 42, className }) {
  return (
    <svg width={size} height={size} viewBox="0 0 42 42" fill="none" className={className}>
      <path
        d="M16 14L10 21L16 28"
        stroke="#00E676"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M26 14L32 21L26 28"
        stroke="#00E676"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <path
        d="M23 12L19 30"
        stroke="white"
        strokeOpacity="0.9"
        strokeWidth="2.2"
        strokeLinecap="round"
      />
    </svg>
  );
}