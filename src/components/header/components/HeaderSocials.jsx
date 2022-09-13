import React from 'react'
import {FaLinkedin, FaGithubSquare, FaDribbbleSquare} from 'react-icons/fa'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/andika-p-2a337a214/" target="_blank"><FaLinkedin/></a>
        <a href="https://github.com/gus-ka" target="_blank"><FaGithubSquare/></a>
        {/* <a href="http://dribbble.com" target="_blank"><FaDribbbleSquare/></a> */}
    </div>
  )
}

export default HeaderSocials