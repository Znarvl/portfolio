import timeline from "../data/timeline";
import TimelineItem from "./TimelineItem";
import Title from "./Title";

const Timeline: React.FC = () => {
  return (
    <section
      id="timeline"
      className="flex flex-col md:flex-row justify-center my-20 w-full"
    >
      <div className="w-full md:w-7/12">
        <Title orientation="right" id="3">
          Timeline
        </Title>
        {timeline.map((item) => (
          <TimelineItem
            key={item.id}
            id={item.id}
            year={item.year}
            title={item.title}
            duration={item.duration}
            details={item.details}
            at={item.at}
            url={item.url}
          />
        ))}
      </div>
    </section>
  );
};

export default Timeline;
