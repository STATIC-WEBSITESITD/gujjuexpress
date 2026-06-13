import { CONTACT } from './contact'
import internationalCourier from '../assets/international-courier.webp'
import exportCommercial from '../assets/export-commercial.webp'
import expressCourier from '../assets/express-courier.webp'
import amazonFba from '../assets/amazon-fba.webp'
import pickupPackaging from '../assets/pickup-packaging.webp'
import documentationSupport from '../assets/documentation-support.webp'

const images = {
  internationalCourier,
  exportCommercial,
  airFreight: expressCourier,
  ecommerce: amazonFba,
  doorToDoor: pickupPackaging,
  excessBaggage: documentationSupport,
}

export const services = [
  {
    slug: 'international-courier',
    title: 'International Courier',
    bannerTitle: 'International Courier',
    bannerText: 'Fast, affordable international delivery for documents, parcels, and personal shipments worldwide.',
    image: images.internationalCourier,
    cardText: 'Send documents, gifts, and personal parcels worldwide with doorstep pickup, real-time tracking, and transparent pricing.',
    faqIntro: 'Quick answers about international courier booking, pickup, tracking, and delivery timelines.',
    introSections: [
      {
        title: 'Global Shipping, Simplified',
        paragraphs: [
          'Gujju Express connects individuals and businesses to global destinations with fast, reliable international courier service.',
          'From Ahmedabad to the UK, USA, Canada, UAE, and across Europe — we handle pickup, documentation, and delivery with clear updates at every stage.',
          'Enjoy transparent pricing, direct carrier networks, and dependable service whether you are sending once or shipping regularly.',
        ],
      },
      {
        title: 'What We Do',
        paragraphs: [
          'Doorstep Pickup: We collect your shipment from your home, office, or warehouse — no need to visit a courier branch.',
          'Customs & Documentation: Our team guides you on invoices, KYC, and shipment details so your parcel clears customs smoothly.',
          'Real-Time Tracking: Stay informed from dispatch to final delivery with tracking updates you can share with your recipient.',
          'Flexible Options: Choose express delivery for urgent shipments or economy routes for cost-effective sending.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Our International Courier',
      text: 'Reliable global reach, competitive rates, and hands-on support — built for individuals and businesses shipping from India.',
    },
    benefits: [
      {
        icon: 'fas fa-globe',
        title: '200+ Countries Covered',
        text: 'Ship to major destinations including the USA, UK, UAE, Canada, Australia, and Europe with a trusted international network.',
      },
      {
        icon: 'fas fa-tags',
        title: 'Affordable Pricing',
        text: 'Competitive rates with no hidden charges — save compared to traditional courier options on many international lanes.',
      },
      {
        icon: 'fas fa-file-alt',
        title: 'Paperwork Support',
        text: 'Guidance on customs documentation and shipment declarations to help avoid avoidable delays at clearance.',
      },
      {
        icon: 'fas fa-clock',
        title: 'On-Time Delivery',
        text: 'Priority dispatch and proactive monitoring to keep your shipment moving within committed timelines.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'WhatsApp Support',
        text: 'Get quotes, booking help, and shipment updates quickly via WhatsApp and phone.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Trusted Service',
        text: 'Reliable handling for exporters, families, and businesses across Gujarat and beyond.',
      },
    ],
    faqs: [
      {
        question: 'Which countries do you deliver to?',
        answer: 'We deliver to 200+ countries and territories, including the USA, UK, UAE, Canada, Australia, Germany, Singapore, and other major international destinations.',
      },
      {
        question: 'How do I book an international courier shipment?',
        answer: `Contact us via phone or WhatsApp at ${CONTACT.phone}. Share your destination, weight, and item details — we will arrange pickup and provide a clear quote.`,
      },
      {
        question: 'What items can I send internationally?',
        answer: 'You can send documents, gifts, samples, garments, and many commercial goods (subject to restrictions). Prohibited or hazardous items cannot be shipped. Contact us with your item list for confirmation.',
      },
      {
        question: 'How long does international delivery take?',
        answer: 'Express shipments typically take 2–5 working days. Economy options may take 7–14 working days depending on destination and customs processing.',
      },
      {
        question: 'Do you provide a tracking number?',
        answer: 'Yes. Every shipment receives a tracking number so you and your recipient can monitor status from dispatch to delivery.',
      },
    ],
  },
  {
    slug: 'commercial-shipment',
    title: 'Commercial Shipment',
    bannerTitle: 'Commercial Shipment',
    bannerText: 'End-to-end commercial export shipping with documentation support and reliable global routing.',
    image: images.exportCommercial,
    cardText: 'Move commercial cargo internationally with air and sea options, export documentation guidance, and dependable delivery coordination.',
    faqIntro: 'Quick answers about commercial export shipping, documents, and transit options.',
    introSections: [
      {
        title: 'Commercial Shipping, Done Right',
        paragraphs: [
          'Ship commercial goods internationally with clear paperwork, reliable routing, and proactive support from pickup to delivery.',
          'We help exporters, manufacturers, and traders move shipments by air or sea with proper documentation and customs guidance.',
          'Whether you ship samples, bulk cargo, or recurring export orders, we coordinate the process so your goods reach global markets on schedule.',
        ],
      },
      {
        title: 'What We Do',
        paragraphs: [
          'Commercial Cargo Pickup: We collect shipments from your factory, warehouse, or office with proper handover and packaging checks.',
          'Documentation & Compliance: Assistance with invoices, packing lists, KYC, and export paperwork before dispatch.',
          'Air & Sea Coordination: Route planning based on your timeline, cargo type, and budget for the most suitable transit mode.',
          'Tracking & Updates: Regular status updates from dispatch through to final delivery at the destination.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Our Commercial Shipment Service',
      text: 'Reliable export handling, clear documentation support, and practical transit options — built for growing businesses.',
    },
    benefits: [
      {
        icon: 'fas fa-globe',
        title: 'Global Export Coverage',
        text: 'Ship to key destinations worldwide with dependable partner networks and route planning.',
      },
      {
        icon: 'fas fa-file-alt',
        title: 'Export Documentation',
        text: 'Guidance for invoices, packing lists, KYC, and shipment paperwork to reduce clearance delays.',
      },
      {
        icon: 'fas fa-cubes',
        title: 'Air & Sea Options',
        text: 'Choose air freight for speed or sea freight to optimize costs based on your cargo and timeline.',
      },
      {
        icon: 'fas fa-handshake',
        title: 'Business Support',
        text: 'Clear communication for pickup, dispatch, and delivery — ideal for regular exporters.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'Fast Assistance',
        text: 'Quick quotes and shipment status updates via WhatsApp and calls when you need them.',
      },
      {
        icon: 'fas fa-tags',
        title: 'Transparent Pricing',
        text: 'Competitive rates with a clear cost breakdown so you can plan margins confidently.',
      },
    ],
    faqs: [
      {
        question: 'What documents are needed for commercial shipments?',
        answer: 'Commonly required documents include a commercial invoice, packing list, and KYC. Depending on goods and destination, additional declarations or certificates may be required. We guide you on what applies.',
      },
      {
        question: 'Do you offer air and sea freight?',
        answer: 'Yes. We coordinate both air and sea options and recommend the best fit based on cargo type, urgency, destination, and budget.',
      },
      {
        question: 'Can you support regular exporters?',
        answer: 'Yes. We offer process support and pricing options for businesses with recurring export shipments.',
      },
      {
        question: 'Do you handle customs clearance support?',
        answer: 'We guide you on documentation and compliance requirements to support smoother clearance. The exact process depends on goods, destination, and carrier selected.',
      },
      {
        question: 'How is commercial shipping cost calculated?',
        answer: 'Pricing depends on destination, weight or volumetric weight, cargo type, and chosen mode (air or sea). Share shipment details and we will provide a clear quote.',
      },
    ],
  },
  {
    slug: 'air-freight',
    title: 'Air Freight',
    bannerTitle: 'Air Freight',
    bannerText: 'Priority air cargo for time-sensitive commercial and business shipments worldwide.',
    image: images.airFreight,
    cardText: 'Fast air freight for urgent commercial cargo with priority handling, customs support, and reliable international delivery.',
    faqIntro: 'Quick answers about air freight booking, timelines, and documentation.',
    introSections: [
      {
        title: 'Air Freight for Faster Global Delivery',
        paragraphs: [
          'When speed matters, air freight is the fastest way to move commercial cargo across international borders.',
          'Gujju Express coordinates priority air shipments for exporters, manufacturers, and businesses that need reliable transit times.',
          'From pickup and documentation to airport dispatch and final delivery, we manage the process with clear updates throughout.',
        ],
      },
      {
        title: 'What We Do',
        paragraphs: [
          'Cargo Assessment: We review weight, dimensions, and cargo type to recommend the right air freight option and routing.',
          'Export Documentation: Support for invoices, packing lists, and compliance paperwork required for air export.',
          'Priority Dispatch: Shipments are processed with priority handling to minimize transit time on major international routes.',
          'End-to-End Tracking: Monitor your air cargo from collection through to delivery at the destination.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Our Air Freight Service',
      text: 'Speed, reliability, and expert coordination — for businesses that cannot afford delays.',
    },
    benefits: [
      {
        icon: 'fas fa-plane',
        title: 'Fast Transit',
        text: 'Air freight delivers significantly faster than sea options on most international routes.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Secure Handling',
        text: 'Professional coordination and packaging guidance for valuable or time-sensitive cargo.',
      },
      {
        icon: 'fas fa-file-alt',
        title: 'Documentation Help',
        text: 'Guidance on export paperwork and customs requirements to reduce avoidable holds.',
      },
      {
        icon: 'fas fa-globe',
        title: 'Global Routes',
        text: 'Air freight support for key destinations including USA, UK, UAE, Europe, and Southeast Asia.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'Quick Updates',
        text: 'Get booking confirmation and tracking support via WhatsApp and calls.',
      },
      {
        icon: 'fas fa-tags',
        title: 'Clear Pricing',
        text: 'Transparent quotes based on weight, dimensions, destination, and cargo type.',
      },
    ],
    faqs: [
      {
        question: 'What is the typical delivery time for air freight?',
        answer: 'Most air freight shipments arrive within 3–7 working days depending on destination, customs clearance, and final-mile delivery.',
      },
      {
        question: 'What types of cargo can be shipped by air?',
        answer: 'Commercial goods, samples, electronics, garments, and general cargo are commonly shipped by air. Restricted or hazardous items require special approval. Contact us with your cargo details.',
      },
      {
        question: 'Do you provide pickup for air freight shipments?',
        answer: 'Yes. We arrange pickup from your location in Ahmedabad and nearby areas based on your schedule.',
      },
      {
        question: 'How is air freight pricing calculated?',
        answer: 'Pricing is based on chargeable weight (actual or volumetric), destination, and cargo type. Share your shipment details for an accurate quote.',
      },
      {
        question: 'Can air freight be combined with door-to-door delivery?',
        answer: 'Yes. We coordinate pickup from your location and delivery to the consignee\'s address at the destination where service is available.',
      },
    ],
  },
  {
    slug: 'ecommerce-shipping',
    title: 'E-Commerce Shipping',
    bannerTitle: 'E-Commerce Shipping',
    bannerText: 'Affordable international shipping for online sellers, marketplaces, and growing e-commerce brands.',
    image: images.ecommerce,
    cardText: 'Ship e-commerce orders and inventory globally with competitive rates, marketplace-ready handling, and reliable delivery to key regions.',
    faqIntro: 'Quick answers about e-commerce international shipping, marketplaces, and bulk inventory dispatch.',
    introSections: [
      {
        title: 'International Shipping for Online Sellers',
        paragraphs: [
          'Growing your online store internationally requires reliable, cost-effective shipping — and that is exactly what we deliver.',
          'Gujju Express supports e-commerce sellers, SMEs, and marketplace vendors with international parcel and inventory shipping to the USA, UK, UAE, and beyond.',
          'From single orders to bulk inventory shipments, we help you reach customers and fulfillment centers with transparent pricing and dependable service.',
        ],
      },
      {
        title: 'What We Do',
        paragraphs: [
          'Order & Inventory Shipping: Ship individual customer orders or bulk inventory to international marketplaces and warehouses.',
          'Marketplace Support: Guidance for common marketplace and fulfillment center requirements including labeling and documentation.',
          'Cost-Effective Routing: Competitive rates designed for e-commerce margins — save on shipping compared to many standard courier options.',
          'Tracking & Updates: Real-time tracking and proactive updates so you and your customers stay informed.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Our E-Commerce Shipping',
      text: 'Built for sellers who need reliable international delivery at rates that protect their margins.',
    },
    benefits: [
      {
        icon: 'fas fa-shopping-cart',
        title: 'Seller-Friendly Rates',
        text: 'Competitive international shipping rates designed for e-commerce businesses and online marketplaces.',
      },
      {
        icon: 'fas fa-box',
        title: 'Order & Bulk Shipping',
        text: 'Handle single parcels or bulk inventory shipments to customers and fulfillment centers worldwide.',
      },
      {
        icon: 'fas fa-globe',
        title: 'Global Marketplace Lanes',
        text: 'Reliable routes to the USA, UK, UAE, and other key e-commerce markets.',
      },
      {
        icon: 'fas fa-clipboard-check',
        title: 'Compliance Guidance',
        text: 'Support for labeling, invoicing, and documentation to help reduce fulfillment delays.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'Fast Seller Support',
        text: 'Quick help for booking, timelines, and tracking via WhatsApp and calls.',
      },
      {
        icon: 'fas fa-chart-line',
        title: 'Scale with Confidence',
        text: 'Process support for sellers shipping regularly as order volumes grow.',
      },
    ],
    faqs: [
      {
        question: 'Can you ship to Amazon and other marketplace fulfillment centers?',
        answer: 'Yes. We coordinate shipments to major marketplace fulfillment centers and guide you on common labeling and documentation requirements.',
      },
      {
        question: 'Do you offer rates for regular e-commerce shippers?',
        answer: 'Yes. We provide competitive pricing options for sellers with recurring international shipping volumes. Contact us with your monthly shipment details.',
      },
      {
        question: 'Which countries do you support for e-commerce shipping?',
        answer: 'We commonly support the USA, UK, UAE, Canada, Australia, and other major e-commerce destinations. Share your target market and we will confirm availability.',
      },
      {
        question: 'Can you ship both individual orders and bulk inventory?',
        answer: 'Yes. We handle single customer orders as well as bulk inventory shipments to warehouses and fulfillment centers.',
      },
      {
        question: 'What documents are required for e-commerce shipments?',
        answer: 'Typically an invoice, KYC, and shipment details. Additional documentation may apply based on destination and product category. We provide a checklist for your shipment.',
      },
    ],
  },
  {
    slug: 'door-to-door',
    title: 'Door to Door',
    bannerTitle: 'Door to Door',
    bannerText: 'Complete pickup-to-delivery service — we handle logistics so you do not have to visit courier offices.',
    image: images.doorToDoor,
    cardText: 'Full door-to-door international shipping from your location to the recipient\'s address with customs support and real-time tracking.',
    faqIntro: 'Quick answers about door-to-door pickup, delivery, and the shipping process.',
    introSections: [
      {
        title: 'From Your Door to Theirs',
        paragraphs: [
          'Door-to-door shipping means we collect your shipment from your home, office, or warehouse and deliver it directly to the recipient\'s address anywhere in the world.',
          'No middle steps, no drop-offs at courier branches — Gujju Express manages the entire journey including documentation and customs coordination.',
          'It is the simplest way to ship internationally, whether you are sending a personal parcel or commercial cargo.',
        ],
      },
      {
        title: 'Simple 3-Step Shipping',
        paragraphs: [
          'Book & Get a Quote: Share your shipment details online or via WhatsApp for an instant price and pickup schedule.',
          'Pickup & Clearance: We collect your package and handle customs paperwork and export documentation.',
          'Track & Deliver: Monitor your shipment in real time as it reaches its destination on time.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Door to Door Shipping',
      text: 'Convenience, transparency, and end-to-end care — from pickup to final delivery.',
    },
    benefits: [
      {
        icon: 'fas fa-truck',
        title: 'Doorstep Pickup',
        text: 'We collect from your home, office, or warehouse — saving you time and travel.',
      },
      {
        icon: 'fas fa-home',
        title: 'Direct Delivery',
        text: 'Shipments delivered to the recipient\'s address at the destination where service is available.',
      },
      {
        icon: 'fas fa-file-alt',
        title: 'Customs Handled',
        text: 'Documentation and customs clearance support so your shipment moves smoothly across borders.',
      },
      {
        icon: 'fas fa-map-marker-alt',
        title: 'Real-Time Tracking',
        text: 'Track your shipment at every stage from collection to final delivery.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'Easy Booking',
        text: 'Book and get quotes quickly via WhatsApp or phone — no complicated forms.',
      },
      {
        icon: 'fas fa-tags',
        title: 'All-Inclusive Quotes',
        text: 'Clear pricing with no surprise fees — know your cost upfront.',
      },
    ],
    faqs: [
      {
        question: 'What does door-to-door shipping include?',
        answer: 'It includes pickup from your location, export documentation support, international transit, customs clearance coordination, and delivery to the recipient\'s address at the destination.',
      },
      {
        question: 'Do you provide pickup in Ahmedabad and nearby areas?',
        answer: 'Yes. Pickup is available based on your location and schedule. Share your address and preferred time and we will confirm the slot.',
      },
      {
        question: 'Is door-to-door available for all countries?',
        answer: 'Door-to-door service is available for most major destinations including the USA, UK, UAE, Canada, and Europe. Contact us to confirm service for your specific destination.',
      },
      {
        question: 'How do I book a door-to-door shipment?',
        answer: `Contact us at ${CONTACT.phone} or via WhatsApp with your pickup address, destination, and shipment details. We will provide a quote and schedule pickup.`,
      },
      {
        question: 'Can businesses use door-to-door shipping?',
        answer: 'Yes. Door-to-door service is available for both personal and commercial shipments including samples, parcels, and regular business cargo.',
      },
    ],
  },
  {
    slug: 'excess-baggage',
    title: 'Excess Baggage',
    bannerTitle: 'Excess Baggage',
    bannerText: 'Affordable international shipping for extra luggage, relocation items, and personal belongings.',
    image: images.excessBaggage,
    cardText: 'Send excess luggage and personal belongings abroad at affordable rates — ideal for students, professionals, and families relocating internationally.',
    faqIntro: 'Quick answers about excess baggage shipping, student relocation, and personal item delivery.',
    introSections: [
      {
        title: 'Ship Your Extra Luggage Worldwide',
        paragraphs: [
          'Traveling or relocating abroad and have more baggage than your airline allows? Gujju Express offers affordable excess baggage shipping to destinations worldwide.',
          'Ideal for students moving overseas, professionals relocating, and families sending personal belongings — we make international baggage shipping simple and cost-effective.',
          'We handle pickup, documentation, and delivery so your belongings arrive safely at your new destination.',
        ],
      },
      {
        title: 'What We Do',
        paragraphs: [
          'Baggage Pickup: We collect your excess luggage or packed boxes from your home or hostel in Ahmedabad and nearby areas.',
          'Secure Packing Guidance: Practical advice on packing clothes, books, electronics, and personal items for safe international transit.',
          'Affordable Rates: Cost-effective shipping options compared to airline excess baggage fees on many international routes.',
          'Door-to-Door Delivery: Your baggage delivered to your address abroad where service is available, with tracking throughout.',
        ],
      },
    ],
    benefitsIntro: {
      title: 'Why Choose Our Excess Baggage Service',
      text: 'Save on airline fees, ship more, and travel lighter — with reliable international delivery.',
    },
    benefits: [
      {
        icon: 'fas fa-suitcase',
        title: 'Beat Airline Fees',
        text: 'Ship excess luggage at rates often lower than airline excess baggage charges on international routes.',
      },
      {
        icon: 'fas fa-graduation-cap',
        title: 'Student Friendly',
        text: 'Popular with students relocating abroad for studies — books, clothes, and personal items shipped affordably.',
      },
      {
        icon: 'fas fa-truck',
        title: 'Doorstep Pickup',
        text: 'We collect from your home, hostel, or office — no need to carry heavy bags to a courier office.',
      },
      {
        icon: 'fas fa-shield-alt',
        title: 'Safe Handling',
        text: 'Packing guidance and careful processing to protect your belongings in transit.',
      },
      {
        icon: 'fas fa-globe',
        title: 'Worldwide Delivery',
        text: 'Ship excess baggage to the USA, UK, UAE, Canada, Australia, and other popular destinations.',
      },
      {
        icon: 'fab fa-whatsapp',
        title: 'Quick Quotes',
        text: 'Share your destination and weight details on WhatsApp for a fast, clear quote.',
      },
    ],
    faqs: [
      {
        question: 'What is excess baggage shipping?',
        answer: 'It is international shipping for luggage and personal belongings that exceed airline baggage limits — a cost-effective alternative to paying airline excess fees.',
      },
      {
        question: 'Is this service suitable for students relocating abroad?',
        answer: 'Yes. Many students use our excess baggage service to ship books, clothes, and personal items before or after traveling to their study destination.',
      },
      {
        question: 'What can I include in an excess baggage shipment?',
        answer: 'Clothes, books, personal electronics, household items, and general belongings are commonly shipped. Prohibited items like liquids, batteries, and restricted goods cannot be included. Contact us for a full list.',
      },
      {
        question: 'How long does excess baggage delivery take?',
        answer: 'Delivery typically takes 7–14 working days depending on destination and service type selected. Express options may be available for faster delivery.',
      },
      {
        question: 'Do you provide pickup for excess baggage?',
        answer: 'Yes. We arrange doorstep pickup in Ahmedabad and nearby areas. Share your address and preferred date and we will confirm the schedule.',
      },
    ],
  },
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
