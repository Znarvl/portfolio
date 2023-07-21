import ITimeline from "../interfaces/ITimeline";
import tools from "../data/tools";



function ToolsItem({ index, imgUrl, text }: ITimeline) {
    return (
    <div className="relative w-64 h-64 overflow-hidden grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-2"> 
        <img className="object-cover w-full h-full"
            key={index} src={imgUrl} alt={`SVG ${index + 1}`} />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity">
    <p className="text-white text-center">{text}</p>
</div>
    </div>
  );
}

export default ToolsItem;