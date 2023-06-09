import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import moment from "moment";
import { useEffect, useState } from "react";

const today = new Date();
// today.setHours(today.getHours() + 7); // Áp dụng chênh lệch múi giờ GMT+7
const year = today.getFullYear();
const month = today.getMonth() + 1; // Tháng trong JavaScript bắt đầu từ 0, nên cộng thêm 1
const day = today.getDate();

// Thiết lập giờ bắt đầu và giờ kết thúc
const startTime = new Date(`${year}-${month}-${day} 09:00:00`).getTime();
const endTime = new Date(`${year}-${month}-${day} 15:00:00`).getTime();

// Create chart options
const chartOptions = (data) => {
  return {
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
      max: endTime,
      labels: {
        formatter: function (
          this: Highcharts.AxisLabelsFormatterContextObject
        ) {
          console.log(startTime, endTime)
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
            value: 84.02, // Set the threshold value
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
        data: data.map((item) => {
          const time = moment(item[0], "HH:mm:ss").toDate();
          const epochTime = time.getTime();
          return [epochTime, item[1]];
        }),
        zones: [
          {
            value: 84.02, // Giá trị của phiên giao dịch trước
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
        data: data.map((item) => {
          const time = moment(item[0], "HH:mm:ss").toDate();
          const epochTime = time.getTime();
          return [epochTime, item[2]];
        }),
        color: '#60A0FF'
      },
    ],
  };
};

const Chart = () => {
  const [line, setLine] = useState([]);

  useEffect(() => {
    fetch(
      "https://kbquote.kbsec.com.vn/Acc/mkh?reqJSONid=4&null&_=1686236580220"
    )
      .then((response: any) => {
        return response.json();
      })
      .then((data) => {
        const upcomdata = [];
        data.f.forEach((element: any) => {
          if (element.s === "UPCOM") upcomdata.push(element);
        });
        const chartData = [];
        upcomdata.forEach((element: any) => chartData.push(element.f.i));
        setLine(chartData);
      });
  }, []);

  return (
    <HighchartsReact highcharts={Highcharts} options={chartOptions(line)} />
  );
};

export default Chart;
