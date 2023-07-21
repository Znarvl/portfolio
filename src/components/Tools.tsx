import tools from "../data/tools";
import Title from "./Title";
import ToolsItem from "./ToolsItem";
function Tools(){

    return (
        <div id="tools" className="flex flex-col md:flex-row justify-center my-20 w-full">
            <div className="w-full md:w-7/12">
                <Title id={"4"}>Tools I use</Title>
            {tools.map((item, index:number) =>(
                <ToolsItem
                    key={index}
                    imgUrl= {item.imgUrl}
                    text = {item.text}
                    />
                ))}
            </div>
        </div>
    )
}


export default Tools;