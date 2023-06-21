import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import dataContext from '../context/dataContext';

ChartJS.register(ArcElement, Tooltip,Legend);


export default function DoughNut({jsondata}) {

  const {mode} = useContext(dataContext)

  const options={
    plugins:{
      legend: {
        labels:{
          color:mode==="dark"?'#F5F5F5':'black',
          boxWidth:8,
          boxHeight:8,
        },
      },
   },
  
}

  const labels=["Intensity","Relevance","Likelihood"]
  
  const data = {
   
    labels: labels,
    datasets: [
      {
        label:'Value',
        data: [jsondata.intensity,jsondata.relevance,jsondata.likelihood],
        backgroundColor: [
          '#FD6787',
          '#FFF44C',
          '#288EEB',
          
        ],
        borderColor: [
          '#FD5D78',
          '#FFE537',
          '#1B74EB',
          
        ],
        borderWidth: 1,
      },
    ],
  };
  
  return <Doughnut data={data} options={options} />
  
}
