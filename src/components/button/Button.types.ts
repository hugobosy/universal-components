type Display = "block" | "flex" | "grid" | "none";

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
}
