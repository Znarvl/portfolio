import React from 'react'
import type ITools from '../interfaces/ITools'

const ToolsItem: React.FC<ITools> = ({ imgUrl, text }: ITools) => {
  const [showTooltip, setShowTooltip] = React.useState(false)

  const handleMouseEnter = (): void => {
    setShowTooltip(true)
  }

  const handleMouseLeave = (): void => {
    setShowTooltip(false)
  }

  return (
    <div
      className="relative w-12 h-12 overflow-visible"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img className="object-cover" src={imgUrl} />
      {showTooltip && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 p-2 bg-black bg-opacity-75 text-white rounded-lg">
          <p className="text-center">{text}</p>
        </div>
      )}
    </div>
  )
}

export default ToolsItem
