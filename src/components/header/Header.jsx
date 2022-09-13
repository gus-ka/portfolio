import React from 'react'
import './header.css'
import HeaderButtons from './components/HeaderButtons'
import HeaderSocials  from './components/HeaderSocials'
import ME from '../../assets/me.jpeg'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h3>Hello I'm</h3>
        <h1>Andika Putra</h1>
        <h2 className="text-light">I build things for the mobile app</h2>

        <div className="me">
          <img src={ME} alt="" />
        </div>

        <h4>A passionate mobile app developer. I tend to make use of modern mobile technologies to build applications that looks great, feels fantastic, and functions correctly.</h4>

        <HeaderButtons/>
        <HeaderSocials/> 

        <a href="#portfolio" className='scroll__down'>Scroll Down to Portfolio</a>
      </div>
    </header>
  )
}

export default Header