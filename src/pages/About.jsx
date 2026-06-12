import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import AboutIntro from '../components/AboutIntro'
import AboutPurpose from '../components/AboutPurpose'
import AboutFaq from '../components/AboutFaq'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function About() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">
            About Us
          </h1>
          <p className="page-banner-text">
            Learn how Gujju Express helps businesses and exporters
            ship worldwide from Ahmedabad with reliability and care.
          </p>
        </Container>
      </section>

      <AboutIntro />
      <AboutPurpose />
      <AboutFaq />
      <CtaBanner />
      <Footer />
    </>
  )
}

export default About
