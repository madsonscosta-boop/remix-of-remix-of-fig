export type PortfolioItem = {
  slug: string;
  title: string;
  client: string;
  category: string;
  summary: string;
  src: string;
  alt: string;
  cls: string;
  videos?: string[];
  images?: string[];
  layout?: "video-image-video";
  centerImage?: string;
  coverVideo?: string;
  fit?: "cover" | "contain";
  credits?: string;
};

export const portfolioItems: PortfolioItem[] = [
  {
    slug: "marca-alimentacao",
    title: "Oficina Amor",
    client: "Client soon",
    category: "TAGS: SOCIAL STRATEGY · CONTENT · COMMUNITY GROWTH · WORKSHOP PROMOTION\n\n ",
    summary:
      "The brief:\n\nOficina Amor is a restoration and upholstery studio based in Portugal. They do bespoke restoration work and run hands-on workshops. The goal was to build their online presence, get them in front of the right people, and fill the workshops.\n\nOur approach:\n\nWe built a content strategy around the craft itself: showing the process, the before and after, the detail of the work. Content that makes people stop, appreciate what restoration and upholstery really involves, and want to be part of it. Part of the production was shot on location in Portugal.\n\nThe result:\n\nThis is an ongoing partnership.\nIn 3 months, the account grew by over 1,000 followers. The workshops have been sold out ever since.",
    src: "/portfolio/oficina-amor/cover.jpg",
    alt: "Oficina Amor",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    layout: "video-image-video",
    centerImage: "/portfolio/marca-alimentacao/image-1.jpg",
    videos: [
      "/portfolio/marca-alimentacao/video-1.mp4",
      "/portfolio/marca-alimentacao/video-2.mp4",
    ],
  },
  {
    slug: "hanno",
    title: "Hanno",
    client: "Client soon",
    category: "TAGS: BRANDING · ONLINE PRESENCE · PAID ADS · SOCIAL STRATEGY\n\n\n",
    summary:
      "The brief:\n\nHanno helps people in the Netherlands navigate the mortgage process for over 7 years. We came in to help them build a stronger digital presence and reach new audiences.\n\nOur approach:\n\nWe're working with Hanno on two fronts: building a brand identity that feels trustworthy and clear, and running paid ads across two platforms to start generating visibility and leads. Everything is designed to grow with them as the business scales.\n\nThe result:\n\nThis is an ongoing partnership — results coming soon.",
    src: "/portfolio/hanno/cover.mp4",
    alt: "Hanno",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    coverVideo: "/portfolio/hanno/cover.mp4",
    videos: ["/portfolio/hanno/video-1.mp4"],
  },
  {
    slug: "ori-mart",
    title: "Ori Mart",
    client: "Client soon",
    category: "TAGS: STRATEGY · CONTENT CREATION · PHOTOGRAPHY · META ADS · INSTAGRAM · FACEBOOK · TIKTOK\n\n\n",
    summary:
      "The brief:\n\nOri Mart is an Asian convenience store in the heart of Rotterdam. A daily stop for locals and a moment of discovery for passing tourists. When we approached them, their digital presence didn't reflect the energy of the store.\n\nOur approach:\n\nWe built everything from scratch: content strategy, monthly on-location shoots, paid campaigns on Meta, and organic presence on Instagram, Facebook, and TikTok. The content is made to feel native to each platform, not polished for polish's sake, but real enough to stop the scroll.\n\nThe result:\n\nThis is an ongoing partnership.\nIn just 2 months, Instagram grew from 2,558 to 3,611 followers (+41%). Facebook was launched from scratch and reached 272K+ views. A single reel hit 97K views with 908 shares, the strongest piece of content FIG has produced for the account to date. Meta ads delivered a cost per click of €0.05 with €331 in total ad spend for the month.\n\nApril was their best digital month ever.",
    src: "/portfolio/ori-mart/cover.mp4",
    alt: "Ori Mart",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    coverVideo: "/portfolio/ori-mart/cover.mp4",
    videos: [
      "/portfolio/ori-mart/video-1.mp4",
      "/portfolio/ori-mart/video-2.mp4",
      "/portfolio/ori-mart/video-3.mp4",
    ],
  },
  {
    slug: "esporte",
    title: "Design Biennale Rotterdam",
    client: "Client soon",
    category: "TAGS: COMMUNICATION STRATEGY · SOCIAL MEDIA MANAGEMENT · CONTENT PLANNING · BRAND LAUNCH\n\n ",
    summary:
      "The brief: A inaugural design festival across 12 Rotterdam locations, with over 100 participating designers. No existing audience, no playbook. Built from scratch. Our approach: Hired as communication managers to build digital presence from the ground up. We developed Instagram strategy, managed day-to-day content, and coordinated visual production across 100+ designers and partners — working with a graphic designer to keep an extensive program feeling like one cohesive event. The result: From 0 to 6,000 followers for an account that didn't exist before launch. A community built around a strong enough inaugural edition to return for a second.",
    src: "/portfolio/biennale/cover.mp4",
    alt: "Design Biennale Rotterdam",
    cls: "md:col-span-1 md:row-span-1 md:col-start-2 aspect-[4/5]",
    coverVideo: "/portfolio/biennale/cover.mp4",
    videos: [
      "/portfolio/biennale/video-1.mp4",
      "/portfolio/biennale/video-2.mp4",
    ],
    credits: "Video and audio by Jeff Hoogendijk\nScript by FIG Agency",
  },
  {
    slug: "estadio",
    title: "Wasteland - Festival of Art & Ecology",
    client: "Client soon",
    category: "TAGS: COMMUNICATION STRATEGY · SOCIAL MEDIA MANAGEMENT · CONTENT PLANNING · COMMUNITY BUILDING\n\n ",
    summary:
      "The brief: Wasteland is a Rotterdam collective working at the intersection of art and ecology — exhibitions, performances, field trips, workshops. They needed someone to take over their communications and make a complex, fragmented program feel alive and accessible online. Our approach: Hired as communication managers across Instagram, website, and external communications. We coordinated content from 20+ artists and collaborators across a full season, working with a graphic designer on visual templates and consistency. The result: A season of programming communicated clearly, with a growing and engaged community. Instagram became a genuine reflection of the organization — not just a bulletin board.\n\nGraphic design by Martin Foucaut\n",
    src: "/portfolio/wasteland/cover.png",
    alt: "Wasteland - Out of Sight",
    cls: "md:col-span-1 md:row-span-1 aspect-[4/5]",
    images: [
      "/portfolio/wasteland/image-1.jpeg",
      "/portfolio/wasteland/image-2.jpeg",
      "/portfolio/wasteland/image-3.jpeg",
    ],
  },
];

export function getPortfolioItem(slug: string): PortfolioItem | undefined {
  return portfolioItems.find((p) => p.slug === slug);
}
