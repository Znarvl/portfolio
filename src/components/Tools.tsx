import tools from '../data/tools'
import Title from './Title'
import ToolsItem from './ToolsItem'

const Tools: React.FC = () => {
  return (
    <div id="tools" className="flex flex-col md:flex-row justify-center mt-20 w-full">
      <div className="w-full md:w-7/12 ">
        <Title orientation="right" id={'4'}>Tools I use</Title>
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
  )
}

export default Tools
