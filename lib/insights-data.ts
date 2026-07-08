export interface InsightArticle {
  slug: string;
  title: string;
  category: "AI Strategy" | "Design" | "Engineering" | "Case Notes";
  date: string;
  readTime: string;
  excerpt: string;
  content: string;
  image: string;
}

export const insightsData: InsightArticle[] = [
  {
    slug: "future-of-agentic-workflows",
    title: "The Future of Agentic Workflows in Enterprise",
    category: "AI Strategy",
    date: "July 2, 2026",
    readTime: "6 min read",
    excerpt: "Why static API integration pipelines are dying, and how autonomous LLM agents are reshaping workflows.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBRyV3nWgJgmlcNpcz5TXh40gLX4eVOtc5WsccVKDlPHh5rzlV1Qkrm3QXTlvNoGSn_ysj3JWhgoSg5b0ssg2fNK-y4PHHywNateW3eJfgfma493yksy1UHuQhot9fHmsa6-ZV_lnVaeNGm206m1YGnir5SbzAW6GpRzC-OikIoAY0S4RuZvvo2Uy5ReUmsveSl8oI64A7_6XwT9-Xh6OZ6iX6j1ROJ0VoN5x3wBaT59GcDzW3kgNjRyw",
    content: "We are moving away from traditional rule-based pipelines toward self-correcting autonomous agents. In this write-up, we analyze n8n automation loops and how they leverage contextual LLM inputs to run cognitive business operations dynamically."
  },
  {
    slug: "monochrome-design-systems",
    title: "Restraint over Decoration: Monochrome Systems",
    category: "Design",
    date: "June 28, 2026",
    readTime: "4 min read",
    excerpt: "A study on why high-contrast, black-canvas interfaces command focus and command credibility.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuA7dS01w7WeRJO7cLSvEqwrKfZhjNlk57_LEf2UvfontgoOylw67Zvc714wiSGpzXRtJ2tbrH_dRrB7dHbW8oJNX3S9tutdQkagyHgxjPJAO-pYgX4xvcdyZTkxcY_hxoDK9KNX_JZT6IYwMQUVu4E1ACx510H6ezBgTeLv1zyCvLa0ZxPy4Zj8rKA5lvJlbvh8eby8ieou7AVF4Rd-F8ZW09jyR-t5AQKCgm7y-jfO10ZtVHKSt9RFng",
    content: "Saturated UI chrome is a distraction. Premium branding signals authority through typography scale and structural symmetry rather than loud color palettes. We detail the mechanics of designing monochrome spaces."
  }
];
