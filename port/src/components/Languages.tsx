import lang from '../data/languages'
import Title from './Title'
import ToolsItem from './ToolsItem'

const Languages: React.FC = () => {
  return (
    <section id="tools" className="flex flex-col md:flex-row justify-center w-full">
      <div className="w-full md:w-7/12">
        <Title orientation="left" id="4">Languages I use</Title>
        <div className="flex flex-wrap justify-center gap-4 mt-4">
          {lang.map((item, index) => (
            <div
              key={index}
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

export default Languages
