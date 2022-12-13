type Display = "block" | "flex" | "grid" | "none";

interface Hover {
  bgColor?: string;
  fontColor?: string;
  padding?: string;
  radius?: string;
  shadow?: string;
}

export interface ButtonTypes {
  text: string;
  bgColor?: string;
  fontFamily?: string;
  fontColor?: string;
  border?: string;
  isUppercase?: boolean;
  display?: Display;
  padding?: string;
  radius?: string;
  shadow?: string;
  transition?: number;
  hover?: Hover;
  onClick: () => void;
}
