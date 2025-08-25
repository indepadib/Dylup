import React from 'react'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-hero-radial">
      <div className="mx-auto max-w-7xl px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div initial={{y:20, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.6}}>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
            Votre stack marketing,<br/>
            <span className="gradient-text">Repensée par l’IA</span>
          </h1>
          <p className="mt-6 text-lg text-black/70 max-w-xl">
            Webinaires, emails, CRM, automatisation — réunis dans une seule plateforme pilotée par l’intelligence artificielle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#demo" className="px-6 py-3 text-white font-semibold rounded-xl shadow-soft" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Voir la démo</a>
            <a href="#waitlist" className="px-6 py-3 font-semibold rounded-xl border border-dylup.violet text-dylup.violet">Rejoindre la waitlist</a>
          </div>
          <div className="mt-5 text-sm text-black/60">✅ Déjà adopté par 1 000+ équipes</div>
        </motion.div>

        <motion.div initial={{y:30, opacity:0}} animate={{y:0, opacity:1}} transition={{duration:0.7, delay:0.1}} className="relative">
          <div className="glass p-6">
            <div className="text-sm font-semibold text-black/70">AI Assistant</div>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <div className="p-4 rounded-xl bg-white shadow">
                <div className="text-xs text-black/60">Email Open Rate</div>
                <div className="text-2xl font-extrabold gradient-text">78%</div>
              </div>
              <div className="p-4 rounded-xl bg-white shadow">
                <div className="text-xs text-black/60">Webinar Attendance</div>
                <div className="text-2xl font-extrabold gradient-text">342</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}