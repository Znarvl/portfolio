import React from "react";

function PortfolioItem({title, imgUrl, stack, link,text}){

    return (
        <div className="border-2 border-stone-900 rounded-md overflow-hidden">
        <img 
            src={imgUrl}
            alt="port" 
            className="w-full h-36 md:h-48 object-cover cursor-pointer"
        />
        <div className="w-full p-4">
            <div className="md:text-x1 mb-2 md:mb-3 ">
            <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold">{title}</h3>
            </div>
            <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
                {stack.map(item => (
                    <span className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md">{item}</span>
                ))}
            </p>
            <a className="inline-block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mt-3 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800" href={link}>Repo</a>

        </div>
      

    </div>
    )
}

export default PortfolioItem;