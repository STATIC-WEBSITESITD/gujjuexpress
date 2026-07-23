import React from 'react'
import { Container } from 'react-bootstrap'
import FaqAccordion from './FaqAccordion'

function AboutFaq() {

  const faqs = [
    {
      question: 'Which countries do you ship to?',
      answer:
        'We deliver to 200+ countries and territories worldwide, including the USA, UK, UAE, Canada, Australia, Germany, Singapore, Saudi Arabia, and all major international destinations.'
    },
    {
      question: 'How do I book a pickup from Surat?',
      answer:
        'Contact us by phone or WhatsApp with your pickup address, package weight, dimensions, and destination. We confirm the slot and arrange doorstep collection across Surat and nearby areas for all service types.'
    },
    {
      question:
        'What services do you offer for international shipping?',
      answer:
        'We offer international courier, commercial shipment, air freight, e-commerce shipping, door-to-door delivery, and excess baggage services — covering both personal and business shipping needs from India.'
    },
    {
      question:
        'How long does international delivery take from India?',
      answer:
        'Air freight and express courier typically take 3–7 business days. Economy routes and excess baggage may take 7–14 business days depending on destination and customs clearance.'
    },
    {
      question: 'Do you provide a tracking number?',
      answer:
        'Yes. After your shipment is processed, we share a tracking number and proactive updates at key milestones until delivery is completed.'
    }
  ]

  return (
    <section className="faq-section section-padding">
      <Container>

        <div className="section-header text-center">

          <h6 className="section-subtitle">
            FAQ
          </h6>

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-para">
            Quick answers about international courier, air freight,
            e-commerce shipping, door-to-door delivery, and excess baggage.
          </p>

        </div>

        <FaqAccordion faqs={faqs} />

      </Container>
    </section>
  )
}

export default AboutFaq
