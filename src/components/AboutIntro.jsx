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
                  Gujju Express — Your Global Shipping Partner
                </h2>

              </div>

              <p className="section-para mb-4">
                The founder of Gujju Express brings strong experience in the
                logistics and international courier industry and is actively
                building the business with a clear vision. The company&apos;s
                primary focus is to provide clients with reliable, fast, and
                cost-effective international shipping solutions.
              </p>

              <p className="section-para mb-4">
                Gujju Express supports exporters, businesses, and e-commerce
                sellers by offering end-to-end logistics services, helping them
                expand their reach in global markets. Customer satisfaction,
                transparency, and a strong commitment to growth are the core
                principles that drive the company forward.
              </p>

              <blockquote className="about-founder-quote">
                — Jitendra D. Raval
              </blockquote>

            </Col>

          </Row>

        </div>

      </Container>
    </section>
  )
}

export default AboutIntro
