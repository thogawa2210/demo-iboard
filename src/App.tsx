import { useState, useEffect } from "react";
import TestChart from "./components/chartWrap/TestChart";

const startTime = new Date("2023-05-23 09:00:00");
const endTime = new Date("2023-05-23 15:00:00");
const interval = 10 * 60 * 1000;

function App() {
  const [yLine, setyLine] = useState<any[]>([]);
  const [yColumn, setyColumn] = useState<any[]>([]);
  const [time, setTime] = useState(startTime)

  useEffect(() => {
    const interval = setInterval(() => {
      if(time <= endTime ){
        const x = time.getTime();
        const line = Math.random() * 100;
        const column = Math.random() * 200;

        setyLine((prev:any) =>{
          const data = prev.push([x, line]);
          return data;
        });
        setyColumn((prev:any) =>{
          const data = prev.push([x, column]);
          return data;
        });
        setTime(new Date(time.getTime() + interval));
      }else{
        clearInterval(interval);
      }

    },1000)

    return () => {
      // Cleanup function to clear the interval when component unmounts
      clearInterval(interval);
    };
  },[])

  return (
    <div className="bg-black">
      <TestChart chartOptions={{yLine, yColumn}} />
    </div>
  );
}

export default App;
