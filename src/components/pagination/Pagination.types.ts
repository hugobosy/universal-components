import { LinkTypes } from "../link/Link.types";

export interface PaginationContextStylesProps {
  padding: string;
  margin?: string;
  fontSize?: string;
  color?: string;
  border?: string;
}
export interface PaginationTypes {
  url: string;
  style: LinkTypes;
}
