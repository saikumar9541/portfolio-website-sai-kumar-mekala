export const PROFILE_DATA = {
  name: "Sai Kumar Mekala",
  role: "Full Stack Developer",
  bio: "Passionate Full Stack Developer with 2+ years of experience in building scalable web applications. Strong expertise in React.js, Node.js, and cloud technologies. Committed to delivering high-quality code and excellent user experiences.",
  email: "saikumarmekala00@gmail.com",
  phone: "(+91) 8096479541",
  location: "Hyderabad, India",
  resumeLink: "https://drive.google.com/uc?export=download&id=1wDXvjPTxLv_2qn4GAb6vpBb_DI1nfmD3", // Replace YOUR_FILE_ID with your actual Google Drive file ID
  socials: {
    linkedin: "https://linkedin.com/in/sai-kumar-mekala",
    github: "https://github.com/saikumar9541",
    twitter: "https://twitter.com/your-profile"
  }
};

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Computer Science",
    institution: "Sree Vidyanikethan Engineering College",
    location: "Tirupati, India",
    period: "2018 - 2022",
    achievements: [
      "CGPA: 8.5/10",
      "Participated in various technical competitions and hackathons",
      "Member of the College Technical Club"
    ]
  }
];

export const SKILLS = {
  frontend: [
    { name: "JavaScript/TypeScript", level: 90 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Vue.js", level: 80 },
    { name: "HTML5/CSS3", level: 90 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Material UI", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 85 },
    { name: "Django", level: 75 },
    { name: "RESTful APIs", level: 90 },
    { name: "GraphQL", level: 80 }
  ],
  databases: [
    { name: "MongoDB", level: 85 },
    { name: "MySQL", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "Redis", level: 70 }
  ],
  devops: [
    { name: "Docker", level: 75 },
    { name: "Kubernetes", level: 70 },
    { name: "AWS", level: 75 },
    { name: "CI/CD", level: 70 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "JIRA", level: 85 },
    { name: "Postman", level: 85 },
    { name: "VS Code", level: 90 }
  ]
};

export const EXPERIENCE = [
  {
    company: "Magsway Technologies Inc",
    role: "Full Stack Developer",
    location: "Hyderabad, India",
    period: "February 2023 - Present",
    description: [
      "Developed and maintained multiple web applications using React.js, Node.js, and MongoDB",
      "Implemented secure authentication systems and integrated various third-party APIs",
      "Optimized application performance resulting in 40% faster load times",
      "Collaborated with cross-functional teams to deliver high-quality solutions",
      "Mentored junior developers and conducted code reviews"
    ],
    technologies: ["React.js", "Node.js", "MongoDB", "AWS", "Docker"]
  },
  {
    company: "Constella Intelligence",
    role: "Full Stack Developer",
    location: "Hyderabad, India",
    period: "January 2022 - November 2022",
    description: [
      "Built reusable UI components using React.js and implemented responsive designs",
      "Developed RESTful APIs using Node.js and Express.js",
      "Implemented user management system and licensing features",
      "Created automated report generation system improving efficiency by 50%",
      "Participated in agile development processes and sprint planning"
    ],
    technologies: ["React.js", "Node.js", "Express.js", "MySQL", "Redis"]
  }
];

export const PROJECTS = [
  {
    title: "AI-Powered Chatbot Complaint System",
    description: "Developed an intelligent customer complaint management system using AI to automate complaint registration and routing",
    longDescription: "The system uses natural language processing to understand customer complaints, automatically categorizes them, and routes them to appropriate departments. It includes real-time status tracking and automated response generation.",
    technologies: ["React", "Node.js", "OpenAI API", "MongoDB", "Socket.io"],
    github: "https://github.com/saikumar9541/chatbot-complaint",
    features: [
      "AI-powered complaint classification",
      "Real-time status tracking",
      "Automated response generation",
      "Analytics dashboard"
    ]
  },
  {
    title: "Hospital Ventilator Tracking System",
    description: "Built a real-time ventilator inventory management system for hospitals during the COVID-19 pandemic",
    longDescription: "The system provides real-time tracking of ventilator availability across multiple hospitals, helping medical staff quickly locate and allocate resources. It includes features for maintenance scheduling and usage analytics.",
    technologies: ["Next.js", "Express", "Socket.io", "PostgreSQL", "Redis"],
    github: "https://github.com/saikumar9541/ventilator-tracking",
    features: [
      "Real-time inventory tracking",
      "Multi-hospital dashboard",
      "Maintenance scheduling",
      "Usage analytics"
    ]
  },
  {
    title: "Student Information Management System",
    description: "Designed and implemented a comprehensive student information tracking system",
    longDescription: "A full-featured student management system that handles student records, attendance tracking, grade management, and generates various academic reports. It includes a parent portal for monitoring student progress.",
    technologies: ["Vue.js", "Django", "MySQL", "Redis", "Docker"],
    github: "https://github.com/saikumar9541/student-management",
    features: [
      "Student records management",
      "Attendance tracking",
      "Grade management",
      "Parent portal",
      "Report generation"
    ]
  }
];

export const CERTIFICATIONS = [
  {
    name: "AWS Certified Developer - Associate",
    issuer: "Amazon Web Services",
    date: "2023",
    link: "https://www.credential.net/aws-developer"
  },
  {
    name: "MongoDB Certified Developer",
    issuer: "MongoDB University",
    date: "2022",
    link: "https://university.mongodb.com/certification"
  }
];