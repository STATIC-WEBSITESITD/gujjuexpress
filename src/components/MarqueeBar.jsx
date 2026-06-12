import React from 'react'

function MarqueeBar() {
  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">

        <div className="marquee-content">

          <span>🚚 Doorstep Pickup</span>
          <span>✈️ Customs Support</span>
          <span>📍 Real-Time Tracking</span>
          <span>🌍 220+ Countries</span>
          <span>📦 Secure Delivery</span>

          {/* Duplicate for smooth loop */}
          <span>🚚 Doorstep Pickup</span>
          <span>✈️ Customs Support</span>
          <span>📍 Real-Time Tracking</span>
          <span>🌍 220+ Countries</span>
          <span>📦 Secure Delivery</span>

        </div>

      </div>
    </section>
  )
}

export default MarqueeBar