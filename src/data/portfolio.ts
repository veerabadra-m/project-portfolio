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
  githubUrl: "https://github.com/veerabadra-m",
linkedinUrl: "https://www.linkedin.com/in/veerabadra-m",
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
    title: "Frontend Development",
    icon: "Globe",
    skills: ["HTML", "CSS", "JavaScript", "React.js"],
  },
  {
    title: "Backend Development",
    icon: "Layers",
    skills: ["Node.js", "Express.js",],
  },
  {
    title: "Databases",
    icon: "Database",
    skills: ["MongoDB", "MySQL"],
  },
  {
    title: "Tools & Version Control",
    icon: "GitBranch",
    skills: ["Git", "GitHub"],
  },
];


export const experience = [
  {
    role: "Full Stack Development Intern",
    company: "Zephyr Technologies and Solutions Pvt. Ltd.",
    subtitle: "MERN Stack Development",
    points: [
      "Developed web application modules using the MERN stack.",
      "Built responsive and reusable user interfaces using React.js.",
      "Developed and integrated RESTful APIs using Node.js and Express.js.",
      "Worked with MongoDB for database storage and management.",
      "Used Git and GitHub for version control and project collaboration.",
    ],
    tech: [
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git",
      "GitHub",
    ],
  },
];

export const projectFilters = ["All", "Full Stack", "Web Development"];

export const projects = [
  {
    id: 1,
    name: "Job Portal Web Application",
    category: "Full Stack",
    description:
      "Built a full-stack job portal using the MERN stack to connect job seekers and employers through a responsive and user-friendly platform.",
    technologies: ["MongoDB", "Express.js", "React.js", "Node.js"],
    features: [
      "User registration and authentication",
      "Job posting and management",
      "Job search functionality",
      "Job application management",
      "Responsive user interface",
    ],
    badge: "MERN Stack Project",
    badges: null as string[] | null,
    github: "#",
    demo: "#",
    mockup: "jobPortal",
  },
  {
    id: 2,
    name: "Ground Born Fight Club & Fitness Centre",
    category: "Full Stack",
    description:
      "Developed a responsive website for a fitness and combat sports centre, showcasing training programs, class schedules, coach information, and an online enquiry facility.",
    technologies: [
      "React.js",
      "TypeScript",
      "Node.js",
      "Express.js",
      "MongoDB",
      "CSS",
    ],
    features: [
      "Responsive fitness centre website",
      "Training programs and class timetable",
      "Coach profile and information",
      "Online enquiry form",
      "MongoDB enquiry storage",
      "Email notifications for enquiries",
    ],
    badge: "Full Stack Web Application",
    badges: null as string[] | null,
    github: "#",
    demo: "#",
    mockup: "gbfc",
  },
];


export const education = {
  degree: "Bachelor of Computer Science and Engineering",
  institution: "VTU Belagavi, Karnataka",
  cgpa: "6.5",
  date: "September 2026",
};

export const languages = ["English", "Hindi", "Kannada", "Tamil", "Malayalam"];
