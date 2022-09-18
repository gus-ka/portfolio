import React from 'react'
import './header.css'
import HeaderButtons from './components/HeaderButtons'
import AP from '../../assets/ap.png'

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <div className='content__detail'>
          <h3>Hello I'm</h3>
          <div className='header__namecontent'>
            <h1 className='header__firsname'>Andika</h1>
            <h1 className='header__lastname'>Putra</h1>
          </div>
          <h2 className="text-light">Mobility for everyone.</h2>

          <h3>A passionate mobile app developer. I tend to make use of modern mobile technologies to build applications that looks great, feels fantastic, and functions correctly.</h3>

          <HeaderButtons/>

        </div>
        <div className='logo'>
          <img src={AP} alt="" />
        </div>
      </div>
    </header>
  )
}

export default Header