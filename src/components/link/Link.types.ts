type Align = "left" | "center" | "right";

interface Hover {}

export interface LinkTypes {
  href: string;
  text: string;
  width?: string;
  fontFamily?: string;
  fontColor?: string;
  isUppercase?: boolean;
  isUnderline?: boolean;
  hover?: Hover;
  fontBold?: number;
  isItalic?: boolean;
  padding?: string;
  border?: string;
  bgColor?: string;
  transition?: number;
  radius?: string;
  textAlign?: Align;
}
