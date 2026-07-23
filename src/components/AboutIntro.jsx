import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import aboutImg from '../assets/about.webp'

function AboutIntro() {
  return (
    <section className="about-section about-intro-section section-padding">
      <Container>

        <div className="about-wrapper">

          <Row className="align-items-center g-5">

            <Col lg={6}>
              <div className="about-image-box">

                <img
                  src={aboutImg}
                  alt="Gujju Express team and logistics"
                  className="img-fluid about-image"
                />

                <div className="about-badge">
                Trusted Since 2010
                </div>

              </div>
            </Col>

            <Col lg={6}>

              <div className="section-header text-start mb-4">

                <h6 className="section-subtitle">
                  About GUJJU EXPRESS
                </h6>

                <h2 className="section-title">
                  Delivering More Than Parcels —
                  We Deliver Connections
                </h2>

              </div>

              <p className="section-para mb-4">
                Welcome to <strong>Gujju Express</strong>,
                your reliable international logistics partner
                based in Surat, Gujarat.
              </p>

              <p className="section-para mb-4">
                We blend traditional service values with modern
                logistics expertise — offering international courier,
                commercial shipment, air freight, e-commerce shipping,
                door-to-door delivery, and excess baggage services.
              </p>

              <p className="section-para mb-0">
                Whether you are an exporter, online seller, student
                relocating abroad, or sending a personal parcel, we
                ensure smooth shipping from pickup to final delivery
                with transparent pricing and real-time updates.
              </p>

            </Col>

          </Row>

        </div>

      </Container>
    </section>
  )
}

export default AboutIntro
