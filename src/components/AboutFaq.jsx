import React from 'react'
import { Container, Accordion } from 'react-bootstrap'

function AboutFaq() {

  const faqs = [
    {
      question: 'Which countries do you ship to?',
      answer:
        'We deliver to 220+ countries and territories worldwide, including the USA, UK, UAE, Canada, Australia, Germany, Singapore, Saudi Arabia, and all major international destinations.'
    },
    {
      question: 'How do I book a pickup from Ahmedabad?',
      answer:
        'Contact us by phone or WhatsApp with your pickup address, package weight, dimensions, and destination. We confirm the slot and arrange doorstep collection across Ahmedabad and nearby areas.'
    },
    {
      question:
        'What items can I send through your international courier service?',
      answer:
        'We ship documents, parcels, commercial samples, gifts, and e-commerce inventory. Restricted or prohibited items vary by country and carrier—we review your shipment list before booking.'
    },
    {
      question:
        'How long does international courier delivery take from India?',
      answer:
        'Transit time depends on destination and service level. Express services often take 3–7 business days; economy routes may take 7–15+ business days, plus customs clearance where applicable.'
    },
    {
      question: 'Do you provide a tracking number?',
      answer:
        'Yes. After your shipment is processed with the carrier, we share a tracking number and proactive updates at key milestones until delivery is completed.'
    },
    {
      question: 'What documents are required?',
      answer:
        'Requirements typically include a commercial invoice, shipper and receiver details, KYC ID, and customs declaration. Commercial exports or specific destinations may need additional paperwork—we guide you step by step.'
    },
    {
      question: 'Are there weight or size limits?',
      answer:
        'Limits depend on the carrier and destination. We handle documents, parcels, and larger commercial shipments—share weight and dimensions for the right service option and quote.'
    },
    {
      question: 'Do you offer business rates?',
      answer:
        'Yes. Regular exporters, SMEs, startups, and e-commerce sellers can access tailored rates and dedicated support based on shipment volume and frequency.'
    },
    {
      question: 'Is insurance available?',
      answer:
        'Optional shipment insurance can be arranged for eligible goods. Coverage terms and premiums depend on declared value, commodity type, and carrier guidelines.'
    },
    {
      question: 'What if there’s a delay?',
      answer:
        'If a shipment is delayed, our team coordinates with the carrier and shares updates until it’s resolved. We stay available throughout the shipment journey.'
    }
  ]

  return (
    <section className="faq-section about-faq-section section-padding">
      <Container>

        <div className="section-header text-center">

          <h6 className="section-subtitle">
            FAQ
          </h6>

          <h2 className="section-title">
            Frequently Asked Questions
          </h2>

          <p className="section-para">
            Quick answers about shipping, documentation, tracking, and service
            options.
          </p>

        </div>

        <Accordion defaultActiveKey="0">

          {faqs.map((item, index) => (
            <Accordion.Item
              eventKey={index.toString()}
              key={index}
              className="faq-item"
            >

              <Accordion.Header>
                <span className="faq-number">
                  {String(index + 1).padStart(2, '0')}.
                </span>
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

export default AboutFaq
