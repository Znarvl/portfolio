import React from "react";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import Intro from "./components/intro";
import Timeline from "./components/Timeline";
import Portfolio from "./components/Portfolio";

function App() {

  return (
    <div className="App">
      <Intro />
      <Portfolio />
      <Timeline />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
