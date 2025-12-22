import { FolderGit2, Github, Home, Linkedin, User, Youtube } from 'lucide-react';

export const icons = {
  Home: Home,
  Projects: FolderGit2,
  Skills: User,
  Contact: User,
  GitHub: Github,
  LinkedIn: Linkedin,
  YouTube: Youtube,
};

export type IconKey = keyof typeof icons;
