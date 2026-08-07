import type {
  Certification,
  Competency,
  EducationItem,
  ExperienceItem,
  Profile,
  ProjectItem,
  Publication,
  SkillGroup,
} from "@/types/profile";

// TODO: replace placeholder URLs — see documents/missing_info_template.md
export const profile: Profile = {
  name: "Ho Vi Khanh",
  title: "Information Security Graduate — Offensive Security",
  location: "Ho Chi Minh City, Vietnam",
  email: "vikhanhho@gmail.com",
  phone: "+84 869 008 902",
  summary:
    "Recent Information Security graduate (University of Information Technology, VNU-HCM) focused on offensive security. Built and exploited OWASP Top 10 vulnerability labs (SQLi, XSS, SSRF) using Burp Suite against DVWA and PortSwigger Labs, and automated reconnaissance workflows with Python, Nmap, and the VirusTotal API. Cisco Ethical Hacker certified, with a published fileless-malware detection framework (Springer Nature) and a working olevba/YARA detection tool as further evidence of a long-term commitment to information security.",
  socials: [
    { label: "GitHub", url: "TODO_GITHUB_PROFILE_URL" },
    { label: "LinkedIn", url: "TODO_LINKEDIN_PROFILE_URL" },
  ],
};

export const competencies: Competency[] = [
  {
    title: "Web Application Penetration Testing",
    description:
      "Hands-on exploitation of OWASP Top 10 vulnerabilities (SQLi, XSS, SSRF) using Burp Suite against DVWA and PortSwigger Labs; Cisco Ethical Hacker certified.",
  },
  {
    title: "Reconnaissance & Automation",
    description:
      "Python workflows for automated reconnaissance using Nmap and the VirusTotal API.",
  },
  {
    title: "Security Research & Detection Engineering",
    description:
      "Built a macro-malware detection tool from scratch (VBA extraction with olevba, obfuscation scoring, YARA rule authoring) and contributed to a published fileless-malware detection framework.",
  },
  {
    title: "Machine Learning for Security",
    description:
      "Python, Scikit-learn, Pandas, XGBoost, LLM integration; applied to phishing and malware detection.",
  },
  {
    title: "Systems & Infrastructure",
    description:
      "Kali Linux, Ubuntu, Windows; Windows Server, Active Directory, VMware, PfSense.",
  },
];

export const experience: ExperienceItem[] = [
  {
    organization: "Trung tam An ninh mang (InSecLab), UIT - VNU-HCM",
    role: "Research Intern",
    location: "Ho Chi Minh City, Vietnam",
    startDate: "Sep 2025",
    endDate: "Jan 2026",
    bullets: [
      "Built and tested OWASP Top 10 vulnerability labs and automated reconnaissance workflows using Python, Nmap, and the VirusTotal API",
      "Contributed to G-FLEX, a graph-based fine-tuned transformer framework for fileless malware detection, published by Springer Nature Singapore",
      "Developed a phishing detection system combining Random Forest with LLMs over the PILWD-134K dataset",
      "Researched ML-based detection of malicious NPM and PyPI supply-chain packages",
    ],
  },
];

// TODO: fill in repoUrl / demoUrl — see documents/missing_info_template.md
export const projects: ProjectItem[] = [
  {
    name: "Web Pentest Labs",
    description:
      "Practiced and documented OWASP Top 10 exploitation (SQLi, XSS, SSRF) against DVWA and PortSwigger Labs, simulating real-world attack scenarios and analysing server behaviour under attack.",
    tags: ["DVWA", "Burp Suite", "PortSwigger"],
  },
  {
    name: "Macro Malware Detection Tool",
    description:
      "Detects malicious Office macros by extracting VBA code with olevba, scoring obfuscation patterns such as Chr() and XOR, and identifying VBA purging via YARA rules.",
    tags: ["Python", "olevba", "YARA"],
    repoUrl: "TODO_GITHUB_REPO_URL",
  },
  {
    name: "Phishing Website Detection System",
    description:
      "Real-time phishing detection over hybrid URL and HTML features, designed client-side so it does not depend on third-party lookup services. Dataset of 134,000 sites (PILWD-134K).",
    tags: ["Python", "Scikit-learn", "Pandas", "XGBoost", "BeautifulSoup", "LLMs"],
    date: "Dec 2025",
    repoUrl: "TODO_GITHUB_REPO_URL",
  },
  {
    name: "Network Configuration & Domain System Administration",
    description:
      "Designed a multi-branch internal network and centralised Active Directory domain for high availability and information security; automated GPO security policy deployment.",
    tags: ["Windows Server (AD, DNS, DHCP)", "Ubuntu Server", "VMware", "PfSense"],
    date: "Mar 2026",
  },
];

export const skills: SkillGroup[] = [
  {
    category: "Security Testing",
    items: ["Burp Suite", "DVWA", "PortSwigger Labs", "Nmap", "OWASP Top 10"],
  },
  {
    category: "Programming & ML",
    items: ["Python", "Scikit-learn", "Pandas", "XGBoost", "BeautifulSoup"],
  },
  {
    category: "Detection Engineering",
    items: ["olevba", "YARA", "VirusTotal API"],
  },
  {
    category: "Systems & Infrastructure",
    items: [
      "Kali Linux",
      "Ubuntu",
      "Windows Server",
      "Active Directory",
      "VMware",
      "PfSense",
    ],
  },
];

export const education: EducationItem[] = [
  {
    institution: "University of Information Technology (UIT), VNU-HCM",
    degree: "Bachelor of Engineering in Information Security",
    location: "Ho Chi Minh City, Vietnam",
    dateRange: "2022 – 2026",
    details:
      "Topics: network security, ethical hacking, machine learning for security. Graduated with \"Good\" classification.",
  },
];

export const certifications: Certification[] = [
  { name: "Ethical Hacker", issuer: "Cisco Networking Academy", date: "01/2025" },
  { name: "Google AI Essentials (V1)", issuer: "Google", date: "07/2026" },
];

export const publications: Publication[] = [
  {
    citation:
      'Ho, V.-K. et al. (2026). "G-FLEX: A Graph-Based and Fine-Tuned Transformer Framework with Explainable AI for Fileless Malware Detection."',
    venue: "Springer Nature Singapore",
  },
];
