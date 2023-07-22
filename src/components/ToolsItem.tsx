import React from "react";
import ITools from "../interfaces/ITools";

function ToolsItem({ index, imgUrl, text }: ITools) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const handleMouseEnter = () => {
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setShowTooltip(false);
  };

  return (
    <div
      className="relative w-12 h-12 overflow-visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="object-cover" key={index} src={imgUrl} alt={`SVG ${index + 1}`} />
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-black bg-opacity-75 text-white rounded-lg">
          <p className="text-center">{text}</p>
        </div>
      )}
    </div>
  );
}

export default ToolsItem;
