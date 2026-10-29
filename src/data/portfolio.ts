/* ============================================================
   PORTFOLIO CONTENT — edit everything in this single file
   Replace the placeholder values below with your real details.
   Images live in /public/images. Drop your resume at
   /public/resume.pdf and the button will serve it.
   ============================================================ */

export const profile = {
  name: "KAZI MEHADI HASAN IFTY",
  // The big rotating-style headline words:
  designations: ["Aspiring Full Stack & SecWeb Developer"],
  currentRole: "Full Stack Developer",
  initials: "KMHI",
  photo: "/images/my-photo.png",
  tagline:
    "Building modern web applications with a full-stack mindset and a security-first approach.",
  location: "Chattogram, Bangladesh",
  available: true,
  email: "mh3915287@gmail.com",
  phone: "+880 1812-684611",
  phoneHref: "+880 1812-684611",
  whatsapp: "+880 1812-684611",
  whatsappHref: "https://wa.me/8801812684611",
  resumeUrl: "/Mehadi_Hasan_Ifty_Resume.pdf",
  yearsOfExperience: "Fresher",
  projectsCompleted: "7+",
  happyClients: "0",
};

export type Social = {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "twitter" | "facebook";
};

export const socials: Social[] = [
  { name: "GitHub", url: "https://github.com/mehadihasanifty", icon: "github" },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/kazi-mehadi-hasan-ifty/", icon: "linkedin" },
  { name: "Twitter / X", url: "https://x.com/mehadihasanifty", icon: "twitter" },
  { name: "Facebook", url: "https://www.facebook.com/mehedi.hasan.717430/", icon: "facebook" },
];

/* ------------------------------ About ------------------------------ */

export const about = {
  heading: "A little bit about me",

  paragraphs: [
    "I'm Kazi Mehadi Hasan Ifty, an aspiring Full Stack Developer with a growing interest in Security-focused Web Development. My journey started with a curiosity about how websites work and gradually grew into a passion for building interactive, responsive, and user-friendly web applications. Through self-learning, documentation, and hands-on practice, I've developed a foundation in HTML, CSS, JavaScript, TypeScript, React, and Next.js.",

    "I enjoy turning ideas into practical web applications, from crafting clean and responsive interfaces to working with APIs, managing application data, and understanding backend functionality. Projects like Bazar Dor, FitLog, and Wanderlust have helped me apply my knowledge, solve development challenges, and improve my approach to writing maintainable code. I'm also working toward strengthening my understanding of web security, performance optimization, and scalable application architecture.",

    "As a fresher, I'm focused on continuous learning, building meaningful projects, and developing the skills needed to become a reliable Full Stack Developer with a security-first mindset. I value clean code, thoughtful user experiences, problem-solving, and the willingness to learn from feedback. My goal is to build useful web applications that are not only functional and accessible but also mindful of security and performance.",
  ],

  enjoyTitle: "What I love working on",

  enjoy: [
    "Building responsive and interactive user interfaces",
    "Developing modern applications with React and Next.js",
    "Integrating REST APIs and working with application data",
    "Writing clean, reusable, and maintainable code",
    "Exploring web security and secure coding practices",
    "Improving website performance and user experience",
  ],

  hobbiesTitle: "Beyond the keyboard",

  hobbies: [
    {
      icon: "code" as const,
      title: "Building Projects",
      text: "I enjoy turning ideas into working applications, experimenting with new technologies, and learning through hands-on development.",
    },
    {
      icon: "book-open" as const,
      title: "Continuous Learning",
      text: "I explore documentation, practice programming concepts, and work on improving my development skills one project at a time.",
    },
    {
      icon: "shield-check" as const,
      title: "Web Security",
      text: "I'm interested in understanding common web vulnerabilities and learning how to build applications with safer coding practices.",
    },
  ],
};

/* ------------------------------ Skills ----------------------------- */

export type SkillGroup = {
  category: string;
  icon: "code" | "rocket" | "briefcase";
  blurb: string;
  items: { name: string; level: number }[];
};

