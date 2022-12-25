import { Dispatch, SetStateAction } from "react";

interface AccordionItems {
  header: string;
  content: string;
}
export interface AccordionTypes {
  accordionItems: AccordionItems[];
  maxWidth?: string;
  heightContent?: string;
  bgHeader?: string;
  margin?: string;
  padding?: string;
  show?: any;
  index?: any;
}
