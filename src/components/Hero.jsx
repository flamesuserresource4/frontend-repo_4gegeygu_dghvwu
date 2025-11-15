import React from 'react'
import { motion } from 'framer-motion'
import Spline from '@splinetool/react-spline'
import { Rocket, Brain, Sparkles } from 'lucide-react'

const FloatingBadge = ({ icon: Icon, text, className = '' }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 1, ease: 'easeOut' }}
    className={`backdrop-blur-md/50 bg-white/5 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 text-cyan-200 shadow-[0_0_60px_rgba(34,211,238,0.15)] ${className}`}
  >
    <Icon size={16} className="text-cyan-300" />
    <span className="text-xs tracking-wide">{text}</span>
  </motion.div>
)

export default function Hero() {
  return (
    <section className="relative min-h-[100svh] w-full overflow-hidden bg-[#070A12]">      
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/EF7JOSsHLk16Tlw9/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Neon gradient atmospherics */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-40 -left-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(56,189,248,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute -bottom-40 -right-40 h-[60vh] w-[60vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.25),transparent_60%)] blur-3xl" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 h-[80vh] w-[80vh] rounded-full bg-[radial-gradient(circle_at_center,rgba(99,102,241,0.18),transparent_60%)] blur-2xl" />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 mx-auto flex h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="mb-6 flex items-center gap-3"
        >
          <FloatingBadge icon={Sparkles} text="Futuristic • AI • Robotics • Drones" />
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 1 }}
          className="bg-gradient-to-br from-cyan-200 via-blue-200 to-purple-300 bg-clip-text text-4xl font-extrabold tracking-tight text-transparent sm:text-6xl lg:text-7xl drop-shadow-[0_0_30px_rgba(59,130,246,0.25)]"
        >
          Nuerika
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 1 }}
          className="mx-auto mt-4 max-w-3xl text-base text-cyan-100/80 sm:text-lg"
        >
          Engineering Intelligence. Shaping the Future.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.9 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <a
            href="#products"
            className="group relative inline-flex items-center justify-center overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 px-8 py-3 text-sm font-semibold text-white shadow-[0_0_40px_rgba(56,189,248,0.35)] transition-transform duration-300 hover:scale-[1.02]"
          >
            <span className="relative z-10 flex items-center gap-2">
              <Brain size={18} /> Explore AI App
            </span>
            <span className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.25),transparent_60%)] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
          </a>
          <a
            href="#cta"
            className="relative inline-flex items-center justify-center rounded-full border border-cyan-400/30 bg-white/5 px-8 py-3 text-sm font-semibold text-cyan-100 backdrop-blur-md transition-transform duration-300 hover:scale-[1.02] hover:bg-white/10"
          >
            <Rocket size={18} className="mr-2 text-cyan-300" /> Join Early Access
          </a>
        </motion.div>

        {/* Floating badges */}
        <div className="pointer-events-none absolute bottom-8 left-1/2 z-10 -translate-x-1/2 flex w-full max-w-5xl items-center justify-between px-6">
          <FloatingBadge icon={Brain} text="Neural Systems" />
          <FloatingBadge icon={Rocket} text="Aerospace & Drones" />
        </div>
      </div>
    </section>
  )
}
