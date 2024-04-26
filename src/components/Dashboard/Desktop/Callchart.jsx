import React from "react";
import Chart from "react-apexcharts";

const Callchart = () => {
  const series = [20, 40];
  const labels = ["Existing calls", "New calls"];

  const chartOptions = {
    series: series,
    options: {
      chart: {
        type: "donut",
        height: 300,
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false, // Hide the legend
      },
      labels: labels,
      colors: ["#F3722C", "#B7ABFF"],
    },
  };

  return (
    <div>
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        height={220}
      />
    </div>
  );
};

export default Callchart;
