import IPortfolio from "../interfaces/IPortfolio";

function PortfolioItem({ title, imgUrl, stack, link, text }: IPortfolio) {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden">
      <img
        src={imgUrl}
        alt="port"
        className="w-full h-36 md:h-48 object-cover cursor-pointer"
      />
      <div className="w-full p-4 flex flex-col">
        <div className="md:text-x1 mb-2 md:mb-3 flex items-center justify-between">
          <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold">{title}</h3>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xs md:text-sm font-semibold rounded-md px-3 py-2  dark:hover:bg-blue-700"
            href={link}
          >
            Repo
          </a>
        </div>
        <p className="flex flex-wrap gap-2 flex-row items-center justify-start text-xs md:text-sm">
          {stack.map((item, index) => (
            <span
              key={index}
              className="inline-block px-2 py-1 font-semibold border-2 border-stone-900 rounded-md"
            >
              {item}
            </span>
          ))}
        </p>
      <span className="my-2">{text}</span>

      </div>
    </div>
  );
}

export default PortfolioItem;