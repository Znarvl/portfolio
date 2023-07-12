import React from "react";
import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";


function Portfolio(){

    return (
        <div>
            <div id='portfolio' className="justify-center ml-25">
            <Title >Portfolio</Title>
            </div>
        <div  className="flex flex-col md:flex-row items-center justify-center ">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                {portfolio.map(project =>(
                    <PortfolioItem
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    text={""}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Portfolio;