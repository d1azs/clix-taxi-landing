/**
 * LvivMiniMap – Stylised SVG mini-map of Lviv.
 * Shows an animated route from Lviv Airport → Hotel Astoria (city centre).
 *
 * Two variants:
 *   variant="light"  – passenger hero (white/grey tones)
 *   variant="dark"   – driver hero   (deep-purple tones)
 */
export default function LvivMiniMap({ variant = 'light' }) {
  const dark = variant === 'dark';

  // Palette
  const bg        = dark ? '#1A1145' : '#F0F0F5';
  const roadColor = dark ? 'rgba(139,124,246,0.18)' : 'rgba(94,72,232,0.12)';
  const roadMain  = dark ? 'rgba(139,124,246,0.30)' : 'rgba(94,72,232,0.22)';
  const water     = dark ? 'rgba(94,72,232,0.15)' : 'rgba(94,72,232,0.08)';
  const parkColor = dark ? 'rgba(16,185,129,0.12)' : 'rgba(16,185,129,0.10)';
  const buildCol  = dark ? 'rgba(139,124,246,0.10)' : 'rgba(94,72,232,0.06)';
  const gridCol   = dark ? 'rgba(94,72,232,0.06)' : 'rgba(94,72,232,0.04)';
  const routeCol  = dark ? '#8B7CF6' : '#5E48E8';
  const routeGlow = dark ? 'rgba(139,124,246,0.5)' : 'rgba(94,72,232,0.35)';
  const pinA      = '#5E48E8';
  const pinB      = '#10B981';
  const labelCol  = dark ? 'rgba(255,255,255,0.55)' : 'rgba(26,26,46,0.45)';
  const carBg     = dark ? '#241B5E' : '#E8E8F0';

  /* Route path: airport (bottom-left) → city centre (upper-right)
     Simplified road network of Lviv in an ~220×200 viewBox */
  const routePath = 'M 30 178 C 38 170, 48 158, 60 148 L 78 130 Q 88 120, 100 112 L 118 100 Q 128 93, 140 88 L 155 80 Q 163 76, 170 70 L 178 60 Q 182 54, 185 48';
  const routeLen = 280; // approximate

  return (
    <div
      className="w-full h-full relative overflow-hidden"
      style={{ background: bg, borderRadius: 'inherit' }}
    >
      <svg
        viewBox="0 0 220 200"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0 w-full h-full"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          {/* Route glow filter */}
          <filter id={`glow-${variant}`} x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="3" result="blur" />
            <feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge>
          </filter>

          {/* Animated dash for route */}
          <style>{`
            @keyframes draw-route {
              0%   { stroke-dashoffset: ${routeLen}; }
              100% { stroke-dashoffset: 0; }
            }
            @keyframes car-along {
              0%   { offset-distance: 0%; opacity: 0; }
              8%   { opacity: 1; }
              100% { offset-distance: 100%; opacity: 1; }
            }
            @keyframes pin-pop-a {
              0%, 60% { transform: scale(0); opacity: 0; }
              80%     { transform: scale(1.2); opacity: 1; }
              100%    { transform: scale(1); opacity: 1; }
            }
            @keyframes pin-pop-b {
              0%, 85% { transform: scale(0); opacity: 0; }
              95%     { transform: scale(1.2); opacity: 1; }
              100%    { transform: scale(1); opacity: 1; }
            }
            @keyframes pulse-ring {
              0%   { r: 4; opacity: 0.6; }
              100% { r: 12; opacity: 0; }
            }
          `}</style>
        </defs>

        {/* ── Grid ── */}
        <pattern id={`grid-${variant}`} width="20" height="20" patternUnits="userSpaceOnUse">
          <path d="M 20 0 L 0 0 0 20" fill="none" stroke={gridCol} strokeWidth="0.5" />
        </pattern>
        <rect width="220" height="200" fill={`url(#grid-${variant})`} />

        {/* ── Poltva river (underground in centre) ── */}
        <path d="M 0 90 Q 60 85, 110 95 Q 160 105, 220 92" stroke={water} strokeWidth="8" fill="none" opacity="0.7" />

        {/* ── Parks ── */}
        {/* Stryiskyi park */}
        <ellipse cx="165" cy="130" rx="22" ry="15" fill={parkColor} />
        {/* Lychakiv area */}
        <ellipse cx="200" cy="70" rx="16" ry="20" fill={parkColor} />
        {/* Small park near opera */}
        <ellipse cx="140" cy="60" rx="10" ry="7" fill={parkColor} opacity="0.7" />

        {/* ── Building blocks ── */}
        <rect x="120" y="42" width="14" height="10" rx="2" fill={buildCol} />
        <rect x="138" y="46" width="10" height="8" rx="1.5" fill={buildCol} />
        <rect x="155" y="55" width="12" height="9" rx="2" fill={buildCol} />
        <rect x="168" y="42" width="8" height="12" rx="1.5" fill={buildCol} />
        <rect x="125" y="70" width="18" height="8" rx="2" fill={buildCol} />
        <rect x="148" y="68" width="10" height="10" rx="1.5" fill={buildCol} />
        <rect x="100" y="55" width="12" height="8" rx="2" fill={buildCol} />
        <rect x="178" y="60" width="10" height="14" rx="1.5" fill={buildCol} />
        {/* Airport area */}
        <rect x="12" y="165" width="30" height="16" rx="3" fill={buildCol} />
        <rect x="18" y="163" width="20" height="3" rx="1" fill={buildCol} />

        {/* ── Roads – secondary ── */}
        {/* Horodotska */}
        <line x1="0" y1="100" x2="130" y2="78" stroke={roadColor} strokeWidth="2.5" />
        {/* Lychakivska */}
        <line x1="140" y1="75" x2="220" y2="60" stroke={roadColor} strokeWidth="2" />
        {/* Svobody */}
        <line x1="130" y1="40" x2="145" y2="90" stroke={roadMain} strokeWidth="3" />
        {/* Shevchenka */}
        <line x1="110" y1="50" x2="110" y2="120" stroke={roadColor} strokeWidth="2" />
        {/* Stryiska */}
        <line x1="145" y1="90" x2="165" y2="150" stroke={roadColor} strokeWidth="2" />
        {/* Zelena */}
        <line x1="155" y1="80" x2="200" y2="85" stroke={roadColor} strokeWidth="1.5" />
        {/* Airport road */}
        <line x1="30" y1="175" x2="60" y2="148" stroke={roadColor} strokeWidth="2" />
        <line x1="60" y1="148" x2="100" y2="115" stroke={roadColor} strokeWidth="2.5" />

        {/* ── Animated route ── */}
        {/* Glow layer */}
        <path
          d={routePath}
          stroke={routeGlow}
          strokeWidth="6"
          strokeLinecap="round"
          fill="none"
          filter={`url(#glow-${variant})`}
          strokeDasharray={routeLen}
          strokeDashoffset={routeLen}
          style={{ animation: `draw-route 3s ease-out 1.5s forwards` }}
        />
        {/* Main route line */}
        <path
          d={routePath}
          stroke={routeCol}
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={routeLen}
          strokeDashoffset={routeLen}
          style={{ animation: `draw-route 3s ease-out 1.5s forwards` }}
        />

        {/* ── Pin A – Airport ── */}
        <g style={{ transformOrigin: '30px 170px', animation: 'pin-pop-a 3s ease-out 1.5s both' }}>
          <circle cx="30" cy="178" r="4" fill={pinA} opacity="0.3" style={{ animation: 'pulse-ring 2s ease-out 4s infinite' }} />
          <circle cx="30" cy="178" r="5" fill={pinA} />
          <circle cx="30" cy="178" r="2.5" fill="white" opacity="0.9" />
        </g>
        {/* Label A */}
        <text x="40" y="185" fill={labelCol} fontSize="5" fontFamily="Inter, sans-serif" fontWeight="600"
              style={{ animation: 'pin-pop-a 3s ease-out 1.5s both' }}>
          Аеропорт
        </text>

        {/* ── Pin B – Hotel Astoria ── */}
        <g style={{ transformOrigin: '185px 42px', animation: 'pin-pop-b 4s ease-out 1.5s both' }}>
          <circle cx="185" cy="48" r="4" fill={pinB} opacity="0.3" style={{ animation: 'pulse-ring 2s ease-out 5.5s infinite' }} />
          <circle cx="185" cy="48" r="5" fill={pinB} />
          <circle cx="185" cy="48" r="2.5" fill="white" opacity="0.9" />
        </g>
        {/* Label B */}
        <text x="192" y="52" fill={labelCol} fontSize="5" fontFamily="Inter, sans-serif" fontWeight="600"
              style={{ animation: 'pin-pop-b 4s ease-out 1.5s both' }}>
          Асторія
        </text>

        {/* ── Animated car ── */}
        <g style={{
          offsetPath: `path('${routePath}')`,
          animation: 'car-along 4s ease-in-out 2.5s both',
        }}>
          <rect x="-7" y="-5" width="14" height="10" rx="3" fill={carBg} stroke={routeCol} strokeWidth="0.8" />
          <text x="0" y="3" textAnchor="middle" fontSize="7">🚕</text>
        </g>
      </svg>
    </div>
  );
}
