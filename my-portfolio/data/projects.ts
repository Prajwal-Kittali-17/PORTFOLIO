export type ProjectLink = {
  label: string
  href: string
}

export type Project = {
  slug: string
  title: string
  subtitle: string
  description: string
  role: string
  year: string
  tags: string[]
  highlights: string[]
  links?: ProjectLink[]
}

export const projects: Project[] = [
  {
    slug: 'campus-connect',
    title: 'Campus Connect',
    subtitle: 'Collaboration platform for students',
    description:
      'Campus Connect is a web platform designed to help students collaborate, share notes, and manage academic resources efficiently. The system includes authentication, file uploads, and real-time updates. It was built to simulate a scalable campus-level internal tool.',
    role: 'Full Stack Developer',
    year: '2025',
    tags: ['React', 'Node.js', 'Express', 'MySQL', 'REST API', 'Docker'],
    highlights: [
      'Built secure authentication using JWT',
      'Designed relational database schema for user-generated content',
      'Implemented RESTful APIs for notes and resource management',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Prajwal-Kittali-17' },
    ],
  },
  {
    slug: 'taskforge',
    title: 'TaskForge',
    subtitle: 'Backend-first task management',
    description:
      'TaskForge is a productivity-focused task management application allowing users to create, track, and prioritize tasks. The backend was designed with modular architecture and optimized database queries for performance.',
    role: 'Backend Developer',
    year: '2024',
    tags: ['Node.js', 'MySQL', 'Docker', 'REST API', 'MVC'],
    highlights: [
      'Designed scalable backend architecture using MVC pattern',
      'Optimized SQL queries to reduce response time',
      'Implemented role-based access control',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Prajwal-Kittali-17' },
    ],
  },
  {
    slug: 'devhub-dashboard',
    title: 'DevHub Dashboard',
    subtitle: 'Developer insights dashboard',
    description:
      'DevHub Dashboard is a modern React-based interface showcasing developer statistics and project insights. It emphasizes UI consistency, responsiveness, and component reusability.',
    role: 'Frontend Developer',
    year: '2024',
    tags: ['React', 'JavaScript', 'CSS', 'UI/UX'],
    highlights: [
      'Built reusable component architecture',
      'Implemented responsive layout for all screen sizes',
      'Integrated mock analytics data visualization',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Prajwal-Kittali-17' },
    ],
  },
  {
    slug: 'containerized-api-service',
    title: 'Containerized API Service',
    subtitle: 'Dockerized REST microservice',
    description:
      'A microservice-based REST API built using Node.js and containerized with Docker. The project demonstrates understanding of environment configuration, container networking, and scalable backend design.',
    role: 'Backend Developer',
    year: '2025',
    tags: ['Node.js', 'Docker', 'Microservices', 'REST API', 'MySQL'],
    highlights: [
      'Designed modular REST endpoints',
      'Configured Docker networking and environment variables',
      'Structured service for scalability and maintainability',
    ],
    links: [
      { label: 'GitHub', href: 'https://github.com/Prajwal-Kittali-17' },
    ],
  },
]

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug)
