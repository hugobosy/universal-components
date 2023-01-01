import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaginationTypes } from "./Pagination.types";
import { Data } from "./data/Data.component";
import { PageNumbers } from "./pageNumbers/PageNumbers.component";

export const PaginationComponent: React.FC<PaginationTypes> = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    };

    fetchData();
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
      />
    </>
  );
};
