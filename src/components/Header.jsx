import React, { useEffect, useState } from 'react'
import {
  Navbar,
  Nav,
  Container,
  Button,
  NavDropdown
} from 'react-bootstrap'

import { Link } from 'react-router-dom'

import logo from '../assets/logo.png'
import { CONTACT } from '../data/contact'
import { services } from '../data/services'

function Header() {

  const [scrolled, setScrolled] = useState(false)
  const [navbarExpanded, setNavbarExpanded] = useState(false)

  const closeMobileNav = () => setNavbarExpanded(false)

  useEffect(() => {

    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }

  }, [])

  return (
    <Navbar
      expand="lg"
      expanded={navbarExpanded}
      onToggle={setNavbarExpanded}
      className={`custom-header py-3 ${scrolled ? 'header-scrolled' : ''}`}
    >
      <Container>
        {/* Left Logo */}
        <Navbar.Brand as={Link} to="/">
          <img
            src={logo}
            alt="Gujju Express"
            height="55"
          />
        </Navbar.Brand>
        {/* Mobile Toggle */}
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          {/* Center Menu */}
          <Nav className="mx-auto gap-lg-4 text-lg-center">
            <Nav.Link as={Link} to="/" onClick={closeMobileNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about-us" onClick={closeMobileNav}>
              About Us
            </Nav.Link>
            <NavDropdown
              title="Services"
              id="services-dropdown"
              className="custom-dropdown"
              onToggle={(_, meta) => meta?.originalEvent?.stopPropagation()}
            >
              {services.map((service) => (
                <NavDropdown.Item
                  key={service.slug}
                  as={Link}
                  to={`/${service.slug}`}
                  onClick={closeMobileNav}
                >
                  {service.title}
                </NavDropdown.Item>
              ))}
            </NavDropdown>
            <Nav.Link as={Link} to="/tracking" onClick={closeMobileNav}>
              Tracking
            </Nav.Link>
            <Nav.Link as={Link} to="/contact-us" onClick={closeMobileNav}>
              Contact Us
            </Nav.Link>
          </Nav>

          {/* Right Buttons */}
          <div className="d-flex align-items-center gap-3 flex-column flex-lg-row mt-3 mt-lg-0">
            <Button
              href={CONTACT.whatsappHref}
              target="_blank"
              rel="noreferrer"
              variant="light"
              className="rounded-pill px-4 py-2 whatsapp-btn text-success"
            >
              <i className="fa-brands fa-whatsapp me-2"></i>
              {CONTACT.phone}
            </Button>
            <Button
              href="#"
              target="_blank"
              rel="noreferrer"
              className="rounded-pill px-4 py-2 login-btn text-white"
            >
              <i className="fa-solid fa-user me-2"></i>
              Login
            </Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header