import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Particles from './components/particles/Particles'

const App = () => {
  return (
    <>
        <Particles/>
        <Header />
        <Nav />
        <About />
        <Portfolio />
        <Footer />
    </>
  )
}

export default App