import React from 'react';
import styles from "./style.jsx";
import {Navbar, Hero, Stats, Business, Billing, 
  CardDeal, Testimonials, Clients, CTA, Footer, LandingPage, AboutMe, Skills} from "./components"
import MainSection from './components/AboutMe.jsx';

const App = () => (
  
  <div className='bg-primary w-full overflow-hidden'>
    {/* DIS IS THE NAVBAR */}
    <div className={`${styles.paddingX} ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth}`}>
        <Navbar />
      </div>
    </div>

    <div className={`flex justify-center items-start`}>
      <div className={`xl:max-w-[1280px] w-full`}> {/* esto es igual que ${styles.boxWidth} */}
        <LandingPage />
      </div>
    </div>

    <div className={`${styles.flexStart}`}>
      <div className={`xl:max-w-[1280px] w-full`}> {/* esto es igual que ${styles.boxWidth} */}
        <AboutMe />
      </div>
    </div>

    <div className={`flex justify-center items-start`}>
      <div className={`xl:max-w-[1280px] w-full`}> {/* esto es igual que ${styles.boxWidth} */}
        <Skills />
      </div>
    </div>

    {/* 

    <div className={ `bg-primary ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>
        <Hero />
      </div>
    </div>

    */}

    <div className={`${styles.paddingX} ${styles.flexStart}`}>
      <div className={`${styles.boxWidth}`}>

        {/* 
        <Stats />
        <Business />
        <Billing />
        <CardDeal />
        <Testimonials />
        <Clients />
        <CTA />
        */}

        <Footer />
      </div>
    </div>
  </div>
)

export default App