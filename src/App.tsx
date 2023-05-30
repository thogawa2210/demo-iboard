import { useState, useEffect, lazy } from "react";
import { ChartData } from "./components/dto/chartData";
import Modal from "react-modal";
import ChartContainer from "./components/chartWrap/ChartContainer";
import TestChart from "./components/chartWrap/TestChart";
import IndexInfo from "./components/chartWrap/IndexInfo";

const startTime = new Date("2023-05-23 09:00:00").getTime();
const endTime = new Date("2023-05-23 15:00:00").getTime();

Modal.setAppElement('#root');

function App() {
  const [yLine, setyLine] = useState<ChartData[]>([]);
  const [yColumn, setyColumn] = useState<ChartData[]>([]);
  const [time, setTime] = useState(startTime);
  const [index, setIndex] = useState('1');

  useEffect(() => {
    const interval = setInterval(() => {
      if (time <= endTime) {
        const x = time;
        const line = Math.random() * 100;
        const column = Math.random() * 200;

        setyLine((prev: any) => [...prev, [x, line]]);
        setyColumn((prev: any) => [...prev, [x, column]]);
        setTime((prevTime) => prevTime + 60 * 1000);
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
      // Cleanup function to clear the interval when component unmounts
      clearInterval(interval);
    };
  }, [time]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  const openModalNum = (index: string) =>{
    setIndex(index);
    setIsOpen(true);
  }

  return (
    <div className="">
      {/* <TestChart yLine={yLine} yColumn={yColumn} /> */}

      <div>
        <button onClick={openModal} className="bg-blue-700 text-white border-black p-2 rounded">
          Open Modal
        </button>
        <button onClick={()=>openModalNum('1')} className="bg-blue-700 text-white border-black p-2 rounded">
          Open 1
        </button>
        <button onClick={()=>openModalNum('2')} className="bg-blue-700 text-white border-black p-2 rounded">
          Open 2
        </button>

        <Modal isOpen={modalIsOpen} onRequestClose={closeModal} className="p-4 border-2 rounded border-black place-content-center">
          <button onClick={closeModal} className="absolute top-1 right-1 text-gray-500 hover:text-gray-700">
            <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
              <path d="M400 145.49L366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49z"></path>
            </svg>
          </button>
          {/* <ChartContainer /> */}
          <TestChart yLine={yLine} yColumn={yColumn} />
          <IndexInfo data= {index} />
        </Modal>
      </div>
    </div>
  );
}

export default App;
