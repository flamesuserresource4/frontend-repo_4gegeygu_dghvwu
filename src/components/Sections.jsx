import React from 'react'
import { motion } from 'framer-motion'
import { Cpu, Bot, Drone, BookOpenCheck, Sprout, Satellite, ShieldHalf, Stars, Sparkles, Phone } from 'lucide-react'

const Section = ({ id, title, subtitle, children }) => (
  <section id={id} className="relative w-full py-24 sm:py-32">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/[0.02] to-transparent pointer-events-none" />
    <div className="mx-auto max-w-7xl px-6">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8 }}
        className="text-3xl sm:text-4xl font-bold tracking-tight bg-gradient-to-r from-cyan-200 via-blue-200 to-purple-300 bg-clip-text text-transparent"
      >
        {title}
      </motion.h2>
      {subtitle && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="mt-3 max-w-3xl text-cyan-100/70"
        >
          {subtitle}
        </motion.p>
      )}
      <div className="mt-10">
        {children}
      </div>
    </div>
  </section>
)

const GlassCard = ({ children, delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20, scale: 0.98 }}
    whileInView={{ opacity: 1, y: 0, scale: 1 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.8, delay }}
    className="relative rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl shadow-[0_0_50px_rgba(59,130,246,0.1)]"
  >
    <div className="pointer-events-none absolute inset-0 rounded-2xl bg-gradient-to-br from-cyan-500/10 via-blue-500/5 to-purple-500/10" />
    <div className="relative z-10">{children}</div>
  </motion.div>
)

