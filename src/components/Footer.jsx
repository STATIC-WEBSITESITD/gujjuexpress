import React from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'

import logoWhite from '../assets/logo-white.png'
import { COMPANY_ADDRESS, CONTACT } from '../data/contact'

const WHATSAPP_HREF = CONTACT.whatsappHref

function Footer() {
  return (
    <>
    <footer className="footer-section">

      <Container>

        {/* Top Footer */}
        <Row className="gy-5">

          {/* About */}
          <Col lg={4} md={6}>

            <img
              src={logoWhite}
              alt="Gujju Express"
              height="70"
              className="mb-4"
            />

            <p className="footer-text">
              Fast and secure international
              courier & cargo solutions with
              door-to-door service and
              real-time tracking.
            </p>

            <div className="social-icons d-flex gap-3 mt-4">

              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <i className="fa-brands fa-facebook-f"></i>
              </a>

              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>

              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noreferrer"
                aria-label="WhatsApp"
              >
                <i className="fa-brands fa-whatsapp"></i>
              </a>

            </div>

          </Col>

          {/* Quick Links */}
          <Col lg={2} md={6}>

            <h5 className="footer-title fs-5">
              Quick Links
            </h5>

            <ul className="footer-links">
              <li><Link to="/about-us">About Us</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/tracking">Tracking</Link></li>
              <li><Link to="/contact-us">Contact Us</Link></li>
            </ul>

          </Col>

          {/* Services */}
          <Col lg={3} md={6}>

            <h5 className="footer-title fs-5">
              Resources
            </h5>

            <ul className="footer-links">
              <li><Link to="/blogs">Blogs</Link></li>
              <li><Link to="/documents">Documents</Link></li>
              <li><Link to="/prohibited-goods">Prohibited Goods</Link></li>
            </ul>

          </Col>

          {/* Contact Us */}
          <Col lg={3} md={6}>

            <h5 className="footer-title fs-5">
              Contact Us
            </h5>

            <ul className="footer-contact list-unstyled mb-0">
              <li>
                <p className="footer-text mb-0">
                  {COMPANY_ADDRESS}
                </p>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`}>
                  <i className="fa-solid fa-envelope me-2" aria-hidden="true"></i>
                  {CONTACT.email}
                </a>
              </li>
              <li>
                <a href={CONTACT.phoneHref}>
                  <i className="fa-solid fa-phone me-2" aria-hidden="true"></i>
                  {CONTACT.phone}
                </a>
              </li>
            </ul>

          </Col>

        </Row>

        {/* Bottom Footer */}
        <div className="footer-bottom">

          <p className="mb-0">
            © 2026 Gujju Express.
          </p>

          <div className="footer-policy d-flex flex-wrap gap-4">

            <Link to="/privacy-policy">
              Privacy Policy
            </Link>

            <Link to="/terms-and-conditions">
              Terms & Condition
            </Link>

            <Link to="/refund-policy">
              Refund Policy
            </Link>

            <Link to="/shipping-policy">
              Shipping Policy
            </Link>

          </div>

        </div>

      </Container>

    </footer>

    <a
      href={WHATSAPP_HREF}
      target="_blank"
      rel="noreferrer"
      className="sticky-whatsapp"
      aria-label="Chat on WhatsApp"
    >
      <i className="fa-brands fa-whatsapp" aria-hidden="true"></i>
    </a>
    </>
  )
}

export default Footer