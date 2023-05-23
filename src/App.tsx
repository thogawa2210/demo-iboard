import { useState } from "react";
import { Chart } from "./components/chartWrap/Chart";
import ChartWrap from "./components/chartWrap/ChartWrap";
import IndexInfo from "./components/chartWrap/IndexInfo";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const chartWrapData = [
    <ChartWrap>
      <Chart />
      <IndexInfo text="Some information text" />
    </ChartWrap>,
    <ChartWrap>
      <Chart />
      <IndexInfo text="Some information text" />
    </ChartWrap>,
    <ChartWrap>
      <Chart />
      <IndexInfo text="Some information text" />
    </ChartWrap>,
    <ChartWrap>
      <Chart />
      <IndexInfo text="Some information text" />
    </ChartWrap>,
  ];

  const handleClickNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % chartWrapData.length);
  };

  const handleClickPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + chartWrapData.length) % chartWrapData.length);
  };

  const renderedChartWrap = [];
  for (let i = 0; i < 3; i++) {
    const index = (currentIndex + i) % chartWrapData.length;
    renderedChartWrap.push(
      <div className="chart-wrap" key={index}>
        {chartWrapData[index]}
      </div>
    );
  }

  return (
    <div>
      <div className="grid grid-cols-10 gap-1 h-full bg-black">
        <div className="col-span-6 flex space-x-1 h-full overflow-x-auto rounded scrollbar-thin scrollbar-thumb-rounded-full scrollbar-thumb-scroll justify-center">
          <button className="text-white" onClick={handleClickPrev}>
            &lt;
          </button>
          {renderedChartWrap}
          <button className="text-white" onClick={handleClickNext}>
            &gt;
          </button>
        </div>

        <div className="col-span-2 bg-zinc-900 text-center text-white rounded m-1">Top KL Giao dịch trong ngày</div>
        <div className="col-span-2 bg-zinc-900 text-center text-white rounded m-1">Top KL mua/bán nước ngoài</div>
      </div>
    </div>
  );
}

export default App;
