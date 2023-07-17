
const Navigation = () => {
  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id:string) => {
    event.preventDefault();
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };
  return (
    <header className="text-white text-lg font-bold pt-5 flex flex-row-reverse pr-10">
      
      <nav>
        <a href='#projects' onClick={(event) => handleScroll(event, 'portfolio')} className="mr-4">projects</a>
        <a href='#timeline' onClick={(event) => handleScroll(event, 'timeline')} className="mr-4">timeline</a>
      </nav>
    </header>
  )
}

export default Navigation