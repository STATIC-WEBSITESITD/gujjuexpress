import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import ServicesGrid from '../components/ServicesGrid'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function ServicesPage() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">Our Services</h1>
          <p className="page-banner-text">
            Reliable international shipping solutions tailored to your needs —
            fast pickup, secure packaging, and on-time delivery worldwide.
          </p>
        </Container>
      </section>

      <section className="services-page-section section-padding">
        <Container>
          <ServicesGrid />
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default ServicesPage
