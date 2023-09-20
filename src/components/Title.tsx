import type ITitleAlignment from '../interfaces/TitleAligntment'

const Title: React.FC<ITitleAlignment> = ({ children, id, orientation }: ITitleAlignment) => {
  const isTitleRightAligned = orientation === 'right'
  return (
 <h1
      id={id !== '' ? id : undefined}
      className={`text-2xl font-bold underline underline-offset-8 mb-5 text-stone-900 ${
        isTitleRightAligned ? 'text-right' : 'text-left'
      }`}
    >
      {children}
    </h1>
  )
}

export default Title
