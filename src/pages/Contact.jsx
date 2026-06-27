import React, { useState } from 'react'
import { Container, Button, Row, Col } from 'react-bootstrap'
import Header from '../components/Header'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { CONTACT } from '../data/contact'

const initialForm = {
  name: '',
  email: '',
  mobile: '',
  subject: '',
  message: '',
}

function Contact() {
  const [form, setForm] = useState(initialForm)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    setForm(initialForm)
  }

  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">Contact Us</h1>
          <p className="page-banner-text">
            Have a question about shipping, rates, or pickup? Reach out and our
            team will get back to you as soon as possible.
          </p>
        </Container>
      </section>

      <section className="contact-page-section section-padding">
        <Container>
          <Row className="justify-content-center">
            <Col lg={8}>
              <div className="contact-form-card">
                <h3 className="contact-form-title">Get in Touch</h3>

                {submitted && (
                  <p className="contact-form-success" role="status">
                    Thank you for your message. We will contact you shortly.
                  </p>
                )}

                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="contact-form-field">
                    <label htmlFor="contact-name">Name</label>
                    <input
                      type="text"
                      id="contact-name"
                      name="name"
                      className="contact-form-input"
                      placeholder="Your name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="contact-email">Email</label>
                    <input
                      type="email"
                      id="contact-email"
                      name="email"
                      className="contact-form-input"
                      placeholder="you@example.com"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="contact-mobile">Mobile Number</label>
                    <input
                      type="tel"
                      id="contact-mobile"
                      name="mobile"
                      className="contact-form-input"
                      placeholder="+91 00000 00000"
                      value={form.mobile}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-field">
                    <label htmlFor="contact-subject">Subject</label>
                    <input
                      type="text"
                      id="contact-subject"
                      name="subject"
                      className="contact-form-input"
                      placeholder="How can we help?"
                      value={form.subject}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="contact-form-field contact-form-field-full">
                    <label htmlFor="contact-message">Message</label>
                    <textarea
                      id="contact-message"
                      name="message"
                      className="contact-form-textarea"
                      rows={5}
                      placeholder="Tell us about your shipment or enquiry..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <Button
                    type="submit"
                    className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3 contact-form-submit"
                  >
                    Send Message
                    <i className="fa-solid fa-paper-plane ms-2"></i>
                  </Button>
                </form>
              </div>
            </Col>

            <Col lg={4} className="mt-5 mt-lg-0">
              <div className="contact-info-card">
                <h4 className="contact-info-title">Reach Us Directly</h4>
                <ul className="contact-info-list">
                  <li>
                    <i className="fa-solid fa-location-dot" aria-hidden="true"></i>
                    <span>{CONTACT.address}</span>
                  </li>
                  <li>
                    <i className="fa-solid fa-envelope" aria-hidden="true"></i>
                    <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
                  </li>
                  <li>
                    <i className="fa-solid fa-phone" aria-hidden="true"></i>
                    <span>
                      <a href={CONTACT.phoneHref}>{CONTACT.phone}</a>
                      <br />
                      <a href={CONTACT.phone2Href}>{CONTACT.phone2}</a>
                    </span>
                  </li>
                  <li>
                    <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
                    <a
                      href={CONTACT.whatsappHref}
                      target="_blank"
                      rel="noreferrer"
                    >
                      WhatsApp: {CONTACT.phone}
                    </a>
                  </li>
                  <li>
                    <i className="fa-solid fa-clock" aria-hidden="true"></i>
                    <span>Mon–Sat, 10 AM – 7 PM</span>
                  </li>
                </ul>
              </div>
            </Col>
          </Row>

          <div className="contact-map-wrap mt-5">
            <h3 className="contact-map-title">Find Us on the Map</h3>
            <div className="contact-map-frame">
              <iframe
                title="Gujju Express office location"
                src={CONTACT.mapEmbedUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
            <p className="contact-map-note">
              <a
                href={CONTACT.mapsLink}
                target="_blank"
                rel="noreferrer"
              >
                Open in Google Maps
                <i className="fa-solid fa-arrow-up-right-from-square ms-2" aria-hidden="true"></i>
              </a>
            </p>
          </div>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default Contact
