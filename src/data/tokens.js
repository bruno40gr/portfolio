import { Clock, History, Skull, Rocket } from 'lucide-react';

export const PROJECT_STATUS = {
  LAUNCHED: { 
    label: "Launched", 
    // Updated: Using Hex with Opacity Modifier (/20) for a tinted badge.
    // This avoids the "heavy button" look while keeping the neon brand color.
    theme: "bg-[#a6fa4e]/50 text-[var(--deep-purple)] border border-[var(--neon-green)] shadow-none",
    icon: Rocket
  },
 
  IN_BUILD: { 
    label: "In build", 
    theme: "bg-blue-50 text-blue-700 border-blue-200 shadow-none",
    icon: Clock
    },
  LEGACY: { 
    label: "Legacy version", 
    theme: "bg-slate-200 text-slate-800 border-transparent shadow-none",
    icon: History
  },
  DEPRECATED: { 
    label: "Deprecated", 
    theme: "bg-[#f5f5f4] text-[#be123c] border border-[#e7e5e4] shadow-none",
    icon: Skull
  }
};

export const PRODUCT_TYPES = {
  CONSUMER: "Consumer Product",
  INTERNAL: "Internal Tools",
  ENTERPRISE: "Enterprise (B2B)",
  MOBILE: "Mobile App"
};

export const SERVICES = {
  PRODUCT_DESIGN: "Product Design",
  UX_RESEARCH: "UX Research",
  SYSTEMS_DESIGN: "Systems Design",
  AI_WORKFLOWS: "AI & Workflows",
  PROTOTYPING: "Prototyping",
  STRATEGY: "Product Strategy",
  UI_DESIGN: "UI Design"
};
