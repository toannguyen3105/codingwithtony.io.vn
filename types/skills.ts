export interface SkillNode {
  id: string;
  group: 'frontend' | 'backend' | 'database' | 'devops' | 'testing' | 'tools' | 'lang';
  value: number;
}

export interface SkillLink {
  source: string;
  target: string;
}

export interface SkillsData {
  nodes: SkillNode[];
  links: SkillLink[];
}
