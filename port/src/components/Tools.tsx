import tools from '../data/tools'
import Title from './Title'
import ToolsItem from './ToolsItem'

const Tools: React.FC = () => {
  return (
    <section id="tools" className="flex flex-col md:flex-row justify-center mt-20 w-full">
      <div className="w-full md:w-7/12">
        <Title orientation="right" id="4">Tools I use</Title>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {tools.map((item) => (
            <div
              key={item.id} // Use a unique identifier instead of index
              className="w-24 h-24 flex items-center justify-center"
            >
              <ToolsItem id={item.id} imgUrl={item.imgUrl} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Tools
