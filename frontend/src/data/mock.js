// Portfolio Mock Data for Ayush Vishwakarma

export const personalInfo = {
  name: "Ayush Vishwakarma",
  title: "Data Analyst | Software Developer",
  tagline: "Turning Data into Actionable Insights",
  email: "ayush6vishwakarma@gmail.com",
  phone: "+91-9430795350",
  location: "Vadodara, Gujarat, India",
  linkedin: "https://linkedin.com/in/ayush-vishwakarma06",
  github: "https://github.com/Vishwa0611",
  photo: "https://customer-assets.emergentagent.com/job_5395ab16-3d51-4c9f-97d8-8010c6fbdb01/artifacts/ohy9xh5m_2203051050113.jpeg",
  resumeUrl: "https://customer-assets.emergentagent.com/job_5395ab16-3d51-4c9f-97d8-8010c6fbdb01/artifacts/8c3z6skv_Ayush.pdf",
  summary: "Final-year B.Tech CSE student with expertise in Python, SQL, Tableau, Power BI, and Statistical Analytics. Experienced in data validation, analysis, and visualization with a strong foundation in software development. Detail-oriented, analytical, and eager to apply skills in data analytics and software development roles."
};

export const skills = {
  programming: [
    { name: "Python", level: 90 },
    { name: "SQL", level: 85 },
    { name: "Flask", level: 75 }
  ],
  dataAnalysis: [
    { name: "Pandas", level: 85 },
    { name: "NumPy", level: 80 },
    { name: "Matplotlib", level: 80 },
    { name: "Statistical Analysis", level: 75 }
  ],
  visualization: [
    { name: "Power BI", level: 85 },
    { name: "Tableau", level: 85 },
    { name: "Looker Studio", level: 80 },
    { name: "Excel", level: 90 }
  ],
  databases: [
    { name: "MySQL", level: 85 },
    { name: "PostgreSQL", level: 75 },
    { name: "Database Management", level: 80 }
  ]
};

export const experience = [
  {
    id: 1,
    role: "Data Analyst Associate Intern",
    company: "Excelerate",
    type: "Remote",
    duration: "Mar - Apr 2025",
    responsibilities: [
      "Built interactive dashboards in Looker Studio for learner insights",
      "Designed charts for KPIs, demographics, and engagement trends",
      "Used filters to enhance data clarity and user experience"
    ]
  }
];

export const projects = [
  {
    id: 1,
    title: "NYC Taxi Fare Analysis",
    year: "2025",
    description: "Analyzed NYC taxi data using Python and statistical tests to compare fare trends by payment method. Card payments yield higher fares, supporting pricing and revenue optimization.",
    technologies: ["Python", "Pandas", "Statistical Analysis", "Data Visualization"],
    github: "https://github.com/Vishwa0611/NYC-taxi-fare-analysis",
    highlights: [
      "Processed large-scale NYC taxi trip data",
      "Applied statistical hypothesis testing",
      "Generated actionable business insights"
    ]
  },
  {
    id: 2,
    title: "AtliQ Sales Dashboard",
    year: "2024",
    description: "Built Tableau dashboard using MySQL data to track sales and revenue trends. Replaced Excel reports with real-time insights for faster decisions.",
    technologies: ["Tableau", "MySQL", "Data Visualization", "Business Intelligence"],
    github: "https://github.com/Vishwa0611/AtliQ-Sales-Dashboard",
    highlights: [
      "Designed interactive sales analytics dashboard",
      "Integrated MySQL database for real-time data",
      "Improved decision-making efficiency"
    ]
  }
];

export const education = [
  {
    id: 1,
    degree: "B.Tech Computer Science and Engineering",
    institution: "Parul University",
    duration: "2022 - 2026",
    grade: "CGPA: 6.86 / 10",
    current: true
  },
  {
    id: 2,
    degree: "Class 12th",
    institution: "Madhusudan Public School, Chakradharpur",
    duration: "2022",
    grade: "61.20%",
    current: false
  },
  {
    id: 3,
    degree: "Class 10th",
    institution: "S J DAV Public School, Chaibasa",
    duration: "2020",
    grade: "71.66%",
    current: false
  }
];

export const certifications = [
  {
    id: 1,
    title: "Financial Reporting Specialization",
    description: "Compliance, reporting standards, audit documentation",
    icon: "FileText"
  },
  {
    id: 2,
    title: "Data Visualisation: Empowering Business with Effective Insights",
    description: "Accuracy-focused dashboards in Power BI",
    icon: "BarChart3"
  },
  {
    id: 3,
    title: "Data for Business Analysts Using Excel",
    description: "Advanced formulas, PivotTables, validation checks",
    icon: "Table2"
  }
];

export const coreCompetencies = [
  "Data Validation",
  "Data Visualization",
  "KPI Reporting",
  "Analytical Thinking",
  "Problem Solving",
  "Communication",
  "Collaboration",
  "Data-driven Design"
];
