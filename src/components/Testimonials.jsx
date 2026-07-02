import { Container } from 'react-bootstrap'

import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'

import 'swiper/css'

function Testimonials() {

  const testimonials = [
    {
      text:
        'Excellent international courier service from Ahmedabad. Door-to-door pickup was smooth and my parcel reached the UK on time with clear tracking updates.',
      name: 'Yash Patel'
    },
    {
      text:
        'We use Gujju Express for commercial shipments and air freight regularly. Transparent pricing, reliable delivery, and great WhatsApp support throughout.',
      name: 'Archana Ghatiya'
    },
    {
      text:
        'Affordable e-commerce shipping rates that helped us expand to the USA and UAE. Professional team and hassle-free documentation support.',
      name: 'Milan Bhalodiya'
    },
    {
      text:
        'Sent excess baggage abroad before relocating for studies. Much cheaper than airline fees and everything arrived safely at my destination.',
      name: 'Chintan Mehta'
    },
    {
      text:
        'Best international courier in Gujarat. Fast pickup, secure handling, and dependable delivery for both personal and business shipments.',
      name: 'Keyur Bangoriya'
    },
    {
      text:
        'Highly recommend their student shipping services. The team helped pack all my belongings safely and delivered them to Canada on time.',
      name: 'Disha Patel'
    }
  ]

  return (
    <section className="testimonial-section section-padding">
      <Container>

        {/* Heading */}
        <div className="section-header text-center">

          <h6 className="section-subtitle">
            Testimonials
          </h6>

          <h2 className="section-title">
            What Our Clients Say
          </h2>

          <p className="section-para">
            Trusted by exporters, e-commerce sellers, and families
            for reliable international shipping and professional service.
          </p>

        </div>

        {/* Slider */}
        <Swiper
          modules={[Autoplay]}
          spaceBetween={30}
          slidesPerView={3}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false
          }}

          breakpoints={{
            0: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            992: {
              slidesPerView: 3
            }
          }}
        >

          {testimonials.map((item, index) => (
            <SwiperSlide key={index}>

              <div className="testimonial-card h-100">

                <div className="quote-icon">
                  <i className="fa-solid fa-quote-left"></i>
                </div>

                <p className="testimonial-text">
                  {item.text}
                </p>

                <h5 className="testimonial-name">
                  {item.name}
                </h5>

              </div>

            </SwiperSlide>
          ))}

        </Swiper>

      </Container>
    </section>
  )
}

export default Testimonials