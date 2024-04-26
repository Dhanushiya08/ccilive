import React from "react";
import Chart from "react-apexcharts";

const Sentimentchart = () => {
  const chartOptions = {
    series: [20, 40, 40],
    options: {
      chart: {
        type: "donut",
        height: 300,
      },
      plotOptions: {
        pie: {
          startAngle: -90,
          endAngle: 90,
          donut: {
            size: "60%",
          },
        },
        dataLabels: {
          enabled: false,
        },
      },
      labels: ["Negative", "Positive", "Neutral"],
      legend: {
        show: false, // Hide the legend
      },
      colors: ["#F94144", "#34D32F", "#D6D6D6"],
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
          },
        },
      ],
    },
  };

  return (
    <div >
      <Chart
        options={chartOptions.options}
        series={chartOptions.series}
        type="donut"
        height={250}
      />
    </div>
  );
};

export default Sentimentchart;
