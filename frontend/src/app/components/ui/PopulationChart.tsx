import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

interface PopulationData {
  year: number;
  value: number;
}

interface PopulationChartProps {
  populationData: PopulationData[];
}

const PopulationChart = ({ populationData }: PopulationChartProps) => {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const years = populationData.map((data) => data.year);
    const values = populationData.map((data) => data.value);

    const options = {
      chart: {
        type: "area",
        height: "100%",
        width: "100%",
        toolbar: {
          show: false,
        },
        foreColor: "#ffffff",
      },
      series: [
        {
          name: "Population",
          data: values,
        },
      ],
      xaxis: {
        categories: years,
        title: {
          text: "Year",
        },
      },
      yaxis: {
        title: {
          text: "Population",
          style: {
            fontSize: "14px",
            fontFamily: "roboto",
          },
        },
        labels: {
          formatter: (value: number) => value.toLocaleString(),
        },
      },
      tooltip: {
        y: {
          formatter: (value: number) => value.toLocaleString(),
        },
      },
      responsive: [
        {
          breakpoint: 768,
          options: {
            chart: {
              height: 300,
            },
            xaxis: {
              labels: {
                rotate: -45,
              },
            },
          },
        },
        {
          breakpoint: 480,
          options: {
            chart: {
              height: 250,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
      dataLabels: {
        enabled: false,
      },
    };

    const chart = new ApexCharts(chartRef.current, options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [populationData]);

  return <div ref={chartRef} />;
};

export default PopulationChart;
