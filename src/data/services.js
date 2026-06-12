import { CONTACT } from './contact'
import internationalCourier from '../assets/international-courier.webp'
import exportCommercial from '../assets/export-commercial.webp'
import amazonFba from '../assets/amazon-fba.webp'
import expressCourier from '../assets/express-courier.webp'
import documentationSupport from '../assets/documentation-support.webp'
import pickupPackaging from '../assets/pickup-packaging.webp'

const images = {
  internationalCourier: internationalCourier,
  exportCommercial: exportCommercial,
  amazonFba: amazonFba,
  expressCourier: expressCourier,
  documentationSupport: documentationSupport,
  pickupPackaging: pickupPackaging,
}

export const services = [
  {
    "slug": "international-courier",
    "title": "International Courier",
    "bannerTitle": "International Courier",
    "bannerText": "Doorstep pickup, customs support, and fast worldwide delivery.",
    "image": images.internationalCourier,
    "cardText": "Fast international delivery for documents and parcels with doorstep pickup, real-time tracking, and reliable worldwide coverage.",
    "faqIntro": "Quick answers to the most common questions about international courier pickup, paperwork, transit time, tracking, and customs.",
    "introSections": [
      {
        "title": "Ship Worldwide, Effortlessly",
        "paragraphs": [
          "At Gujju Express, we understand that when it comes to sending parcels, documents, or commercial goods across borders, every shipment matters.",
          "Our International Courier Service is designed to offer businesses, exporters, and individuals a seamless, hassle-free experience for sending packages to any corner of the world.",
          "With strong partnerships with globally trusted carriers and deep expertise in customs and logistics, we ensure your shipment reaches its destination safely, on time, and within budget."
        ]
      },
      {
        "title": "What we do in International Courier",
        "paragraphs": [
          "Door-to-Door Pickup: We collect your shipment directly from your office, warehouse, or home and ensure it is delivered to the recipient's doorstep anywhere in the world. No need to visit courier offices or worry about drop-off logistics — we handle it all from start to finish.",
          "Customs Clearance: Our experienced team handles all necessary customs documentation including commercial invoices, packing lists, and export declarations, ensuring your shipment clears customs smoothly without unnecessary delays or penalties.",
          "Live Tracking: Stay informed at every step of your shipment's journey. We provide real-time tracking so you and your recipient can monitor the status of the parcel from dispatch to final delivery with complete transparency and peace of mind.",
          "Flexible Shipping Options: Choose our express international courier service for time-sensitive deliveries or opt for economy options for cost-effective sending of non-urgent packages. Both options come with reliable handling and professional care."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — International Courier Service Benefits",
      "text": "Reliable global reach, transparent pricing, and strong documentation support — built to help individuals and businesses ship confidently."
    },
    "benefits": [
      {
        "icon": "fas fa-globe",
        "title": "220+ Countries Covered",
        "text": "Deliver to 220+ countries and territories worldwide — USA, UK, UAE, Europe, Southeast Asia, and more — with a reliable international network."
      },
      {
        "icon": "fas fa-tags",
        "title": "Affordable Pricing",
        "text": "Highly competitive and transparent pricing with no hidden charges — ideal for startups, SMEs, and individual exporters across India."
      },
      {
        "icon": "fas fa-file-alt",
        "title": "Zero Paperwork Stress",
        "text": "Expert guidance on customs regulations, HS codes, and documentation so shipments don’t get held up due to avoidable paperwork errors."
      },
      {
        "icon": "fas fa-clock",
        "title": "On-Time Delivery",
        "text": "Streamlined dispatch and proactive monitoring help ensure delivery within committed timelines — typically 2–7 working days."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "WhatsApp Support",
        "text": "Get quick quotes, shipment updates, and answers on WhatsApp and calls — a real person to help you, without delays."
      },
      {
        "icon": "fas fa-handshake",
        "title": "Trusted by Businesses",
        "text": "Trusted by exporters, manufacturers, and e-commerce sellers across India — backed by consistent service and client satisfaction."
      }
    ],
    "faqs": [
      {
        "question": "Which countries do you deliver to?",
        "answer": "We deliver to 220+ countries and territories worldwide, including the USA, UK, UAE, Canada, Australia, Germany, Singapore, Saudi Arabia, and all major international destinations."
      },
      {
        "question": "How do I book an international courier from Ahmedabad?",
        "answer": `Simply contact us via phone or WhatsApp at ${CONTACT.phone}. Our team will arrange a pickup from your location, assist with documentation, and provide you with a competitive shipping quote.`
      },
      {
        "question": "What items can I send through your international courier service?",
        "answer": "You can send documents, commercial goods, gifts, samples, garments, and electronics (with restrictions). Certain items like hazardous materials, currency, and prohibited goods cannot be shipped internationally. Contact us for a detailed list."
      },
      {
        "question": "How long does international courier delivery take from India?",
        "answer": "Express shipments typically take 2–5 working days, while economy options may take 7–14 working days depending on the destination country."
      },
      {
        "question": "Do you provide a tracking number?",
        "answer": "Yes. Every shipment is assigned a tracking number, allowing you and your recipient to monitor the parcel's status in real time through our carrier's tracking portal."
      }
    ]
  },
  {
    "slug": "export-commercial-shipment",
    "title": "Export / Commercial Shipment",
    "bannerTitle": "Export Commercial",
    "bannerText": "Commercial export shipping with documentation and routing support.",
    "image": images.exportCommercial,
    "cardText": "Air and sea freight options for commercial shipments with customs support and export documentation guidance.",
    "faqIntro": "Quick answers about commercial export shipping, documents, and transit options.",
    "introSections": [
      {
        "title": "Export Shipping, Done Right",
        "paragraphs": [
          "Ship commercial goods internationally with clear paperwork, reliable routing, and proactive support.",
          "We help exporters, manufacturers, and traders move shipments by air or sea with proper documentation and customs guidance.",
          "From pickup to final delivery, we coordinate the process so your cargo reaches global markets smoothly and on schedule."
        ]
      },
      {
        "title": "What we do in Export Commercial",
        "paragraphs": [
          "Commercial Cargo Pickup: We collect your shipment directly from your factory, warehouse, or office in Ahmedabad and nearby locations, with proper handover and packaging checks to ensure safe dispatch.",
          "Documentation & Compliance: Our team assists with invoices, packing lists, KYC, and export-related paperwork so your shipment is fully prepared and compliant before it leaves your premises.",
          "Air & Sea Freight Coordination: We handle route planning and service selection based on your delivery timelines, cargo type, and budget — ensuring the most suitable transit mode for your goods.",
          "Tracking & Updates: Stay informed throughout the journey with regular status updates and tracking support — from dispatch all the way to final delivery at the destination."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — Export Commercial Benefits",
      "text": "Reliable export handling, clear documentation support, and practical transit options — built for businesses."
    },
    "benefits": [
      {
        "icon": "fas fa-globe",
        "title": "Global Export Coverage",
        "text": "Ship to key destinations worldwide with dependable partner networks and route planning."
      },
      {
        "icon": "fas fa-file-alt",
        "title": "Export Documentation",
        "text": "Guidance for invoices, packing lists, KYC, and shipment paperwork to reduce clearance delays."
      },
      {
        "icon": "fas fa-cubes",
        "title": "Air & Sea Options",
        "text": "Choose speed with air freight or optimize costs with sea freight — based on your cargo and timeline."
      },
      {
        "icon": "fas fa-handshake",
        "title": "Business Support",
        "text": "Clear communication for pickup, dispatch, and delivery updates — ideal for regular exporters."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "Fast Assistance",
        "text": "Quick quotes and shipment status updates via WhatsApp and calls when you need them."
      },
      {
        "icon": "fas fa-tags",
        "title": "Transparent Pricing",
        "text": "Competitive rates with a clear cost breakdown — so you can plan margins confidently."
      }
    ],
    "faqs": [
      {
        "question": "What documents are needed for export shipments?",
        "answer": "Commonly required documents include a commercial invoice, packing list, and KYC. Depending on goods and destination, additional declarations or certificates may be required. We guide you on what applies to your shipment."
      },
      {
        "question": "Do you offer air and sea freight?",
        "answer": "Yes. We coordinate both air and sea options. We recommend the best fit based on cargo type, urgency, destination, and budget."
      },
      {
        "question": "Can you support regular exporters?",
        "answer": "Yes. We offer process support and pricing options for businesses with recurring export shipments."
      },
      {
        "question": "Do you handle customs clearance support?",
        "answer": "We guide you on documentation and compliance requirements to support smoother clearance. The exact process depends on goods, destination, and carrier/service selected."
      },
      {
        "question": "How do you calculate export shipping cost?",
        "answer": "Pricing depends on destination, weight/volumetric weight, cargo type, and chosen mode (air/sea). Share shipment details and we’ll provide a clear quote."
      }
    ]
  },
  {
    "slug": "amazon-fba-shipment",
    "title": "Amazon FBA Shipment",
    "bannerTitle": "Amazon FBA",
    "bannerText": "FBA-ready pickup, labeling guidance, and fulfillment center delivery.",
    "image": images.amazonFba,
    "cardText": "Send inventory to Amazon fulfillment centers with labeling support, compliance guidance, and reliable delivery to key marketplaces.",
    "faqIntro": "Quick answers about Amazon FBA shipping, labeling, pickup, and documentation.",
    "introSections": [
      {
        "title": "Amazon FBA Shipping, Made Easy",
        "paragraphs": [
          "Ship your inventory to Amazon fulfillment centers with labeling support, documentation guidance, and reliable delivery coordination.",
          "We help Indian sellers send FBA shipments to key marketplaces like the USA, UK, and UAE while staying aligned with common Amazon requirements.",
          "Get faster turnaround, fewer rejections, and end-to-end updates — from pickup in Ahmedabad to fulfillment center delivery."
        ]
      },
      {
        "title": "What we do for Amazon FBA",
        "paragraphs": [
          "Pickup & Carton Checks: We collect your inventory directly from your location and conduct a quick review of packing and labeling readiness to ensure your shipment meets fulfillment center standards.",
          "Labeling Guidance: Our team provides support for FBA labels and carton marking so your inventory is easier to process and receive at the Amazon fulfillment center without delays.",
          "Documentation Support: We guide you on invoice, KYC, and all shipment documents required for international dispatch and customs clearance, keeping your shipment compliant from day one.",
          "Tracking & Delivery Coordination: Stay updated at every step with dedicated tracking and coordination until your shipment is confirmed received at the Amazon fulfillment center."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — Amazon FBA Shipping Benefits",
      "text": "FBA-ready preparation, smoother dispatch, and clear updates — built for sellers who ship regularly."
    },
    "benefits": [
      {
        "icon": "fas fa-clipboard-check",
        "title": "FBA Compliance Support",
        "text": "Guidance for shipment requirements to help reduce fulfillment center rejections and delays."
      },
      {
        "icon": "fas fa-tags",
        "title": "Labeling Help",
        "text": "Support for FNSKU/shipping labels and packaging checks so cartons are prepared correctly."
      },
      {
        "icon": "fas fa-globe",
        "title": "USA / UK / UAE Lanes",
        "text": "Reliable routes to major Amazon regions with tracking and regular status updates."
      },
      {
        "icon": "fas fa-truck",
        "title": "Pickup to FC Delivery",
        "text": "Door pickup and delivery coordination to the fulfillment center — without operational hassle."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "Fast Seller Support",
        "text": "Quick help for booking, timelines, and tracking via WhatsApp and calls."
      },
      {
        "icon": "fas fa-money-bill-alt",
        "title": "Cost-Effective Options",
        "text": "Practical shipping choices based on shipment urgency and budget."
      }
    ],
    "faqs": [
      {
        "question": "Can you ship to Amazon fulfillment centers?",
        "answer": "Yes. We coordinate shipments to Amazon fulfillment centers in supported regions and help you prepare the shipment correctly."
      },
      {
        "question": "Do you help with FBA labeling?",
        "answer": "We provide guidance for FBA labels and packing readiness so cartons are prepared to meet common fulfillment center requirements."
      },
      {
        "question": "Which countries do you support for FBA shipments?",
        "answer": "We commonly support shipments to the USA, UK, and UAE, and can assist with other regions based on your warehouse location and product category."
      },
      {
        "question": "What documents are required for Amazon FBA shipping?",
        "answer": "Typically you’ll need an invoice, KYC, and shipment details. Depending on destination and product category, additional documentation may be required. We share a checklist based on your shipment."
      },
      {
        "question": "Do you provide pickup and tracking for FBA shipments?",
        "answer": "Yes. We coordinate doorstep pickup (as applicable) and provide tracking updates until the shipment reaches the fulfillment center."
      }
    ]
  },
  {
    "slug": "express-courier",
    "title": "Express Courier",
    "bannerTitle": "Express Courier",
    "bannerText": "Priority handling for urgent international documents and parcels.",
    "image": images.expressCourier,
    "cardText": "Priority shipping for urgent deliveries with quick pickup and faster transit times—typically 2–5 working days.",
    "faqIntro": "Quick answers about express courier booking, timelines, and tracking.",
    "introSections": [
      {
        "title": "Express Courier, Fast & Reliable",
        "paragraphs": [
          "When timelines are tight, choose express courier for priority handling and faster global delivery.",
          "We support urgent documents, parcels, and business shipments with pickup, tracking, and documentation guidance.",
          "Typical international express delivery is 2–5 working days depending on destination and clearance."
        ]
      },
      {
        "title": "What we do in Express Courier",
        "paragraphs": [
          "Quick Booking: Share your shipment details and destination to receive an express quote and confirmed pickup schedule without any delays or back-and-forth.",
          "Same-Day Pickup (Where Available): We arrange doorstep pickup from your location in Ahmedabad and nearby areas, making it easy to dispatch without visiting a courier office.",
          "Priority Dispatch: Once collected, your shipment is processed with priority handling to minimize transit time and ensure it reaches the destination as quickly as possible.",
          "Real-Time Tracking: Receive tracking updates from the moment your shipment is dispatched to final delivery, with our team available to assist if anything needs attention along the way."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — Express Courier Benefits",
      "text": "Faster delivery, proactive updates, and dependable support — for time-sensitive shipments."
    },
    "benefits": [
      {
        "icon": "fas fa-bolt",
        "title": "Fast Transit",
        "text": "Priority handling to help deliver urgent shipments quickly across major international routes."
      },
      {
        "icon": "fas fa-shield-alt",
        "title": "Secure Handling",
        "text": "Professional packaging guidance and careful processing for important items and documents."
      },
      {
        "icon": "fas fa-file-alt",
        "title": "Documentation Help",
        "text": "Guidance for KYC and basic shipment paperwork to help reduce avoidable delays."
      },
      {
        "icon": "fas fa-globe",
        "title": "Worldwide Coverage",
        "text": "Express service support for key destinations including USA, UK, UAE, Europe, and more."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "Fast Updates",
        "text": "Get quick tracking support and status updates via WhatsApp and calls."
      },
      {
        "icon": "fas fa-tags",
        "title": "Clear Pricing",
        "text": "Transparent quotes based on destination, weight, and shipment type."
      }
    ],
    "faqs": [
      {
        "question": "What is the delivery time for express international courier?",
        "answer": "Most express shipments deliver in 2–5 working days depending on destination and customs clearance timelines."
      },
      {
        "question": "Do you provide pickup?",
        "answer": "Yes. We offer doorstep pickup based on your location and pickup schedule availability."
      },
      {
        "question": "Do express shipments include tracking?",
        "answer": "Yes. You receive a tracking number after dispatch and we can help you with updates if anything needs attention."
      },
      {
        "question": "What items can I send via express international courier?",
        "answer": "You can typically send documents, parcels, samples, and many commercial goods (subject to restrictions). Prohibited or hazardous items cannot be shipped. Contact us with item details for confirmation."
      },
      {
        "question": "Do you help with documentation for express shipments?",
        "answer": "Yes. We guide you on the basic paperwork such as KYC, invoice/contents details, and any required shipment information to reduce avoidable delays."
      }
    ]
  },
  {
    "slug": "documentation-support",
    "title": "Documentation Support",
    "bannerTitle": "Documentation Support",
    "bannerText": "Clear paperwork guidance to reduce delays and customs holds.",
    "image": images.documentationSupport,
    "cardText": "Reduce customs delays with expert help for KYC, invoices, packing lists, and export documentation—done right the first time.",
    "faqIntro": "Quick answers about international shipping paperwork.",
    "introSections": [
      {
        "title": "Documentation Support, No Stress",
        "paragraphs": [
          "Avoid delays and rejections with accurate paperwork for international courier and commercial shipments.",
          "Our team helps you prepare key documents such as invoices, packing lists, KYC, and shipment details.",
          "Whether you're shipping samples, gifts, or commercial cargo, correct documentation keeps your shipment moving."
        ]
      },
      {
        "title": "What we do in Documentation Support",
        "paragraphs": [
          "KYC Details: We collect basic shipper identification details as required for booking and dispatch, ensuring your shipment is verified and ready to move without unnecessary hold-ups.",
          "Commercial Invoice: Our team helps you prepare the commercial invoice with accurate item descriptions, declared value, and shipment purpose for smooth international processing and customs clearance.",
          "Packing List: We guide you on creating a complete packing list with correct quantity, weight, and packaging details to support smoother handling, inspection, and clearance at each stage.",
          "Shipment Declarations: Where applicable, we assist with additional declarations required by the destination country or specific shipment category to ensure full compliance and on-time delivery."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — Documentation Support Benefits",
      "text": "Clear guidance, faster processing, fewer delays — so shipments move smoothly."
    },
    "benefits": [
      {
        "icon": "fas fa-file-alt",
        "title": "Correct Paperwork",
        "text": "Support for invoices, packing lists, and shipment details based on your goods and destination."
      },
      {
        "icon": "fas fa-clock",
        "title": "Fewer Delays",
        "text": "Reduce avoidable customs holds caused by missing or incorrect information."
      },
      {
        "icon": "fas fa-globe",
        "title": "Country Guidance",
        "text": "Practical guidance for destination requirements and restrictions (as applicable)."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "Fast Support",
        "text": "Quick help on WhatsApp for questions during booking and dispatch."
      },
      {
        "icon": "fas fa-truck",
        "title": "Smoother Dispatch",
        "text": "Get shipments prepared faster with a simple checklist and step-by-step assistance."
      },
      {
        "icon": "fas fa-tasks",
        "title": "Clear Process",
        "text": "Simple instructions so businesses and first-time shippers can book confidently."
      }
    ],
    "faqs": [
      {
        "question": "What documents are usually required?",
        "answer": "Most shipments require KYC plus an invoice and packing details. Requirements can vary by destination and product category. We share a checklist based on your shipment."
      },
      {
        "question": "Will documentation mistakes cause delays?",
        "answer": "They can. Incorrect descriptions, missing values, or incomplete details often lead to holds. Our guidance helps reduce those avoidable issues."
      },
      {
        "question": "Can you help first-time international shippers?",
        "answer": "Yes. We provide a simple checklist and step-by-step help so you can book confidently and dispatch without confusion."
      },
      {
        "question": "Do you help with commercial invoice and packing list format?",
        "answer": "Yes. We guide you on what information to include (item description, quantity, value, purpose) so documentation is clearer for processing and clearance."
      },
      {
        "question": "What details do you need to prepare the document checklist?",
        "answer": "We’ll ask for item type, value, destination, shipment purpose (gift/sample/commercial), and packaging details. Based on this, we share the required documents and next steps."
      }
    ]
  },
  {
    "slug": "pickup-packaging-guidance",
    "title": "Pickup & Packaging Guidance",
    "bannerTitle": "Pickup & Packaging",
    "bannerText": "Doorstep pickup with practical packaging guidance for safer delivery.",
    "image": images.pickupPackaging,
    "cardText": "Doorstep pickup with practical packing guidance to help protect your shipment in transit and meet carrier requirements.",
    "faqIntro": "Quick answers about pickup scheduling and packaging guidance.",
    "introSections": [
      {
        "title": "Pickup & Packaging, Done Safely",
        "paragraphs": [
          "Save time with pickup from your home, office, or warehouse and ship confidently with practical packaging guidance.",
          "Correct packing helps prevent transit damage and reduces courier exceptions caused by weak or non-compliant packaging.",
          "We guide you on packing based on shipment type — documents, parcels, samples, or commercial goods."
        ]
      },
      {
        "title": "What we do in Pickup & Packaging",
        "paragraphs": [
          "Strong Outer Box: We advise on using a sturdy carton that can withstand stacking and rigorous handling throughout the transit journey, protecting your goods from the moment they leave your hands.",
          "Internal Protection: Our team guides you on using bubble wrap, foam, or padding to prevent any internal movement and absorb shocks, significantly reducing the risk of damage in transit.",
          "Seal & Label Clearly: We ensure all edges are sealed properly and that the shipping label is clearly visible, correctly placed, and scannable at every hub and checkpoint along the route.",
          "Declare Contents Accurately: Accurate and complete item descriptions on your shipment help avoid unnecessary holds, exceptions, and customs delays during international transit."
        ]
      }
    ],
    "benefitsIntro": {
      "title": "Key Benefits — Pickup & Packaging Benefits",
      "text": "Easy pickup, better packing, smoother delivery — for safer shipping."
    },
    "benefits": [
      {
        "icon": "fas fa-truck",
        "title": "Doorstep Pickup",
        "text": "Pickup scheduling to match your availability — ideal for busy businesses and individuals."
      },
      {
        "icon": "fas fa-cube",
        "title": "Safer Packing",
        "text": "Practical guidance to protect items in transit and reduce the risk of damage."
      },
      {
        "icon": "fas fa-tag",
        "title": "Labeling Guidance",
        "text": "Help with basic address/label readiness so shipments move through hubs smoothly."
      },
      {
        "icon": "fas fa-globe",
        "title": "International Ready",
        "text": "Packing tips aligned to common international courier handling and compliance expectations."
      },
      {
        "icon": "fab fa-whatsapp",
        "title": "Quick Help",
        "text": "Share photos and get quick suggestions on WhatsApp before dispatch."
      },
      {
        "icon": "fas fa-tags",
        "title": "Cost Efficient",
        "text": "Better packaging reduces damage risk and helps avoid re-packing or re-dispatch costs."
      }
    ],
    "faqs": [
      {
        "question": "Do you provide doorstep pickup in Ahmedabad?",
        "answer": "Yes. Pickup is available based on your location and schedule availability. Share your address and preferred time and we'll confirm the pickup slot."
      },
      {
        "question": "Will you pack the shipment?",
        "answer": "We provide packaging guidance and can advise on materials and methods. If you need packing support, contact us and we'll suggest the best option based on shipment type and pickup location."
      },
      {
        "question": "What is the best way to pack fragile items?",
        "answer": "Use a strong carton, double-layer protection (bubble wrap/foam), and fill empty space so items don't move. Share item details and we'll recommend a packing approach."
      },
      {
        "question": "Can you suggest packaging for international shipments?",
        "answer": "Yes. We share packing guidance based on shipment type, weight, and item sensitivity so it can handle common international handling and transit conditions."
      },
      {
        "question": "What details should I share for packaging guidance?",
        "answer": "Share the item type, approximate weight/dimensions, whether it’s fragile/liquid/electronic, and destination (if international). Photos on WhatsApp also help us suggest the right packing approach."
      }
    ]
  }
]

export function getServiceBySlug(slug) {
  return services.find((s) => s.slug === slug)
}
