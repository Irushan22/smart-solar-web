import type { ReactNode } from "react";

export interface Service {
  iconPath: ReactNode;
  title: string;
  description: string;
  details: string;
}

import { homeIcon, buildingIcon, wrenchIcon, batteryIcon, evIcon, clipboardIcon } from "./serviceIcons";

export const services: Service[] = [
  {
    iconPath: homeIcon,
    title: "Residential Solar",
    description:
      "Complete home solar panel installation with premium tier-1 panels. Reduce your electricity bills by up to 90% while increasing your property value.",
    details:
      "Our residential solar solutions are designed to provide maximum efficiency and seamless integration with your home. We handle everything from custom roof layout designs to securing the necessary permits. By using premium tier-1 solar panels and advanced smart home energy monitoring, we ensure that you can track your energy production in real-time while enjoying a comprehensive 25-year warranty.",
  },
  {
    iconPath: buildingIcon,
    title: "Commercial Solar",
    description:
      "Large-scale solar solutions for businesses and enterprises. Custom-designed systems to maximize ROI and meet your sustainability goals.",
    details:
      "For businesses looking to significantly reduce operational costs and meet sustainability goals, our commercial solar installations offer unparalleled reliability. Our systems utilize high-yield commercial components that integrate perfectly with your facility. We provide full support navigating tax credits, demand charge reduction strategies, and offer flexible financing options tailored to your enterprise needs.",
  },
  {
    iconPath: wrenchIcon,
    title: "Solar Maintenance",
    description:
      "Comprehensive panel cleaning, inspection, and repair services. Keep your system performing at peak efficiency all year round.",
    details:
      "Protect your investment with our comprehensive solar maintenance programs. We ensure your system stays at optimal output through bi-annual professional glass cleaning, advanced system diagnostics, and proactive inverter health checkups. Should an issue ever arise, our team provides priority emergency repair services backed by our performance guarantee.",
  },
  {
    iconPath: batteryIcon,
    title: "Energy Storage",
    description:
      "Advanced battery storage and backup power systems. Store excess solar energy and achieve true energy independence for your property.",
    details:
      "Take complete control over your power consumption with our robust energy storage solutions. We deploy high-cycle lithium-iron phosphate batteries that offer modular and expandable capacity to match your daily usage. Our advanced architectures provide seamless failover protection during grid blackouts and allow for dynamic off-grid capabilities alongside intelligent time-of-use rate optimization.",
  },
  {
    iconPath: evIcon,
    title: "EV Charging",
    description:
      "Solar-powered electric vehicle charging stations for homes and businesses. Charge your EV with 100% clean, renewable energy.",
    details:
      "Future-proof your property with Level 2 and Level 3 fast charging stations powered directly by the sun. Our charging solutions feature universal J1772 and NACS compatibility to charge any modern electric vehicle. Equipped with dynamic load balancing technology and smart usage tracking software, our stations are perfect for single-home users or multi-vehicle commercial fleets.",
  },
  {
    iconPath: clipboardIcon,
    title: "Consultation",
    description:
      "Free comprehensive energy audit and feasibility study. Our experts analyze your property to design the perfect solar solution.",
    details:
      "Every successful installation starts with a meticulous plan. Our free consultation service involves precise 3D roof modeling and deep historical energy usage analysis to custom design a system tailored uniquely to your property. We break down the numbers, providing detailed ROI and lifetime payback projections, while offering full assistance in handling permitting and approvals.",
  },
];
