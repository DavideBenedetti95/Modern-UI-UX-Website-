import React from 'react'
import styles from './style'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Stats from './components/Stats'
import Business from './components/Business'
import Billing from './components/Billing'
import CardDeal from './components/CardDeal'
import Testimonials from './components/Testimonials'
import Client from './components/Client'
import CTA from './components/CTA'
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='bg-black w-full overflow-hidden'>
      <div className={`${styles.paddingX} ${styles.flexCenter}`}>
        <div className={`${styles.boxWidth}`}>
          <Navbar></Navbar>
        </div>
      </div>

      <div className={`bg-black ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero></Hero>
        </div>
      </div>

      <div className={`bg-black ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats></Stats>
          <Business></Business>
          <Billing></Billing>
          <CardDeal></CardDeal>
          <Testimonials></Testimonials>
          <Client></Client>
          <CTA></CTA>
          <Footer></Footer>
        </div>
      </div>

    </div>
  )
}

export default App