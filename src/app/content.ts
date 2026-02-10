export const siteContent = {
  brand: {
    initials: 'LA',
    name: 'Lehlomela Mokoena',
    role: 'Java Developer',
  },
  nav: [
    { label: 'About', href: '#about' },
    { label: 'Capabilities', href: '#capabilities' },
    { label: 'Contact', href: '#contact' },
  ],
  hero: {
    badge: 'Backend / Cloud / APIs',
    headline: 'I build reliable Java services',
    accent: 'that scale cleanly',
    lead:
      'Spring Boot, REST, SQL, messaging, and pragmatic testing. I like clear interfaces, predictable deployments, and systems that fail loudly.',
    cta: [
      { label: 'View capabilities', href: '#capabilities', variant: 'primary' },
      { label: 'Get in touch', href: '#contact', variant: 'ghost' },
    ],
    highlights: ['Java / Spring Boot', 'PostgreSQL / Redis', 'Docker / CI/CD'],
    image: {
      src: 'assets/developer.jpg',
      alt: 'Portrait of the developer',
      stamp: 'JAVA / SPRING / MICROSERVICES',
    },
  },
  about: {
    title: 'About',
    description:
      "I'm a Java developer focused on backend systems: services, data, and integrations. I enjoy turning fuzzy requirements into maintainable APIs and observable production workloads.",
    cards: [
      {
        title: 'What I do',
        description:
          'Design and build Spring Boot applications, background workers, and integrations (REST, OAuth2, webhooks, queues).',
      },
      {
        title: 'How I work',
        description:
          'Small PRs, tests where it matters, performance where it counts, and logs/metrics/traces from day one.',
      },
      {
        title: 'Tooling',
        description:
          'Java 8, Spring, Maven/Gradle, PostgreSQL, Redis, Kafka/RabbitMQ, Docker, GitHub Actions.',
      },
    ],
  },
  projects: {
    title: 'Projects',
    description: 'A few representative builds. Swap these with real links and details.',
    items: [
      {
        title: 'Order Service',
        tag: 'Spring Boot / Postgres / Kafka',
        description:
          'A microservice that validates carts, reserves inventory, and publishes events. Idempotent APIs, outbox pattern, and metrics dashboards.',
        links: [
          { label: 'Code', href: '#', aria: 'Order Service code' },
          { label: 'Demo', href: '#', aria: 'Order Service demo' },
        ],
      },
      {
        title: 'Auth Gateway',
        tag: 'Spring Security / OAuth2 / JWT',
        description:
          'A gateway that centralizes authentication and rate limits public endpoints. Includes audit logging and token introspection.',
        links: [
          { label: 'Code', href: '#', aria: 'Auth Gateway code' },
          { label: 'Docs', href: '#', aria: 'Auth Gateway docs' },
        ],
      },
      {
        title: 'Reporting Pipeline',
        tag: 'Batch / S3 / SQL',
        description:
          'Nightly ETL that aggregates business KPIs. Validations, backfills, and a simple admin UI for reruns.',
        links: [
          { label: 'Write-up', href: '#', aria: 'Reporting Pipeline writeup' },
          { label: 'Dashboard', href: '#', aria: 'Reporting Pipeline dashboard' },
        ],
      },
    ],
  },
  capabilities: {
    title: 'Capabilities',
    description:
      'How I approach backend systems and deliver reliable, observable services.',
    cards: [
      {
        title: 'API design and versioning',
        description:
          'Clear contracts, consistent error models, and backward-compatible changes for stable integrations.',
      },
      {
        title: 'Data modeling and persistence',
        description:
          'Relational schemas, indexes, and migrations that keep queries fast and data trustworthy.',
      },
      {
        title: 'Reliability and resilience',
        description:
          'Retries, timeouts, circuit breakers, and idempotency to keep services predictable under load.',
      },
      {
        title: 'Observability and operations',
        description:
          'Structured logs, metrics, traces, and alerts that make incidents easier to debug and resolve.',
      },
      {
        title: 'Performance and scalability',
        description:
          'Caching strategies, async workflows, and queue-driven processing for steady throughput.',
      },
      {
        title: 'Security by default',
        description:
          'Authentication, authorization, and input validation with sensible defaults and careful reviews.',
      },
    ],
  },
  contact: {
    title: 'Contact',
    description: "Want to collaborate ? Send a note and I'll reply quickly.",
    info: [
      { label: 'Email', value: 'lehlomelam@proton.me', href: 'mailto:lehlomelam@proton.me' },
      { label: 'LinkedIn', value: 'linkedin.com/in/yourname', href: '#' },
      { label: 'GitHub', value: 'github.com/LehlomelaM', href: '#' },
      { label: 'Location', value: 'Gauteng, South Africa', href: '' },
    ],
    form: {
      labels: {
        name: 'Name',
        email: 'Email',
        message: 'Message',
      },
      namePlaceholder: 'Lehlomela Mokoena',
      emailPlaceholder: 'lehlomelam@proton.me',
      messagePlaceholder: 'Tell me about your project...',
      note:
        'Wire to a service (Formspree, Netlify Forms) when deploying.',
    },
  },
  footer: {
    name: 'Lehlomela Mokoena',
    note: 'Built with Angular.',
  },
} as const;
