import type { ReactNode } from "react";

const svgProps = {
  width: 28,
  height: 28,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const homeIcon: ReactNode = (
  <svg {...svgProps}>
    <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export const buildingIcon: ReactNode = (
  <svg {...svgProps}>
    <rect x="4" y="2" width="16" height="20" rx="2" ry="2" />
    <line x1="9" y1="22" x2="9" y2="2" />
    <line x1="15" y1="22" x2="15" y2="2" />
    <line x1="4" y1="12" x2="20" y2="12" />
    <line x1="4" y1="7" x2="20" y2="7" />
    <line x1="4" y1="17" x2="20" y2="17" />
  </svg>
);

export const wrenchIcon: ReactNode = (
  <svg {...svgProps}>
    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
  </svg>
);

export const batteryIcon: ReactNode = (
  <svg {...svgProps}>
    <rect x="6" y="7" width="12" height="14" rx="2" />
    <line x1="10" y1="3" x2="10" y2="7" />
    <line x1="14" y1="3" x2="14" y2="7" />
    <line x1="10" y1="12" x2="14" y2="12" />
    <line x1="12" y1="10" x2="12" y2="14" />
  </svg>
);

export const evIcon: ReactNode = (
  <svg {...svgProps}>
    <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
  </svg>
);

export const clipboardIcon: ReactNode = (
  <svg {...svgProps}>
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="13" y2="16" />
  </svg>
);
