import Home from './pages/Home'
import About from './pages/About'
import Tracking from './pages/Tracking'
import ServicesPage from './pages/ServicesPage'
import Contact from './pages/Contact'
import PolicyPage from './pages/PolicyPage'
import ServiceDetailPage from './pages/ServiceDetailPage'
import { services } from './data/services'
import { Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'

function App() {
  return (
    <>
    <ScrollToTop />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about-us" element={<About />} />
      <Route path="/services" element={<ServicesPage />} />
      <Route path="/tracking" element={<Tracking />} />
      <Route path="/contact-us" element={<Contact />} />
      {services.map((service) => (
        <Route
          key={service.slug}
          path={`/${service.slug}`}
          element={<ServiceDetailPage />}
        />
      ))}
      <Route path="/privacy-policy" element={<PolicyPage />} />
      <Route path="/terms-and-conditions" element={<PolicyPage />} />
      <Route path="/refund-policy" element={<PolicyPage />} />
      <Route path="/shipping-policy" element={<PolicyPage />} />
    </Routes>
    </>
  )
}

export default App