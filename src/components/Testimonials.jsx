import React from 'react'

const items = [
  { quote: 'On a remplacé 6 outils en 24h — +40% de conversion.', author: 'Amal, SaaS B2B' },
  { quote: 'L’IA Dylup, c’est comme recruter un marketeur senior.', author: 'Yacine, E-commerce' },
  { quote: 'Tout est centralisé. Tout est fluide. On ne reviendra jamais en arrière.', author: 'Lina, EdTech' },
]

export default function Testimonials() {
  return (
    <section id="testimonials" className="bg-[#F7F8FC]">
      <div className="mx-auto max-w-7xl px-4 py-20">
        <h2 className="text-3xl md:text-5xl font-extrabold text-center">Ce que disent <span className="gradient-text">nos clients</span></h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {items.map((t, i)=>(
            <div key={i} className="glass p-6">
              <div className="text-lg">“{t.quote}”</div>
              <div className="mt-4 text-sm text-black/70">— {t.author}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}