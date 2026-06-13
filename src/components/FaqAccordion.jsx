import React from 'react'
import { Accordion } from 'react-bootstrap'

const MAX_FAQS = 5

function FaqAccordion({ faqs }) {
  const items = faqs.slice(0, MAX_FAQS)

  return (
    <Accordion defaultActiveKey="0">
      {items.map((item, index) => (
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
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  )
}

export default FaqAccordion
