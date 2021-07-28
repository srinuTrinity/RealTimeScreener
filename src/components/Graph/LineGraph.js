import React, { useEffect, useState } from "react";
import { Component } from "react";
import { Line, Radar, Scatter } from "react-chartjs-2";

const LineGraph = () => {
  const initial = {
    labels: [],
    datasets: [
      {
        label: "Volume",
        fill: true,
        lineTension: 1,
        backgroundColor: "rgba(75,192,192,1)",
        borderColor: "rgba(0,0,0,1)",
        borderWidth: 2,
        data: [],
      },
    ],
  };
  const [state, setState] = useState(initial);
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://eodhistoricaldata.com/api/eod/MCD.US?from=2016-02-10&to=2017-02-10&period=d&fmt=json&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"
      );
      const jsonData = await response.json();
      console.log(jsonData);
      for (let x of jsonData) {
        initial.labels.push(x.date);
        initial.datasets[0].data.push(x.volume);
      }
      setState(initial);
    };

    FetchData();
  }, []);
  console.log(state);
  return (
    <div style={{ width: "80%" }}>
      <Scatter
        data={state}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
        }}
      />
    </div>
  );
};
export default LineGraph;
