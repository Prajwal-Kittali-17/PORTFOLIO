export type Post = {
  slug: string
  title: string
  date: string
  excerpt: string
  tags: string[]
  readingTime: string
  content: string
}

export const posts: Post[] = [
  {
    slug: 'docker-basics-for-students',
    title: 'Docker Basics: Containers Without Confusion',
    date: '2026-02-26',
    excerpt:
      'A practical Docker starter guide: images, containers, volumes, networks, and the mental model that makes it click.',
    tags: ['Docker', 'Backend', 'DevOps'],
    readingTime: '6 min',
    content:
      "Docker becomes simple once you separate two ideas: an image is a blueprint, and a container is a running instance. An image is what you build and share; a container is what you run.\n\nStart with a tiny loop: (1) write an app, (2) build an image, (3) run a container. If you can do that, you’re already productive.\n\nKey concepts I keep in mind:\n- Images: immutable layers created by a Dockerfile\n- Containers: processes with isolated filesystem + networking\n- Volumes: durable storage that survives container restarts\n- Networks: how containers talk to each other (and to your host)\n\nWhen you build APIs, Docker helps you avoid the “works on my machine” problem by pinning dependencies and runtime behavior. It also makes deployment and testing much more repeatable.",
  },
  {
    slug: 'building-scalable-node-apis',
    title: 'Building Scalable Node.js APIs: The Practical Checklist',
    date: '2026-01-11',
    excerpt:
      'A pragmatic approach to scaling Node APIs: structure, validation, errors, DB access, and operational basics.',
    tags: ['Node.js', 'REST API', 'Architecture'],
    readingTime: '7 min',
    content:
      "Scalability isn’t only about handling more traffic — it’s about keeping your code and systems easy to change when requirements evolve.\n\nHere’s the checklist I follow when building APIs with Node.js:\n\n1) Keep a clear structure\nUse a simple separation like routes → controllers → services → data access. The goal is clean boundaries so you can extend features without tangling everything together.\n\n2) Validate inputs early\nTreat request validation as a first-class step. It prevents messy edge cases and makes your API behavior predictable.\n\n3) Make error handling consistent\nStandardize error responses and log unexpected failures with enough context (route, user, request id).\n\n4) Optimize DB access before you optimize code\nIndexes, query shape, and avoiding N+1 patterns often matter more than micro-optimizations in JavaScript.\n\n5) Think about operations from day one\nBasic logging, health endpoints, and environment-based config make your API easier to run and debug in real deployments.",
  },
  {
    slug: 'thinking-in-react-components',
    title: 'Thinking in React Components: From UI to Structure',
    date: '2025-11-03',
    excerpt:
      'How I break down UIs into reusable components, with a focus on clarity, responsibility, and scalability.',
    tags: ['React', 'Frontend', 'UI/UX'],
    readingTime: '6 min',
    content:
      "When a UI grows, the biggest risk is not features — it’s confusion. “Where should this logic live?” “Which component owns this state?”\n\nMy approach is to design components around responsibility:\n- Presentational components: render UI, receive data via props\n- Container components: fetch data, hold state, coordinate interactions\n- Shared primitives: small, reusable UI building blocks\n\nA simple test: if a component is hard to name, it’s often doing too much. Split it until each part has a clear role.\n\nThis mindset makes it easier to reuse UI patterns and keep your codebase consistent as you build new pages and features.",
  },
]

export const getPostBySlug = (slug: string) => posts.find((p) => p.slug === slug)
