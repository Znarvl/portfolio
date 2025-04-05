import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

const Portfolio: React.FC = () => {
  return (
    <section
      id="portfolio"
      className="flex flex-col items-center justify-center my-8"
    >
      <div className="w-full md:w-7/12">
        <Title orientation="left" id="2">
          Projects
        </Title>
      </div>
      <div className="flex justify-center mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolio.map((project) => (
            <PortfolioItem
              key={project.id}
              id={project.id}
              imgUrl={project.imgUrl}
              title={project.title}
              text={project.text}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
