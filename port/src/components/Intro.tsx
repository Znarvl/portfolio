import Header from './Navigation'

const Intro: React.FC = () => {
  return (
    <section
      className="min-h-screen bg-gradient-to-r from-blue-900 via-black to-blue-900"
      aria-labelledby="intro-heading"
    >
      <Header />
      <div className="flex flex-col items-center justify-center text-center">
        <img
          className="rounded-full"
          src="/portfolio/assets/profile.png"
          alt="Profile picture of Simon"
        />
        <h1
          id="intro-heading"
          className="text-4xl md:text-7xl text-white mt-8 md:mb-3 font-bold"
        >
          Hello!
        </h1>
        <p className="text-md text-white max-w-md sm:max-w-lg md:max-w-xl sm:mb-6 mx-4 sm:mx-auto font-bold">
          My name is Simon, and I&rsquo;m a Software Engineering and Computer
          Science graduate from Linköping University. I&rsquo;m enthusiastic
          about music, web development, and artificial intelligence/machine
          learning. In my free time, I&rsquo;m tinkering with web development
          and small machine learning projects or playing music.
        </p>
      </div>
    </section>
  )
}

export default Intro
