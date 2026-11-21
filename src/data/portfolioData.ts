import { Project, SkillCategory, Achievement, FaqItem } from '@/types';

export const PERSONAL_INFO = {
  name: 'Shital Lanke',
  role: 'Fullstack Developer',
  headline: 'Building Scalable Web Experiences with React.js, Next.js & Nest.js',
  shortBio:
    "I'm Shital Lanke, a Fullstack Developer at Sankey Solutions with 3+ years of experience building enterprise applications, SaaS platforms, real-time dashboards, and AI-powered experiences. I work across the full stack — React.js & Next.js on the frontend, Nest.js on the backend — turning complex business requirements into intuitive, performant, and maintainable products.",
  company: 'Sankey Solutions Pvt. Ltd.',
  startDate: new Date(2023, 5, 1), // June 1, 2023
  location: 'Mumbai, India',
  email: 'shitallanke0701@gmail.com',
  phone: '+91 9324288237',
  linkedin: 'https://www.linkedin.com/in/shital-lanke-7545bb1bb/',
  education: {
    institution: 'University of Mumbai',
    degree: 'Bachelor of Engineering',
    period: '2019 – 2023',
    score: 'CGPA: 8.5',
  },
};

/**
 * Dynamically calculate experience duration from June 2023.
 * Defaults to stable fallback for static prerendering, updated client-side via useEffect.
 */
export function calculateExperience(currentDate?: Date): { years: number; months: number; formatted: string } {
  const start = PERSONAL_INFO.startDate;
  // Use October 2026 as stable build-time date, or passed-in runtime date
  const now = currentDate || new Date(2026, 9, 1);
  
  let years = now.getFullYear() - start.getFullYear();
  let months = now.getMonth() - start.getMonth();
  
  if (months < 0) {
    years -= 1;
    months += 12;
  }
  
  const formatted =
    months === 0
      ? `${years} Years`
      : `${years} Years ${months} Month${months > 1 ? 's' : ''}`;
      
  return { years, months, formatted };
}

export const SPECIALIZATIONS = [
  {
    number: '1',
    title: 'Enterprise SaaS & Multi-Tenant Architecture',
    description:
      'Designing robust folder structures, dynamic branding engines, role-based access control with Keycloak and Azure Entra ID, and modular UI components.',
    tag: 'Scalable Architecture',
  },
  {
    number: '2',
    title: 'High-Performance & Real-Time Operations',
    description:
      'Developing data-heavy dashboards handling 1,000+ daily operational records, live WebSocket status feeds, Google Maps logistics tracking, virtualization, and Core Web Vitals optimization.',
    tag: '24/7 Mission Critical',
  },
  {
    number: '3',
    title: 'Generative AI & LLM Interface Integration',
    description:
      'Building production-ready conversational UIs, streaming responses, RAG document query interfaces with guardrails, Model Context Protocol (MCP) tool calling, and human-in-the-loop workflows.',
    tag: 'GenAI & Tool Calling',
  },
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'Frontend Development',
    iconName: 'Layout',
    skills: [
      'React.js',
      'Next.js (App Router)',
      'JavaScript (ES6+)',
      'TypeScript',
      'HTML5',
      'CSS3',
      'Tailwind CSS',
      'Material UI',
      'shadcn/ui',
      'SCSS',
    ],
  },
  {
    title: 'State Management & Data',
    iconName: 'Database',
    skills: [
      'Redux',
      'Redux Toolkit',
      'React Query (TanStack)',
      'Context API',
      'TanStack Table',
      'Axios',
      'REST API Integration',
    ],
  },
  {
    title: 'Frontend Performance',
    iconName: 'Gauge',
    skills: [
      'Virtualization',
      'Lazy Loading & Suspense',
      'Code Splitting',
      'Dynamic Imports',
      'Client/Server Components',
      'Core Web Vitals & Lighthouse',
      'SSR, SSG & ISR',
      'Client-Side Caching & Memoization',
    ],
  },
  {
    title: 'Authentication & Security',
    iconName: 'ShieldCheck',
    skills: [
      'Keycloak IAM',
      'NextAuth / Auth.js',
      'Azure Entra ID',
      'JWT Authentication',
      'Role-Based Access Control (RBAC)',
      'Protected Routes & Middleware',
    ],
  },
  {
    title: 'Real-Time & Visualization',
    iconName: 'Activity',
    skills: [
      'WebSocket Live Feeds',
      'Apache ECharts',
      'Google Maps API',
      'Interactive Telemetry',
      'Live Operational Dashboards',
    ],
  },
  {
    title: 'Generative AI & LLMs',
    iconName: 'Sparkles',
    skills: [
      'LLM Streaming UIs',
      'RAG Interfaces',
      'LangChain & LangGraph',
      'Model Context Protocol (MCP)',
      'AI Tool Calling',
      'Input/Output Guardrails',
      'Prompt Engineering',
    ],
  },
  {
    title: 'Backend & Databases',
    iconName: 'Server',
    skills: [
      'NestJS',
      'Python',
      'PostgreSQL',
      'MySQL',
      'MongoDB',
      'WordPress & GraphQL',
      'REST API Design',
    ],
  },
  {
    title: 'Cloud & DevOps',
    iconName: 'Cloud',
    skills: [
      'AWS (EC2, S3, RDS, IAM)',
      'AWS Load Balancers',
      'Docker Containers',
      'Kubernetes / EKS',
      'Jenkins CI/CD',
    ],
  },
  {
    title: 'Tools & Workflows',
    iconName: 'Wrench',
    skills: [
      'Git & GitHub',
      'Postman',
      'DBeaver',
      'Husky & Pre-commit',
      'Claude Code',
      'Codex',
      'Antigravity',
      'ChatGPT',
    ],
  },
];

