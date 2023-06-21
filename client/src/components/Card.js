import { React, useContext, useEffect, useState } from "react";
import DoughNut from "./Doughnut";
import dataContext from "../context/dataContext";

const Card = ({ data }) => {
  const {mode} = useContext(dataContext)
    
  
  return (
    <div className="p-2 w-[90vw] lg:w-1/2 2xl:w-1/3">
      <div className={`flex flex-col md:flex-row lg:h-[50vh] border-2 border-gray-300 border-opacity-60 rounded-lg overflow-hidden ${mode==="light"?"":"bg-[rgb(33,37,41)]"}`}>
        <div className="p-6 flex flex-col md:w-2/3">
          <div>
            <h2
              className={
                `tracking-widest text-xs title-font font-medium mb-1 ${mode==="light"?"":"text-gray-400"}`
              }
            >
              {data.sector} {data.topic && data.sector ? "|" : ""}{" "}
              {data.topic.charAt(0).toUpperCase() + data.topic.slice(1)}
            </h2>
            <h1
              
              className={`limit-h1 title-font text-lg font-medium  mb-1 ${mode==="light"?"":"text-gray-300"}`}
            >
              {data.insight}
            </h1>
            <h2 className={`tracking-widest text-xs title-font font-medium ${mode==="light"?"":"text-gray-400"} mb-2`}>
              {data.region} {data.country ? `| ${data.country}` : ""}
            </h2>
            <p  className={`limit-p leading-relaxed mb-3 ${mode==="light"?"":"text-gray-300"}`}>
              {data.title}
            </p>
          </div>
          <div className=" flex flex-wrap mt-auto">
            <span className="flex-1 text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 ">
              {data.published.slice(0, -8)}
            </span>
          </div>
        </div>
        <div id="nut" className="flex justify-center w-[80vw] md:w-[25vw] p-3 mx-auto ">
          <DoughNut jsondata={data} />
        </div>
      </div>
    </div>
  );
};

export default Card;
