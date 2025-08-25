import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function ROICalculator() {
  const [budget, setBudget] = useState(2500)
  const [team, setTeam] = useState(3)
  const [hourly, setHourly] = useState(35)

  const dylupCost = team <= 3 ? 29 : team <= 10 ? 79 : 199
  const timeSavedPct = 0.6
  const hoursSavedWeek = 8
  const weeks = 4.33

  const timeValue = team * hourly * hoursSavedWeek * weeks * timeSavedPct
  const toolStackCost = 1800
  const toolSavings = Math.max(toolStackCost - dylupCost, 0)
  const revenueLift = budget * 0.28

  const monthlyBenefit = Math.round(timeValue + toolSavings + revenueLift)
  const annualBenefit = monthlyBenefit * 12
  const roiPct = Math.round((annualBenefit / (dylupCost * 12)) * 100)

  return (
    <section id="roi" className="bg-white">
      <div className="mx-auto max-w-7xl px-4 py-24 grid md:grid-cols-2 gap-10 items-stretch">
        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.6}} className="glass p-6">
          <h3 className="text-xl font-bold">Dites-nous un peu plus sur vous</h3>
          <div className="mt-6 grid gap-4">
            <label className="text-sm">Budget marketing mensuel (€)
              <input type="number" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" value={budget} onChange={e=>setBudget(parseInt(e.target.value||'0'))}/>
            </label>
            <label className="text-sm">Taille de l’équipe marketing
              <input type="number" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" value={team} onChange={e=>setTeam(parseInt(e.target.value||'0'))}/>
            </label>
            <label className="text-sm">Taux horaire moyen (€)
              <input type="number" className="mt-2 w-full rounded-xl border border-black/10 px-4 py-3" value={hourly} onChange={e=>setHourly(parseInt(e.target.value||'0'))}/>
            </label>
          </div>
        </motion.div>

        <motion.div initial={{y:20, opacity:0}} whileInView={{y:0, opacity:1}} viewport={{once:true}} transition={{duration:0.6, delay:0.05}} className="glass p-6 bg-[#0B0B0F] text-white">
          <div className="text-lg font-bold">Votre projection ROI</div>
          <div className="grid grid-cols-2 gap-4 mt-4">
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-xs text-white/70">Temps gagné</div>
              <div className="text-2xl font-extrabold gradient-text">60%</div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-xs text-white/70">Économies/mois</div>
              <div className="text-2xl font-extrabold gradient-text">{toolSavings.toLocaleString('fr-FR')}€</div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-xs text-white/70">Hausse revenus estimée</div>
              <div className="text-2xl font-extrabold gradient-text">{Math.round(revenueLift).toLocaleString('fr-FR')}€</div>
            </div>
            <div className="rounded-xl bg-white/10 p-4">
              <div className="text-xs text-white/70">ROI en 1 an</div>
              <div className="text-2xl font-extrabold gradient-text">{roiPct}%</div>
            </div>
          </div>

          <div className="mt-6 text-sm text-white/80">
            <div className="flex justify-between py-2 border-b border-white/10"><span>Coûts actuels outils</span><span>{toolStackCost.toLocaleString('fr-FR')}€</span></div>
            <div className="flex justify-between py-2 border-b border-white/10"><span>Coût Dylup</span><span>{dylupCost}€</span></div>
            <div className="flex justify-between py-2 border-b border-white/10"><span>Valeur du temps économisé</span><span>{Math.round(timeValue).toLocaleString('fr-FR')}€</span></div>
            <div className="flex justify-between py-2 border-b border-white/10"><span>Augmentation des revenus</span><span>{Math.round(revenueLift).toLocaleString('fr-FR')}€</span></div>
            <div className="flex justify-between py-3 text-lg font-bold"><span>Total bénéfice annuel</span><span>{annualBenefit.toLocaleString('fr-FR')}€</span></div>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <a href="#waitlist" className="px-5 py-3 text-sm font-semibold rounded-xl text-black bg-white">Rejoindre la Waitlist</a>
            <a href="#demo" className="px-5 py-3 text-sm font-semibold rounded-xl text-white" style={{background:'linear-gradient(90deg,#4B9EFF,#2C42E2 40%,#9E49FC)'}}>Voir la démo</a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
