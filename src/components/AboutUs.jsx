import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Button } from 'react-bootstrap'

import aboutImg from '../assets/about.webp'

function AboutUs() {
  return (
    <section className="about-section section-padding">
      <Container>

        <div className="about-wrapper">

          <Row className="align-items-center g-5">

            {/* Left Image */}
            <Col lg={6}>
              <div className="about-image-box">

                <img
                  src={aboutImg}
                  alt="about"
                  className="img-fluid about-image"
                />

                <div className="about-badge">
                Trusted Since 2010
                </div>

              </div>
            </Col>

            {/* Right Content */}
            <Col lg={6}>

              <div className="section-header text-start mb-4">

                <h6 className="section-subtitle">
                  About GUJJU EXPRESS
                </h6>

                <h2 className="section-title">
                  Delivering Your Business to
                  the World with Speed &
                  Reliability
                </h2>

              </div>

              <p className="section-para mb-4">
                Welcome to <strong>Gujju Express</strong>,
                your reliable logistics and shipping partner
                based in Ahmedabad.
              </p>

              <p className="section-para mb-4">
                We specialize in international courier
                services, export-commercial shipments,
                Amazon FBA logistics, and express
                global deliveries.
              </p>

              <p className="section-para mb-4">
                Whether you are sending documents,
                parcels, commercial cargo, or e-commerce
                inventory, we ensure smooth shipping
                from pickup to final delivery.
              </p>

              <Button
                as={Link}
                to="/about-us"
                className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3"
              >
                Know More<i className="fa-solid fa-angles-right ms-2"></i>
              </Button>

            </Col>

          </Row>

        </div>

      </Container>
    </section>
  )
}

export default AboutUs