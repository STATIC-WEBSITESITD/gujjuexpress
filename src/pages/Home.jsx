import React from 'react'
import Header from '../components/Header'
import HomeBanner from '../components/HomeBanner'
import MarqueeBar from '../components/MarqueeBar'
import Clients from '../components/Clients'
import AboutUs from '../components/AboutUs'
import HowItWorks from '../components/HowItWorks'
import WhoWeServe from '../components/WhoWeServe'
import Services from '../components/Services'
import Faq from '../components/Faq'
import Testimonials from '../components/Testimonials'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'

function Home() {
    return (
      <>
        <Header />
        <HomeBanner />
        <MarqueeBar />
        <Clients />
        <AboutUs />
        <HowItWorks />
        <WhoWeServe />
        <Services />
        <Faq />
        <Testimonials />
        <CtaBanner />
        <Footer />
      </>
    )
  }
  
  export default Home