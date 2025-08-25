import React from 'react'
import { motion } from 'framer-motion'

const cards = [
  {
    title: 'CRM intelligent',
    replace: 'HubSpot, Salesforce, Pipedrive',
    text: 'Centralisez vos leads, automatisez vos suivis et laissez l’IA suggérer la prochaine action.',
    hook: '🧠 L’IA prédit l’instant idéal pour relancer chaque prospect.'
  },
  {
    title: 'Email Automation',
    replace: 'Mailchimp, ConvertKit',
    text: 'Construisez des campagnes qui s’auto-optimisent selon les résultats en temps réel.',
    hook: '⚡️ Envoi à l’heure optimale pour chaque contact.'
  },
  {
    title: 'Webinaires IA',
    replace: 'Zoom, GoToWebinar',
    text: 'Planifiez, animez et relancez automatiquement vos événements.',
    hook: '🎥 Agenda et relances générés par l’IA selon l’audience.'
  },
  {
    title: 'Analytics prédictif',
    replace: 'Google Analytics, Mixpanel',
    text: 'Des dashboards qui mettent en avant ce qui fonctionne déjà.',
    hook: '🔍 Recos immédiates : “baissez le budget ici, ROAS faible”.'
  },
]

export default function Features() {
  return (
    <section id="features" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-extrabold">Tout ce qu’il vous faut dans <span className="gradient-text">un seul outil</span></h2>
          <p className="mt-3 text-black/70">Dylup remplace 13+ outils, sans la complexité. Des modules pensés pour la croissance.</p>
        </div>
        <div className="mt-12 grid md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <motion.div key={i} initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.5, delay:i*0.05}} className="glass p-6">
              <div className="text-xl font-bold">{c.title}</div>
              <div className="mt-2 text-black/70">{c.text}</div>
              <div className="mt-3 text-sm">{c.hook}</div>
              <div className="mt-4 text-xs text-black/50">Remplace : {c.replace}</div>
              <button className="mt-6 px-4 py-2 rounded-lg text-sm font-semibold text-white" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Voir en action</button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}