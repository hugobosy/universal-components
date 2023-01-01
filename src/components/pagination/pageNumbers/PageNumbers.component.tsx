import React from "react";
import { PageNumbersTypes } from "./PageNumbers.types";

export const PageNumbers: React.FC<PageNumbersTypes> = ({
  totalPosts,
  postsPerPage,
  paginate,
}) => {
  const pageNumbers = [];

  for (let i = 1; i < Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a onClick={() => paginate(number)} href="!#">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};
