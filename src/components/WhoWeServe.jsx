import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import service1 from '../assets/w1.jpeg'
import service2 from '../assets/w2.jpeg'
import service3 from '../assets/w3.jpeg'

function WhoWeServe() {

  const services = [
  {
    image: service1,
    subtitle: 'Individuals & Families',
    title: 'Personal & Family Shipments',
    text: 'Send parcels, gifts, and excess baggage safely across borders with door-to-door delivery.',
    button: 'Know More »',
    link: '/door-to-door'
  },
  {
    image: service2,
    subtitle: 'Exporters & Manufacturers',
    title: 'Business & Export Solutions',
    text: 'Commercial shipment and air freight for exporters expanding into global markets.',
    button: 'Know More »',
    link: '/commercial-shipment'
  },
  {
    image: service3,
    subtitle: 'E-Commerce Sellers & SMEs',
    title: 'Online Store Shipping',
    text: 'Affordable international shipping for e-commerce orders and marketplace inventory.',
    button: 'Know More »',
    link: '/ecommerce-shipping'
  }
]

  return (
    <section className="who-we-serve section-padding">
      <Container>

        {/* Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            WHO WE SERVE
          </h6>

          <h2 className="section-title">
            Solutions for Every
            Shipping Need
          </h2>

          <p className="section-para">
            From personal parcels and excess baggage to commercial
            exports and e-commerce orders — we serve every kind of journey.
          </p>

        </div>

        {/* Cards */}
        <Row className="g-4">

          {services.map((item, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
            >
              <div className="serve-card h-100">

                {/* Image */}
                <div className="serve-image-box">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="img-fluid serve-image"
                  />
                </div>

                {/* Content */}
                <div className="serve-content">

                  <span className="serve-subtitle">
                    {item.subtitle}
                  </span>

                  <h3 className="serve-title">
                    {item.title}
                  </h3>

                  <p className="serve-text">
                    {item.text}
                  </p>

                  <Link to={item.link} className="serve-btn">
                    {item.button}
                  </Link>

                </div>

              </div>
            </Col>
          ))}

        </Row>

      </Container>
    </section>
  )
}

export default WhoWeServe