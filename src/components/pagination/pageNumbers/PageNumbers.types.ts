export interface PageNumbersTypes {
  totalPosts: number;
  postsPerPage: number;
  paginate: (number: number) => void;
}
