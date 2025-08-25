import React from 'react'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import Demo from './components/Demo.jsx'
import Features from './components/Features.jsx'
import Comparison from './components/Comparison.jsx'
import ROICalculator from './components/ROICalculator.jsx'
import Testimonials from './components/Testimonials.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-white text-[#0E0E16]">
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <Comparison />
        <ROICalculator />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}