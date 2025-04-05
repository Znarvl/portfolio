import type ITimeline from "../interfaces/ITimeline";

const TimelineItem: React.FC<ITimeline> = ({
  id,
  year,
  title,
  duration,
  details,
  at,
  url,
}: ITimeline) => {
  return (
    <ol
      id={`timeline-item-${id}`}
      className="flex flex-col md:flex-row relative border-l border-stone-200"
    >
      <li className="mb-10 ml-4">
        <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white" />

        <div className="flex flex-wrap gap-2 md:gap-4 items-center justify-start text-xs md:text-sm pb-1 md:pb-2">
          <span className="inline-block px-2 py-1 font-semibold text-white bg-stone-900 rounded-md">
            {year}
          </span>
          <h3 className="text-lg font-semibold text-stone-900">{title}</h3>
        </div>

        <div className="flex flex-wrap items-center gap-2 pl-2 md:pl-0">
          {duration && (
            <div className="text-sm font-normal leading-none text-stone-400">
              {duration}
            </div>
          )}
          {at && (
            <>
              <div className="w-1.5 h-1.5 bg-stone-500 rounded-full" />
              <div className="text-sm font-normal leading-none text-stone-400">
                {at}
              </div>
            </>
          )}
          {url && (
            <div className="flex items-center">
              <div className="w-1.5 h-1.5 bg-stone-500 rounded-full mr-1" />
              <div className="text-sm font-normal leading-none">
                <a
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-stone-700"
                >
                  Link to thesis paper
                </a>
              </div>
            </div>
          )}
        </div>

        <p className="my-2 text-base font-normal text-stone-500 pl-2 md:pl-0">
          {details}
        </p>
      </li>
    </ol>
  );
};

export default TimelineItem;
