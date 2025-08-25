import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const links = [
    { href: '#features', label: 'Fonctionnalités' },
    { href: '#usecases', label: 'Cas d’usage' },
    { href: '#roi', label: 'Calculateur ROI' },
    { href: '#testimonials', label: 'Avis clients' },
    { href: '#blog', label: 'Blog' },
  ]
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur-md border-b border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-4 flex items-center justify-between">
        <a href="#" className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-xl" style={{background:'linear-gradient(135deg,#4B9EFF,#9E49FC)'}}/>
          <span className="text-xl font-extrabold gradient-text">Dylup</span>
        </a>
        <nav className="hidden md:flex items-center gap-8">
          {links.map(l => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-black/70 hover:text-black">{l.label}</a>
          ))}
        </nav>
        <div className="hidden md:flex items-center gap-3">
          <a href="#demo" className="px-4 py-2 text-sm font-semibold border border-dylup.violet text-dylup.violet rounded-xl hover:shadow-soft">Démo interactive</a>
          <a href="#waitlist" className="px-4 py-2 text-sm font-semibold text-white rounded-xl" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Rejoindre la waitlist</a>
        </div>
        <button className="md:hidden p-2" onClick={()=>setOpen(!open)} aria-label="Mobile menu">
          {open ? <FiX size={22}/> : <FiMenu size={22}/>}
        </button>
      </div>
      {open && (
        <motion.nav
          initial={{height:0, opacity:0}}
          animate={{height:'auto', opacity:1}}
          className="md:hidden border-t border-black/5 bg-white">
          <div className="px-4 py-4 flex flex-col gap-3">
            {links.map(l => (
              <a key={l.href} href={l.href} className="py-2 text-sm font-medium text-black/80">{l.label}</a>
            ))}
            <a href="#demo" className="px-4 py-2 text-sm font-semibold border border-dylup.violet text-dylup.violet rounded-xl">Démo interactive</a>
            <a href="#waitlist" className="px-4 py-2 text-sm font-semibold text-white rounded-xl" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Rejoindre la waitlist</a>
          </div>
        </motion.nav>
      )}
    </header>
  )
}
