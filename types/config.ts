export interface Location {
  city: string;
  country: string;
}

export interface Basics {
  name: string;
  label: string;
  email: string;
  phone: string;
  url: string;
  summary: string;
  location: Location;
}

export interface SocialNetwork {
  network: string;
  username: string;
  url: string;
}

export interface NavigationItem {
  name: string;
  href: string;
}

export interface Config {
  basics: Basics;
  socials: SocialNetwork[];
  navigation: NavigationItem[];
}
