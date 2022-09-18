import React from 'react'
import './about.css'
import ME from '../../assets/me.jpeg'

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className='about__content'>
          <p>I studied Information Technology at Satya Wacana Christian University, Salatiga, Central Java, Indonesia. I have been working as an Android developer since 2018, as an iOS developer since 2019 and as a Flutter developer since 2020. I have a good knowledge and experience on creating native or hybrid mobile application such as iOS and Android. I love Test-driven development (TDD), I love solving problems by programming and crafting simple, elegant code and I love MVVM, VIPER as an architectural pattern.</p>
          <p>Fast-forward to today, and I’ve had the privilege of working at <a href='https://itsavirus.com/'>a start-up</a>, <a href='https://appkey.co.id/'>a software house company</a>, main focus these days is building iOS and Android Application at <a href='https://itsavirus.com/'>Itsavirus</a> for a variety of clients.</p>
          <p>Here are a few technologies I’ve been working with recently:</p>
          <div className='about__skill'>
            <h4>Program Languages :</h4>
            <p className='level__hight'>Swift</p>
            <p className='level__hight'>Kotlin</p>
            <p className='level__hight'>Java Android</p>
            <p className='level__hight'>Java</p>
            <p className='level__hight'>Dart</p>
            <p className='level__hight'>XML</p>
          </div>
          <div className='about__skill'>
            <h4>Web Scripting :</h4>
            <p className='level__low'>PHP</p>
            <p className='level__hight'>HTML</p>
            <p className='level__low'>CSS</p>
            <p className='level__hight'>JS</p>
          </div>
          <div className='about__skill'>
            <h4>Database :</h4>
            <p className='level__hight'>MYSQL</p>
            <p className='level__hight'>SQLITE</p>
          </div>
          <div className='about__skill'>
            <h4>IDE :</h4>
            <p className='level__hight'>XCode</p>
            <p className='level__hight'>Android Studio</p>
            <p className='level__hight'>Visual Studio Code</p>
            <p className='level__low'>NetBeans</p>
          </div>
          <div className='me__level'/>
        </div>
        <div className='me__content'>
          <div className="me">
            <img src={ME} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default About