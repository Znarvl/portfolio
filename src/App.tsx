import Footer from './components/Footer'
import Intro from './components/Intro'
import Timeline from './components/Timeline'
import Portfolio from './components/Portfolio'
import Tools from './components/Tools'
import Languages from './components/Languages'

const App: React.FC = () => {
  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Tools />
      <Languages />
      <Timeline />
      <Footer />
    </div>
  )
}

export default App
