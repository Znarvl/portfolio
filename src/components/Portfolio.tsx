import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    
    <div id="portfolio" className="flex flex-col items-center justify-center my-5">
        <div className='w-full md:w-7/12'>
      <Title orientation='left' id="2">Projects</Title>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-2">
          {portfolio.map((project, index) => (
            <PortfolioItem
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              text={project.text}
              stack={project.stack}
              link={project.link}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;