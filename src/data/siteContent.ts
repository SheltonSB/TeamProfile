import {
  BadgeCheck,
  BarChart3,
  Blocks,
  Bot,
  BriefcaseBusiness,
  Building2,
  ClipboardCheck,
  Code2,
  Database,
  Globe2,
  Handshake,
  Laptop,
  LayoutDashboard,
  Linkedin,
  LucideIcon,
  Mail,
  MapPin,
  Phone,
  Search,
  ScanSearch,
  ShieldCheck,
  Store,
  Truck,
  Workflow,
  Zap,
} from "lucide-react";

export const announcement = {
  text: "Now building drone-assisted inspection technology with AY Trucking.",
  linkLabel: "Learn more",
  href: "#current-work",
};

export const navLinks = [
  { label: "Who We Serve", href: "#who-we-serve" },
  { label: "Solutions", href: "#solutions" },
  { label: "Current Work", href: "#current-work" },
  { label: "About", href: "#about" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export const utilityNav = [
  { label: "Search", icon: Search },
  { label: "Language", icon: Globe2 },
];

export const hero = {
  image:
    "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2400&q=85",
  headline: {
    before: "Conditia AI builds ",
    emphasis: "technology",
    after: " that moves businesses forward.",
  },
  intro:
    "Conditia AI helps businesses modernize operations, reduce manual work, organize data, and create stronger digital experiences through practical software, automation, AI-assisted tools, and custom web solutions.",
};

export const mission = {
  label: "Our Mission",
  heading: "We build practical systems for real business problems.",
  body:
    "Conditia AI is a technology partner for businesses that need scalable, useful, and easy-to-adopt solutions. Based in Omaha, Nebraska, we work behind the scenes to help teams operate more efficiently, make better decisions, and grow with stronger digital infrastructure.",
  detail:
    "Our mission is to turn everyday operational friction into simple digital systems that people can actually use. We start with the workflow, learn where time and information are being lost, and build software, automation, dashboards, inspection tools, websites, and brand experiences that fit the business instead of forcing the business to fit the tool.",
};

export const missionValues: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Smarter Operations",
    text: "Cleaner workflows that help teams coordinate work, reduce confusion, and keep important activity visible.",
    icon: Workflow,
  },
  {
    title: "Data-Driven Decisions",
    text: "Dashboards and reporting that turn scattered business activity into useful information.",
    icon: BarChart3,
  },
  {
    title: "Workflow Automation",
    text: "Practical automation that removes repetitive manual steps and helps teams move faster.",
    icon: Zap,
  },
  {
    title: "Scalable Digital Growth",
    text: "Websites, systems, and tools designed to support the next stage of the business.",
    icon: Blocks,
  },
];

export const solutions: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Custom Software",
    text:
      "We build practical software tools that help businesses manage workflows, records, tasks, and operations more efficiently.",
    icon: Code2,
  },
  {
    title: "Automation",
    text:
      "We reduce repetitive manual work by connecting processes, organizing data, and helping teams move faster.",
    icon: Bot,
  },
  {
    title: "Data Dashboards",
    text:
      "We turn business activity into clear dashboards that help teams understand performance and make better decisions.",
    icon: LayoutDashboard,
  },
  {
    title: "Drone Inspection Technology",
    text:
      "We design drone-assisted inspection workflows that help businesses capture, review, and organize visual inspection data.",
    icon: ScanSearch,
  },
  {
    title: "Websites & Branding",
    text:
      "We create modern websites and brand systems that help small businesses look professional and communicate clearly.",
    icon: Laptop,
  },
  {
    title: "Technology Partnership",
    text:
      "We work closely with business owners to understand their problems, build useful systems, and improve them over time.",
    icon: Handshake,
  },
];