export const skillGroups: SkillGroup[] = [
  {
    category: "Frontend Development",
    icon: "code",
    blurb:
      "Building responsive, accessible, and interactive user interfaces with modern frontend technologies.",
    items: [
      { name: "HTML5", level: 85 },
      { name: "CSS3 & Tailwind CSS", level: 80 },
      { name: "JavaScript (ES6+)", level: 75 },
      { name: "TypeScript", level: 65 },
      { name: "React.js", level: 70 },
      { name: "Next.js", level: 70 },
    ],
  },
  {
    category: "Backend Development",
    icon: "rocket",
    blurb:
      "Developing application logic, integrating APIs, and learning how to build reliable server-side applications.",
    items: [
      { name: "Node.js", level: 65 },
      { name: "Express.js", level: 60 },
      { name: "REST APIs", level: 70 },
      { name: "MongoDB", level: 60 },
      { name: "Authentication", level: 55 },
      { name: "Git & GitHub", level: 70 },
    ],
  },
  {
    category: "Security & Engineering",
    icon: "briefcase",
    blurb:
      "Developing secure coding habits and exploring the fundamentals of web application security and software quality.",
    items: [
      { name: "HTTP & HTTPS", level: 60 },
      { name: "Input Validation", level: 55 },
      { name: "Authentication & Authorization", level: 50 },
      { name: "OWASP Top 10 Fundamentals", level: 35 },
      { name: "Debugging & Troubleshooting", level: 65 },
      { name: "Performance Optimization", level: 50 },
    ],
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Frontend",
    icon: "code",
    blurb: "Pixel-perfect, responsive & accessible interfaces",
    items: [
      { name: "HTML5 & Semantic Markup", level: 92 },
      { name: "CSS · Tailwind CSS", level: 90 },
      { name: "JavaScript (ES6+)", level: 88 },
      { name: "React · Next.js", level: 86 },
      { name: "TypeScript", level: 80 },
      { name: "State (Redux / Zustand)", level: 76 },
    ],
  },
  {
    category: "Backend",
    icon: "briefcase",
    blurb: "Robust APIs and reliable server-side logic",
    items: [
      { name: "Node.js · Express", level: 78 },
      { name: "REST API Design", level: 82 },
      { name: "MongoDB · PostgreSQL", level: 75 },
      { name: "Auth (JWT · NextAuth)", level: 74 },
      { name: "Prisma ORM", level: 70 },
    ],
  },
  {
    category: "Tools",
    icon: "rocket",
    blurb: "Workflow that keeps shipping smooth",
    items: [
      { name: "Git · GitHub", level: 88 },
      { name: "Figma", level: 80 },
      { name: "Vercel · Netlify", level: 85 },
      { name: "Postman", level: 82 },
      { name: "npm · pnpm", level: 84 },
    ],
  },
];

export const marqueeTools = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Tailwind CSS",
  "Node.js",
  "Express",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
  "Firebase",
  "Redux",
  "Git & GitHub",
  "Figma",
  "Vercel",
  "Postman",
];

/* ------------------------------ Education -------------------------- */

export type Education = {
  degree: string;
  institution: string;
  period: string;
  detail: string;
  highlight?: boolean;
};

export const education: Education[] = [
  {
    degree: "Bachelor's Degree",
    institution: "International Islamic University Chittagong",
    period: "2022 — Present",
    detail:
      "Currently pursuing my bachelor's degree while developing practical skills in web development, programming, and software engineering through self-learning and hands-on projects.",
    highlight: true,
  },
  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Cox's Bazar Govt. College",
    period: "2020 — 2022",
    detail:
      "Completed higher secondary education and developed a foundation for further academic study and technical learning.",
  },
];
/* ------------------------------ Experience ------------------------- */