const IconBadge = ({ Icon, color = 'text-cyan-300', glow = 'shadow-[0_0_40px_rgba(56,189,248,0.35)]' }) => (
  <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 backdrop-blur glow ${glow}`}>
    <Icon className={`${color}`} size={22} />
  </div>
)

export function AboutSection() {
  const items = [
    { Icon: Cpu, title: 'AI Core', desc: 'Edge + cloud neural systems architected for real-time autonomy.' },
    { Icon: Bot, title: 'Robotics', desc: 'Adaptive mechatronics with perception, planning, and control.' },
    { Icon: Drone, title: 'Aerial Systems', desc: 'Swarm-ready UAV intelligence for farm, city, and space.' },
  ]
  return (
    <Section id="about" title="About Nuerika" subtitle="We fuse AI, robotics, drones, and domain expertise into deployable systems.">
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((it, i) => (
          <GlassCard key={i} delay={i * 0.08}>
            <div className="flex items-start gap-4">
              <IconBadge Icon={it.Icon} />
              <div>
                <h3 className="text-lg font-semibold text-cyan-100">{it.title}</h3>
                <p className="mt-1 text-sm text-cyan-100/70">{it.desc}</p>
              </div>
            </div>
            <div className="mt-4 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
            <div className="mt-4 grid grid-cols-3 gap-3">
              {[...Array(3)].map((_, j) => (
                <div key={j} className="h-20 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 backdrop-blur-md shadow-inner" />
              ))}
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export function ProductsSection() {
  const features = [
    { Icon: Phone, title: 'Nuerika App', desc: 'An intelligent companion with on-device models and cloud co-pilots.' },
    { Icon: Drone, title: 'AeroKit', desc: 'Drone autopilot + vision SDK with mission planning.' },
    { Icon: Bot, title: 'RoboCore', desc: 'Modular robotics brain with ROS2, SLAM, and manipulation.' },
  ]
  return (
    <Section id="products" title="Products" subtitle="Beautifully engineered systems with a cinematic UX.">
      <div className="grid gap-6 lg:grid-cols-3">
        {features.map((f, i) => (
          <GlassCard key={i} delay={i * 0.08}>
            <div className="flex items-start gap-4">
              <IconBadge Icon={f.Icon} />
              <div>
                <h3 className="text-lg font-semibold text-cyan-100">{f.title}</h3>
                <p className="mt-1 text-sm text-cyan-100/70">{f.desc}</p>
              </div>
            </div>
            <div className="mt-6 h-56 rounded-xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent shadow-[inset_0_0_60px_rgba(56,189,248,0.12)]" />
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export function EducationSection() {
  return (
    <Section id="education" title="AI in Education" subtitle="Personalized, interactive learning guided by AI co-tutors.">
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={BookOpenCheck} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Holographic Curriculum</h3>
              <p className="mt-1 text-sm text-cyan-100/70">Dynamic assessments, adaptive pacing, and multimodal explanations.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={Stars} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Interactive Tutor</h3>
              <p className="mt-1 text-sm text-cyan-100/70">Conversational AI that demos concepts with 3D visualizations.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-blue-500/10 to-cyan-500/10" />
        </GlassCard>
      </div>
    </Section>
  )
}

export function AgricultureSection() {
  return (
    <Section id="agriculture" title="Agriculture AI" subtitle="Precision farming with autonomous drones and plant health AI.">
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={Sprout} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Field Intelligence</h3>
              <p className="mt-1 text-sm text-cyan-100/70">Terrain mapping, crop analytics, and resource optimization.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-green-500/10" />
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={Drone} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Aerial Scans</h3>
              <p className="mt-1 text-sm text-cyan-100/70">UAV fleets monitor growth, detect disease, and deploy treatments.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10" />
        </GlassCard>
      </div>
    </Section>
  )
}

export function SpaceDefenceSection() {
  return (
    <Section id="space" title="Defence & Space Robotics" subtitle="Exploration and security powered by resilient autonomy.">
      <div className="grid gap-6 md:grid-cols-2">
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={ShieldHalf} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Robust Systems</h3>
              <p className="mt-1 text-sm text-cyan-100/70">Radiation-tolerant compute, low-latency control, secure links.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
        </GlassCard>
        <GlassCard>
          <div className="flex items-start gap-4">
            <IconBadge Icon={Satellite} />
            <div>
              <h3 className="text-lg font-semibold text-cyan-100">Orbital Ops</h3>
              <p className="mt-1 text-sm text-cyan-100/70">Satcom meshes, autonomous docking, and surface robotics.</p>
            </div>
          </div>
          <div className="mt-6 h-64 rounded-xl border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10" />
        </GlassCard>
      </div>
    </Section>
  )
}

export function WhySection() {
  const items = [
    { title: 'Performance', desc: 'Realtime systems, optimized kernels, and on-device inference.' },
    { title: 'Security', desc: 'Trustworthy AI with privacy-first data pipelines.' },
    { title: 'Design', desc: 'Human-centric and cinematic product experiences.' },
  ]
  return (
    <Section id="why" title="Why Nuerika" subtitle="A company built at the intersection of science, engineering, and design.">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <GlassCard key={i} delay={i * 0.08}>
            <h3 className="text-lg font-semibold text-cyan-100">{it.title}</h3>
            <p className="mt-2 text-sm text-cyan-100/70">{it.desc}</p>
            <div className="mt-6 h-32 rounded-xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-purple-500/10" />
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}

export function TestimonialsSection() {
  const items = [
    { name: 'Ava', role: 'CTO, AgriX', quote: 'Nuerika delivered a fleet-wide AI that paid for itself in months.' },
    { name: 'Liam', role: 'Head of R&D, Aether Labs', quote: 'Their robotics stack is both elegant and battle-tested.' },
    { name: 'Maya', role: 'Dean, Polaris Academy', quote: 'Our students now learn with an AI that truly understands context.' },
  ]
  return (
    <Section id="testimonials" title="Testimonials">
      <div className="grid gap-6 md:grid-cols-3">
        {items.map((it, i) => (
          <GlassCard key={i} delay={i * 0.08}>
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-xl border border-white/10 bg-white/10" />
              <div>
                <p className="text-sm text-cyan-100/80">“{it.quote}”</p>
                <p className="mt-2 text-xs text-cyan-100/60">{it.name} • {it.role}</p>
              </div>
            </div>
          </GlassCard>
        ))}
      </div>
    </Section>
  )
}
