// EDIT THIS FILE to maintain your portfolio. Empty optional links are hidden automatically.
export interface Project {
  slug: string;
  title: string;
  description: string;
  fullDescription: string;
  technologies: string[];
  image: string;
  github: string;
  demo: string;
  date: string;
  category: string;
  featured: boolean;
  status: string;
  problem: string;
  solution: string;
  features: string[];
  architecture: string;
  challenges: string;
  results: string;
  learned: string;
  screenshots: { src: string; alt: string }[];
  metrics?: { label: string; value: string }[];
}
export const portfolioData = {
  personalInfo: {
    name: "Yousef Ehab Disoki",
    shortName: "Yousef Ehab",
    initials: "YE",
    title: "Communications & Computer Engineering Student",
    location: "Cairo, Egypt",
    availability: "Open to internships & collaborations",
    headline: ["Engineering ideas.", "Building what’s next."],
    intro:
      "I connect software with engineering — building intelligent systems, thoughtful mobile experiences, and tools for real-world challenges.",
    roles: [
      "Machine Learning Builder",
      "Flutter Developer",
      "Software Engineer in the Making",
      "Linux Enthusiast",
      "Problem Solver",
    ],
    biography:
      "I’m Yousef, a Communications and Computer Engineering student at Benha University. I enjoy turning engineering fundamentals into working software, from navigating Cairo’s metro to training computer vision models.",
    philosophy:
      "My interests meet at the intersection of intelligent software and physical systems. Railway technology, Linux, networking, and embedded systems keep me curious about how the whole system works.",
    interests: [
      "Machine Learning & AI",
      "Software Engineering",
      "Mobile Development",
      "Linux & Networking",
      "Embedded Systems & IoT",
      "Railway & Communication Systems",
    ],
    profileImage: "",
    cv: "/cv/Yousef-Ehab-CV.pdf",
  },
  socialLinks: [
    {
      label: "GitHub",
      url: "https://github.com/Yousef-Ehab-5",
      icon: "github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/yousef-ehab-681803290",
      icon: "linkedin",
    },
    {
      label: "Email",
      url: "mailto:yousef.disoki.5127@gmail.com",
      icon: "email",
    },
  ],
  navigation: [
    "Home",
    "About",
    "Experience",
    "Projects",
    "Skills",
    "Education",
    "Certificates",
    "Volunteering",
    "Activities",
    "Contact",
  ],
  education: [
    {
      university: "Benha University",
      faculty: "Shoubra Faculty of Engineering",
      degree: "Bachelor of Engineering",
      major: "Communications and Computer Engineering",
      startYear: "2023",
      expectedGraduation: "2028",
      gpa: "",
      coursework: [
        "Artificial Intelligence",
        "Operating Systems",
        "Database Systems",
        "Data Structures",
        "Digital Signal Processing",
        "Communication Systems",
        "Electric Circuits",
        "Control Systems",
      ],
    },
  ],
  experience: [
    {
      organization: "Alstom",
      role: "Railway Signaling & Systems Engineering Trainee",
      date: "Jul – Aug 2024",
      location: "Cairo, Egypt",
      description:
        "Explored safety-critical railway systems, requirements traceability, configuration management, and verification & validation. Produced technical documentation and AutoCAD system layouts.",
      skills: ["IXL / ICC / ATS / ATC", "SCADA", "V&V", "AutoCAD"],
      certificate: "",
    },
    {
      organization: "Creativa Innovation Hub · NTI",
      role: "Machine Learning for Data Analysis Trainee",
      date: "Apr – Jul 2026",
      location: "Nasr City, Cairo",
      description:
        "Completed 120 hours spanning data preprocessing, feature engineering, supervised and unsupervised learning, model evaluation, and a freelance career track.",
      skills: ["Python", "scikit-learn", "TensorFlow", "EDA"],
      certificate: "",
    },
    {
      organization: "NTI · Creativa",
      role: "Red Hat Linux / RHCSA Training",
      date: "2026",
      location: "Egypt",
      description:
        "Linux system administration training through RHCSA Admin I & II, with hands-on command-line practice and system management.",
      skills: ["RHEL", "Linux", "System Administration"],
      certificate: "",
    },
    {
      organization: "Khalda Petroleum",
      role: "Technical Training",
      date: "",
      location: "Egypt",
      description:
        "Practical exposure to fiber optics, networking infrastructure, and CCTV systems.",
      skills: ["Fiber Optics", "Networking", "CCTV"],
      certificate: "",
    },
    {
      organization: "Huawei",
      role: "Machine Learning & Big Data Training",
      date: "2025",
      location: "",
      description:
        "Training in machine learning and big data, connecting data analysis concepts with practical technical learning.",
      skills: ["Machine Learning", "Big Data"],
      certificate: "",
    },
  ],
  projects: [
    {
      slug: "cairo-metro-guide",
      title: "Cairo Metro Guide",
      description: "Making a complex city network feel like a simple journey.",
      fullDescription:
        "A Flutter application for navigating Cairo Metro Lines 1, 2, and 3, developed with a five-person student team.",
      technologies: ["Flutter", "Dart", "Git", "GitHub"],
      image: "/images/projects/metro.svg",
      github: "",
      demo: "",
      date: "2026",
      category: "Flutter",
      featured: true,
      status: "In development",
      problem:
        "Passengers need clear routes across multiple lines, interchanges, and station choices.",
      solution:
        "Bring trip planning, route preferences, and practical journey information together in one mobile experience.",
      features: [
        "Starting and destination station selection",
        "Routes and interchanges",
        "Travel-time and ticket-price estimates",
        "Nearest station and place search",
        "Saved journeys",
      ],
      architecture:
        "A modular Flutter application separating network data, route calculation, storage, online services, and screens.",
      challenges:
        "Balancing fewer stops against fewer interchanges and coordinating work across a shared Git repository.",
      results:
        "Built a working journey-planning interface with a modular architecture for continued team development.",
      learned:
        "Graph-based routing, team collaboration, and separating application logic from UI.",
      screenshots: [],
    },
    {
      slug: "facial-emotion-recognition",
      title: "Facial Emotion Recognition",
      description:
        "Exploring how convolutional networks interpret human expression.",
      fullDescription:
        "A CNN-based facial emotion recognition experiment using the FER2013 dataset, with class-level evaluation to understand strengths and limitations.",
      technologies: ["Python", "TensorFlow", "Keras", "CNN"],
      image: "/images/projects/emotion.svg",
      github: "",
      demo: "",
      date: "2026",
      category: "Machine Learning",
      featured: true,
      status: "Research project",
      problem:
        "Facial expressions vary widely, and aggregate accuracy can hide weak performance on minority classes.",
      solution:
        "Train and evaluate a CNN using accuracy and per-class F1 scores.",
      features: [
        "FER2013 image classification",
        "CNN training pipeline",
        "Class-level evaluation",
        "Performance analysis",
      ],
      architecture:
        "Image preprocessing → CNN training → test-set predictions → accuracy and per-class F1 evaluation.",
      challenges:
        "Class imbalance and distinguishing expressions with similar visual features.",
      results:
        "52.54% test accuracy over 7,178 examples. Happy F1: 0.7794; surprise F1: 0.6713. Fear and disgust remain areas for improvement.",
      learned:
        "Why class-level metrics and dataset limitations matter alongside headline accuracy.",
      screenshots: [],
      metrics: [
        { label: "Test accuracy", value: "52.54%" },
        { label: "Test examples", value: "7,178" },
        { label: "Happy F1", value: "0.7794" },
      ],
    },
    {
      slug: "cryptanalysis-system",
      title: "Cryptanalysis System",
      description: "A hands-on workspace for ciphers, attacks, and analysis.",
      fullDescription:
        "A Python cryptography and cryptanalysis application covering classical ciphers and AES experimentation.",
      technologies: ["Python", "PyCryptodome", "Cryptography"],
      image: "/images/projects/crypto.svg",
      github: "",
      demo: "",
      date: "2025",
      category: "Software",
      featured: true,
      status: "Academic project",
      problem:
        "Cipher operations and attack techniques can be difficult to understand through equations alone.",
      solution:
        "Provide a graphical interface for experimentation with encryption and cryptanalysis.",
      features: [
        "Caesar, Affine, Vigenère and Hill ciphers",
        "AES support",
        "Brute-force and frequency analysis",
        "Known-plaintext experiments",
      ],
      architecture:
        "A Python GUI dispatches user actions to individual cipher and analysis modules.",
      challenges:
        "Handling different algorithm inputs and showing useful analysis results in a consistent interface.",
      results:
        "Created an interactive environment for studying classical cryptography and modern encryption concepts.",
      learned:
        "Modular Python development, input validation, and the assumptions behind cryptanalysis techniques.",
      screenshots: [],
    },
    {
      slug: "loto-safety-simulator",
      title: "LOTO Safety Simulator",
      description:
        "Translating industrial safety procedures into an interactive workflow.",
      fullDescription:
        "A Flutter learning application simulating Lockout-Tagout steps for equipment isolation before maintenance. An educational simulation, not a substitute for approved workplace procedures.",
      technologies: ["Flutter", "Dart"],
      image: "/images/projects/metro.svg",
      github: "https://github.com/Yousef-Ehab-5/loto-safety-simulator",
      demo: "",
      date: "Jun 2026",
      category: "Flutter",
      featured: false,
      status: "Academic project",
      problem:
        "Equipment isolation requires a clear sequence and understanding of hazardous energy sources.",
      solution:
        "Model the safety workflow as an interactive educational simulation.",
      features: [
        "Hazardous energy identification",
        "Shutdown and isolation",
        "Lock/tag application",
        "Verification and controlled re-energization",
      ],
      architecture:
        "A step-based Flutter interface with procedural guidance and safety checks.",
      challenges:
        "Representing procedural dependencies clearly in a learning interface.",
      results:
        "Demonstrates maintenance-safety and electrical-isolation principles.",
      learned:
        "Translating engineering procedures into understandable application flows.",
      screenshots: [],
    },
    {
      slug: "flight-route-planner",
      title: "Flight Route Planner",
      description:
        "Comparing graph algorithms through interactive route planning.",
      fullDescription:
        "A Java and JavaFX route-planning application using weighted directed graphs.",
      technologies: ["Java", "JavaFX", "Dijkstra", "A*", "BFS"],
      image: "/images/projects/crypto.svg",
      github:
        "https://github.com/Yousef-Ehab-5/Flight_Route_Planner_using_Java",
      demo: "",
      date: "May 2026",
      category: "Systems",
      featured: false,
      status: "Academic project",
      problem:
        "Route-finding algorithms make different trade-offs in exploration and computation.",
      solution:
        "Implement and compare Dijkstra, A*, and BFS on 50-node and 200-node test graphs.",
      features: [
        "Interactive route planning",
        "Weighted directed graphs",
        "Algorithm comparison",
        "Haversine-distance heuristic",
      ],
      architecture:
        "Java graph structures and routing algorithms connected to a JavaFX interface.",
      challenges:
        "Designing an admissible heuristic and comparing performance across graph sizes.",
      results:
        "In the project’s sparse-graph benchmarks, A* averaged 38% lower path-computation time than Dijkstra.",
      learned:
        "Graph modeling, heuristic design, and benchmark interpretation.",
      screenshots: [],
    },
  ] as Project[],
  skills: [
    {
      category: "Programming Languages",
      items: ["Python", "Dart", "Java", "C / C++"],
    },
    { category: "Frameworks", items: ["Flutter", "JavaFX"] },
    {
      category: "Machine Learning / AI",
      items: ["TensorFlow", "Keras", "scikit-learn", "CNNs", "Data Analysis"],
    },
    { category: "Databases", items: ["SQL", "SQLite", "Firebase"] },
    { category: "Tools", items: ["Git", "GitHub", "VS Code", "AutoCAD"] },
    {
      category: "Operating Systems",
      items: ["Linux", "Red Hat Enterprise Linux", "Windows"],
    },
    {
      category: "Networking",
      items: ["Computer Networks", "Fiber Optics", "CCTV Systems"],
    },
    {
      category: "Engineering Technologies",
      items: [
        "SCADA",
        "Railway Signaling",
        "Communication Systems",
        "IoT / Embedded Fundamentals",
      ],
    },
  ],
  certificates: [
    {
      name: "Machine Learning & Big Data",
      organization: "Huawei",
      date: "Sep 2025",
      credential: "",
      image: "",
      skills: ["Machine Learning", "Big Data"],
    },
    {
      name: "Machine Learning for Data Analysis",
      organization: "Creativa Innovation Hub · NTI",
      date: "Jul 2026",
      credential: "",
      image: "",
      skills: ["120-hour program", "Python", "Model Evaluation"],
    },
  ],
  activities: [
    {
      organization: "GDGoC · Benha University, Shoubra",
      role: "Head of Mobile Applications",
      date: "2026",
      description:
        "Leading Flutter learning activities and supporting a project-based mobile development curriculum.",
      skills: ["Leadership", "Flutter", "Mentoring"],
    },
    {
      organization: "Shoubra Racing Team",
      role: "Autonomous Driving Team Activities",
      date: "",
      description:
        "Participating in engineering team activities with an interest in autonomous driving and intelligent systems.",
      skills: ["Teamwork", "Computer Vision", "Engineering"],
    },
  ],
  volunteering: [
    {
      organization: "Para Badminton International 2026",
      role: "Team Liaison Officer · Turkey & England",
      date: "Jan 2026",
      description:
        "Supported team communication and accessible logistics across competition and training sessions in Egypt’s New Administrative Capital.",
      skills: ["Communication", "Coordination", "Accessibility"],
    },
    {
      organization: "IHF Men’s Super Globe 2025",
      role: "Hall Director",
      date: "Sep – Oct 2025",
      description:
        "Coordinated staff, crowd flow, and hall operations for an international club handball tournament.",
      skills: ["Operations", "Leadership", "Event Management"],
    },
  ],
  achievements: [] as { title: string; description: string; date: string }[],
  contact: {
    email: "yousef.disoki.5127@gmail.com",
    heading: "Let’s build something meaningful.",
    description:
      "Have an internship, an interesting engineering problem, or a project in mind? I’d love to hear about it.",
  },
  seo: {
    title: "Yousef Ehab | Communications & Computer Engineer",
    description:
      "Portfolio of Yousef Ehab — engineering student building machine learning, Flutter, software, and intelligent systems projects.",
    siteUrl: "",
    image: "/images/social-preview.png",
  },
};
