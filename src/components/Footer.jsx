import React from 'react'

export default function Footer() {
  return (
    <footer className="border-t border-black/5">
      <div className="mx-auto max-w-7xl px-4 py-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <div className="w-7 h-7 rounded-xl" style={{background:'linear-gradient(135deg,#4B9EFF,#9E49FC)'}}/>
          <div className="font-extrabold">Dylup</div>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-black/70">
          <a href="#">Fonctionnalités</a>
          <a href="#">Tarifs</a>
          <a href="#">Docs</a>
          <a href="#">API</a>
          <a href="#">Support</a>
          <a href="#">Mentions légales</a>
        </nav>
        <div className="text-sm text-black/60">© {new Date().getFullYear()} Dylup — Unlimited Growth Mode</div>
      </div>
    </footer>
  )
}