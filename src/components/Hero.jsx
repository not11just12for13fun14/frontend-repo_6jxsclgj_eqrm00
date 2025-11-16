import Spline from '@splinetool/react-spline';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] w-full overflow-hidden" id="home" aria-label="Hero">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/LU2mWMPbF3Qi1Qxh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Calming overlays to reduce visual motion */}
      <div className="absolute inset-0 bg-white/55" aria-hidden="true" />
      <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white" aria-hidden="true" />
      <div className="absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)] bg-white/10" aria-hidden="true" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="max-w-2xl rounded-2xl bg-white/70 backdrop-blur-md border border-black/10 p-6 shadow-lg"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/80 backdrop-blur px-3 py-1 text-xs font-medium text-gray-700 shadow border border-black/5">
              <CheckCircle2 className="text-emerald-600" size={14} />
              Practical AI, built with your team in the loop
            </div>
            <h1 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-gray-900">
              Integrate AI and automation without the chaos
            </h1>
            <p className="mt-4 text-lg leading-7 text-gray-700 max-w-xl">
              We help you find high-leverage use cases, design human-in-the-loop workflows, and ship secure automations that save time and unlock new revenue.
            </p>
            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <a href="#contact" className="inline-flex items-center justify-center rounded-md bg-gray-900 text-white px-5 py-3 text-sm font-medium shadow-sm hover:opacity-90 transition">
                Start with a discovery call
                <ArrowRight className="ml-2" size={18} />
              </a>
              <a href="#services" className="inline-flex items-center justify-center rounded-md bg-white text-gray-900 px-5 py-3 text-sm font-medium border border-black/10 hover:bg-gray-50 transition">
                Explore services
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
