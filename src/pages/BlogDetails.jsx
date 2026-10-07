import React from "react";
import { Link, useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import Header from "../components/Header";
import CtaBanner from "../components/CtaBanner";
import Footer from "../components/Footer";
import BlogContent from "../components/BlogContent";
import { getBlogBySlug } from "../data/blogs";

function BlogDetails() {
  const { slug } = useParams();
  const blog = slug ? getBlogBySlug(slug) : undefined;

  if (!blog) {
    return (
      <>
        <Header />
        <section className="page-banner">
          <Container>
            <p className="page-banner-kicker">Gujju Express</p>
            <h1 className="page-banner-title">Blog not found</h1>
            <p className="page-banner-text">
              This article is not available. Browse the Diwali shipping guides from Surat.
            </p>
          </Container>
        </section>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <section className="page-banner">
        <Container>
          <p className="page-banner-kicker">Gujju Express</p>
          <h1 className="page-banner-title">{blog.title}</h1>
          <p className="page-banner-text">{blog.excerpt}</p>
        </Container>
      </section>

      <section className="blog-detail section-padding">
        <Container>
          <div className="blog-detail-layout">
            <BlogContent blocks={blog.content} />
            <Link to="/blogs" className="blog-back">
              <i className="fa-solid fa-arrow-left" aria-hidden="true" />
              Back to all blogs
            </Link>
          </div>
        </Container>
      </section>

      <CtaBanner />
      <Footer />
    </>
  );
}

export default BlogDetails;
