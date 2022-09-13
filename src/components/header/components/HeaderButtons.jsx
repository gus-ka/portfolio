import React from 'react'
import CV from '../../../assets/cv.pdf'

const HeaderButtons = () => {
  return (
    <div className="header__buttons">
        <a href={CV} download className='btn'>Download CV</a>
    </div>
  )
}

export default HeaderButtons