export const WORK_EXPERIENCE = {
  company: 'Sankey Solutions Pvt. Ltd.',
  role: 'Fullstack Developer',
  period: 'Jun 2023 – Present',
  highlights: [
    'Develop enterprise-grade web applications and high-throughput SaaS platforms using React.js, Next.js, TypeScript, Redux, and modern UI architectures.',
    'Architect reusable frontend design systems, modular folder structures, and dynamic theme engines supporting per-tenant custom branding and color palettes.',
    'Implement enterprise authentication and authorization using Keycloak, Azure Entra ID, NextAuth, and role-based access control (RBAC).',
    'Optimize data-intensive operational interfaces handling high concurrency through virtualization, lazy loading, code splitting, memoization, and API abort controllers.',
    'Deliver real-time features using WebSocket live notifications, Apache ECharts telemetry dashboards, and Google Maps vehicle tracking.',
    'Integrate Generative AI capabilities into enterprise products, including policy chatbots, streaming responses, RAG knowledge retrieval, and AI coding tools.',
    'Serve on the Potential Bar Raiser Core Team (2025), driving frontend standards, solutioning client requirements, and mentoring junior engineers.',
  ],
};

export const PROJECTS: Project[] = [
  {
    id: 'hrms-saas',
    title: 'SaaS Human Resource Management System',
    category: 'SaaS / Enterprise HR Technology',
    categoryBadge: 'Enterprise SaaS',
    isFeatured: true,
    isPoc: false,
    shortDescription:
      'A multi-tenant cloud HR platform enabling organizations to manage onboarding, attendance, leave, resource allocation, and approvals with organization-specific branding and AI assistants.',
    fullDescription:
      'A centralized, multi-tenant Human Resource Management System built for multi-organization enterprise adoption. The platform provides complete lifecycle management for employees—onboarding, offboarding, leave tracking, project allocation, and document management—while enforcing granular role-based security and custom organization theming.',
    roleAndContributions: [
      'Architected the frontend codebase and created reusable component systems for multi-organization tenant separation.',
      'Engineered an organization-level dynamic theming system where each tenant selects two primary colors, automatically generating 20 coordinated color shades across the UI.',
      'Configured Keycloak authentication with role-based page authorization and middleware-driven routing for login, authorized screens, and unauthorized fallback.',
      'Constructed complete HR workflows: employee onboarding, policy compliance, resource scheduling, attendance registers, and document verification.',
      'Optimized data-heavy tables with TanStack Table, DOM virtualization, React Query caching, and AbortController request cancellation.',
      'Integrated real-time WebSocket notifications and live activity feeds, as well as Apache ECharts for attendance and resource utilization analytics.',
      'Implemented Generative AI features: an interactive HR policy chatbot and an automated personalized birthday-poem generator with streaming responses.',
    ],
    technicalChallenges: [
      'Allowing multiple tenant organizations to share a single codebase while rendering completely distinct brand palettes and permission trees without runtime style collisions.',
      'Maintaining 60 FPS scrolling and low memory overhead when rendering employee tables with hundreds of columns and thousands of rows.',
      'Enforcing strict RBAC across deeply nested routes and dynamic action buttons based on tenant-specific roles.',
    ],
    solutions: [
      'Built a CSS custom-property theme injector that computes HSL color tokens on the fly from two user-provided brand colors.',
      'Integrated TanStack Table with virtualized row containers and windowing, rendering only viewport rows.',
      'Implemented Next.js middleware and route guards that decode Keycloak JWT tokens and match tenant-specific permission matrices.',
    ],
    businessImpact: [
      'Enabled multi-organization onboarding into a unified SaaS platform, reducing custom deployment overhead to zero.',
      'Streamlined policy inquiries with the AI chatbot, reducing internal HR ticket volume.',
      'Supported seamless cross-department resource management and automated approval hierarchies.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'NestJS',
      'Tailwind CSS',
      'shadcn/ui',
      'Keycloak',
      'React Query',
      'Redux',
      'WebSocket',
      'ECharts',
      'TanStack Table',
    ],
    gradientTheme: {
      bgGradient: 'from-[#E1F7FA] via-[#ECFAF8] to-[#CEF0F5]',
      pillBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#54D5E4',
      borderColor: '#B9EBF1',
    },
    visualType: 'hrms',
    metrics: [
      { label: 'Branding Colors', value: '20 Dynamic Shades' },
      { label: 'Architecture', value: 'Multi-Tenant SaaS' },
      { label: 'Security', value: 'Keycloak RBAC' },
    ],
  },
  {
    id: 'vehicle-dispatch',
    title: 'Vehicle Transport & Dispatch Management System',
    category: 'Automotive / Logistics / Real-Time Operations',
    categoryBadge: 'Automotive Logistics',
    isFeatured: true,
    isPoc: false,
    shortDescription:
      'A mission-critical automotive logistics platform handling ~1,000 vehicles per day from manufacturing plant entry, PDI inspection, and yard storage to trailer allocation and dispatch.',
    fullDescription:
      'An enterprise-scale vehicle logistics and dispatch operations platform built for a leading Indian automobile manufacturer. The system orchestrates end-to-end movement: factory plant entry, pre-delivery inspection (PDI), yard storage management, dealer allocation, transporter load planning, physical security gates, and final outbound dispatch across 24/7 three-shift plant operations.',
    roleAndContributions: [
      'Developed frontend workflows for high-volume operational floors processing approximately 1,000 vehicles daily.',
      'Created reusable data tables, operational screens, search/filter panels, and driver dispatch slips using React.js and Redux.',
      'Integrated Google Maps API for interactive yard and trailer location visibility, featuring a 5 km radius radar for nearby trailer availability during load planning.',
      'Implemented WebSocket real-time updates and notifications across inspection lines, trailer bays, and dispatch gates.',
      'Optimized interfaces for 24/7 continuous use across warehouse scanners, ruggedized tablets, and desktop workstations.',
      'Engineered Apache ECharts operational dashboards monitoring vehicle dwell times, inspection throughput, bottleneck alerts, and load statuses.',
    ],
    technicalChallenges: [
      'Continuous data updates arriving every second from scanner gates and trailer weighbridges without causing UI freezes or dropped events.',
      'Visualizing trailer and yard locations with real-time GPS coordinates while ensuring fast load times on constrained shop-floor networks.',
      'Eliminating manual, error-prone paper slips and disconnected Excel files across three shifts.',
    ],
    solutions: [
      'Implemented debounced Redux actions, localized component state subscriptions, and DOM memoization to prevent unnecessary tree re-renders.',
      'Engineered an interactive Google Maps viewport with marker clustering and geofenced 5 km trailer discovery rings.',
      'Built progressive touch-friendly inspection workflows supporting bar-code scanner wedge input.',
    ],
    businessImpact: [
      'Reduced overall vehicle dispatch processing time by approximately 2x compared to traditional methods.',
      'Handled approximately 1,000 vehicles per day with 24/7 system availability.',
      'Completely replaced paper- and Excel-based tracking with real-time digital visibility.',
    ],
    techStack: [
      'React.js',
      'Redux',
      'Material UI',
      'SCSS',
      'Google Maps API',
      'WebSocket',
      'ECharts',
    ],
    gradientTheme: {
      bgGradient: 'from-[#EFE9FF] via-[#F5F2FF] to-[#DFD6FC]',
      pillBg: 'bg-purple-100 text-purple-800 border-purple-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#7B55EC',
      borderColor: '#D8CCFB',
    },
    visualType: 'vehicle-dispatch',
    metrics: [
      { label: 'Throughput', value: '~1,000 Vehicles/Day' },
      { label: 'Dispatch Speed', value: '~2x Faster Process' },
      { label: 'Tracking Radius', value: '5 km Radar' },
    ],
  },
  {
    id: 'audit-management',
    title: 'Enterprise Audit Management System',
    category: 'Enterprise / Compliance / Audit Management',
    categoryBadge: 'Compliance & Audit',
    isFeatured: true,
    isPoc: false,
    shortDescription:
      'A centralized compliance and audit platform supporting planning, multi-level review workflows, AWS S3 confidential document storage, and an integrated private AI retrieval assistant.',
    fullDescription:
      'A centralized enterprise audit and regulatory compliance platform engineered for a leading automotive industry client. The application coordinates the end-to-end audit lifecycle: scheduling, rule-based frequency triggers, multi-tier evidence reviews (Trainee -> Auditor -> Main Auditor -> Head Auditor sign-off), and confidential document vaulting.',
    roleAndContributions: [
      'Constructed the frontend application from scratch, establishing folder structures, UI token libraries, and core audit workflows.',
      'Implemented Keycloak centralized authentication and fine-grained role-based access control (RBAC) to enforce confidentiality on audit records.',
      'Developed a multi-stage document review workflow with review states: trainee draft, auditor review, main auditor review, and head auditor sign-off.',
      'Configured secure document uploads and preview integrations with AWS S3, utilizing pre-signed URLs, lazy caching, and thumbnail generation.',
      'Built frontend state management and caching using React Query and Redux to eliminate redundant network fetches for audit catalogs.',
      'Developed interactive ECharts analytics for audit completion rates, non-conformance trends, and historical year-over-year comparisons.',
      'Integrated an AI chatbot with the client’s privately deployed model to retrieve relevant authorized audit procedures and historical findings.',
      'Supported automated client generation of structured Excel workbooks and presentation summaries from collected audit inputs.',
    ],
    technicalChallenges: [
      'Enforcing strict confidentiality so that auditors only view documents and sections authorized for their specific inspection tier.',
      'Managing hundreds of high-resolution evidence PDFs and images per audit without degrading browser responsiveness.',
      'Connecting an AI assistant to privately hosted on-premises LLM endpoints while honoring document confidentiality tokens.',
    ],
    solutions: [
      'Engineered screen-level and field-level permission wrappers that dynamically prune unauthorized elements from the DOM.',
      'Created an AWS S3 document pipeline with client-side chunking, mime-type verification, and cached pre-signed preview URLs.',
      'Integrated private AI retrieval endpoints with authorization headers to restrict LLM context strictly to approved audit documents.',
    ],
    businessImpact: [
      'Centralized all audit records into a single tamper-evident digital vault.',
      'Accelerated multi-stage approval cycles from weeks to days with automated sign-off notifications.',
      'Enabled auditors to instantly query historical findings via private AI without risking unauthorized data disclosure.',
    ],
    techStack: [
      'React.js',
      'Tailwind CSS',
      'shadcn/ui',
      'Keycloak',
      'React Query',
      'Redux',
      'AWS S3',
      'ECharts',
    ],
    gradientTheme: {
      bgGradient: 'from-[#E3F6FA] via-[#EEFBFB] to-[#CEF0F5]',
      pillBg: 'bg-teal-100 text-teal-800 border-teal-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#54D5E4',
      borderColor: '#BCE8EE',
    },
    visualType: 'audit',
    metrics: [
      { label: 'Security', value: '4-Tier RBAC' },
      { label: 'Storage', value: 'AWS S3 Vault' },
      { label: 'Intelligence', value: 'Private LLM RAG' },
    ],
  },
  {
    id: 'ecommerce-analytics',
    title: 'E-commerce Business Analytics Platform',
    category: 'E-commerce / Analytics / SaaS',
    categoryBadge: 'E-commerce Analytics',
    isFeatured: true,
    isPoc: false,
    shortDescription:
      'A seller analytics platform connecting authorized marketplace accounts to visualize product-level metrics, search ranking, clicks, conversion rates, and automated keyword bidding.',
    fullDescription:
      'A comprehensive SaaS analytics engine built for e-commerce sellers. The platform ingests marketplace performance metrics, providing deep visibility into product sales trends, advertising spend, organic search rankings, conversion ratios, and keyword bidding performance.',
    roleAndContributions: [
      'Developed high-performance analytics dashboards using Next.js App Router and Redux.',
      'Built multi-metric trend charts, heatmaps, interactive data grids, multi-parameter filters, and full-text SKU search.',
      'Implemented large table performance optimization using row virtualization, keeping frame rates smooth across catalogs with 10,000+ items.',
      'Architected server and client component boundaries in Next.js to combine rapid initial SSR page loads with rich interactive filtering.',
      'Applied Next.js Image optimization, partial route rendering, code splitting, and memoization for optimal Core Web Vitals.',
      'Integrated Stripe subscription checkout workflows, currency conversion toggles, and keyword bid adjustment screens.',
    ],
    technicalChallenges: [
      'Rendering time-series sales charts and dense product catalogs with dozens of financial metrics simultaneously.',
      'Preventing waterfall API requests when users switch across date ranges, product categories, and currency views.',
    ],
    solutions: [
      'Employed server-side data pre-fetching in Next.js page layouts combined with React Query client-side cache hydration.',
      'Implemented virtualized grids that render only visible DOM nodes, dropping initial table render time by over 70%.',
    ],
    businessImpact: [
      'Provided sellers with clear SKU-level profitability and advertising ROI metrics.',
      'Delivered sub-second filter responses across catalogs containing thousands of products.',
    ],
    techStack: [
      'Next.js',
      'TypeScript',
      'Redux',
      'NestJS',
      'PostgreSQL',
      'Material UI',
      'SCSS',
      'Stripe Integration',
    ],
    gradientTheme: {
      bgGradient: 'from-[#F2EEFF] via-[#F8F5FF] to-[#E3D9FC]',
      pillBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#583FBC',
      borderColor: '#D4C6F9',
    },
    visualType: 'ecommerce',
    metrics: [
      { label: 'Data Engine', value: 'Virtualized Grid' },
      { label: 'Architecture', value: 'SSR + Next.js App' },
      { label: 'Billing', value: 'Stripe SaaS' },
    ],
  },
  {
    id: 'vscode-ai-assistant',
    title: 'Internal AI Coding Assistant — VS Code Extension',
    category: 'Developer Tools / Generative AI',
    categoryBadge: 'Hackathon Winner 2025',
    isFeatured: true,
    isPoc: false,
    shortDescription:
      'A hackathon-winning developer productivity extension for Visual Studio Code that integrates an on-premises LLM for inline error highlighting, contextual explanation, and code optimization.',
    fullDescription:
      'An internal developer productivity tool created during a technical hackathon. The extension connects Visual Studio Code directly with an on-premises enterprise LLM server, providing contextual code assistance entirely within the developer’s editor while ensuring company source code never leaves the private network.',
    roleAndContributions: [
      'Co-developed the Visual Studio Code extension and led the frontend webview interface design.',
      'Engineered the error highlighting workflow that parses active file diagnostics and displays contextual inline action buttons.',
      'Built the right-hand webview chat panel that receives selected AST nodes and provides instant fix recommendations.',
      'Implemented real-time streaming response handling from the on-premises LLM server inside the extension webview.',
    ],
    technicalChallenges: [
      'Communicating seamlessly between the VS Code Language Server Protocol (LSP), the editor diagnostic collection, and the webview chat panel.',
      'Ensuring zero source code leakage outside the enterprise perimeter.',
    ],
    solutions: [
      'Utilized the VS Code Webview API with bidirectional message passing to transmit selected code snippets directly to private server endpoints.',
      'Created custom diagnostic gutter decorations and quick-fix command providers that launch contextual chat sessions with pre-populated error context.',
    ],
    businessImpact: [
      'Won First Place in the 2025 Internal Hackathon.',
      'Provided internal developers with instant coding recommendations without exposing proprietary code to external public LLM APIs.',
    ],
    techStack: [
      'VS Code Extension API',
      'TypeScript',
      'On-Premises LLM Integration',
      'Webview UI Toolkit',
      'Streaming REST API',
    ],
    gradientTheme: {
      bgGradient: 'from-[#E1F7FA] via-[#EDFCF9] to-[#D0F3F7]',
      pillBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#54D5E4',
      borderColor: '#B8EBF1',
    },
    visualType: 'vscode-ai',
    metrics: [
      { label: 'Award', value: '1st Place Hackathon' },
      { label: 'Privacy', value: '100% On-Premises' },
      { label: 'Editor', value: 'VS Code Extension' },
    ],
  },
  {
    id: 'rag-policy-qa',
    title: 'Policy Document RAG Question-Answering POC',
    category: 'Generative AI / RAG / Knowledge Retrieval',
    categoryBadge: 'GenAI Proof-of-Concept',
    isFeatured: false,
    isPoc: true,
    shortDescription:
      'A proof-of-concept RAG application enabling users to query organizational policy documents and receive verified answers grounded in retrieved knowledge with input/output guardrails.',
    fullDescription:
      'A proof-of-concept knowledge retrieval system designed to eliminate policy ambiguity for employees. Users ask natural language questions regarding corporate benefits, leave regulations, and security protocols, receiving responses strictly referenced against official policy chunks.',
    roleAndContributions: [
      'Constructed a RAG question-answering prototype utilizing LangChain and LangGraph for agentic workflow orchestration.',
      'Implemented document chunking, embeddings generation, vector storage, and similarity retrieval.',
      'Designed multi-turn conversation memory, passing recent chat context to support follow-up questions.',
      'Explored input and output guardrails to prevent hallucination and reduce out-of-scope answers.',
    ],
    technicalChallenges: [
      'Preventing the model from answering questions when policy documents contained conflicting or missing clauses.',
      'Preserving conversation context without exceeding embedding token limits.',
    ],
    solutions: [
      'Engineered an explicit citation requirement in the system prompt with strict fallback responses when retrieval confidence fell below threshold.',
      'Utilized LangGraph checkpoints to maintain stateful conversation sessions.',
    ],
    businessImpact: [
      'Demonstrated high answer accuracy on complex organizational policies with verified source chunk citations.',
    ],
    techStack: ['Python', 'LangChain', 'LangGraph', 'OpenAI', 'Vector Embeddings', 'RAG'],
    gradientTheme: {
      bgGradient: 'from-[#F3EFFF] via-[#FAF7FF] to-[#E5DBFD]',
      pillBg: 'bg-purple-100 text-purple-800 border-purple-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#7B55EC',
      borderColor: '#DBCDFB',
    },
    visualType: 'rag-qa',
    metrics: [
      { label: 'Architecture', value: 'LangGraph RAG' },
      { label: 'Safety', value: 'Strict Guardrails' },
    ],
  },
  {
    id: 'email-support-assistant',
    title: 'AI Support Email Assistant',
    category: 'Generative AI / Human-in-the-Loop Automation',
    categoryBadge: 'GenAI Proof-of-Concept',
    isFeatured: false,
    isPoc: true,
    shortDescription:
      'A support-team POC that reads incoming customer tickets, extracts key intent, drafts contextual replies, and requires human-in-the-loop review before dispatch.',
    fullDescription:
      'A human-in-the-loop automation proof-of-concept that streamlines support operations. The system analyzes incoming support emails, classifies intent (bug report, feature request, billing inquiry), and drafts empathetic, contextual replies for human agent review.',
    roleAndContributions: [
      'Developed the AI-assisted response generation workflow and conversational state machine.',
      'Built a human-in-the-loop review interface ensuring no AI-drafted email could be sent without human inspection and approval.',
      'Created configurable response templates for common scenarios (requesting logs, acknowledging investigation, scheduling meetings).',
    ],
    technicalChallenges: [
      'Preventing accidental autonomous sends and ensuring agents could quickly tweak drafts.',
    ],
    solutions: [
      'Implemented a mandatory two-step confirmation barrier and side-by-side rich text diff editor for fast agent edits.',
    ],
    businessImpact: [
      'Reduced average first-response drafting time by more than 50% in testing while maintaining 100% human oversight.',
    ],
    techStack: ['TypeScript', 'LLM Workflow Integration', 'React.js', 'Tailwind CSS'],
    gradientTheme: {
      bgGradient: 'from-[#E3F7FA] via-[#F0FCFB] to-[#CFF1F6]',
      pillBg: 'bg-cyan-100 text-cyan-800 border-cyan-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#54D5E4',
      borderColor: '#B9EBF1',
    },
    visualType: 'email-assistant',
    metrics: [
      { label: 'Workflow', value: 'Human-in-the-Loop' },
      { label: 'Draft Speed', value: '>50% Faster Drafts' },
    ],
  },
  {
    id: 'voice-agent-poc',
    title: 'Voice Agent POC',
    category: 'Conversational AI / Voice Interfaces',
    categoryBadge: 'Voice AI Experiment',
    isFeatured: false,
    isPoc: true,
    shortDescription:
      'An end-to-end voice conversational POC that captures microphone audio, performs speech-to-text, queries an LLM, and plays audio responses using text-to-speech.',
    fullDescription:
      'A conversational audio pipeline proof-of-concept demonstrating continuous voice interaction. The system captures spoken questions, transcribes them in near real-time, prompts the language model, and returns natural synthesized speech.',
    roleAndContributions: [
      'Constructed the end-to-end audio pipeline connecting browser MediaRecorder to speech-to-text and text-to-speech services.',
      'Built the voice UI featuring interactive waveform animations, live speech transcript display, and interrupt handling.',
      'Explored audio buffer streaming to reduce turn-around latency between user query and speech output.',
    ],
    technicalChallenges: [
      'Minimizing end-to-end latency so conversational turns felt natural and responsive.',
    ],
    solutions: [
      'Implemented streaming audio chunk transfer and browser Web Audio API audio synthesis playback.',
    ],
    businessImpact: [
      'Established a working blueprint for hands-free operational interfaces in logistics and shop-floor applications.',
    ],
    techStack: ['Web Audio API', 'Speech-to-Text', 'LLM Integration', 'Text-to-Speech', 'React.js'],
    gradientTheme: {
      bgGradient: 'from-[#F1EEFF] via-[#F8F5FF] to-[#E3D8FD]',
      pillBg: 'bg-purple-100 text-purple-800 border-purple-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#7B55EC',
      borderColor: '#D6C7FB',
    },
    visualType: 'voice-agent',
    metrics: [
      { label: 'Pipeline', value: 'STT → LLM → TTS' },
      { label: 'Interface', value: 'Live Waveform UI' },
    ],
  },
  {
    id: 'ai-image-generation',
    title: 'AI Image Generation POC',
    category: 'Generative AI / Image Generation',
    categoryBadge: 'GenAI Experiment',
    isFeatured: false,
    isPoc: true,
    shortDescription:
      'A creative application prototype allowing users to provide text or voice prompts, convert speech to text, generate images via an AI image model, and preview or download results.',
    fullDescription:
      'A proof-of-concept image synthesis studio allowing users to describe visual ideas using either keyboard text or voice dictation. The system refines prompt modifiers, submits requests to an image generation model, and renders interactive previews.',
    roleAndContributions: [
      'Built the frontend studio with prompt enhancements, aspect ratio pickers, and style presets.',
      'Implemented speech-to-text voice prompt input using browser audio capture.',
      'Constructed responsive high-resolution image galleries with download and zoom capabilities.',
    ],
    technicalChallenges: [
      'Handling asynchronous image generation polling and rendering skeleton previews during processing.',
    ],
    solutions: [
      'Implemented status polling with progressive blur placeholders and responsive download triggers.',
    ],
    businessImpact: [
      'Demonstrated intuitive multimodal prompt input for non-technical users.',
    ],
    techStack: ['OpenAI Image Generation', 'React.js', 'Speech Recognition', 'Tailwind CSS'],
    gradientTheme: {
      bgGradient: 'from-[#E2F7FA] via-[#EFFBF9] to-[#CFF0F5]',
      pillBg: 'bg-teal-100 text-teal-800 border-teal-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#54D5E4',
      borderColor: '#B8EBF1',
    },
    visualType: 'image-gen',
    metrics: [
      { label: 'Input Modes', value: 'Text & Voice Input' },
      { label: 'Output', value: 'High-Res Preview & Export' },
    ],
  },
  {
    id: 'mcp-tool-calling',
    title: 'MCP & AI Tool-Calling Exploration',
    category: 'AI Engineering / Developer Productivity',
    categoryBadge: 'AI Engineering Research',
    isFeatured: false,
    isPoc: true,
    shortDescription:
      'An engineering exploration of Model Context Protocol (MCP) and tool-calling architectures to connect LLMs to external APIs, databases, and local system tools.',
    fullDescription:
      'An exploratory technical project focused on understanding the Model Context Protocol (MCP) specification and tool-calling paradigms. The initiative explored how AI assistants can reliably query real-time external data sources, call parameterized backend APIs, and return grounded answers.',
    roleAndContributions: [
      'Investigated MCP client-server communication standards and tool schema definitions.',
      'Created custom tool prototypes enabling an assistant to query databases and inspect mock APIs.',
      'Implemented structured JSON schema validation for tool input arguments and error recovery routines.',
    ],
    technicalChallenges: [
      'Handling tool invocation failures gracefully and ensuring model prompts guided correct tool selection.',
    ],
    solutions: [
      'Applied strict JSON schema definitions with detailed parameter descriptions and step-by-step verification loops.',
    ],
    businessImpact: [
      'Validated agentic tool-use patterns for integration into future enterprise workflows.',
    ],
    techStack: ['Model Context Protocol (MCP)', 'Tool Calling', 'TypeScript', 'LLM Integration', 'JSON Schema'],
    gradientTheme: {
      bgGradient: 'from-[#F1EDFF] via-[#F7F4FF] to-[#E3D9FD]',
      pillBg: 'bg-indigo-100 text-indigo-800 border-indigo-200',
      buttonBg: 'bg-[#583FBC] hover:bg-[#4730A3] text-white',
      accentColor: '#583FBC',
      borderColor: '#D4C6F9',
    },
    visualType: 'mcp-tools',
    metrics: [
      { label: 'Protocol', value: 'Model Context Protocol' },
      { label: 'Execution', value: 'Dynamic Tool Calling' },
    ],
  },
];

