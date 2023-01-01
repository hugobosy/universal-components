import React, { useEffect, useState } from "react";
import axios from "axios";
import { PaginationTypes } from "./Pagination.types";

export const PaginationComponent: React.FC<PaginationTypes> = ({ url }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const res = await axios.get(url);
      setData(res.data);
      setLoading(false);
    };

    fetchData();
  }, []);

  return <h1>MyApp</h1>;
};
