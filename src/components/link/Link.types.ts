type Align = "left" | "center" | "right";

interface Hover {
  bgColor?: string;
  fontWeight?: number;
  radius?: string;
  isUnderline?: boolean;
  border?: string;
  textShadow?: string;
}

export interface LinkTypes {
  href: string;
  text: string;
  width?: string;
  fontFamily?: string;
  color?: string;
  isUppercase?: boolean;
  isUnderline?: boolean;
  hover?: Hover;
  fontWeight?: number;
  isItalic?: boolean;
  padding?: string;
  border?: string;
  bgColor?: string;
  transition?: number;
  radius?: string;
  textAlign?: Align;
  textShadow?: string;
}
