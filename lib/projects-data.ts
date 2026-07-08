export interface CaseStudy {
  slug: string;
  title: string;
  client: string;
  role: string;
  industry: string;
  services: string[];
  techStack: string[];
  thumbnail: string;
  outcomeMetric: string;
  outcomeDesc: string;
  challenge: string;
  approach: string;
  outcome: string;
}

export const projectsData: CaseStudy[] = [
  {
    slug: "aether-finance",
    title: "Aether Finance",
    client: "Aether Capital",
    role: "Lead Product Architect",
    industry: "Wealth Management",
    services: ["AI Strategy", "Interactive Dashboard Design", "Core Engineering"],
    techStack: ["Next.js", "n8n", "OpenAI API", "Supabase", "GSAP ScrollTrigger"],
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw",
    outcomeMetric: "$4.2B",
    outcomeDesc: "Asset allocations automated weekly with zero latency.",
    challenge: "Wealth advisors spent over 18 hours per week aggregating market analytics, news feeds, and compliance constraints to write client reports.",
    approach: "We built a secure agentic pipeline using LLMs to index multi-modal data streams, formatting structured financial advice and compliance drafts.",
    outcome: "Advisors now review drafts in 3 minutes, translating to a 75% reduction in client onboard cycles and $4.2B in assets managed through the platform."
  },
  {
    slug: "helios-energy",
    title: "Helios Grid Optimization",
    client: "Helios Renewables",
    role: "UI/UX & System Engineering",
    industry: "Clean Energy Grid",
    services: ["Grid Data Architecture", "Control Room UI", "Performance Tuning"],
    techStack: ["React Fiber", "Tailwind CSS", "FastAPI", "InfluxDB", "AWS"],
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7dS01w7WeRJO7cLSvEqwrKfZhjNlk57_LEf2UvfontgoOylw67Zvc714wiSGpzXRtJ2tbrH_dRrB7dHbW8oJNX3S9tutdQkagyHgxjPJAO-pYgX4xvcdyZTkxcY_hxoDK9KNX_JZT6IYwMQUVu4E1ACx510H6ezBgTeLv1zyCvLa0ZxPy4Zj8rKA5lvJlbvh8eby8ieou7AVF4Rd-F8ZW09jyR-t5AQKCgm7y-jfO10ZtVHKSt9RFng",
    outcomeMetric: "28%",
    outcomeDesc: "Increase in grid-load efficiency during peak seasons.",
    challenge: "Fluctuating renewable solar loads caused frequent grid instability and required manual dispatch overrides by technicians.",
    approach: "We engineered an autonomous load routing control dashboard that predicts surges and automatically balances energy batteries in real time.",
    outcome: "Helios reduced grid outages by 44% and successfully boosted energy storage utilization efficiency across 12 solar parks by 28%."
  },
  {
    slug: "vortex-logistics",
    title: "Vortex Cargo Router",
    client: "Vortex Global",
    role: "Automation Strategy & Frontend Dev",
    industry: "Supply Chain Solutions",
    services: ["Predictive Models", "Interactive Cargo Map", "GSAP Timelines"],
    techStack: ["Next.js (App)", "TypeScript", "Google Maps API", "Docker", "Python"],
    thumbnail: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw",
    outcomeMetric: "48Hrs",
    outcomeDesc: "Saved per shipping container route on average.",
    challenge: "Global logistics bottlenecks and weather updates forced supply planners to manually reroute ship coordinates constantly.",
    approach: "Our team developed a predictive transit engine which parses global shipping alerts, recommending dynamic optimized pathways automatically.",
    outcome: "Transit routes are updated dynamically, saving clients over 48 hours of transit time per shipping container and reducing fuel emissions."
  }
];
