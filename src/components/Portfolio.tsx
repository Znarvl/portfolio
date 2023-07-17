import React from 'react';
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";

function Portfolio() {
  return (
    
    <div id="portfolio" className="flex flex-col items-center justify-center my-10">
        <div className='w-full md:w-7/12'>
      <Title id="2">Projects</Title>
      </div>
      <div className="flex justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {portfolio.map((project, index) => (
            <PortfolioItem
              key={index}
              imgUrl={project.imgUrl}
              title={project.title}
              stack={project.stack}
              link={project.link}
              text={project.text}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;