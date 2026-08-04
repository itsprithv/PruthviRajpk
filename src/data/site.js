/**
 * Portfolio site content — PruthviRaj P Karjagi
 */

export const site = {
  name: 'PruthviRaj P Karjagi',
  shortName: 'pruthvi',
  title: 'Cloud Engineer',
  email: 'pruthvipkarjagi17@gmail.com',
  location: 'India',
  github: 'https://github.com/itsprithv',
  linkedin: 'https://www.linkedin.com/in/pruthviraj-p-karjagi-46108427a/',
  resumeUrl: '/resume/resume.pdf',
  photo: '/profile/photo.jpeg',
  siteUrl: 'https://itsprithv.github.io/PruthviRajpk',
}

export const certificates = [
  {
    title: 'Amazon EKS Knowledge',
    issuer: 'AWS / Amazon',
    file: '/certificates/amazon-eks-knowledge.pdf',
    type: 'Certificate',
  },
  {
    title: 'AWS Cloud Essentials',
    issuer: 'AWS',
    file: '/certificates/aws-cloud-essentials.pdf',
    type: 'Certificate',
  },
  {
    title: 'Kubernetes',
    issuer: 'Cloud & Container Platform',
    file: '/certificates/kubernetes.pdf',
    type: 'Certificate',
  },
  {
    title: 'Marklist',
    issuer: 'Academic record',
    file: '/certificates/marklist.pdf',
    type: 'Academic',
  },
]

export const roles = [
  'Cloud Engineer',
  'AWS',
  'Cloud Infrastructure',
  'CI/CD Pipelines',
  'Infrastructure as Code',
]

export const bio = {
  intro:
    "I'm a Cloud Engineer focused on AWS, cloud infrastructure, and reliable systems in production. I design and build cloud environments — provisioning resources, securing networks, automating deployments, and keeping services running at scale.",
  journey:
    'This portfolio documents what I have built and learned along the way: hands-on AWS projects, infrastructure setups, and automation work.',
  goal:
    'Focused on deepening AWS expertise, production-grade cloud architecture, and infrastructure that is secure, scalable, and cost-efficient.',
}

export const skillGroups = [
  {
    label: 'Cloud',
    items: ['AWS (EC2, S3, IAM, VPC)', 'Cloud Architecture', 'Networking & Security', 'Cost & Scaling'],
  },
  {
    label: 'Cloud Engineering',
    items: ['CI/CD Pipelines', 'Docker', 'Infrastructure as Code', 'Linux / Shell'],
  },
  {
    label: 'Also comfortable with',
    items: ['React', 'Tailwind CSS', 'JavaScript', 'Python'],
  },
]

export const experience = [
  {
    role: 'Cloud Engineer',
    org: 'Self-directed cloud projects',
    period: '2024 — Present',
    highlights: [
      'Designed and provisioned AWS infrastructure including VPC, EC2, and S3',
      'Built CI/CD pipelines with GitHub Actions for automated cloud deployments',
      'Containerized applications with Docker for consistent, reproducible environments',
    ],
  },
]

export const projects = [
  {
    title: 'CI/CD Pipeline on AWS',
    description:
      'Automated build, test, and deploy pipeline using GitHub Actions and AWS, cutting manual deploy steps to zero.',
    tags: ['AWS', 'GitHub Actions', 'CI/CD'],
    gradient: 'bg-[linear-gradient(135deg,#6366f1,#ec4899)]',
    screenshot: null,
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Dockerized Web App',
    description:
      'A containerized application with a reproducible environment and streamlined deployment to the cloud.',
    tags: ['Docker', 'Node.js', 'AWS'],
    gradient: 'bg-[linear-gradient(135deg,#ec4899,#f97316)]',
    screenshot: null,
    github: '',
    demo: '',
    featured: true,
  },
  {
    title: 'Cloud Infrastructure Setup',
    description:
      'VPC, EC2, and S3 configured to deliver core AWS networking, compute, and storage for cloud workloads.',
    tags: ['AWS', 'VPC', 'EC2', 'S3'],
    gradient: 'bg-[linear-gradient(135deg,#f97316,#06b6d4)]',
    screenshot: null,
    github: '',
    demo: '',
    featured: false,
  },
  {
    title: 'This Portfolio Site',
    description:
      "The site you're looking at — React, Tailwind CSS, and Vite, hosted as part of my cloud engineering portfolio.",
    tags: ['React', 'Tailwind', 'Vite'],
    gradient: 'bg-[linear-gradient(135deg,#06b6d4,#6366f1)]',
    screenshot: null,
    github: 'https://github.com/itsprithv',
    demo: '',
    featured: false,
  },
]
