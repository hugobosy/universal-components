import { Dispatch, SetStateAction } from "react";

interface AccordionItems {
  header: string;
  content: string;
}
export interface AccordionTypes {
  accordionItems: AccordionItems[];
  show?: any;
  index?: any;
}
