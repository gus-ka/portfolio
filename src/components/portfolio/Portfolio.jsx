import React from 'react'
import './portfolio.css'
import {BiCheck} from 'react-icons/bi'
import {SiAppstore} from 'react-icons/si'
import {IoLogoGooglePlaystore} from 'react-icons/io5'
import {BsPersonFill} from 'react-icons/bs'
import {HiUserGroup} from 'react-icons/hi'
import JantraRoyale from '../../assets/portfolio/jantraroyale.png'
import ENavi from '../../assets/portfolio/enavi.png'
import Lopas from '../../assets/portfolio/lopas.png'
import Poltrada from '../../assets/portfolio/poltrada.png'
import TBM from '../../assets/portfolio/tbm.png'
import TBMDriver from '../../assets/portfolio/tbmdriver.png'
import Turnn from '../../assets/portfolio/turrn.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={JantraRoyale} alt="JantraRoyale" />
            <h3>Jantra Royale</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://apps.apple.com/us/app/jantra-royale/id1464478265?platform=iphone" target="_blank"><SiAppstore/></a>
              <a href="https://play.google.com/store/apps/details?id=www.jantrakakikaki.com.jantraroyale" target="_blank"><IoLogoGooglePlaystore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <BsPersonFill/></h3>Swift, Storyboard, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>Android Native <BsPersonFill/></h3>Java, XML, MVC, Firebase</p>
            </li>
            <li>
              <p>Jantra Royale is an apps for Jantrakakikaki customers and enthousiasts. This apps provide easy way to contact the workshop, make online reservation, getting coupons, member/loyalty card add other promotional initiatives from Jantrakakikaki. Jantrakakikaki, part of Janta Group, is the professional Workshop specialist for automobile suspension systems. Recondition of suspension such as Tie-rod, Long Tie-rod, Link-Stabil, Shock Absorbers, EPS (Electric Power Steering). Jantrakakikaki also provide Speed Balancing and spooring services.</p>
            </li>
          </ul>
        </article>
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={ENavi} alt="E-Navi" />
            <h3>Eナビストーマ</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://apps.apple.com/us/app/id1498872869?platform=iphone" target="_blank"><SiAppstore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <BsPersonFill/></h3>Swift, Storyboard, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p>"E Navi Stoma" was developed with the desire to support medical professionals involved in stoma care. The existing functions (catalog browsing, guidebook/information magazine browsing, anatomic chart function, video content browsing) have been taken over, making it easier to see and use. <a href="https://enavi-stoma.koshiya-mc.com/" target="_blank">Detail</a></p>
            </li>
          </ul>
        </article>
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={Lopas} alt="Lopas" />
            <h3>Lopas</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <BsPersonFill/></h3>Swift, Storyboard, MVC, Firebase</p>
            </li>
            <li>
              <p>Lopas is a sales application with products that are needed by the wider community such as rice products etc.</p>
            </li>
          </ul>
        </article><article className='portfolio'>
          <div className="portfolio__head">
            <img src={Poltrada} alt="SIAP" />
            <h3>SIAP</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://apps.apple.com/id/app/siap-poltrada-bali/id1575171808?platform=iphone" target="_blank"><SiAppstore/></a>
              <a href="https://play.google.com/store/apps/details?id=id.ac.poltradabali" target="_blank"><IoLogoGooglePlaystore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>Flutter <BsPersonFill/></h3>Dart, Provider, MVC, Firebase</p>
            </li>
            <li>
              <p>The Bali Poltrada Asset Information System (SIAP) is an application or booking system that can be downloaded by mobile. Bali Poltrada asset rental information can be published clearly, openly, transparently and in real time with smart service asset management. Users can easily access asset rental services at Poltrada Bali starting from asset type, availability, rental application, capacity confirmation, reservation and payment.</p>
            </li>
          </ul>
        </article>
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={TBM} alt="TBM" />
            <h3>Tour By Me</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://apps.apple.com/id/app/tour-by-me/id1482363706?platform=iphone" target="_blank"><SiAppstore/></a>
              <a href="https://play.google.com/store/apps/details?id=com.tbm.tbmuser" target="_blank"><IoLogoGooglePlaystore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <HiUserGroup/></h3>Swift, Storyboard, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>Android Native <HiUserGroup/></h3>Java, XML, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p>TBM is an app that will give holidaymakers the freedom to customize their own unique travel experience on the go with the most unforgettable experience in Bali and Phuket. The app values are based on the following guiding principles: Safety, Convenience, Innovation, Good Deeds.</p>
            </li>
          </ul>
        </article>
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={TBMDriver} alt="TBM Driver" />
            <h3>Tour By Me Driver</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://play.google.com/store/apps/details?id=com.project.tbm.driver" target="_blank"><IoLogoGooglePlaystore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <HiUserGroup/></h3>Swift, Storyboard, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>Android Native <HiUserGroup/></h3>Java, XML, MVC, Firebase</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p>Tour By Me Driver uses only by a driver which is already register. The functionality of Tour By Me Driver in example View driver profile, Receive booking from user, View and edit driver availableness, View nearby popular place (restaurant, beach, etc), Send/receive an incoming message to/from user.</p>
            </li>
          </ul>
        </article>
        <article className='portfolio'>
          <div className="portfolio__head">
            <img src={Turnn} alt="Turnn" />
            <h3>Turnn</h3>
          </div>
          <ul className='portfolio__list'>
            <li>
              <a href="https://apps.apple.com/id/app/turnn-maas-suite/id1538592007?platform=iphone" target="_blank"><SiAppstore/></a>
              <a href="https://play.google.com/store/apps/details?id=nl.turnn.app.android" target="_blank"><IoLogoGooglePlaystore/></a>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>iOS Native <HiUserGroup/></h3>Swift, Storyboard, VIPER, TDD</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p><h3>Android Native <HiUserGroup/></h3>Kotlin, XML, VIPER, TDD</p>
            </li>
            <li>
              <BiCheck className='portfolio__list-icon'/>
              <p>The new way of travelling. Plan, book and pay with one smart app. From now on, travel from door to door with all transport. Create an account today and start your journey. Travel without a subscription by shared bike, shared moped, shared car and all public transport in the Netherlands.</p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  )
}

export default Portfolio