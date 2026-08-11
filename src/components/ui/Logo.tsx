import React from 'react';

/** Shield outline with an eye + aperture pupil. */
export function Logo({ className = 'h-9 w-9' }: {className?: string;}) {
  return (
    <svg viewBox="0 0 40 40" className={className} role="img" aria-label="Secure Eye logo">
      <defs>
        <linearGradient id="se-logo-grad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#4f8bff" />
          <stop offset="100%" stopColor="#38d3ee" />
        </linearGradient>
      </defs>
      <path
        d="M20 3.5 34 8.2v11.1c0 8.3-5.6 15.2-14 17.2-8.4-2-14-8.9-14-17.2V8.2L20 3.5Z"
        fill="rgba(46,123,255,0.10)"
        stroke="url(#se-logo-grad)"
        strokeWidth="1.8"
        strokeLinejoin="round" />
      
      <path
        d="M10.5 20.2c3-4.2 6.2-6.3 9.5-6.3s6.5 2.1 9.5 6.3c-3 4.2-6.2 6.3-9.5 6.3s-6.5-2.1-9.5-6.3Z"
        fill="none"
        stroke="url(#se-logo-grad)"
        strokeWidth="1.6" />
      
      <circle cx="20" cy="20.2" r="3.1" fill="url(#se-logo-grad)" />
      <circle cx="20" cy="20.2" r="6" fill="none" stroke="rgba(103,232,249,0.35)" strokeWidth="0.9" strokeDasharray="2 3" />
    </svg>);

}