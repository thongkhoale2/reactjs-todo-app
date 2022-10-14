import { useState, createContext } from "react";
import Child1 from "./Child1";
import Child2 from "./Child2";

const InfoContext = createContext();
function Parent() {
  const [name, setName] = useState("John");
  return (
    <InfoContext.Provider value={name}>
      <Child2 />
    </InfoContext.Provider>
  );
}

export default Parent;
