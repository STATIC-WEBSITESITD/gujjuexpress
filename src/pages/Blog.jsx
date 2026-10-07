import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import Header from "../components/Header";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import { blogs } from "../data/blogs";

function Blog() {
  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">
            Our Blog
          </h1>
          <p className="page-banner-text">
            Diwali shipping guides and international courier tips from Surat
          </p>
        </Container>
      </section>

      <section className="blog-listing section-padding">
        <Container>
          <Row className="gy-4">
            {blogs.map((item) => (
              <Col key={item.id} lg={4} md={6}>
                <article className="blog-card">
                  <Link to={`/blogs/${item.slug}`} className="blog-card-media">
                    <img src={item.img} alt={item.title} className="blog-card-image" />
                  </Link>
                  <div className="blog-card-body">
                    <p className="blog-card-date">{item.date}</p>
                    <h2 className="blog-card-title">
                      <Link to={`/blogs/${item.slug}`}>{item.title}</Link>
                    </h2>
                    <p className="blog-card-excerpt">{item.excerpt}</p>
                    <Button
                      as={Link}
                      to={`/blogs/${item.slug}`}
                      className="theme-light-btn light_btn px-3 px-md-4 py-3 py-md-3 blog-card-btn"
                    >
                      Read More<i className="fa-solid fa-angles-right ms-2"></i>
                    </Button>
                  </div>
                </article>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}

export default Blog;
