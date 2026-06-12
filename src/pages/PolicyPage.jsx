import React from 'react'
import { Navigate, useLocation, Link } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'
import { policies, policyRoutes } from '../data/policies'

const URL_PATTERN = /(https?:\/\/[^\s]+)/g

function renderPolicyText(text) {
  const parts = text.split(URL_PATTERN)
  return parts.map((part, index) =>
    part.startsWith('http') ? (
      <a key={index} href={part} target="_blank" rel="noreferrer">
        {part}
      </a>
    ) : (
      <React.Fragment key={index}>{part}</React.Fragment>
    ),
  )
}

function PolicyPage() {
  const { pathname } = useLocation()
  const slug = pathname.replace(/^\//, '')
  const policyKey = policyRoutes[slug]
  const policy = policyKey ? policies[policyKey] : null

  if (!policy) {
    return <Navigate to="/" replace />
  }

  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">{policy.title}</h1>
          <p className="page-banner-text">{policy.bannerText}</p>
        </Container>
      </section>

      <section className="policy-page-section section-padding">
        <Container>
          <div className="policy-content">
            {policy.sections.map((section) => (
              <div key={section.title} className="policy-block">
                <h2 className="policy-section-title">{section.title}</h2>
                <ol className="policy-list">
                  {section.items.map((item) => (
                    <li key={item}>{renderPolicyText(item)}</li>
                  ))}
                </ol>
              </div>
            ))}
          </div>

          <p className="policy-back mt-5">
            <Link to="/contact-us">Contact us</Link> if you have questions about
            this policy.
          </p>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default PolicyPage
