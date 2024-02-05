import type ITimeline from '../interfaces/ITimeline'

const TimelineItem: React.FC<ITimeline> = ({ year, title, duration, details, at, url }: ITimeline) => {
  return (
    <ol className="flex flex-col md:flex-row relative border-l border-stone-200">
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />
        <div className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">{year}</span>
          <h3 className="text-lg font-semibold text-stone-900 mr-2">{title}</h3>
          {(duration != null) && (
            <div className="my-1 text-sm font-normal leading-none text-stone-400 ">
              {duration}
            </div>
          )}
          {(at != null) && (
            <>
              <div className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
              <div className="text-sm font-normal leading-none text-stone-400">
                {at}
              </div>
            </>
          )}
        </div>
        {(url != null) && (
            <>
              <div className="my-3 text-sm font-normal leading-none text-stone-600">
                <a href={url}>Link to thesis paper</a>
              </div>
            </>
        )}
        <p className="my-2 text-base font-normal text-stone-500">{details}</p>
      </li>
    </ol>
  )
}

export default TimelineItem
