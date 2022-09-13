import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {TbHeartHandshake} from 'react-icons/tb'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      <a href="#" className={activeNav === '#' ? 'active' : ''} onClick={() => setActiveNav('#') }><AiOutlineHome/></a>
      <a href="#about" className={activeNav === '#about' ? 'active' : ''} onClick={() => setActiveNav('#about') }><AiOutlineUser/></a>
      <a href="#portfolio" className={activeNav === '#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio') }><BiBook/></a>
    </nav>
  )
}

export default Nav