import type { CvId, CvProfile, SkillGroup } from './types'

/** Source: text from «FULL STACK - ANDREW DERVYASHKO.pdf» (ANDREW_DEREVYASHKO_FULL_STACK.pdf had no text layer). */

const sharedName = 'Andrew Derevyashko'

const sharedLanguages = ['English', 'Belarusian', 'Russian']

const sharedContacts: CvProfile['contacts'] = [
  { label: 'Email', value: 'derevishko@gmail.com', href: 'mailto:derevishko@gmail.com' },
  {
    label: 'LinkedIn',
    value: 'linkedin.com/in/andrey-dzeraviashka-76609217b',
    href: 'https://www.linkedin.com/in/andrey-dzeraviashka-76609217b',
  },
  { label: 'Telegram', value: '@i_undefined', href: 'https://t.me/i_undefined' },
]

const sharedEducation: CvProfile['education'] = [
  {
    place: 'Belarusian State University, Minsk',
    degree: "Bachelor's degree",
    period: '2015 — 2020',
  },
]

const frontendSkills: SkillGroup[] = [
  {
    group: 'Frontend',
    items: [
      'React',
      'Redux',
      'TypeScript',
      'JavaScript',
      'SCSS / CSS',
      'Canvas / PixiJS',
      'Responsive UI & Accessibility',
    ],
  },
  {
    group: 'Real-time',
    items: ['WebRTC & WebSockets'],
  },
  {
    group: 'Messaging',
    items: ['Apache Kafka', 'RabbitMQ'],
  },
  {
    group: 'AI',
    items: ['LLM integration'],
  },
  {
    group: 'Quality & Delivery',
    items: ['Unit Testing (Jest/Vitest)', 'Git', 'CI/CD'],
  },
]

const backendSkills: SkillGroup[] = [
  {
    group: 'Backend',
    items: ['Node.js', 'TypeScript', 'NestJS', 'GraphQL', 'Microservices'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'MongoDB', 'Elasticsearch', 'Redis'],
  },
  {
    group: 'Messaging',
    items: ['Apache Kafka', 'RabbitMQ'],
  },
  {
    group: 'AI',
    items: ['LLM integration'],
  },
  {
    group: 'Platform',
    items: ['Docker', 'AWS', 'WebSocket & WebRTC'],
  },
  {
    group: 'Quality',
    items: ['Unit/Integration Testing', 'CI/CD'],
  },
]

const fullstackSkills: SkillGroup[] = [
  {
    group: 'Core',
    items: ['TypeScript', 'React', 'Node.js', 'NestJS', 'GraphQL'],
  },
  {
    group: 'Data',
    items: ['PostgreSQL', 'Elasticsearch', 'Redis'],
  },
  {
    group: 'Messaging',
    items: ['Apache Kafka', 'RabbitMQ'],
  },
  {
    group: 'AI',
    items: ['LLM integration'],
  },
  {
    group: 'Real-time & UI',
    items: ['WebRTC & WebSockets', 'SCSS'],
  },
  {
    group: 'Platform & Quality',
    items: ['Docker', 'AWS', 'Unit Testing', 'CI/CD'],
  },
]

