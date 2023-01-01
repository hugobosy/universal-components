import React, { useEffect, useState } from "react";
import { PaginationTypes } from "./Pagination.types";
import { Data } from "./data/Data.component";
import { PageNumbers } from "./pageNumbers/PageNumbers.component";
import { fetchData } from "./Pagination.utils";

export const PaginationComponent: React.FC<PaginationTypes> = ({
  url,
  style,
}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [dataPerPage] = useState<number>(10);

  useEffect(() => {
    fetchData(setLoading, setData, url);
  }, []);

  const indexOfLastPost = currentPage * dataPerPage;
  const indexOfFirstPost = indexOfLastPost - dataPerPage;
  const currentPosts = data.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <>
      <Data data={currentPosts} loading={loading} />
      <PageNumbers
        totalPosts={data.length}
        postsPerPage={dataPerPage}
        paginate={paginate}
        style={style}
      />
    </>
  );
};
