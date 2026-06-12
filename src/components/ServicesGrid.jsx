import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'
import { services } from '../data/services'

function ServicesGrid({ limit }) {
  const visibleServices =
    typeof limit === 'number' ? services.slice(0, limit) : services

  return (
    <Row className="g-4">
      {visibleServices.map((item) => (
        <Col lg={4} md={6} key={item.slug}>
          <div className="service-card h-100">
            <div className="d-flex justify-content-between align-items-start mb-4">
              <h3 className="service-title">{item.title}</h3>

              <Link
                to={`/${item.slug}`}
                className="service-arrow"
                aria-label={`Learn more about ${item.title}`}
              >
                <i className="fa-solid fa-arrow-right" aria-hidden="true" />
              </Link>
            </div>

            <p className="service-text">{item.cardText}</p>

            <div className="service-image-box">
              <img
                src={item.image}
                alt={item.title}
                className="img-fluid service-image"
              />
            </div>
          </div>
        </Col>
      ))}
    </Row>
  )
}

export default ServicesGrid
