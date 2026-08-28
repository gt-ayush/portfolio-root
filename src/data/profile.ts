export const personal = {
  name: 'Ayush Kumar Gupta',
  headline: 'Systems Engineer | Backend & Low-Level Infrastructure',
  intro:
    "18-year-old Systems Engineer specializing in low-level systems, Linux architecture, and backend development. Driven by hands-on troubleshooting and 'chaos learning' to build robust infrastructure, ranging from post-quantum cryptography scanning engines to custom operating system environments.",
  emails: ['guptaayush12347@gmail.com', 'gt-ayush@outlook.com'],
  location: 'Phagwara, Punjab, India',
  socials: {
    linkedin: 'https://www.linkedin.com/in/ayush-kumar-gupta-root',
    github: 'https://github.com/gt-ayush',
    leetcode: 'https://leetcode.com/u/Fpn18p5UsM/',
    kaggle: 'https://www.kaggle.com/gt0ayush',
  },
};

export const skillGroups: { category: string; items: string[] }[] = [
  {
    category: 'Languages',
    items: [
      'C / C++',
      'HTML5, HTMLX, CSS3',
      'Go',
      'Python',
      'Java',
      'Bash / Shell Scripting, Batch Scripting',
    ],
  },
  {
    category: 'OS & Environments',
    items: ['Linux, Android, Windows'],
  },
  {
    category: 'Systems',
    items: ['VirtualBox & UEFI Administration'],
  },
  {
    category: 'Networking',
    items: ['Network & Socket Programming', 'DNS Management & SSH'],
  },
  {
    category: 'Cybersecurity',
    items: [
      'Android Reverse Engineering (JADX, Apktool, Gephi, Binary Analysis)',
      'Mobile Penetration Testing',
      'Post-Quantum Cryptography (PQC)',
    ],
  },
  {
    category: 'Cloud & Infrastructure',
    items: ['AWS (Amazon Web Services)', 'Docker, Podman & VPS Management'],
  },
  {
    category: 'Tools',
    items: ['Git & GitHub'],
  },
  {
    category: 'Databases',
    items: ['PostgreSQL / MySQL / MariaDB'],
  },
  {
    category: 'Web Frameworks',
    items: ['Django'],
  },
  {
    category: 'AI & Data',
    items: ['Prompt Engineering'],
  },
];

export const projects = [
  {
    title: 'Quantum Sentinel (Quantum-Scanner)',
    problem:
      'Need for robust post-quantum cryptography scanning and security research infrastructure.',
    description:
      'A post-quantum cryptography (PQC) scanning engine backend built for security analysis.',
    techStack: ['Go', 'Linux', 'CBOM'],
    contribution: 'Designed the directory architecture and developed the core backend engine.',
    features: ['PQC Scanning', 'Security Analysis Backend'],
    githubUrl: 'https://github.com/gt-ayush/Quantum-Scanner',
  },
  {
    title: 'KOTMAN',
    problem: 'Requirement for concurrent network tunneling and secure socket programming.',
    description:
      'A networking utility focused on system administration, concurrent programming, and network tunneling.',
    techStack: ['Go', 'Bash'],
    contribution: 'Architected socket programming interfaces and system defenses.',
    features: ['Network Tunneling', 'Concurrent Processing', 'Cybersecurity Defenses'],
    githubUrl: 'https://github.com/gt-ayush/kotman',
  },
  {
    title: 'Shadow OS Factory',
    problem:
      'Requirement for a specialized operating environment dedicated to security research without persistent ISO footprint.',
    description:
      'An operating system factory initiative focused on custom Linux kernel configurations and system defenses.',
    techStack: ['Shell', 'Bash', 'Linux Kernel'],
    contribution:
      'Architected low-level systems configurations and shell scripts for automated, non-persistent security deployments.',
    features: ['Security Research Environment', 'Custom Linux Build', 'Automated Configuration'],
    githubUrl: 'https://github.com/gt-ayush/shadow-os-factory',
  },
  {
    title: 'Shadow_Web',
    problem: 'Need for specialized DNS and VPS management for isolated infrastructure.',
    description:
      'A networking backend managing DNS servers, Podman containers, and SSH connections for secure web operations.',
    techStack: ['Go'],
    contribution: 'Developed custom DNS management and backend server operations.',
    features: ['DNS Server', 'VPS Management', 'Podman Integration'],
    githubUrl: 'https://github.com/gt-ayush/Shadow_Web',
  },
  {
    title: 'Mesh Network Backend',
    problem: 'Requirement for robust backend routing in decentralized environments.',
    description: 'A networking backend built to support mesh routing protocols.',
    techStack: ['Python', 'Django'],
    contribution: 'Developed backend logic and routing architectures.',
    features: ['Mesh Routing', 'API Endpoints'],
    githubUrl: 'https://github.com/gt-ayush/mesh',
  },
  {
    title: 'Time-Based Encryption',
    problem: 'Need for dynamic encryption methodologies tied to temporal data.',
    description: 'A security project implementing time-based SHA-256 encryption mechanics.',
    techStack: ['Python', 'Cryptography'],
    contribution: 'Designed the encryption logic and hashing implementations.',
    features: ['SHA-256', 'Temporal Hashing'],
    githubUrl: 'https://github.com/gt-ayush/encription',
  },
];

