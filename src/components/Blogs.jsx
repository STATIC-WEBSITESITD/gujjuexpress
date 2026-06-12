import React from 'react'
import { Container } from 'react-bootstrap'
import BlogGrid from './BlogGrid'

function Blogs() {
  return (
    <section className="blogs-section section-padding">
      <Container>
        <div className="section-header text-center">
          <h6 className="section-subtitle">OUR BLOGS</h6>

          <h2 className="section-title">
            Latest News & Tips
          </h2>

          <p className="section-para">
            Get useful shipping tips, courier updates, export guidance, and
            logistics insights.
          </p>
        </div>

        <BlogGrid limit={3} />
      </Container>
    </section>
  )
}

export default Blogs