export const ACHIEVEMENTS: Achievement[] = [
  {
    id: 'shining-star',
    title: 'Shining Star Award',
    subtitle: 'Recognition for Engineering Excellence',
    year: '2023',
    organization: 'Sankey Solutions Pvt. Ltd.',
    quote:
      'Awarded for exceptional frontend engineering contributions, delivery excellence, and proactive ownership in building enterprise-grade applications.',
    details: [
      'Recognized by leadership for high-quality frontend implementation and clean component architectures.',
      'Demonstrated strong problem-solving skills in delivering business-critical client applications ahead of schedule.',
    ],
    badgeColor: '#7B55EC',
  },
  {
    id: 'hackathon-winner',
    title: 'Hackathon Winner',
    subtitle: '1st Place — Internal Innovation Challenge',
    year: '2025',
    organization: 'Internal Tech Hackathon',
    quote:
      'Won first place for developing an internal VS Code extension powered by an on-premises LLM, enabling inline error highlighting and contextual code optimization suggestions.',
    details: [
      'Integrated private on-premises LLM endpoints to ensure absolute source code confidentiality.',
      'Engineered an interactive VS Code webview chat panel and inline AST diagnostic highlighting.',
    ],
    badgeColor: '#54D5E4',
  },
  {
    id: 'bar-raiser',
    title: 'Potential Bar Raiser Core Team Member',
    subtitle: 'Engineering Leadership & Mentorship',
    year: '2025',
    organization: 'Sankey Solutions Pvt. Ltd.',
    quote:
      'Selected to the Potential Bar Raiser Core Team to champion engineering standards, mentor junior engineers, lead client solutioning, and drive technical excellence.',
    details: [
      'Contribute to frontend architecture decisions and organization-wide development guidelines.',
      'Lead technical requirement analysis and solutioning discussions directly with clients.',
      'Mentor and guide junior developers through code reviews and pair-programming sessions.',
    ],
    badgeColor: '#583FBC',
  },
];

export const FAQS: FaqItem[] = [
  {
    id: 'faq-1',
    question: 'Are you open to new opportunities?',
    answer:
      'Yes. I am looking for full-time Fullstack Developer roles where I can work across React.js / Next.js on the frontend and Nest.js on the backend, especially on SaaS platforms, enterprise products, and AI-powered applications.',
  },
  {
    id: 'faq-2',
    question: 'What is your notice period?',
    answer:
      'My notice period is 30 days, so I can usually join about a month after accepting an offer.',
  },
  {
    id: 'faq-3',
    question: 'Are you open to remote, hybrid, or relocation?',
    answer:
      'All of them. I am based in Mumbai and comfortable with remote, hybrid, or on-site roles in Mumbai, and I am open to relocating for the right opportunity.',
  },
  {
    id: 'faq-4',
    question: 'Do you take freelance or contract work?',
    answer:
      'Not at the moment. I am focused on full-time roles where I can take long-term ownership of a product and grow with the team.',
  },
  {
    id: 'faq-5',
    question: 'What is the best way to reach you?',
    answer:
      'Email is quickest: shitallanke0701@gmail.com. You can also use the contact form below or message me on LinkedIn.',
  },
];
