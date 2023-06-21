import dataContext from "./dataContext";
import { useState, useEffect } from "react";

const DataState = (props) => {
  const [jsondata, setjsondata] = useState([]);
  const [filter, setfilter] = useState("default");
  const [mode, setmode] = useState("light");
  const [title, settitle] = useState("for the World")
  

 

  const fetchAll = async () => {
    const response = await fetch(`http://localhost:5000/getdata`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await response.json();
    setjsondata(json);
    settitle("for the World")
  };

  const fetchByRegion = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/region?region=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
      );
      
      const json = await response.json();
      setjsondata(json);
      settitle("for the region - "+val);
  };

  const fetchByCountry = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/country?country=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setjsondata(json);
    settitle("for the country - "+val);
  };

  const fetchByTopic = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/topic?topic=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setjsondata(json);
    settitle("for the topic - "+val);
  };

  const fetchByPestle = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/pestle?pestle=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setjsondata(json);
    console.log(json);
    settitle("for PESTLE - "+val);
  };

  const fetchBySector = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/sector?sector=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setjsondata(json);
    settitle("for the sector - "+val);
  };

  const fetchByEndYear = async (val) => {
    const response = await fetch(
      `http://localhost:5000/getdata/endyear?endyear=${val}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    const json = await response.json();
    setjsondata(json);
    settitle("till the year "+val);
  };

  return (
    <dataContext.Provider
      value={{
        fetchAll,
        fetchByRegion,
        fetchByCountry,
        fetchByTopic,
        fetchByPestle,
        fetchBySector,
        fetchByEndYear,
        jsondata,
        filter,
        setfilter,
        mode,
        setmode,
        title,
      }}
    >
      {props.children}
    </dataContext.Provider>
  );
};

export default DataState;
