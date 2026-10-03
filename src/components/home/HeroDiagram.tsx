"use client";

/**
 * HeroDiagram — Organic Blob Journey Diagram
 *
 * Renders 4 overlapping organic shapes (blobs) in a diagonal ascending layout
 * (People → Process → Performance → Growth), connected by a sweeping line,
 * matching the watercolor/translucent aesthetic.
 */

function PeopleIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" className="h-8 w-8">
      <path d="M16 21v-2a4 4 0 0 0-5.3-3.8" />
      <circle cx="16" cy="7.5" r="3.5" />
      <path d="M12 21v-2a4 4 0 0 0-8 0v2" />
      <circle cx="8" cy="11" r="3.5" />
    </svg>
  );
}

function ProcessIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
      <circle cx="12" cy="12" r="3" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1Z" />
    </svg>
  );
}

function PerformanceIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="h-8 w-8">
      <rect x="4" y="14" width="4" height="6" rx="1" />
      <rect x="10" y="10" width="4" height="10" rx="1" />
      <rect x="16" y="6" width="4" height="14" rx="1" />
    </svg>
  );
}

function GrowthIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.0} className="h-9 w-9">
      <path d="M7 17L17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

interface Bubble {
  label: string;
  icon: React.ReactNode;
  bg: string;
  color: string;
  borderRadius: string;
  size: number;
  xPct: number;
  yPct: number;
}

const bubbles: Bubble[] = [
  {
    label: "People",
    icon: <PeopleIcon />,
    bg: "rgba(202, 226, 212, 0.55)",
    color: "#0F1F34",
    borderRadius: "60% 40% 45% 55% / 50% 60% 40% 50%",
    size: 110,
    xPct: 8,
    yPct: 55,
  },
  {
    label: "Process",
    icon: <ProcessIcon />,
    bg: "rgba(132, 172, 160, 0.55)",
    color: "#FFFFFF",
    borderRadius: "40% 60% 55% 45% / 60% 40% 60% 40%",
    size: 130,
    xPct: 30,
    yPct: 40,
  },
  {
    label: "Performance",
    icon: <PerformanceIcon />,
    bg: "rgba(85, 122, 145, 0.6)",
    color: "#FFFFFF",
    borderRadius: "50% 50% 60% 40% / 40% 55% 45% 60%",
    size: 145,
    xPct: 55,
    yPct: 20,
  },
  {
    label: "Growth",
    icon: <GrowthIcon />,
    bg: "rgba(44, 76, 98, 0.65)",
    color: "#FFFFFF",
    borderRadius: "45% 55% 40% 60% / 55% 45% 55% 45%",
    size: 160,
    xPct: 82,
    yPct: 0,
  },
];


/** Ground shadow ellipses rendered in SVG for soft blur */
function GroundShadows() {
  const shadows = [
    { cx: 88, cy: 252, rx: 58, ry: 14 },
    { cx: 250, cy: 222, rx: 66, ry: 15 },
    { cx: 395, cy: 190, rx: 75, ry: 16 },
    { cx: 530, cy: 165, rx: 84, ry: 17 },
  ];
  return (
    <svg
      viewBox="0 0 630 320"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="absolute inset-0 w-full h-full pointer-events-none -z-10"
      aria-hidden="true"
    >
      <defs>
        <filter id="ground-shadow-blur" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur in="SourceGraphic" stdDeviation="12" />
        </filter>
      </defs>
      {shadows.map((s, i) => (
        <ellipse
          key={i}
          cx={s.cx}
          cy={s.cy}
          rx={s.rx}
          ry={s.ry}
          fill="#1F3A50"
          opacity="0.3"
          filter="url(#ground-shadow-blur)"
        />
      ))}
    </svg>
  );
}

export function HeroDiagram() {
  const containerW = 600;
  const containerH = 320;

  return (
    <div className="relative flex flex-col items-center select-none w-full max-w-[600px]">
      {/* Background soft blur blobs for depth */}
      <div className="absolute top-[10%] left-[20%] w-[300px] h-[300px] bg-[#d5ebd6] opacity-30 rounded-full blur-3xl pointer-events-none -z-20" />
      <div className="absolute top-[0%] right-[10%] w-[250px] h-[250px] bg-[#557a91] opacity-20 rounded-full blur-3xl pointer-events-none -z-20" />

      {/* Bubble diagram container with responsive scaling */}
      <div className="w-full max-w-full flex items-center justify-center overflow-hidden">
        <div className="relative origin-center scale-[0.52] min-[370px]:scale-[0.56] min-[420px]:scale-[0.68] min-[520px]:scale-[0.8] sm:scale-[0.88] md:scale-95 lg:scale-100 transition-transform h-[175px] min-[370px]:h-[190px] min-[420px]:h-[225px] min-[520px]:h-[265px] sm:h-[290px] md:h-[320px] flex items-center justify-center">
          <div
            className="relative shrink-0"
            style={{ width: containerW, height: containerH }}
          >
            {/* Ground shadows beneath blobs */}
            <GroundShadows />

            {bubbles.map((bubble) => {
              const left = (bubble.xPct / 100) * (containerW - bubble.size);
              const top = (bubble.yPct / 100) * (containerH - bubble.size);
              return (
                <div
                  key={bubble.label}
                  className="absolute flex flex-col items-center justify-center transition-transform duration-500 hover:scale-[1.03]"
                  style={{
                    width: bubble.size,
                    height: bubble.size,
                    left,
                    top,
                  }}
                >
                  {/* Glassy translucent blob */}
                  <div
                    className="absolute inset-0 flex items-center justify-center transition-all duration-500"
                    style={{
                      background: bubble.bg,
                      borderRadius: bubble.borderRadius,
                      backdropFilter: "blur(16px)",
                      WebkitBackdropFilter: "blur(16px)",
                      border: `1px solid rgba(255, 255, 255, 0.3)`,
                      boxShadow: `
                    inset 0 2px 3px rgba(255,255,255,0.45),
                    inset 0 -4px 8px rgba(0,0,0,0.1),
                    0 4px 8px rgba(0,0,0,0.15),
                    0 12px 28px -4px rgba(0,0,0,0.25),
                    0 28px 50px -10px rgba(0,0,0,0.18),
                    0 1px 3px rgba(0,0,0,0.1)
                  `,
                    }}
                  >
                    <span style={{ color: bubble.color, opacity: 0.8 }}>
                      {bubble.icon}
                    </span>
                  </div>

                  {/* Text label strictly below the bubble */}
                  <span
                    className="absolute font-bold text-navy text-sm md:text-base tracking-wide whitespace-nowrap"
                    style={{ top: bubble.size + 12 }}
                  >
                    {bubble.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
