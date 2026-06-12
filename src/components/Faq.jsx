import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

function Faq() {

  const faqs = [
    {
      question:
        'What documents are required for international shipping?',
      answer:
        'Required documents may include invoice, ID proof, shipping label, customs declaration, and country-specific documentation depending on the shipment type.'
    },
    {
      question:
        'Do you provide real-time tracking for all shipments?',
      answer:
        'Yes, we provide real-time shipment tracking for most international courier services so customers can monitor delivery progress anytime.'
    },
    {
      question:
        'How do I book an Amazon FBA shipment?',
      answer:
        'Booking an Amazon FBA shipment is easy. Simply contact us with your shipment details, and we will handle the labeling support, warehouse delivery, and all necessary compliance documentation for the USA, UK, UAE, and other regions.'
    },
    {
      question:
        'What are the average delivery times for express shipping?',
      answer:
        'Delivery times usually range from 3–7 business days depending on the destination country, customs clearance, and courier service selected.'
    }
  ]

  return (
    <section className="faq-section section-padding">
      <Container>

        {/* Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            FAQ
          </h6>

          <h2 className="section-title">
            Frequently Asked
            Questions
          </h2>

          <p className="section-para">
            Find answers to common questions about
            international shipping, tracking,
            documentation, and delivery services.
          </p>

        </div>

        {/* FAQ Accordion */}
        <Accordion defaultActiveKey="0">

          {faqs.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq-item"
            >

              <Accordion.Header>
                {item.question}
              </Accordion.Header>

              <Accordion.Body>
                {item.answer}
              </Accordion.Body>

            </Accordion.Item>
          ))}

        </Accordion>

      </Container>
    </section>
  )
}

export default Faq