import React from 'react'
import { Navigate, useLocation, Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import Footer from '../components/Footer'
import CtaBanner from '../components/CtaBanner'
import FaqAccordion from '../components/FaqAccordion'
import { getServiceBySlug } from '../data/services'

function ServiceParagraph({ text }) {
  const colonIndex = text.indexOf(':')
  if (colonIndex > 0 && colonIndex < 80) {
    return (
      <p className="service-detail-paragraph">
        <strong>{text.slice(0, colonIndex + 1)}</strong>
        {text.slice(colonIndex + 1)}
      </p>
    )
  }
  return <p className="service-detail-paragraph">{text}</p>
}

function ServiceDetailPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const service = getServiceBySlug(slug)

  if (!service) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">{service.bannerTitle}</h1>
          <p className="page-banner-text">{service.bannerText}</p>
        </Container>
      </section>

      <section className="service-hero-image-section">
        <Container>
          <div className="service-hero-image-wrap">
            <img
              src={service.image}
              alt={service.title}
              className="img-fluid service-hero-image"
            />
          </div>
        </Container>
      </section>

      <section className="service-detail-section section-padding">
        <Container>
          {service.introSections.map((section) => (
            <div key={section.title} className="service-detail-block">
              <h2 className="service-detail-heading">{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <ServiceParagraph key={index} text={paragraph} />
              ))}
            </div>
          ))}
        </Container>
      </section>

      <section className="service-benefits-section section-padding">
        <Container>
          <div className="section-header text-center mb-5">
            <h2 className="section-title service-benefits-title">
              {service.benefitsIntro.title}
            </h2>
            <p className="section-para">{service.benefitsIntro.text}</p>
          </div>

          <Row className="g-4">
            {service.benefits.map((benefit, index) => (
              <Col lg={4} md={6} key={index}>
                <div className="service-benefit-card h-100">
                  {benefit.icon && (
                    <div className="service-benefit-icon">
                      <i className={benefit.icon} aria-hidden="true"></i>
                    </div>
                  )}
                  <h3 className="service-benefit-title">{benefit.title}</h3>
                  <p className="service-benefit-text">{benefit.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="faq-section section-padding">
        <Container>
          <div className="section-header text-center">
            <h6 className="section-subtitle">FAQ</h6>
            <h2 className="section-title">
              Frequently Asked
              Questions
            </h2>
            {service.faqIntro && (
              <p className="section-para">{service.faqIntro}</p>
            )}
          </div>

          <FaqAccordion faqs={service.faqs} />

          <p className="policy-back mt-5 text-center">
            <Link to="/contact-us">Contact us</Link> for a quote or pickup
            booking.
          </p>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default ServiceDetailPage
