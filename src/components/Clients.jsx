import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

import client1 from '../assets/b1.gif'
import client2 from '../assets/b2.gif'
import client3 from '../assets/b3.gif'
import client4 from '../assets/b4.gif'
import client5 from '../assets/b5.gif'
import client6 from '../assets/b6.gif'

function Clients() {

  const brands = [
    client1,
    client2,
    client3,
    client4,
    client5,
    client6
  ]

  return (
    <section className="clients-section section-padding">
      <Container>

        {/* Common Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            Our Clients
          </h6>

          <h2 className="section-title">
            Why Our Clients Trust Us
          </h2>

          <p className="section-para">
            Trusted by businesses and individuals
            for secure international shipping,
            real-time tracking, and reliable delivery.
          </p>

        </div>

        {/* Brands Grid */}
        <Row className="g-4">

          {brands.map((brand, index) => (
            <Col
              lg={2}
              md={4}
              sm={6}
              xs={6}
              key={index}
            >
              <div className="brand-box">

                <img
                  src={brand}
                  alt="brand"
                  className="img-fluid"
                />

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  )
}

export default Clients