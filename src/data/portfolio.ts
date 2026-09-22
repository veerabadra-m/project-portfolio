export const personal = {
  name: "Veerabadra M",
  title: "Full-Stack Developer",
  location: "Bangalore, Karnataka, India",
  phone: "7829996982",
  email: "veerabadra5968@gmail.com",
  greeting: "HELLO, I'M",
  heroDescription:
    "Motivated and detail-oriented BE graduate with a strong foundation in web development, programming, and database management.",
  heroSecondary:
    "Building responsive web applications with modern frontend, backend, and database technologies.",
  about:
    "Motivated and detail-oriented BE graduate with a strong foundation in web development, programming, and database management. Skilled in HTML, CSS, JavaScript, MongoDB, Express.js, React.js, Node.js, SQL, and Python, with hands-on experience developing web-based projects. A quick learner with good problem-solving skills, seeking an opportunity to apply technical knowledge, gain industry experience, and grow as a software professional.",
  aboutTags: ["BE Graduate", "Full-Stack Developer", "Web Development", "Problem Solving"],
  resumeUrl: "/resume.pdf",
  githubUrl: "#",
  linkedinUrl: "#",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const skillCategories = [
  {
    title: "Programming Languages",
    icon: "Code2",
    skills: ["C", "C++", "Python", "Java", "JavaScript", "PHP", "SQL"],
  },
  {
    title: "Frameworks & Libraries",
    icon: "Layers",
    skills: ["React", "Next.js", "Node.js", "Express", "Django"],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MySQL", "MongoDB"],
  },
  {
    title: "Web Development",
    icon: "Globe",
    skills: ["HTML", "CSS", "JavaScript"],
  },
  {
    title: "Tools / Version Control",
    icon: "GitBranch",
    skills: ["Git", "GitHub"],
  },
];

export const experience = [
  {
    role: "Full-Stack Developer Intern",
    company: "Zephyr",
    subtitle: "MERN Stack – Practical Application",
    points: [
      "Developed 3+ web application modules using the MERN stack.",
      "Focused on responsive and component-based user interfaces using React.js.",
      "Built and integrated 5+ RESTful API endpoints using Node.js and Express.js.",
      "Utilized MongoDB for structured data storage and management.",
      "Used Git and GitHub for version control.",
      "Maintained multiple commits throughout the development lifecycle.",
    ],
    tech: ["React", "Node.js", "Express", "MongoDB", "Git", "GitHub"],
  },
];

export const projectFilters = ["All", "Full Stack", "Web Development"];

export const projects = [
  {
    id: 1,
    name: "Job Portal Web Application",
    category: "Full Stack",
    description:
      "Developed a job portal web application using the MERN stack, featuring a responsive React.js interface for job seekers and employers.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "User registration",
      "Login",
      "Job posting",
      "Job search",
      "Job application management",
    ],
    badge: "5+ Core Features",
    badges: null as string[] | null,
    github: "#",
    demo: "#",
    mockup: "jobPortal",
  },
  {
    id: 2,
    name: "E-Commerce Web Application",
    category: "Web Development",
    description:
      "Developed a responsive e-commerce web application with multiple core modules for product browsing, shopping cart, authentication, and order management.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP"],
    features: [
      "Product browsing",
      "Product details",
      "Shopping cart",
      "User authentication",
      "Order management",
    ],
    badges: ["5+ Core Modules", "10+ Product & Cart Operations"],
    badge: null as string | null,
    github: "#",
    demo: "#",
    mockup: "ecommerce",
  },
];

export const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "VTU Belagavi, Karnataka",
  cgpa: "6.5",
  date: "September 2026",
};

export const languages = ["English", "Hindi", "Kannada", "Tamil", "Malayalam"];
