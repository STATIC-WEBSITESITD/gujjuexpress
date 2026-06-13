import React from 'react'

function MarqueeBar() {
  return (
    <section className="marquee-section">
      <div className="marquee-wrapper">

        <div className="marquee-content">

          <span>🚚 Door to Door Delivery</span>
          <span>✈️ Air Freight &amp; Commercial Cargo</span>
          <span>📍 Real-Time Tracking</span>
          <span>🌍 200+ Countries</span>
          <span>🛒 E-Commerce Shipping</span>
          <span>🧳 Excess Baggage Shipping</span>

          {/* Duplicate for smooth loop */}
          <span>🚚 Door to Door Delivery</span>
          <span>✈️ Air Freight &amp; Commercial Cargo</span>
          <span>📍 Real-Time Tracking</span>
          <span>🌍 200+ Countries</span>
          <span>🛒 E-Commerce Shipping</span>
          <span>🧳 Excess Baggage Shipping</span>

        </div>

      </div>
    </section>
  )
}

export default MarqueeBar