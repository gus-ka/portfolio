import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <p>
          I have been working as an Android developer since 2018, as an iOS developer since 2019 and as a Flutter developer since 2020. I have a good knowledge and experience in some program languages and techniques of Swift, Java, Kotlin, Dart, PHP, HTML, CSS, JS, SQL, XML. I love Test-driven development (TDD), I love solving problems by programming and crafting simple, elegant code and I love MVVM, VIPER as a design pattern.
        </p>
      </div>
    </section>
  )
}

export default About