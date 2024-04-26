import React from "react";
import Chart from "react-apexcharts";

const Total = () => {
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const data = [100, 200, 300, 400, 500];

  const chartOptions = {
    chart: {
      height: 350,
      type: "line",
      colors: "#F3722C",
      toolbar: { show: false },
    },
    stroke: {
      width: [2, 4],
    },

    markers: {
      size: [4, 7],
    },
    xaxis: {
      categories: days,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    yaxis: {
      min: 0,
      max: 600,
      labels: {
        style: {
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "#e0e0e0",
      row: {
        colors: ["#f3f3f3", "transparent"],
        opacity: 0.5,
      },
    },
  };

  const chartSeries = [
    {
      name: "Calls",
      data: data,
      color: "#F3722C",
    },
  ];

  return (
    <div className="line-chart">
      <Chart
        options={chartOptions}
        series={chartSeries}
        type="line"
        height={140}
      />
    </div>
  );
};

export default Total;
