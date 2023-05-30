import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useEffect, useState } from "react";
import { ChartData } from "../dto/chartData";

const startTime = new Date("2023-05-23 09:00:00").getTime();
const endTime = new Date("2023-05-23 15:00:00").getTime();

const TestChart = () => {
  const [yLine, setyLine] = useState<ChartData[]>([]);
  const [yColumn, setyColumn] = useState<ChartData[]>([]);
  const [time, setTime] = useState(startTime);

  useEffect(() => {
    const interval = setInterval(() => {
      if(time <= endTime ){
        const x = time;
        const line = Math.random() * 100;
        const column = Math.random() * 200;

        setyLine((prev:any) => [...prev, [x, line]]);
        setyColumn((prev: any) => [...prev, [x, column]]);
        setTime((prevTime) => prevTime + 60*1000);
      }else{
        clearInterval(interval);
      }
    },1000)

    return () => {
      // Cleanup function to clear the interval when component unmounts
      clearInterval(interval);
    };
  },[time])

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{
        plotOptions: {
          series: {
            enableMouseTracking: false,
            animation: false,
          },
        },
        chart: {
          backgroundColor: "transparent", // Make the chart background transparent
          // height: 108, // Specify the desired height of the chart
          animation: false,
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
            data: yLine,
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
            data: yColumn,
          },
        ],
      }}
    />
  );
};

export default TestChart;
