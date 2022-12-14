import { Position } from "../../types/position";

interface Links {
  name: string;
  link: string;
}

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
  positionBlock?: Position;
  links: Links[];
  isColumn?: boolean;
  gap?: string;
  fontFamily?: string;
  hover?: Hover;
  transition?: number;
  color: string;
}