export type Experience = {
  role: string;
  organization: string;
  period: string;
  type: string;
  current?: boolean;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Aspiring Full Stack Developer",
    organization: "Independent Learning & Project Development",
    period: "2026 — Present",
    type: "Personal Development",
    current: true,
    points: [
      "Build practical web applications using React, Next.js, TypeScript, and Tailwind CSS to strengthen frontend and full-stack development skills.",
      "Develop portfolio projects such as Bazar Dor, FitLog, and Wanderlust to practice UI development, API integration, application data handling, and deployment.",
      "Use Git and GitHub to manage source code, track changes, and maintain project repositories.",
      "Explore secure coding practices, web application security fundamentals, and performance optimization as part of ongoing learning.",
    ],
  },
];

/* ------------------------------ Projects --------------------------- */

export type Project = {
  slug: string;
  name: string;
  category: string;
  tagline: string;
  image: string;
  tech: string[];
  description: string[];
  features: string[];
  liveUrl: string;
  repoUrl: string;
  highlights: string[];
  challenges: string[];
  improvements: string[];
};

export const projects: Project[] = [
  {
    slug: "bazar-dor",
    name: "Bazar Dor",
    category: "Market Price Tracker",
    tagline: "Market price tracker",
    image: "/images/bazar-dor-app.png",
    tech: ["Next.js", "React", "TypeScript", "CSS", "REST API", "Better Auth", "MongoDB"],
    liveUrl: "https://bazar-dor-nextjs-app.vercel.app/",
    repoUrl: "https://github.com/mehadihasanifty/bazar-dor-nextjs-app.git",
    description: [
  "Bazar Dor is a Bangladeshi market price tracking application that helps users explore everyday grocery products, browse product categories, and stay informed about market prices through a simple, responsive interface.",
  "Built with Next.js and React, the application focuses on convenient product discovery, category-based browsing, and an accessible shopping research experience. It also integrates authentication to support user account features."
],

features: [
      " Daily Price Updates: Explore the latest available prices of essential products and see how prices change compared to the previous day.",
      " Price Trends: Discover the top six products with increasing prices and the top six products with decreasing prices.",
      " Product Categories: Browse products by category and sort them by price from low to high or high to low.",
      " Product Details: View individual product information, price summaries, and market-based price comparisons.",
      " Secure Authentication: Sign up and sign in using email and password or supported social login providers.",
      " Profile Management: Update your profile information through a dedicated profile page.",
      " Responsive Design: Enjoy a consistent experience across mobile phones, tablets, and desktop devices.",
      " Loading & Error States: Get helpful loading indicators and friendly error pages when content is unavailable.",
    ],

highlights: [
  "Browse grocery products and explore categories",
  "Market price-focused interface for everyday shopping research",
  "Responsive design for mobile, tablet, and desktop",
  "User authentication with Better Auth",
  "Product discovery through category-based navigation"
],

challenges: [
  "Integrating external REST API data into the Next.js application while handling loading states, failed requests, and unexpected responses.",
  "Building a consistent responsive interface that makes product information easy to explore across different screen sizes.",
  "Configuring authentication and environment variables correctly across local development and production deployment."
],

improvements: [
  "Add historical price charts to help users understand how product prices change over time.",
  "Introduce a price comparison feature across different markets and retailers when reliable market-specific data is available.",
  "Allow users to save favourite products and receive notifications when prices change.",
  "Add Bengali and English language switching for a more accessible experience.",
  "Improve performance with API caching, optimized images, and efficient data fetching."
]
  },
  {
    slug: "fitlog",
    name: "FitLog",
    category: "Workout Management & Tracking",
    tagline: "Workout management & tracking",
    image: "/images/fit-log.png",
    tech:["Next.js", "React", "TypeScript", "Tailwind CSS", "REST API"],
    liveUrl: "https://fitlog-nextjs-app.vercel.app/",
    repoUrl: "https://github.com/mehadihasanifty/fitlog-nextjs-app.git",
   description: [
  "FitLog is a fitness and workout discovery application that helps users explore exercise routines, browse workouts by muscle group, and find activities based on workout duration and fitness goals.",
  "Built with Next.js and React, the application provides a responsive interface for exploring workout details and organizing fitness activities. Its focus is on making workout discovery simple and helping users build a more consistent fitness routine."
],

 features: [
"Browse a workout library organized by muscle group",
"View workout details, including duration and estimated calories burned",
"Explore workout categories through an organized and intuitive interface",
"Navigate a responsive fitness interface across mobile, tablet, and desktop devices",
"Discover workouts to help organize personal fitness routines",
],

highlights: [
  "Browse a workout library with detailed exercise information",
  "Explore workouts by muscle group and category",
  "View workout duration and estimated calorie information",
  "Save and organize favourite workouts, if supported by the current implementation",
  "Responsive interface for mobile, tablet, and desktop"
],

challenges: [
  "Organizing workout data into clear categories so users can discover relevant exercises without navigating a complicated interface.",
  "Keeping workout cards, exercise details, and category filters consistent across different screen sizes.",
  "Handling API loading states, missing data, and failed requests to provide a reliable workout browsing experience."
],

improvements: [
  "Add personalized workout plans based on fitness goals, experience level, and available time.",
  "Introduce workout history and progress tracking with weekly activity summaries.",
  "Add exercise instructions with illustrations or videos and clear safety guidance.",
  "Include a workout calendar with reminders and completion tracking.",
  "Improve accessibility and performance with optimized images, loading states, and keyboard-friendly navigation."
],
  },
  {
    slug: "wanderlust",
    name: "Wanderlust",
    category: "Full Stack - Travel planning hub",
    tagline: "Travel planning hub",
    image: "/images/wanderlust.png",
    tech: ["Next.js", "React", "JavaScript", "CSS", "REST API", "Node.js", "Express.js"],
    liveUrl: "https://wanderlust-client-eosin.vercel.app/",
    repoUrl: "https://github.com/mehadihasanifty/wanderlust-client.git",
    description: [
  "Wanderlust is a travel-planning web application designed to help users discover destinations and organize their travel plans in one place. Users can explore places, add destinations to their trips, and build personalized itineraries through an interactive interface.",
  "Built with Next.js and React, the application focuses on simplifying destination management and creating a smoother trip-planning experience. Its interface brings destination information and itinerary creation together to help travelers organize their next adventure."
], 

  features: [
"Add new travel destinations through an interactive form",
"Retrieve and display destination data using a REST API",
"Validate destination form inputs before submitting data",
"Handle API requests with appropriate loading and error feedback",
"Browse destinations through a responsive interface on mobile and desktop"
],

highlights: [
  "Explore travel destinations and organize trip plans",
  "Add destinations and manage personalized itineraries",
  "Integrate location and map-based destination discovery, if implemented",
  "Responsive interface for mobile, tablet, and desktop",
  "Interactive destination forms with API integration"
],

challenges: [
  "Handling API requests reliably when retrieving destination information and managing destination submissions, including loading and error states.",
  "Keeping destination data and itinerary views consistent when users add, update, or remove destinations.",
  "Designing a responsive travel-planning interface that keeps destination details and trip-management controls easy to use across screen sizes."
],

improvements: [
  "Add user accounts so travelers can save trips and access their itineraries across devices.",
  "Integrate weather forecasts for planned destinations and travel dates.",
  "Add printable or downloadable PDF itinerary exports.",
  "Introduce estimated travel costs, budgets, and expense tracking for each trip.",
  "Add destination images, reviews, and recommendations to help users choose places to visit."
],
  },
];

/* ------------------------------ Navigation ------------------------- */

export const navLinks = [
  { label: "Home", href: "/#home", id: "home" },
  { label: "About", href: "/#about", id: "about" },
  { label: "Skills", href: "/#skills", id: "skills" },
  { label: "Education", href: "/#education", id: "education" },
  { label: "Experience", href: "/#experience", id: "experience" },
  { label: "Projects", href: "/#projects", id: "projects" },
  { label: "Contact", href: "/#contact", id: "contact" },
];
