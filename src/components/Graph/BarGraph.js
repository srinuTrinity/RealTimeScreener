import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";

const BarGraph = () => {
  const initial = {
    labels: [],
    datasets: [
      {
        label: "Volume",
        fill: false,
        lineTension: 0.5,
        backgroundColor: "hsl(240deg 12% 43%)",
        borderColor: "hsl(243deg 97% 68% / 50%)",
        borderWidth: 2,
        data: [],
      },
    ],
  };
  const [state, setState] = useState(initial);
  useEffect(() => {
    const FetchData = async () => {
      const response = await fetch(
        "https://eodhistoricaldata.com/api/eod/MCD.US?from=2016-01-05&to=2017-02-10&period=d&fmt=json&api_token=OeAFFmMliFG5orCUuwAKQ8l4WWFQ67YX"
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
      <Bar
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
export default BarGraph;
