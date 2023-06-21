import React, { useContext } from "react";
import dataContext from "../context/dataContext";
import CardContainer from "./CardContainer";
import LineGraph from "./LineGraph";

const Home = () => {
  const { mode, title } = useContext(dataContext);

  return (
    <>
      <div className={`${mode === "light" ? "" : "bg-[rgb(39,44,48)]"}`}>
        <h1 className={`text-center font-bold size  p-4 ${mode==="light"?"text-gray-700":"text-gray-300"}`} style={{"fontFamily": "Roboto","fontSize":"1.5rem"}}>
          Showing Data <span>{title}</span>
        </h1>
        <div className="mx-auto pt-3 w-[100vw] lg:w-[70vw] h-[50vh]">
          <LineGraph />
        </div>
        <section className="text-gray-600 body-font mx-4">
          <div className=" py-12">
            <CardContainer />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
