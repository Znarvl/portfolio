import tools from "../data/tools";
import Title from "./Title";
import ToolsItem from "./ToolsItem";
function Tools(){

    return (
        <div id="tools" className="flex flex-col md:flex-row justify-center my-20">
            <div className="w-full md:w-7/12">
                <Title id={"4"}>Tools I use</Title>
                <div/>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-10 gap-1">

            {tools.map((item, index:number) =>(
                <ToolsItem
                    key={index}
                    imgUrl= {item.imgUrl}
                    text = {item.text}
                    />
                ))}
            </div>

            </div>
        </div>
    )
}


export default Tools;