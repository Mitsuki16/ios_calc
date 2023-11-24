import { useState } from "react";
import "./App.css";
import { Key } from "./Key";
import { HistoryItem } from "./HistoryItem";

function App() {
  const keys = [
    "AC",
    "+/-",
    "%",
    "/",
    "7",
    "8",
    "9",
    "x",
    "4",
    "5",
    "6",
    "-",
    "3",
    "2",
    "1",
    "+",
    "0",
    ".",
    "=",
  ];
  const [query, setQuery] = useState("");

  return (
    <div>
      <div className=" flex items-center justify-center h-screen flex-col">
        <div className=" bg-black rounded-3xl min-w-[22pc] h-[80vh]  ">
          <div className=" h-[36%]">
            <div className=" flex w-full p-4 gap-2">
              <div className=" border-[10pt] border-white rounded-full "></div>
              <div className=" border-[10pt] border-gray-500 rounded-full "></div>
              <div className=" border-[10pt] border-blue-500 rounded-full "></div>
            </div>
            <div className=" relative h-[90%]">
              <ul className=" absolute bottom-[30%] top-[-10%] right-0 flex overflow-x-hidden  flex-col-reverse">
                {[10, 30, 3, 4, 5, 67, 7, 8, 4, 3, 3, 6].map((item, index) => {
                  return <HistoryItem key={index} item={item}></HistoryItem>;
                })}
              </ul>
              <h2 className=" text-white text-[30pt] text-right absolute bottom-0 right-2 ">
                {query}
              </h2>
            </div>
          </div>
          <div>
            <div>
              <div className=" h-[50%] grid grid-cols-4 px-2 pt-10 gap-2 ">
                {keys.map((key) => {
                  return <Key keyText={key} key={key}></Key>;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
