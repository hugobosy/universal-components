interface Links {
  name: string;
  link: string;
}

interface Hover {}
export interface NavigationTypes {
  links: Links[];
  isColumn?: boolean;
  gap?: string;
  fontFamily?: string;
  fontColor?: string;
  hover?: Hover;
  transition?: number;
}
