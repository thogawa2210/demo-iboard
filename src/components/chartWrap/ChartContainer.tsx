import { useEffect } from "react";
import ChartWrap from "./ChartWrap";
import TopTrade from "./TopTrade";
import TopTradeForeign from "./TopTradeForeign";

const topTrade: any[] = [
  { symbol: "SHB", value: "13,324,00", price: 11.5, color: "text-red-500" },
  { symbol: "NVL", value: "13,384,60", price: 14.5, color: "text-red-500" },
  { symbol: "LCG", value: "9,854,70", price: 12.6, color: "text-green-500" },
  { symbol: "SHS", value: "9,707,80", price: 10.1, color: "text-yellow-500" },
  { symbol: "SHB", value: "13,324,00", price: 11.5, color: "text-red-500" },
  { symbol: "NVL", value: "13,384,60", price: 14.5, color: "text-red-500" },
  { symbol: "LCG", value: "9,854,70", price: 12.6, color: "text-green-500" },
  { symbol: "SHS", value: "9,707,80", price: 10.1, color: "text-yellow-500" },
];

const topTradeForeign: any[] = [
  { symbol: "HPG", value1: "2,324,00", value2: "282,27", price: 11.5, color: "text-green-500" },
  { symbol: "TTF", value1: "2,484,60", value2: "16,50", price: 14.5, color: "text-green-500" },
  { symbol: "TCB", value1: "954,70", value2: "928,50", price: 12.6, color: "text-red-500" },
  { symbol: "STB", value1: "307,80", value2: "1,421,20", price: 10.1, color: "text-red-500" },
  { symbol: "TTF", value1: "2,484,60", value2: "16,50", price: 14.5, color: "text-green-500" },
  { symbol: "TCB", value1: "954,70", value2: "928,50", price: 12.6, color: "text-red-500" },
  { symbol: "STB", value1: "307,80", value2: "1,421,20", price: 10.1, color: "text-red-500" },
];

const dataObject = {
  name: 'John Doe',
  number: 123,
};

const ChartContainer = () => {

  return (
    <div className="grid grid-cols-10 gap-1 h-44 p-1 bg-black w-full">
      <div className="col-span-6 bg-black rounded h-full flex overflow-x-auto gap-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-500 scrollbar-track-transparent">
        <ChartWrap data={{name: "VN30", number : 2}} />
        <ChartWrap data={{name: "VN30", number : 2}} />
        <ChartWrap data={{name: "HNX30", number : 3}} />
        <ChartWrap data={{name: "HNX", number : 4}} />
      </div>

      <div className="col-span-2 rounded bg-zinc-900">
        <TopTrade data={topTrade} />
      </div>

      <div className="col-span-2 bg-zinc-900 rounded">
        <TopTradeForeign data={topTradeForeign} />
      </div>
    </div>
  );
};

export default ChartContainer;
