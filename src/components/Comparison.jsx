import React from 'react'

export default function Comparison() {
  return (
    <section className="bg-[#0B0B0F] text-white">
      <div className="mx-auto max-w-7xl px-4 py-24">
        <div className="text-center max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10">🏆 <span className="text-sm">The Competition</span></div>
          <h2 className="mt-4 text-3xl md:text-5xl font-extrabold">Pourquoi choisir <span className="gradient-text">Dylup</span> plutôt que les autres ?</h2>
          <p className="mt-3 text-white/70">IA-native, setup ultra-rapide et valeur imbattable.</p>
        </div>

        <div className="mt-12 overflow-x-auto">
          <table className="min-w-full text-left bg-white/5 rounded-2xl overflow-hidden">
            <thead className="bg-white/10">
              <tr>
                {['Fonction','Dylup','HubSpot','Adobe Campaign','Mailchimp'].map(h=>(
                  <th key={h} className="px-6 py-3 text-sm font-semibold">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="[&>tr:nth-child(even)]:bg-white/5">
              <tr><td className="px-6 py-3">IA-Native</td><td className="px-6 py-3">✅</td><td className="px-6 py-3">⚠️</td><td className="px-6 py-3">❌</td><td className="px-6 py-3">⚠️</td></tr>
              <tr><td className="px-6 py-3">Temps de setup</td><td className="px-6 py-3 font-semibold">2 min</td><td className="px-6 py-3">2–4 sem</td><td className="px-6 py-3">6–8 sem</td><td className="px-6 py-3">1–2 j</td></tr>
              <tr><td className="px-6 py-3">Webinaires intégrés</td><td className="px-6 py-3">✅</td><td className="px-6 py-3">❌</td><td className="px-6 py-3">❌</td><td className="px-6 py-3">❌</td></tr>
              <tr><td className="px-6 py-3">Prix de départ</td><td className="px-6 py-3">29€/mois</td><td className="px-6 py-3">800€+</td><td className="px-6 py-3">1200€+</td><td className="px-6 py-3">299€</td></tr>
            </tbody>
          </table>
        </div>
      </div>
    </section>
  )
}
