interface Links {
  name: string;
  link: string;
}

type Position = "relative" | "absolute" | "fixed";

interface Hover {
  bgColor?: string;
  fontWeight?: number;
  radius?: string;
  isUnderline?: boolean;
  border?: string;
  textShadow?: string;
}
export interface NavigationTypes {
  position?: Position;
  links: Links[];
  isColumn?: boolean;
  gap?: string;
  fontFamily?: string;
  fontColor?: string;
  hover?: Hover;
  transition?: number;
  color: string;
}
