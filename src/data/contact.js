export const COMPANY_ADDRESS =
  'Shop G 58, International Fashion Market, Nr Sita Nagar Chowk, Punagam, Surat - 395010'

const MAP_QUERY =
  'Shop G 58, International Fashion Market, Nr Sita Nagar Chowk, Punagam, Surat 395010'

export const CONTACT = {
  address: COMPANY_ADDRESS,
  email: 'Info@gujjuexpress.com',
  phone: '+91 8758721122',
  phoneHref: 'tel:+918758721122',
  phone2: '+91 8758721144',
  phone2Href: 'tel:+918758721144',
  whatsappHref: 'https://wa.me/918758721122',
  mapEmbedUrl: `https://maps.google.com/maps?q=${encodeURIComponent(MAP_QUERY)}&hl=en&z=16&output=embed`,
  mapsLink: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(MAP_QUERY)}`,
}
