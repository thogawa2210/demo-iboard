const TopTradeForeign = ({ data }: any) => {
  return (
    <>
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
          {data.map((stock: any) => (
            <div className="table-row bg-zinc-900 even:bg-black h-[26px] leading-[26px]">
              <div className="table-cell w-1/4 pl-2">{stock.symbol}</div>
              <div className={`table-cell w-1/4 text-right ${stock.color}`}>{stock.price}</div>
              <div className="table-cell w-1/4 text-right">{stock.value1}</div>
              <div className="table-cell w-1/4 text-right">{stock.value2}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default TopTradeForeign;
