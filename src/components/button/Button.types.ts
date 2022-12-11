type Display = "block" | "flex" | "grid" | "none";

export interface ButtonTypes {
  text: string;
  bgColor?: string;
  fontFamily?: string;
  fontColor?: string;
  isBorder?: boolean;
  isUppercase?: boolean;
  display?: Display;
}