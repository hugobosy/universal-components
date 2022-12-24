import { Align, Decoration, Transform } from "../../types/text";
import { Position } from "../../types/position";

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
  transform?: Transform;
  decoration?: Decoration;
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
  color?: string;
  position?: Position;
}
