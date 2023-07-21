import React from "react";
import tools from "../data/tools";
import Title from "./Title";
import ToolsItem from "./ToolsItem";

function Tools() {
  return (
    <div id="tools" className="flex flex-col md:flex-row justify-center my-20 w-full">
      <div className="w-full md:w-7/12">
        <Title id={"4"}>Tools I use</Title>
        <div/>
        <div className="flex flex-wrap justify-center gap-2">
          {tools.map((item, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center"
            >
              <ToolsItem imgUrl={item.imgUrl} text={item.text} />
            </div>
          ))}
        </div>
        <div className="w-full md:w-7/12">
        <Title id={"5"}>Languages I know</Title>
        <div/>
        
         <div className="flex flex-wrap justify-center gap-2">
          {tools.map((item, index) => (
            <div
              key={index}
              className="w-24 h-24 flex items-center justify-center"
            >
              <ToolsItem imgUrl={item.imgUrl} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  );
}

export default Tools;
