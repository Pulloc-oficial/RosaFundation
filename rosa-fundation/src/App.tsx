import { useState } from 'react'
import './index.css'
import Navbar from './components/navbar'
import Hero from './components/hero'
import Info from './components/info'
import CardsSection from './components/cardSection'
import PricingSection from './components/pricingSection'
import CallToAction from './components/callToAction'
import Footer from './components/footer'

function App() {
  return (
    <div className="leading-normal tracking-normal text-white gradient" style={{ fontFamily: "'Source Sans Pro', sans-serif" }}>
      <Navbar />
      <Hero />
      <Info />
      <CardsSection />
      <PricingSection />
      <CallToAction /> 
      <Footer />
    </div>
  )
}

export default App
