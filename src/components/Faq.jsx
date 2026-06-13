import React from 'react'
import { Container } from 'react-bootstrap'
import FaqAccordion from './FaqAccordion'

function Faq() {

  const faqs = [
    {
      question:
        'Which countries do you ship to?',
      answer:
        'We deliver to 200+ countries and territories worldwide, including the USA, UK, UAE, Canada, Australia, Germany, Singapore, Saudi Arabia, and all major international destinations.'
    },
    {
      question:
        'What services does Gujju Express offer?',
      answer:
        'We offer international courier, commercial shipment, air freight, e-commerce shipping, door-to-door delivery, and excess baggage services — covering both personal and business shipping needs.'
    },
    {
      question:
        'How does door-to-door shipping work?',
      answer:
        'Share your shipment details for a quote, schedule a pickup from your location, and we handle documentation and customs clearance. Track your shipment in real time until it is delivered to the recipient\'s address.'
    },
    {
      question:
        'What are the average delivery times for air freight?',
      answer:
        'Air freight typically delivers within 3–7 business days depending on destination, customs clearance, and final-mile delivery. Economy courier options may take 7–14 business days.'
    },
    {
      question:
        'Do you provide a tracking number?',
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
            Frequently Asked
            Questions
          </h2>

          <p className="section-para">
            Find answers to common questions about
            international courier, air freight, e-commerce
            shipping, tracking, and door-to-door delivery.
          </p>

        </div>

        <FaqAccordion faqs={faqs} />

      </Container>
    </section>
  )
}

export default Faq
