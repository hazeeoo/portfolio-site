// Типы для проекта

export interface Project {
  id: number;
  title: string;
  description: string;
  tech: string[];
  demoUrl?: string;
  codeUrl?: string;
  imageUrl?: string;
}

export interface Skill {
  id: number;
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'other';
  level?: number; // 0-100 для прогресс-баров
  icon?: string; // URL или название иконки
}

