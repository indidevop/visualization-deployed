import React, { useState, useContext, useEffect } from "react";
import dataContext from "../context/dataContext";
import Card from "./Card"


const CardContainer = () => {
  const { jsondata } = useContext(dataContext);
  const { mode } = useContext(dataContext);

  let i=0;
  
  let md=mode;

  return (
    <div className="flex flex-wrap justify-center">
      {jsondata.map((obj) => {
        return <Card key={i++} data={obj} />;
      })}
    </div>
  );
};

export default CardContainer;
