import React from "react";
import { data } from "./container/data";
import CardInfo from "./card-info";
import { DataProos } from "./container/types";

const Card = () => {
  const dataList = [...data, ...data];

  return (
    <>
      {dataList.map((el) => (
        <CardInfo key={el.id} front={el.front} back={el.back} id={el.id} />
      ))}
    </>
  );
};

export default Card;
