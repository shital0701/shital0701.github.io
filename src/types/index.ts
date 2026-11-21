export interface Project {
  id: string;
  title: string;
  category: string;
  categoryBadge: string;
  isFeatured: boolean;
  isPoc: boolean;
  shortDescription: string;
  fullDescription: string;
  roleAndContributions: string[];
  technicalChallenges: string[];
  solutions: string[];
  businessImpact?: string[];
  techStack: string[];
  gradientTheme: {
    bgGradient: string;
    pillBg: string;
    buttonBg: string;
    accentColor: string;
    borderColor: string;
  };
  visualType: 'hrms' | 'vehicle-dispatch' | 'audit' | 'ecommerce' | 'vscode-ai' | 'rag-qa' | 'email-assistant' | 'voice-agent' | 'image-gen' | 'mcp-tools';
  metrics?: { label: string; value: string }[];
}

export interface SkillCategory {
  title: string;
  iconName: string;
  skills: string[];
}

export interface Achievement {
  id: string;
  title: string;
  subtitle: string;
  year: string;
  organization: string;
  quote: string;
  details: string[];
  badgeColor: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}
