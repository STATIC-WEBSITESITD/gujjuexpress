import React from 'react'
import { Container } from 'react-bootstrap'
import Header from '../components/Header'
import BlogGrid from '../components/BlogGrid'
import CtaBanner from '../components/CtaBanner'
import Footer from '../components/Footer'

function BlogsPage() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">Our Blogs</h1>
          <p className="page-banner-text">
            Stay updated with the latest news, tips, and insights from Gujju
            Express.
          </p>
        </Container>
      </section>

      <section className="blogs-page-section section-padding">
        <Container>
          <BlogGrid />
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  )
}

export default BlogsPage
