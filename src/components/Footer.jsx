import React from 'react'
import { motion } from 'framer-motion'
import { Twitter, Github, Linkedin } from 'lucide-react'

export default function Footer() {
  const links = [
    { Icon: Twitter, href: '#', label: 'Twitter' },
    { Icon: Github, href: '#', label: 'GitHub' },
    { Icon: Linkedin, href: '#', label: 'LinkedIn' },
  ]
  return (
    <footer className="relative w-full border-t border-white/10 bg-[#070A12] py-10">
      <div className="pointer-events-none absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-sm text-cyan-100/70"
        >
          © {new Date().getFullYear()} Nuerika. All rights reserved.
        </motion.p>
        <div className="flex items-center gap-3">
          {links.map(({ Icon, href, label }, i) => (
            <a key={i} href={href} aria-label={label} className="group inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5 text-cyan-100/80 transition hover:bg-white/10">
              <Icon size={16} className="text-cyan-300 transition group-hover:scale-110" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  )
}
