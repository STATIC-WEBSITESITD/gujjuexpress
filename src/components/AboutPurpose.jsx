import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function AboutPurpose() {

  const pillars = [
    {
      icon: 'fa-solid fa-eye',
      title: 'Our Vision',
      text:
        'To be the most trusted international shipping partner from Surat — connecting Indian businesses and individuals to 200+ global destinations with confidence and care.'
    },
    {
      icon: 'fa-solid fa-bullseye',
      title: 'Our Mission',
      text:
        'To deliver fast, affordable, and compliant shipping through door-to-door service, expert documentation support, strong carrier partnerships, and proactive customer communication at every stage.'
    },
    {
      icon: 'fa-solid fa-heart',
      title: 'Our Values',
      text:
        'Reliability, transparency, and customer-first service — supported by competitive pricing, careful handling, accurate documentation, and consistent shipment updates.'
    }
  ]

  return (
    <section className="about-purpose-section section-padding">
      <Container>

        <div className="section-header text-center">

          <h6 className="section-subtitle">
            Our Purpose
          </h6>

          <h2 className="section-title">
            Vision, Mission &amp; Values
          </h2>

          <p className="section-para">
            We focus on reliable global delivery, competitive rates, and
            long-term partnerships for exporters, e-commerce sellers, SMEs,
            students, and families shipping internationally.
          </p>

        </div>

        <Row className="g-4">

          {pillars.map((item, index) => (
            <Col lg={4} md={6} key={index}>

              <div className="purpose-card h-100">

                <div className="purpose-icon">
                  <i className={item.icon}></i>
                </div>

                <h3 className="purpose-title">
                  {item.title}
                </h3>

                <p className="purpose-text">
                  {item.text}
                </p>

              </div>

            </Col>
          ))}

        </Row>

      </Container>
    </section>
  )
}

export default AboutPurpose
