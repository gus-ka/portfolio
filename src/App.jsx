import React from 'react'
import Header from './components/header/Header'
import Nav from './components/nav/Nav'
import About from './components/about/About'
import Portfolio from './components/portfolio/Portfolio'
import Footer from './components/footer/Footer'
import Particles from './components/particles/Particles'
import Socials from './components/socials/Socials'
import Email from './components/email/Email'

const App = () => {
  return (
    <>
        <Particles/>
        <Header />
        <Socials/>
        <Email/>
        <Nav />
        <About />
        <Portfolio />
        <Footer />
    </>
  )
}

export default App