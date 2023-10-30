import Header from './Navigation'

const Intro: React.FC = () => {
  return (

        <div className="min-h-screen  bg-gradient-to-r
        from-blue-900
        via via-black
        to-blue-900 ">
          <Header/>
        <div className='items-center justify-center flex-col text-center flex'>
            <img className="rounded-full" src="/portfolio/assets/profile.png" alt="user image" />
            <h1 className="text-4xl md:text-7xl text-white mt-8 md:mb-3 font-bold">Hello!</h1>
            <p className="text-md text-white max-w-xl mb-6 font-bold">My name is Simon and I&rsquo;m pursuing a degree in Software Engineering and Computer Science at Linköpning University.
            I&rsquo;m enthusiastic about music, web development and artificial intelligence/machine learning.
             In my free time, I&rsquo;m tinkering with web development and small machine learning project, or playing music.  </p>
        </div>
        </div>
  )
}

export default Intro