export const cvProfiles: Record<CvId, CvProfile> = {
  frontend: {
    id: 'frontend',
    label: 'Frontend',
    name: sharedName,
    title: 'Frontend Engineer',
    headline:
      'React, TypeScript, LLM-assisted UI · High-Performance & Real-time Systems',
    summary:
      'Frontend-focused Engineer with 8 years of TypeScript experience. Specialist in high-performance interfaces, having achieved a 2.5x rendering speedup for a real-time PVP engine using Canvas/PixiJS. Currently developing cutting-edge security features showcased at Black Hat USA 2025, including LLM-assisted analytics UX. Expert in accessible, scalable UIs and low-latency communication via WebRTC and WebSockets.',
    skills: frontendSkills,
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Developed advanced security analytics features showcased at Black Hat USA 2025, focusing on high-density data visualization.',
          'Integrated LLM-assisted summaries and contextual hints into security dashboards, helping analysts interpret telemetry faster.',
          'Reduced regression bugs and production issues by 40% through the implementation of a comprehensive Unit Testing suite.',
          'Optimized frontend data-fetching logic, resulting in a 5x speed increase for critical analytical queries.',
          'Architected accessible, enterprise-grade interfaces (WCAG) and modular UI components for security professionals.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'NDA (Web Game Project)',
        period: 'May 2025 — May 2026',
        highlights: [
          'Engineered a 2.5x increase in match-time UI performance by optimizing PixiJS/Canvas rendering cycles and minimizing React reconciliation.',
          'Developed a low-latency PVP gameplay interface using WebRTC for state synchronization and WebSockets for real-time events.',
          'Architected a "Booster & Active Items" system with complex UI flows for real-time effect visualization.',
          'Implemented synchronized rating updates and post-match transition flows using an event-driven frontend architecture.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Designed a scalable microservices architecture using NestJS and GraphQL tailored for complex data operations.',
          'Built an advanced search engine using Elasticsearch with custom relevance scoring and multi-parameter filtering.',
          'Connected RabbitMQ task queues and Kafka event streams to keep search indexing and pricing updates consistent across services.',
          'Developed a robust payment integration layer and dynamic pricing engine for real-time inventory management.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Delivered a real-time video streaming experience for vehicle repair monitoring, enhancing customer transparency.',
          'Developed internal tools including an online car auction platform and automated HR workflow systems.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },

  backend: {
    id: 'backend',
    label: 'Backend',
    name: sharedName,
    title: 'Backend Engineer',
    headline:
      'Node.js, NestJS, Kafka & RabbitMQ · Microservices, AI & Real-time Systems',
    summary:
      'Backend Engineer with 8 years of expertise in Node.js/NestJS microservices. Successfully boosted server responsiveness by 150% for a real-time PVP platform and led a full-scale architectural migration from Express to NestJS. Currently building high-performance backend systems for security features presented at Black Hat USA 2025, including LLM-assisted services, with a focus on 5x query optimization and rigorous testing.',
    skills: backendSkills,
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Engineered critical backend components for security features presented at Black Hat USA 2025.',
          'Built LLM-backed API endpoints for telemetry summarization and analyst guidance within enterprise security analytics.',
          'Achieved a 5x performance gain in data retrieval by optimizing complex SQL queries and indexing strategies for audit logs.',
          'Significantly improved system reliability and reduced regression rates by introducing a strict Unit Testing culture.',
          'Integrated high-load security APIs and ensured 99.9% ingestion reliability for enterprise analytics.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'NDA (Web Game Project)',
        period: 'May 2025 — May 2026',
        highlights: [
          'Spearheaded a full backend migration from Express to NestJS, implementing a modular architecture.',
          'Boosted server responsiveness by 150% during peak PVP matches through PostgreSQL query optimization and efficient WebSocket state management.',
          'Engineered a real-time "Effect Resolution" engine for gameplay mechanics, ensuring consistent state across match participants.',
          'Established automated CI/CD pipelines and deployment strategies for low-latency game servers.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Architected a high-throughput microservices platform using NestJS and GraphQL for a multi-tenant ecosystem.',
          'Built scalable data infrastructure with Elasticsearch, implementing complex search algorithms and ingestion pipelines.',
          'Implemented RabbitMQ for asynchronous jobs and Apache Kafka for domain event propagation powering search and dynamic pricing.',
          'Developed secure, PCI-compliant payment integrations and a real-time dynamic pricing engine.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Built scalable backends for real-time video streaming and car auction bidding with high availability.',
          'Automated internal workflows for HR and vehicle service centers, improving operational efficiency.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },

  fullstack: {
    id: 'fullstack',
    label: 'Fullstack',
    name: sharedName,
    title: 'Full Stack Engineer',
    headline:
      'TypeScript · React, NestJS, Kafka, RabbitMQ & LLM · Real-time & High-Load',
    summary:
      'Full Stack Engineer with 8 years of experience in the TypeScript ecosystem. Delivered a 250% performance gain for a real-time PVP platform and currently developing advanced security features showcased at Black Hat USA 2025, including LLM-assisted analytics. Proven ability to optimize end-to-end performance (up to 5x query speedup) and maintain high code quality through rigorous testing and modern architecture.',
    skills: fullstackSkills,
    languages: sharedLanguages,
    experience: [
      {
        role: 'Full Stack Engineer',
        company: 'Timspark',
        period: 'June 2024 — Present',
        highlights: [
          'Developed cutting-edge security features presented at Black Hat USA 2025, bridging complex backend logic with intuitive UI.',
          'Shipped LLM-assisted workflows end to end—from API orchestration to dashboard UX—for faster security telemetry review.',
          'Optimized full-stack performance, achieving a 5x reduction in query latency for enterprise-level analytics.',
          'Instituted a robust Unit Testing framework, resulting in a significantly more stable codebase and fewer production regressions.',
          'Collaborated on high-density data dashboards with a focus on performance, accessibility, and modular design.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'NDA (Web Game Project)',
        period: 'May 2025 — May 2026',
        highlights: [
          'Delivered an end-to-end PVP game platform: NestJS real-time backend + high-performance React/Canvas gameplay UI.',
          'Improved overall match performance by 2.5x through full-stack optimization (server responsiveness + client-side rendering).',
          'Developed a synchronized real-time gameplay mechanic system (boosters/active items) using WebRTC and WebSockets.',
          'Migrated legacy Express services to a modular NestJS architecture without disrupting active gameplay flows.',
        ],
      },
      {
        role: 'Backend Engineer',
        company: 'Kodan',
        period: 'October 2020 — June 2024',
        highlights: [
          'Built a scalable microservices platform (NestJS/GraphQL) and a custom search engine (Elasticsearch) for a yacht marketplace.',
          'Wired RabbitMQ and Kafka into pricing and search pipelines so inventory and index state stayed aligned under load.',
          'Shipped end-to-end features including secure payment integrations and real-time pricing updates.',
        ],
      },
      {
        role: 'Full Stack Developer',
        company: 'Renault Group, Minsk',
        period: 'October 2018 — October 2020',
        highlights: [
          'Engineered a live video streaming experience and a car auction bidding system from the ground up.',
          'Automated internal HR and workforce management processes, increasing daily inquiry processing efficiency.',
        ],
      },
    ],
    education: sharedEducation,
    contacts: sharedContacts,
  },
}

export const cvOrder: CvId[] = ['frontend', 'backend', 'fullstack']
