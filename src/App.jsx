import React from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { AboutSection, ProductsSection, EducationSection, AgricultureSection, SpaceDefenceSection, WhySection, TestimonialsSection } from './components/Sections'

function Navbar() {
  const { scrollY } = useScroll()
  const bgOpacity = useTransform(scrollY, [0, 200], [0, 0.8])
  const blur = useTransform(scrollY, [0, 200], [0, 12])
  return (
    <motion.nav
      style={{ backgroundColor: `rgba(7,10,18,${bgOpacity.get()})`, backdropFilter: `saturate(140%) blur(${blur.get()}px)` }}
      className="fixed inset-x-0 top-0 z-50 border-b border-white/10"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <a href="#" className="text-sm font-semibold tracking-widest text-cyan-200">NUERIKA</a>
        <div className="hidden gap-6 text-sm text-cyan-100/80 md:flex">
          <a href="#about" className="hover:text-cyan-200">About</a>
          <a href="#products" className="hover:text-cyan-200">Products</a>
          <a href="#education" className="hover:text-cyan-200">Education</a>
          <a href="#agriculture" className="hover:text-cyan-200">Agriculture</a>
          <a href="#space" className="hover:text-cyan-200">Defence & Space</a>
          <a href="#why" className="hover:text-cyan-200">Why</a>
        </div>
        <a href="#cta" className="rounded-full border border-cyan-400/30 bg-white/5 px-4 py-2 text-xs font-semibold text-cyan-100 backdrop-blur transition hover:bg-white/10">Join</a>
      </div>
    </motion.nav>
  )
}

export default function App() {
  return (
    <div className="min-h-screen w-full bg-[#070A12] text-white">
      <Navbar />
      <Hero />
      <main className="relative z-10 space-y-10 sm:space-y-20">
        <AboutSection />
        <ProductsSection />
        <EducationSection />
        <AgricultureSection />
        <SpaceDefenceSection />
        <WhySection />
        <TestimonialsSection />

        {/* CTA */}
        <section id="cta" className="relative w-full py-24">
          <div className="mx-auto max-w-4xl px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl shadow-[0_0_80px_rgba(59,130,246,0.12)]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10" />
              <h3 className="relative z-10 text-2xl font-semibold tracking-tight text-cyan-100">Be first to access Nuerika</h3>
              <p className="relative z-10 mt-2 text-cyan-100/70">Join our early access list for the AI app and robotics kits.</p>
              <form className="relative z-10 mt-6 flex flex-col gap-3 sm:flex-row">
                <input type="email" required placeholder="you@company.com" className="h-12 flex-1 rounded-full border border-white/10 bg-black/30 px-4 text-sm outline-none placeholder:text-cyan-100/40" />
                <button className="h-12 rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-6 text-sm font-semibold">Request Access</button>
              </form>
            </motion.div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
