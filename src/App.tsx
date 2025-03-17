
import { Routes, Route } from 'react-router-dom'
import HomePage from '../src/pages/home/home'
import AboutPage from './pages/about/about'
import "./App.css"
import Layout from './components/templates/layouts/Layout'
import CaseStudiesPage from './pages/case-studies/CaseStudiesPage'
import CareersPage from './pages/careers/CareersPage'
import ContactUs from './pages/contact-us/ContactUs'
import OurServices from './pages/our-services/OurServices'
import ScrollToTop from './providers/ScrollToTop'

function App() {

  return (
    <div className='app-container'>
      <ScrollToTop />
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/careers" element={<CareersPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/our-services" element={<OurServices />} />
        </Routes>
      </Layout>
    </div>
  )
}

export default App
