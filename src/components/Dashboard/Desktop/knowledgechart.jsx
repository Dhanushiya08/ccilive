import ReactApexChart from "react-apexcharts";
function Knowledgechart() {
  const series = [44, 55, 41, 17, 15];
  //   const allocatedtoken = [44, 55, 41, 17, 15];
  const allocatedtoken = [44, 55, 41, 17, 15];
  const lineseries = [
    {
      name: "Usage",
      type: "area",
      data: allocatedtoken,
      color: "#F3722C",
    },
  ];
  const lineoptions = {
    chart: {
      height: 350,
      type: "line",
      toolbar: {
        show: false,
      },
    },
    series: lineseries,
    grid: {
      show: false, // Set to false to remove the grid lines
    },
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      type: "solid",
      opacity: [0.35, 1],
    },
    labels: ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5"], // Set x-axis labels as the date of the last 5 days
    markers: {
      size: 0,
    },
    yaxis: {
      title: {
        text: "Usage", // Set y-axis title to "Usage"
        style: {
          color: "#000",
        },
      },
      labels: {
        style: {
          colors: "#000",
        },
      },
    },
    legend: {
      labels: {
        colors: "#000",
      },
    },
    xaxis: {
      type: "category", // Use category type for x-axis when specifying labels directly
      labels: {
        style: {
          colors: "#000",
        },
      },
      tooltip: {
        enabled: false,
      },
    },
    tooltip: {
      shared: true,
      intersect: false,
      y: {
        formatter: function (y) {
          if (typeof y !== "undefined") {
            return y.toFixed(0);
          }
          return y;
        },
      },
    },
  };
  return (
    <>
      <ReactApexChart
        options={lineoptions}
        series={lineseries}
        type="line"
        height={140}
      />
    </>
  );
}
export default Knowledgechart;
