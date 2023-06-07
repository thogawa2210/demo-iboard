import { useEffect, useState } from "react";
import IndexInfo from "./components/chartWrap/IndexInfo";

const array = ["VN30", "VNINDEX", "HNX", "UPCOM"];

function App() {
  const [propValues, setPropValues] = useState({});

  const updatePropValue = (name, number) => {
    setPropValues((prevPropValues) => ({
      ...prevPropValues,
      [name]: number,
    }));
  };

  useEffect(() =>{
    const interval = setInterval(()=>{
      const index = Math.floor(Math.random() * 4);
      const name = array[index];
      const number = Math.floor(Math.random() * 10 + 1);
      updatePropValue(name, number)

    },1000)

    return(() => clearInterval(interval))
  },[]);

  return (
    <div className="bg-black flex">
      <IndexInfo name={"VN30"} number={propValues['VN30']} />
      <IndexInfo name={"VNINDEX"} number={propValues['VNINDEX']} />
      <IndexInfo name={"HNX"} number={propValues['HNX']} />
      <IndexInfo name={"UPCOM"} number={propValues['UPCOM']} />
    </div>
  );
}

export default App;
