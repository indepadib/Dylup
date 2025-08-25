import React from 'react'
import { motion } from 'framer-motion'

export default function Demo() {
  return (
    <section id="demo" className="mx-auto max-w-7xl px-4 py-24">
      <div className="mx-auto text-center max-w-3xl">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-black/5">
          <span>⚡️</span><span className="text-sm font-medium">AI-Powered Automation</span>
        </div>
        <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Regardez l’IA créer votre <span className="gradient-text">Workflow</span> en direct</h2>
        <p className="mt-3 text-black/70">Dites ce que vous voulez automatiser et regardez une séquence personnalisée se générer en live.</p>
      </div>
      <motion.div initial={{scale:0.98, opacity:0}} whileInView={{scale:1, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="mt-10 glass p-6">
        <div className="flex gap-2">
          <input className="flex-1 rounded-xl border border-black/10 px-4 py-3" placeholder="Ex: Relancer les inscrits à un webinaire" />
          <button className="px-5 py-3 text-white rounded-xl" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Générer</button>
        </div>
        <div className="mt-6 grid gap-4">
          <div className="rounded-xl bg-black/5 p-4 flex items-center justify-between">
            <div className="font-semibold">Email Sequence Generated</div>
            <div className="text-xs text-black/60">✔️ Ready</div>
          </div>
          <div className="rounded-xl bg-black/5 p-4">
            <div className="text-sm">✓ Trigger: Webinar attendance completed</div>
            <div className="text-sm">✓ Action: Send personalized email</div>
            <div className="text-sm">✓ Follow-up: Schedule demo for high engagement</div>
          </div>
        </div>
      </motion.div>
      <div className="mt-4 text-center text-sm text-black/60">Prompts: Nurturer des leads froids · Réengager des inactifs · Onboarder de nouveaux clients</div>
    </section>
  )
}