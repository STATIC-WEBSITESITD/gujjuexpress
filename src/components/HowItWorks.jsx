import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function HowItWorks() {

  const process = [
    {
      icon: '📝',
      title: 'Book & Get a Quote',
      text: 'Share shipment details online or via WhatsApp for an instant price and pickup schedule.'
    },
    {
      icon: '🚚',
      title: 'Pickup Scheduled',
      text: 'We collect your package from your home, office, or warehouse at your convenience.'
    },
    {
      icon: '📦',
      title: 'Secure Packaging',
      text: 'Your shipment is handled carefully with practical packing guidance for safe transit.'
    },
    {
      icon: '🛃',
      title: 'Customs Clearance',
      text: 'We manage documentation and customs paperwork so your shipment clears smoothly.'
    },
    {
      icon: '📍',
      title: 'Track in Real Time',
      text: 'Monitor your shipment at every stage from dispatch to final delivery.'
    },
    {
      icon: '✅',
      title: 'Delivered Safely',
      text: 'Your parcel reaches its destination on time with end-to-end delivery coordination.'
    }
  ]

  return (
    <section className="how-it-works section-padding">
      <Container>

        {/* Common Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            How It Works
          </h6>

          <h2 className="section-title">
            Simple 3-Step Shipping,
            Complete Peace of Mind
          </h2>

          <p className="section-para">
            From quote to delivery — a straightforward process
            designed for convenience, transparency, and reliability.
          </p>

        </div>

        {/* Cards */}
        <Row className="g-4">

          {process.map((item, index) => (
            <Col
              lg={4}
              md={6}
              key={index}
            >
              <div className="process-card h-100">

                <div className="process-icon">
                  {item.icon}
                </div>

                <h4 className="process-title">
                  {item.title}
                </h4>

                <p className="process-text">
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

export default HowItWorks