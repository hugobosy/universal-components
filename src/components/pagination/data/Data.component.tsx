import React from "react";
import { DataTypes } from "./Data.types";

export const Data: React.FC<DataTypes> = ({ data, loading }) => {
  if (loading) {
    return <p>Loading...</p>;
  }
  return (
    <ul>
      {data.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
    </ul>
  );
};
