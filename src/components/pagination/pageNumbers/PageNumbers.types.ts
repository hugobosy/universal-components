import { LinkTypes } from "../../link/Link.types";

export interface PageNumbersTypes {
  totalPosts: number;
  postsPerPage: number;
  paginate: (number: number) => void;
  style: LinkTypes;
}
