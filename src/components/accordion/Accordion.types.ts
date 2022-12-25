import { Dispatch, SetStateAction } from "react";

interface AccordionItems {
  header: string;
  content: string | JSX.Element;
}
export interface AccordionTypes {
  accordionItems: AccordionItems[];
  maxWidth?: string;
  heightContent?: string;
  bgHeader?: string;
  margin?: string;
  padding?: string;
  fontFamily?: string;
  fontWeight?: number;
  fontSize?: string;
  color?: string;
  customCss?: string;
  customHeader?: string;
  customContent?: string;
  show?: any;
  index?: any;
}
