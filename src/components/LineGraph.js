import { React, useContext, useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import dataContext from "../context/dataContext";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale, //x axis
  LinearScale, //y axis
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineGraph = () => {
  const [dataobj, setdataobj] = useState([]);
  const { jsondata, filter, mode } = useContext(dataContext);
  const [labels, setlabels] = useState([]);
  const [intensity, setintensity] = useState([]);
  const [relevance, setrelevance] = useState([]);
  const [likelihood, setlikelihood] = useState([]);
  const [textcolor, settextcolor] = useState("black");

  useEffect(() => {
    let labelsarray = [];
    let intensityarray = [];
    let relevancearray = [];
    let likelihoodarray = [];

    var check = false;
    setdataobj(dataobj);
    jsondata.map((obj) => {
      if (filter === "default" || filter === "sector" || filter === "year") {
        labelsarray.push(obj.region);
      } else if (filter === "topic" || filter === "pestle") {
        labelsarray.push(obj.country);
      } else {
        labelsarray.push(
          obj.topic.charAt(0).toUpperCase() + obj.topic.slice(1)
        );
      }
      intensityarray.push(obj.intensity);
      relevancearray.push(obj.relevance);
      likelihoodarray.push(obj.likelihood);
    });
    setlabels(labelsarray);
    setintensity(intensityarray);
    setrelevance(relevancearray);
    setlikelihood(likelihoodarray);

    return () => {
      check = true;
    };
  }, [jsondata, filter]);

  useEffect(() => {
    var check = false;
    if (mode === "dark") {
      settextcolor("#F5F5F5");
    } else {
      settextcolor("black");
    }
    return () => {
      check = true;
    };
  }, [mode]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: {
          color: textcolor,
          boxWidth: 20,
        },
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          color: textcolor,
          padding: 10,
        },
        grid: {
          color: textcolor,
          drawTicks: false,
          lineWidth: 0.2,
        },
      },
      x: {
        ticks: {
          color: textcolor,
          padding: 7,
        },
        grid: {
          color: textcolor,
          drawTicks: false,
          lineWidth: 0.2,
        },
      },
    },
  };

  let data = {
    labels: labels,
    datasets: [
      {
        label: "Intensity",
        data: intensity,
        borderColor: "rgba(255, 99, 132, .8)",
        backgroundColor: "rgba(255, 99, 132, 1)",

        tension: 0.4,
        fill: true,
      },
      {
        label: "Likelihood",
        data: likelihood,
        borderColor: "rgb(60,179,113,.8)",
        backgroundColor: "rgb(60,179,113,1)",

        tension: 0.4,
        fill: true,
      },
      {
        label: "Relevance",
        data: relevance,
        borderColor: "rgba(53, 162, 235, 0.8)",
        backgroundColor: "rgba(53, 162, 235, 1)",

        tension: 0.4,
        fill: true,
      },
    ],
  };

  return <Line options={options} data={data} />;
};

export default LineGraph;
