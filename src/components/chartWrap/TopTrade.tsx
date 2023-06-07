const TopTrade = ({ data }: any) => {
  return (
    <>
      <div className="h-[28px] border-b-2 border-black bg-transparent flex">
        <div className="h-full bg-green-600 w-1"></div>
        <p className="leading-[28px] text-[11px] text-white pl-1 truncate">
          Top KL giao dịch trong ngày
        </p>
      </div>
      <div className="text-white text-[12px]">
        <div className="table w-full pr-2">
          <div className="table-header-group">
            <div className="table-row h-[28px] leading-[28px]">
              <div className="table-cell w-1/3 text-left pl-1 truncate">
                Mã CK
              </div>
              <div className="table-cell w-1/3 text-right truncate">KL</div>
              <div className="table-cell w-1/3 text-right truncate">
                Giá khớp
              </div>
            </div>
          </div>
        </div>

        <div className="max-h-[108px] overflow-y-auto scrollbar-thin scrollbar-thumb-rounded scrollbar-thumb-zinc-500 scrollbar-track-transparent">
          <div className="table w-full">
            <div className="table-row-group sticky top-0">
              {data.map((stock: any) => (
                <div className="table-row bg-zinc-900 even:bg-black h-[26px] leading-[26px]">
                  <div className="table-cell w-1/3 pl-2">{stock.symbol}</div>
                  <div className="table-cell w-1/3 text-right">
                    {stock.value}
                  </div>
                  <div className={`table-cell w-1/3 text-right ${stock.color}`}>
                    {stock.price}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopTrade;
