import { FolderGit2, Home, User } from 'lucide-react';
import { Icons } from '@/components/icons';

export const icons = {
  Home: Home,
  Projects: FolderGit2,
  Skills: User,
  Contact: User,
  GitHub: Icons.gitHub,
  LinkedIn: Icons.linkedIn,
  YouTube: Icons.youtube,
};

export type IconKey = keyof typeof icons;
