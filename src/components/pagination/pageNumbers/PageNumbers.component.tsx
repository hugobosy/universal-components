import React from "react";
import { PageNumbersTypes } from "./PageNumbers.types";
import { ListItem, NumbersList } from "./PageNumbers.styles";
import { Link } from "../../link/Link.styles";

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
      <NumbersList>
        {pageNumbers.map((number) => (
          <ListItem key={number}>
            <Link
              padding="5px 8px"
              border="1px solid black"
              transition={0.4}
              onClick={() => paginate(number)}
              href="!#"
            >
              {number}
            </Link>
          </ListItem>
        ))}
      </NumbersList>
    </nav>
  );
};
