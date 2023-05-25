import { useState } from "react";
import { Chart } from "./components/chartWrap/Chart";
import IndexInfo from "./components/chartWrap/IndexInfo";

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

function App() {
  return (
    <>
      <div className="grid grid-cols-10 gap-1 h-[168px] p-1 bg-black">
        <div className="col-span-6 bg-black rounded h-full flex overflow-x-auto gap-1 scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-500 scrollbar-track-transparent">
          <div className="h-full w-full bg-zinc-900 min-w-[200px] rounded flex flex-col">
            <div className="">
              <Chart />
            </div>
            <div className="h-42">
              <IndexInfo text="Some information text" />
            </div>
          </div>
          <div className="h-full w-full bg-zinc-900 min-w-[200px] rounded flex flex-col">
            <div className="overflow-hidden">
              <Chart />
            </div>
            <div className="h-42">
              <IndexInfo text="Some information text" />
            </div>
          </div>
          <div className="h-full w-full bg-zinc-900 min-w-[200px] rounded flex flex-col">
            <div className="overflow-hidden">
              <Chart />
            </div>
            <div className="h-42">
              <IndexInfo text="Some information text" />
            </div>
          </div>
          <div className="h-full w-full bg-zinc-900 min-w-[200px] rounded flex flex-col">
            <div className="overflow-hidden">
              <Chart />
            </div>
            <div className="h-42">
              <IndexInfo text="Some information text" />
            </div>
          </div>
        </div>

        <div className="col-span-2 rounded bg-zinc-900">
          <div className="h-[28px] border-b-2 border-black bg-transparent flex">
            <div className="h-full bg-green-600 w-1"></div>
            <p className="leading-[28px] text-[11px] text-white pl-1 truncate">Top KL giao dịch trong ngày</p>
          </div>
          <div className="text-white text-[12px]">
            <div className="table w-full pr-2">
              <div className="table-header-group">
                <div className="table-row h-[28px] leading-[28px]">
                  <div className="table-cell w-1/3 text-left pl-1 truncate">Mã CK</div>
                  <div className="table-cell w-1/3 text-right truncate">KL</div>
                  <div className="table-cell w-1/3 text-right truncate">Giá khớp</div>
                </div>
              </div>
            </div>

            <div className="max-h-[108px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-500 scrollbar-track-transparent">
              <div className="table w-full">
                <div className="table-row-group sticky top-0">
                  {topTrade.map((stock): any => (
                    <div className="table-row bg-zinc-900 even:bg-black h-[26px] leading-[26px]">
                      <div className="table-cell w-1/3 pl-2">{stock.symbol}</div>
                      <div className="table-cell w-1/3 text-right">{stock.value}</div>
                      <div className={`table-cell w-1/3 text-right ${stock.color}`}>{stock.price}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-span-2 bg-zinc-900 rounded">
          <div className="h-[26px] border-b-2 border-black bg-transparent flex">
            <div className="h-full bg-green-600 w-1"></div>
            <p className="leading-[26px] text-[11px] text-white pl-1 truncate">Top KL giao dịch trong ngày</p>
          </div>
          <div className="table text-white text-[12px] w-full pr-2">
            <div className="table-header-group">
              <div className="table-row h-[28px] leading-[28px] pr-1">
                <div className="table-cell w-1/4 text-left pl-1 truncate">Mã CK</div>
                <div className="table-cell w-1/4 text-right truncate">Giá khớp</div>
                <div className="table-cell w-1/4 text-right truncate">KL mua</div>
                <div className="table-cell w-1/4 text-right truncate">KL bán</div>
              </div>
            </div>
          </div>
          <div className="max-h-[108px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-500 scrollbar-track-transparent">
            <div className="table text-white text-[12px] w-full">
              {topTradeForeign.map((stock): any => (
                <div className="table-row bg-zinc-900 even:bg-black h-[26px] leading-[26px]">
                  <div className="table-cell w-1/4 pl-2">{stock.symbol}</div>
                  <div className={`table-cell w-1/4 text-right ${stock.color}`}>{stock.price}</div>
                  <div className="table-cell w-1/4 text-right">{stock.value1}</div>
                  <div className="table-cell w-1/4 text-right">{stock.value2}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
