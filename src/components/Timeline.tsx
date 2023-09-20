import timeline from '../data/timeline'
import TimelineItem from './TimelineItem'
import Title from './Title'
const Timeline: React.FC = () => {
  return (
        <div id="timeline" className="flex flex-col md:flex-row justify-center my-20 w-full">
            <div className="w-full md:w-7/12">
                <Title orientation='right' id={'3'}>Timeline</Title>
            {timeline.map((item, index: number) => (
                <TimelineItem
                    key={index}
                    year= {item.year}
                    title = {item.title}
                    duration = {item.duration}
                    details = {item.details}
                    at = {item.at}
                    />
            ))}
            </div>
        </div>
  )
}

export default Timeline
