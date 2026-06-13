import React from 'react'
import { Container, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import courierBoy from '../assets/delivery-boy.webp'

function HomeBanner() {
    return (
        <section className="home-banner home-banner-2">
            <Container>
                <div className="banner-wrapper">
                    <div className="row align-items-end g-0 g-md-5">
                        <div className="col-lg-7">
                            <h1 className="fw-bold display-5 mb-3">
                                Global Shipping,
                                Simplified
                            </h1>
                            <p className="fs-5 mb-4">
                                Gujju Express connects businesses and individuals
                                to global destinations with fast, affordable delivery.
                                Enjoy transparent pricing, door-to-door service, and
                                real-time tracking to the UK, USA, UAE, Canada, and beyond.
                            </p>
                            {/* Buttons */}
                            <div className="d-flex gap-2 gap-lg-3 flex-wrap justify-content-center justify-content-md-start mb-5">
                                <Button
                                    as={Link}
                                    to="/contact-us"
                                    className="theme-dark-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    Contact Us<i className="fa-solid fa-angles-right ms-2"></i>
                                </Button>

                                <Button
                                    as={Link}
                                    to="/tracking"
                                    className="theme-light-btn px-3 px-md-4 py-3 py-md-3"
                                >
                                    Track Your Shipment<i className="fa-solid fa-angles-right ms-2"></i>
                                </Button>
                            </div>
                            {/* Stats */}
                            <div className="row g-4 banner-features">
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                15+ Years
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                200+ Countries
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                500K+ Deliveries
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="feature-box">
                                        <i className="fa-solid fa-check-circle"></i>
                                        <div className="feature-content">
                                            <h6 className="fw-bold mb-0">
                                                99% On-Time
                                            </h6>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5 d-none d-lg-block">
                            {/* <div className="card">
                                <h4 className="mb-4 text-center text-white">Track Your Shipment</h4>
                                <form className="track-form" action="/tracking" method="get">
                                    <select name="searchSelected" id="searchSelected" className="form-control" required>
                                        <option value="1">AWB No.</option>
                                        <option value="6">Forwarding No.</option>
                                        <option value="2">Reference No.</option>
                                    </select>
                                    <input type="text" name="tracking_no" className="form-control" placeholder="Enter tracking number…" required />
                                    <Button type='submit' className="theme-light-btn px-3 px-md-4 py-3 py-md-3 w-100">
                                        Track Now<i className="fa-solid fa-magnifying-glass ms-2"></i>
                                    </Button>
                                </form>
                                <hr className="my-4 border-white" />
                                <p className="mb-4">Your AWB (tracking) number is shared on email and WhatsApp after your shipment is booked. Separate multiple numbers with commas.</p>
                            </div> */}
                            <div className="courier-boy-box">
                                <img
                                    src={courierBoy}
                                    alt="Gujju Express delivery partner"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
}
export default HomeBanner
