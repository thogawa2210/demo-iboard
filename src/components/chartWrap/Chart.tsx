import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export function Chart() {
  // Generate fake data for stock prices
  const generateStockData = () => {
    const data = [];
    const startTime = new Date("2023-05-23 09:00:00"); // Start time at 9 am
    const endTime = new Date("2023-05-23 15:00:00"); // End time at 3 pm
    const interval = 10 * 60 * 1000; // 1 hour interval

    let currentTime = startTime;
    while (currentTime <= endTime) {
      const x = currentTime.getTime();
      const yLine = Math.random() * 100; // Random value for line series
      const yColumn = Math.random() * 200; // Random value for column series

      data.push([x, yLine, yColumn]);
      currentTime = new Date(currentTime.getTime() + interval);
    }

    return data;
  };

  // Create chart options
  const chartOptions = {
    chart: {
      backgroundColor: "transparent", // Make the chart background transparent
    //   borderWidth: 1, // Set the border width to 1 pixel
    //   borderColor: "grey", // Set the border color to white
      width: 246, // Specify the desired width of the chart
      height: 108, // Specify the desired height of the chart
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
      labels: {
        formatter: function (): any {
          const date = new Date(this.value);
          const hour = date.getHours();
          return hour + "h";
        },
        style: {
          fontSize: "9px", // Set the desired font size for xAxis labels
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
              color: 'yellow', // Set the color of the threshold line
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
        data: generateStockData().map(([x, yLine]) => [x, yLine]),
        zones: [
            {
              value: 50, // Set the threshold value
              color: 'red', // Set the color for values below the threshold
            },
            {
              color: 'green', // Set the color for values above the threshold
            },
          ],
      },
      {
        name: null,
        type: "column",
        yAxis: 1,
        data: generateStockData().map(([x, , yColumn]) => [x, yColumn]),
      },
    ],
  };

  return <HighchartsReact highcharts={Highcharts} options={chartOptions} className="border-6" />;
}
