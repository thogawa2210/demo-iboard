import { useState, useEffect, lazy } from "react";
import { ChartData } from "./components/dto/chartData";
import Popup from "./components/modal/Popup";

const TestChart = lazy(() => import('./components/chartWrap/TestChart'))

const startTime = new Date("2023-05-23 09:00:00").getTime();
const endTime = new Date("2023-05-23 15:00:00").getTime();

function App() {
  const [yLine, setyLine] = useState<ChartData[]>([]);
  const [yColumn, setyColumn] = useState<ChartData[]>([]);
  const [time, setTime] = useState(startTime);
  const data = {yLine:yLine, yColumn:yColumn}

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
    <div className="bg-black">
      {/* <TestChart yLine={yLine} yColumn={yColumn} /> */}

      <Popup chartComponent={TestChart} chartProps={data} />
    </div>
  );
}

export default App;
