import type React from 'react'

const Navigation: React.FC = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string): void => {
    event.preventDefault()
    const element = document.getElementById(id)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <header className="text-white text-lg font-bold pt-5 flex flex-row-reverse pr-12 md:pr-0">
      <nav className="hidden md:flex flex-row-reverse">
        <a href="#timeline" onClick={(event) => { handleScroll(event, 'timeline') }} className="mr-4">Timeline</a>
        <a href="#tools" onClick={(event) => { handleScroll(event, 'tools') }} className="mr-4">Tools and Languages</a>
        <a href="#projects" onClick={(event) => { handleScroll(event, 'portfolio') }} className="mr-4">Projects</a>
      </nav>
    </header>
  )
}

export default Navigation
