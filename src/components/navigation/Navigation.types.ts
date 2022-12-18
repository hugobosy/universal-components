interface Links {
  name: string;
  link: string;
}

type Position = "relative" | "absolute" | "fixed";

interface Hover {}
export interface NavigationTypes {
  position?: Position;
  links: Links[];
  isColumn?: boolean;
  gap?: string;
  fontFamily?: string;
  fontColor?: string;
  hover?: Hover;
  transition?: number;
}
