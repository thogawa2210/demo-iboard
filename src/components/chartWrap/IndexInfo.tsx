const stockInfoIcons = {
  greenArrowUp: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" viewBox="0 0 16 16">
      <path d="M8 0l8 16H0z" />
    </svg>
  ),
  yellowSquare: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="yellow" viewBox="0 0 16 16">
      <rect width="16" height="16" rx="2" />
    </svg>
  ),
  redArrowDown: (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" viewBox="0 0 16 16">
      <path d="M8 16L0 0h16z" />
    </svg>
  ),
};

const IndexInfo = ({data}:any) => {
  return (
    <div className="text-white text-center mt-auto text-xs">
      <p>
        <span className="text-orange-700">{data} </span>
        <span className="text-green-500"> 1,053.55 </span>
        <span className="text-green-500"> 0.66(0.06%) </span>
      </p>
      <p>
        <span className="text-white"> 138,526,220 </span>
        <span className="text-orange-700"> CP </span>
        <span className="text-whit"> 2,155.137 </span>
        <span className="text-orange-700"> Tỷ </span>
      </p>
      <div className="flex items-center justify-center">
        <span>{stockInfoIcons.greenArrowUp}</span>
        <span className="text-green-500 mr-2"> 154 </span>
        <span className="text-purple-600 mr-2"> (1) </span>
        <span>{stockInfoIcons.yellowSquare}</span>
        <span className="text-yellow-400 mr-2"> 63 </span>
        <span>{stockInfoIcons.redArrowDown}</span>
        <span className="text-red-600 mr-2"> 180 </span>
        <span className="text-blue-300 mr-2"> (1) </span>
        <span className="truncate"> KL Liên tục </span>
      </div>
    </div>
  );
};

export default IndexInfo;
