
const ChartWrap = ({ children }:any) => {
  return (
    <div className="bg-zinc-900 m-1 rounded">
      <div className="mx-auto ">
        {children}
      </div>
    </div>
  );
};

export default ChartWrap;