export const currentWork = [
  {
    title: "AY Trucking",
    subtitle: "Drone-Assisted Vehicle Inspection",
    text:
      "We are partnering with AY Trucking to explore drone-powered vehicle inspection, operational visibility, and smarter maintenance workflows. The platform uses automated drone capture, high-resolution images, AI-assisted issue detection, and dashboard-based reporting to help fleets inspect vehicles faster and reduce downtime.",
    image:
      "https://images.unsplash.com/photo-1473968512647-3e447244af8f?auto=format&fit=crop&w=1400&q=85",
    icon: Truck,
    features: [
      "Automated exterior inspection workflows",
      "High-resolution image and video capture",
      "AI-assisted damage and issue detection",
      "Inspection history and dashboard reporting",
      "Faster reviews with less manual effort",
      "Safer, scalable inspection process",
    ],
  },
  {
    title: "Makanaka Shop",
    subtitle: "Branding & Website Development",
    text:
      "We are building a modern brand and website experience for Makanaka Shop to help the business present itself professionally, communicate clearly, and reach more customers online.",
    image:
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&w=1400&q=85",
    icon: Store,
    features: [
      "Brand identity direction",
      "Website design and development",
      "Clear service and product presentation",
      "Mobile-friendly customer experience",
      "Stronger digital presence",
    ],
  },
];

export const audiences: Array<{ title: string; text: string; icon: LucideIcon }> = [
  {
    title: "Fleet & Logistics Operators",
    text:
      "For transportation and logistics teams that need better inspection workflows, operational visibility, and process organization.",
    icon: Truck,
  },
  {
    title: "Small Businesses",
    text:
      "For businesses that need modern websites, branding, automation, and digital tools without unnecessary complexity.",
    icon: Building2,
  },
  {
    title: "Growing Teams",
    text:
      "For teams replacing spreadsheets, manual tracking, and disconnected tools with cleaner systems.",
    icon: BriefcaseBusiness,
  },
];

export const aboutPoints = [
  {
    title: "Workflow first",
    text: "We study the real process before recommending software, automation, or a website.",
    icon: ClipboardCheck,
  },
  {
    title: "Useful by design",
    text: "Every screen, dashboard, and customer-facing page should make the business easier to run.",
    icon: BadgeCheck,
  },
  {
    title: "Built to improve",
    text: "We treat technology as an ongoing partnership, not a one-time handoff.",
    icon: ShieldCheck,
  },
];

export const teamMembers = [
  {
    name: "Shelton Bumhe",
    role: "Co-Founder & Technology Lead",
    bio:
      "Leads software architecture, product development, and technical execution across Conditia AI projects.",
    image: "",
    initials: "SB",
    icon: Linkedin,
  },
  {
    name: "Yohannes Hailu",
    role: "Co-Founder",
    bio: "Supports product strategy, client partnerships, and business development.",
    image: "/team/yohannes-hailu.png",
    initials: "YH",
    icon: Linkedin,
  },
  {
    name: "Ermias Wolde",
    role: "Co-Founder",
    bio: "Supports operations, client relationships, and project execution.",
    image: "/team/ermias-wolde.jpeg",
    initials: "EW",
    icon: Linkedin,
  },
];

export const contact = {
  phone: "(402) 905-5385",
  location: "Omaha, Nebraska, USA",
  emails: ["shelton@conditia.ai", "yohannes@conditia.ai", "ermias@conditia.ai"],
};

export const contactItems = [
  { label: contact.phone, icon: Phone },
  { label: contact.location, icon: MapPin },
  { label: contact.emails.join(" / "), icon: Mail },
];

export const footerColumns = [
  {
    title: "Quick Links",
    links: navLinks,
  },
  {
    title: "Solutions",
    links: [
      { label: "Custom Software", href: "#solutions" },
      { label: "Automation", href: "#solutions" },
      { label: "Data Dashboards", href: "#solutions" },
      { label: "Websites & Branding", href: "#solutions" },
    ],
  },
];

export const footerDescription =
  "Technology solutions for businesses ready to operate smarter.";

export const footerContactIcons = {
  database: Database,
  mail: Mail,
};
