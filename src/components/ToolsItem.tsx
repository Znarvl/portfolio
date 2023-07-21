import React from "react";
import ITools from "../interfaces/ITools";

function ToolsItem({ index, imgUrl, text }: ITools) {
  return (
    <div className="relative w-12 h-12"> {/* Set the width and height to match your image size */}
      <img
        className="object-cover rounded-full"
        key={index}
        src={imgUrl}
        alt={`SVG ${index + 1}`}
      />
      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity rounded-full">
        <p className="text-white text-center">{text}</p>
      </div>
    </div>
  );
}

export default ToolsItem;