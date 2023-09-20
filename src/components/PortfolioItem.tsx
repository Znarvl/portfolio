import type IPortfolio from '../interfaces/IPortfolio'

const PortfolioItem: React.FC<IPortfolio> = ({ title, imgUrl, stack, link, text }: IPortfolio) => {
  return (
    <div className="border-2 border-stone-900 rounded-md overflow-hidden shadow-2xl max-w-sm">
      <img
        src={imgUrl}
        alt="port"
        className="w-full h-36 md:h-48 object-cover select-none"
      />
      <div className="w-full p-4 flex flex-col ">
        <div className="md:text-x1 mb-2 md:mb-3 flex items-center justify-between">
          <h3 className="text-lg md:text-x1 mb-2 md:mb-3 font-semibold">{title}</h3>
          <a
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 text-xs md:text-sm font-semibold rounded-md px-3 py-2  dark:hover:bg-blue-700"
            href={link}
          >
            Repo
          </a>
        </div>
        <span className="mb-2">{text}</span>
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

      </div>
    </div>
  )
}

export default PortfolioItem