export const experience = [
  {
    company: 'SudoSecurity.org',
    role: 'Systems Engineer / Security Researcher',
    duration: '23 Jul - Present',
    responsibilities: [
      'Collaborating remotely with a US-based organization on security research and systems infrastructure.',
      'Write technical articles on programming, cybersecurity, and Linux for CoderOasis, a technology blog for the developer and security community, covering topics ranging across my areas of hands-on expertise.',
    ],
    link: 'https://sudosecurity.org',
  },
];

export const education = [
  {
    degree: 'B.Tech CSE — Cyber Security and Block Chain',
    institution: 'Lovely Professional University (LPU)',
    year: '2029',
    cgpa: '6.91',
    coursework: ['Operating Systems', 'Networking', 'Cryptography', 'C/C++'],
  },
  {
    degree: '12th Grade (CBSE)',
    institution: 'G.D. Goenka School, Varanasi',
    year: '2024-2025',
    cgpa: '60%',
    coursework: [],
  },
  {
    degree: '10th Grade (ICSE)',
    institution: "St. Clare's School, Lokai, Koderma",
    year: '2022-2023',
    cgpa: '86.4%',
    coursework: [],
  },
];

export const certifications = [
  {
    title: 'Generative AI Mastermind',
    issuer: 'Outskill',
    year: '2025',
    link: 'https://www.linkedin.com/posts/ayush-kumar-gupta-root_certificate-of-completion-activity-7396846262169341952-kZqn?utm_source=share&utm_medium=member_desktop&rcm=ACoAAFjAjhoB0sfElGv83EZ-PP5bYxGXYtw1KR4',
  },
  {
    title: 'AWS Cloud Practitioner',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/ab1d473f13acd53eef632df7b13fa7d326f24a2b46b9eaf0a1853f988e22dc29?trk=share_certificate',
  },
  {
    title: 'Become a Data Analyst',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/d8cde00d93cfdc4fe4e3b077f4270b64dfe8910cc04cd26a84e6c8075e712fdc?trk=share_certificate',
  },
  {
    title: 'Learning Linux Command Line',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/39691677f20fd01780baca3725f511c634fccf895503dd7e74908c115f068d2d?trk=share_certificate',
  },
  {
    title: 'Learning Git and GitHub',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/4dafe3ad37320455651883c1fc126c770e5624d295ace4f9279e6c69d6df89c9?trk=share_certificate',
  },
  {
    title: 'Learning DNS',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/58edcb2a905bad299675ffc652001a5537fdcaeb4406b95ab559a519b2271819?trk=share_certificate',
  },
  {
    title: 'How to Boost Your Productivity with AI Tools',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/2a6bed8b25b4980cf792b984ea7948b1f3fb75865b02a54ee8331636ea6bdbf3?trk=share_certificate',
  },
  {
    title: 'Public Speaking Foundations',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/4d445600967993ed50cbf2f524efe3b478272715504a7264915c4b6bc781ba9f?trk=share_certificate',
  },
  {
    title: 'Time Management',
    issuer: 'LinkedIn',
    year: '2025',
    link: 'https://www.linkedin.com/learning/certificates/5f2bfffdd64c73c8d271e731213ffb01c906ead5d1140fb1b5c863a4b329b32a?trk=share_certificate',
  },
];
