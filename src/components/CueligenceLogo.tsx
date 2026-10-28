import React from 'react';

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: number;
}

export const CueligenceLogo: React.FC<LogoProps> = ({ 
  className = '', 
  showText = true, 
  size = 36 
}) => {
  return (
    <div className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg 
        width={size} 
        height={size} 
        viewBox="0 0 48 48" 
        fill="none" 
        aria-hidden="true"
        className="flex-shrink-0 transition-transform duration-300 hover:scale-105"
      >
        <defs>
          <linearGradient id="cue-grad-primary" x1="4" y1="4" x2="44" y2="44" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#06B6D4" />
            <stop offset="50%" stopColor="#3B82F6" />
            <stop offset="100%" stopColor="#1D4ED8" />
          </linearGradient>
          <linearGradient id="cue-grad-accent" x1="20" y1="12" x2="44" y2="28" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#38BDF8" />
            <stop offset="100%" stopColor="#6366F1" />
          </linearGradient>
          <filter id="cue-node-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="1.5" result="blur" />
            <feComposite in="SourceGraphic" in2="blur" operator="over" />
          </filter>
        </defs>

        {/* Outer Arc (The 'C') */}
        <path 
          d="M 35 10 C 31 6.5 25.5 4.5 19.5 4.5 C 8.7 4.5 0 13.2 0 24 C 0 34.8 8.7 43.5 19.5 43.5 C 26 43.5 31.8 40.5 35.5 35" 
          transform="translate(4, 0)"
          stroke="url(#cue-grad-primary)" 
          strokeWidth="5" 
          strokeLinecap="round" 
        />

        {/* Inner Synapse Wave (The 'Cue') */}
        <path 
          d="M 18 16 C 13.8 16 10.5 19.4 10.5 23.5 C 10.5 27.6 13.8 31 18 31 C 21.2 31 24 28.8 25 25.8" 
          transform="translate(4, 0)"
          stroke="url(#cue-grad-accent)" 
          strokeWidth="3.5" 
          strokeLinecap="round" 
        />

        {/* Neural Pulse Node */}
        <circle cx="33" cy="23.5" r="4" fill="#06B6D4" filter="url(#cue-node-glow)" />
        <circle cx="33" cy="23.5" r="1.8" fill="#FFFFFF" />
      </svg>

      {showText && (
        <span className="font-extrabold text-xl tracking-tight text-gray-900 dark:text-white flex items-center">
          Cue<span className="bg-gradient-to-r from-blue-600 to-cyan-500 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">ligence</span>
        </span>
      )}
    </div>
  );
};

export default CueligenceLogo;
