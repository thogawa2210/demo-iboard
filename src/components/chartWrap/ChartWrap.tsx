
const ChartWrap = ({ children }:any) => {
  return (
    <div className="bg-zinc-900 rounded p-1">
      <div className="mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default ChartWrap;
