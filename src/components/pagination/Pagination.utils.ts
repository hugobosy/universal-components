import axios from "axios";
import { Dispatch, SetStateAction } from "react";

export const fetchData = async (
  setLoading: Dispatch<SetStateAction<boolean>>,
  setData: Dispatch<SetStateAction<any>>,
  url: string
) => {
  setLoading(true);
  const res = await axios.get(url);
  setData(res.data);
  setLoading(false);
};
