import React from 'react'
import pointer from '../../img/pointer.svg'
import supraSlider from '../../img/supraSlider.jpg'
import chaser from '../../img/chaser.jpg'
import silviaBack from '../../img/silviaBack.jpg'
import silvia from '../../img/silvia.jpg'
import logo from '../../img/logo.png'

import { NavLink } from 'react-router-dom';


function Home() {
  return (
    <div>
        <div className="back">
        <div className="container">

          <header>
            <div>
              <img src={logo} alt="logo" />
            </div>

            <ul className="nav">
              <li><NavLink to='/home'>Home</NavLink></li>
              <li><NavLink to='/cars' >JDM CARS</NavLink></li>
              <li><NavLink to='/TechInfo' >Tech Info</NavLink></li>
              <li><NavLink to='/homee' >Home</NavLink></li>
            </ul>
          </header>

          <h1>JDM - GUNS: MACHINES TO NEVER FORGET</h1>
        </div>

        <section>
          <div className="container">
            <img className='pointer' src={pointer} alt="pointer" />
            <p className='pointerUnder'>They are hard to find, easy to lose and impossible to forget. No, it's not about girls. We are now talking about cars. Models such as Toyota Chaser, the legendary Toyota Crown and Mark II, Subaru Impreza and Mitsubishi Lancer, back in the late 90s and early 2000s, filled the roads of the Far East and Siberia everywhere and were often found in the central regions. Today they are considered almost collectible cars. Love for them spawned a whole movement called JDM. This abbreviation stands for Japanese Domestic Market, which translates as "Japanese domestic market." JDM - cars are distinguished by expressive body kits, low ground clearance and top-end equipment.</p>
          </div>
        </section>
      </div>

      <section>
        <div className="slider">
          <img src={supraSlider} alt="supraSlider" />
          <img src={chaser} alt="chaser" />
          <img src={silviaBack} alt="silviaBack" />
        </div>
      </section>

      <div className="container">
        <section>
          <div className="silviaInfo">
            <p>It is worth once and for all to part with the illusion that a used Mark of the 90s or an Impreza with a full package of documents and without a run in the Russian Federation can be purchased straight from Japan for 200,000 rubles. The stereotype “the older the car, the cheaper” does not work here. The subtleties of Russian customs legislation make it possible to import into our country under full duty only cars not older than 2009, or rare cars whose age has exceeded 30 years. JDM legends, alas, do not fall into this category.</p>
            <div>
              <img src={silvia} alt="silvia" />
            </div>
          </div>

          <p className='pointerUnder'>You can bring them only in the form of a saw cut or a designer, but the law will not allow you to move around in such a car, and the price tag for a car will not please you with democracy. As a rule, designers are acquired by true JDM fans who do not mind the means to fulfill their dreams, or as donors for their own cars. We will be happy to tell you about these cars in more detail!</p>

        </section>
      </div>
    </div>
  )
}

export default Home