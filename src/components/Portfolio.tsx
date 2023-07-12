import portfolio from "../data/portfolio";
import PortfolioItem from "./PortfolioItem";
import Title from "./Title";


function Portfolio(){

    return (
        <div>
            <div id='portfolio' className="justify-center ml-25">
            <Title id={"2"} >Portfolio</Title>
            </div>
        <div  className="flex flex-col md:flex-row items-center justify-center ">
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-20">
                {portfolio.map((project,index) =>(
                    <PortfolioItem
                    key={index} 
                    imgUrl={project.imgUrl}
                    title={project.title}
                    stack={project.stack}
                    link={project.link}
                    />
                ))}
            </div>
            </div>
        </div>
    )
}

export default Portfolio;