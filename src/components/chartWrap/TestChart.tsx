import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";

const startTime = new Date("2023-05-23 09:00:00").getTime();
const endTime = new Date("2023-05-23 15:00:00").getTime();

const TestChart = ({ yLine, yColumn } :any) => {
  const [dataLine, setDataLine] = useState([]);
  const [dataColumn, setDataColumn] = useState([]);

  useEffect(() => {
    setDataColumn(yColumn);
    setDataLine(yLine);
  }, [yLine, yColumn]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        plotOptions: {
          series: {
            enableMouseTracking: false,
          },
        },
        chart: {
          backgroundColor: "transparent", // Make the chart background transparent
          // height: 108, // Specify the desired height of the chart
        },
        subtitle: {
          text: null, // Set the subtitle to null to hide it
        },
        credits: {
          enabled: false, // Disable the Highcharts credits to hide the logo text
        },
        legend: {
          enabled: false, // Disable the legend
        },
        title: {
          text: null,
        },
        xAxis: {
          gridLineWidth: 1,
          gridLineColor: "grey",
          type: "datetime",
          tickInterval: 60 * 60 * 1000,
          min: startTime, // Set the minimum value for the x-axis
          max: endTime, // Set the maximum value for the x-axis
          labels: {
            formatter: function (this: Highcharts.AxisLabelsFormatterContextObject) {
              const date = new Date(this.value);
              const hour = date.getHours();
              return hour + "h";
            },
            style: {
              fontSize: "9px", // Set the desired font size for xAxis labels
              color: "white", //
            },
          },
        },
        yAxis: [
          {
            title: {
              text: null,
            },
            opposite: true,
            labels: {
              enabled: false, // Disable labels on the y-axis
            },
            plotLines: [
              {
                value: 50, // Set the threshold value
                color: "yellow", // Set the color of the threshold line
                width: 1, // Set the width of the threshold line
                zIndex: 5, // Set the zIndex to ensure the line is above the chart
              },
            ],
          },
          {
            title: {
              text: null,
            },
            labels: {
              enabled: false, // Disable labels on the y-axis
            },
          },
        ],
        series: [
          {
            name: null,
            type: "line",
            data: dataLine,
            zones: [
              {
                value: 50, // Giá trị của phiên giao dịch trước
                color: "red", // Set the color for values below the threshold
              },
              {
                color: "green", // Set the color for values above the threshold
              },
            ],
          },
          {
            name: null,
            type: "column",
            yAxis: 1,
            data: dataColumn,
          },
        ],
      }}
    />
  );
};

export default TestChart;
