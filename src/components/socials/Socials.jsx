import React from 'react'
import './socials.css'
import {FaLinkedin, FaGithubSquare} from 'react-icons/fa'

const Socials = () => {
  return (
    <div className="socials">
        <a href="https://www.linkedin.com/in/andika-p-2a337a214/" target="_blank"><FaLinkedin size={20}/></a>
        <a href="https://github.com/gus-ka" target="_blank"><FaGithubSquare size={20}/></a>
    </div>
  )
}

export default Socials